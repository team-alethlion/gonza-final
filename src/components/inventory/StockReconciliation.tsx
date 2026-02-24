import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AlertCircle, CheckCircle, TrendingDown, TrendingUp, PackagePlus, PackageMinus } from 'lucide-react';
import { Product } from '@/types';
import { useAuth } from '@/components/auth/AuthProvider';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useBusiness } from '@/contexts/BusinessContext';
import { useBusinessSettings } from '@/hooks/useBusinessSettings';
import { useFinancialVisibility } from '@/hooks/useFinancialVisibility';

interface StockReconciliationProps {
  product: Product;
  onClose: () => void;
  onReconciled: () => void;
}

interface ReconciliationData {
  currentStock: number;
  openingStock: number;
  itemsSold: number;
  stockAdded: number;
  stockIn: number;
  transferOut: number;
  returnIn: number;
  returnOut: number;
  adjustments: number;
  calculatedClosingStock: number;
  discrepancy: number;
  dailyBreakdown: DailyBreakdown[];
}

interface DailyBreakdown {
  date: string;
  startingStock: number;
  itemsSold: number;
  stockAdded: number;
  stockIn: number;
  transferOut: number;
  returnIn: number;
  returnOut: number;
  adjustments: number;
  adjustmentReasons: string[];
  endingStock: number;
}

const StockReconciliation: React.FC<StockReconciliationProps> = ({
  product,
  onClose,
  onReconciled,
}) => {
  const { user } = useAuth();
  const { currentBusiness } = useBusiness();
  const { settings } = useBusinessSettings();
  const { canViewCostPrice, canViewSellingPrice, formatFinancial } = useFinancialVisibility();
  const [isApplying, setIsApplying] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [reconciliationData, setReconciliationData] = useState<ReconciliationData>({
    currentStock: 0,
    openingStock: 0,
    itemsSold: 0,
    stockAdded: 0,
    stockIn: 0,
    transferOut: 0,
    returnIn: 0,
    returnOut: 0,
    adjustments: 0,
    calculatedClosingStock: 0,
    discrepancy: 0,
    dailyBreakdown: [],
  });

  // New state for price adjustments
  const [adjustedCostPrice, setAdjustedCostPrice] = useState<number>(product.costPrice || 0);
  const [adjustedSellingPrice, setAdjustedSellingPrice] = useState<number>(product.sellingPrice || 0);

  // Initialize prices when product changes
  useEffect(() => {
    setAdjustedCostPrice(product.costPrice || 0);
    setAdjustedSellingPrice(product.sellingPrice || 0);
  }, [product.id, product.costPrice, product.sellingPrice]);

  const isValidUUID = (str: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str);

  useEffect(() => {
    const calculateReconciliation = async () => {
      if (!user?.id || !currentBusiness?.id) return;

      console.group(`Individual Reconciliation Debug: ${product.name} (${product.itemNumber})`);
      setIsLoading(true);

      try {
        const chunkSize = 1000;

        // Support both UUID and itemNumber as product identifiers
        // BUT only use valid UUIDs for the stock_history product_id column
        const historyProductIds = [product.id, product.itemNumber]
          .filter((id): id is string => !!id && isValidUUID(id));

        // 1. Get Opening Stock from first stock history entry (initial stock)
        const { data: firstEntry } = await supabase
          .from('stock_history')
          .select('new_quantity, created_at, change_reason')
          .in('product_id', historyProductIds)
          .eq('location_id', currentBusiness.id)
          .order('created_at', { ascending: true })
          .order('id', { ascending: true })
          .limit(1)
          .maybeSingle();

        const openingStock = firstEntry ? Number(firstEntry.new_quantity) || 0 : 0;
        const openingDate = firstEntry ? new Date(firstEntry.created_at) : null;
        console.log('Opening State:', { openingStock, openingDate: openingDate?.toISOString(), reason: firstEntry?.change_reason });

        // 2. Load all sales
        let allSalesData: any[] = [];
        let salesStart = 0;
        let hasSalesMore = true;

        while (hasSalesMore) {
          const { data: salesChunk, error: salesError } = await supabase
            .from('sales' as any)
            .select('items, date, receipt_number')
            .eq('location_id', currentBusiness.id)
            .range(salesStart, salesStart + chunkSize - 1)
            .order('date', { ascending: true });

          if (salesError) throw salesError;

          if (salesChunk && salesChunk.length > 0) {
            allSalesData.push(...salesChunk);
            salesStart += chunkSize;
            hasSalesMore = salesChunk.length === chunkSize;
          } else {
            hasSalesMore = false;
          }
        }
        console.log(`Total Sales Records found: ${allSalesData.length}`);

        // 3. Load ALL stock history movements in one go
        let allHistory: any[] = [];
        let historyStart = 0;
        let hasHistoryMore = true;

        while (hasHistoryMore) {
          const { data: chunk, error: historyError } = await supabase
            .from('stock_history')
            .select('*')
            .eq('location_id', currentBusiness.id)
            .in('product_id', historyProductIds)
            .order('created_at', { ascending: true })
            .order('id', { ascending: true })
            .range(historyStart, historyStart + chunkSize - 1);

          if (historyError) throw historyError;

          if (chunk && chunk.length > 0) {
            allHistory.push(...chunk);
            historyStart += chunkSize;
            hasHistoryMore = chunk.length === chunkSize;
          } else {
            hasHistoryMore = false;
          }
        }
        console.log(`Total History Records found: ${allHistory.length}`);

        const movements = allHistory.slice(1);

        // 4. Build daily transactions map
        const dailyTransactions = new Map<string, {
          itemsSold: number;
          stockAdded: number;
          stockIn: number;
          transferOut: number;
          returnIn: number;
          returnOut: number;
          adjustments: number;
          adjustmentReasons: string[];
        }>();

        let trackedSalesQty = 0;

        // Process sales by date
        allSalesData.forEach((sale: any) => {
          const saleDate = new Date(sale.date);
          const items = Array.isArray(sale.items) ? sale.items : [];
          const soldQty = items
            .filter((item: any) =>
              item.productId === product.id ||
              (product.itemNumber && item.productId === product.itemNumber)
            )
            .reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);

          if (openingDate && saleDate < openingDate) {
            return;
          }

          const dateStr = saleDate.toISOString().split('T')[0];
          if (soldQty > 0) {
            trackedSalesQty += soldQty;
            const existing = dailyTransactions.get(dateStr) || { itemsSold: 0, stockAdded: 0, stockIn: 0, transferOut: 0, returnIn: 0, returnOut: 0, adjustments: 0, adjustmentReasons: [] };
            existing.itemsSold += soldQty;
            dailyTransactions.set(dateStr, existing);
          }
        });
        console.log('Sales Processing Done:', { trackedSalesQty });

        let histAdded = 0, histIn = 0, histTrans = 0, histRetIn = 0, histRetOut = 0, histAdj = 0;

        // Process movement history
        movements.forEach((entry: any) => {
          const date = new Date(entry.created_at).toISOString().split('T')[0];
          const delta = Number(entry.new_quantity) - Number(entry.previous_quantity);
          const reason = (entry.change_reason || '').toLowerCase();

          const isSaleRelated = reason.includes('sale') || reason.includes('receipt');
          const isReturn = reason.includes('return');
          const isPurchase = reason.includes('purchase') || reason.includes('addition') || reason.includes('initial');

          if (isSaleRelated && !isReturn && !isPurchase) {
            return;
          }

          const day = dailyTransactions.get(date) || { itemsSold: 0, stockAdded: 0, stockIn: 0, transferOut: 0, returnIn: 0, returnOut: 0, adjustments: 0, adjustmentReasons: [] };

          if (reason.includes('purchase')) {
            day.stockAdded += delta;
            histAdded += delta;
          } else if (reason.includes('addition') || reason.includes('initial')) {
            // Carriage or initial setup after first entry
            day.stockIn += delta;
            histIn += delta;
          } else if (reason.includes('transfer out')) {
            day.transferOut += Math.abs(delta);
            histTrans += Math.abs(delta);
          } else if (reason.includes('customer return') || (reason.includes('return') && delta > 0)) {
            day.returnIn += delta;
            histRetIn += delta;
          } else if (reason.includes('return to supplier') || (reason.includes('return') && delta < 0)) {
            day.returnOut += Math.abs(delta);
            histRetOut += Math.abs(delta);
          } else {
            day.adjustments += delta;
            histAdj += delta;
            if (entry.change_reason) {
              day.adjustmentReasons.push(`${entry.change_reason} (${delta > 0 ? '+' : ''}${delta})`);
            }
            console.log(`- Adjustment Record: [${entry.change_reason}] Change: ${delta > 0 ? '+' : ''}${delta}`);
          }

          dailyTransactions.set(date, day);
        });
        console.log('History Processing Done:', { histAdded, histIn, histTrans, histRetIn, histRetOut, histAdj });

        // Sort dates and calculate daily breakdown
        const sortedDates = Array.from(dailyTransactions.keys()).sort();
        const dailyBreakdown: DailyBreakdown[] = [];
        let runningStock = openingStock;

        sortedDates.forEach(date => {
          const day = dailyTransactions.get(date)!;
          const startingStock = runningStock;
          const endingStock = startingStock - day.itemsSold + day.stockAdded + day.stockIn - day.transferOut + day.returnIn - day.returnOut + day.adjustments;

          dailyBreakdown.push({
            date,
            startingStock,
            itemsSold: day.itemsSold,
            stockAdded: day.stockAdded,
            stockIn: day.stockIn,
            transferOut: day.transferOut,
            returnIn: day.returnIn,
            returnOut: day.returnOut,
            adjustments: day.adjustments,
            adjustmentReasons: day.adjustmentReasons,
            endingStock,
          });

          runningStock = endingStock;
        });

        const calculatedClosingStock = runningStock;

        const { data: productData } = await supabase
          .from('products')
          .select('quantity')
          .eq('id', product.id)
          .single();

        const currentStock = Number(productData?.quantity) || 0;
        const discrepancy = currentStock - calculatedClosingStock;

        console.log('Final Totals:', { openingStock, calculatedClosingStock, currentStock, discrepancy });
        console.groupEnd();

        setReconciliationData({
          currentStock,
          openingStock,
          itemsSold: dailyBreakdown.reduce((sum, d) => sum + d.itemsSold, 0),
          stockAdded: dailyBreakdown.reduce((sum, d) => sum + d.stockAdded, 0),
          stockIn: dailyBreakdown.reduce((sum, d) => sum + d.stockIn, 0),
          transferOut: dailyBreakdown.reduce((sum, d) => sum + d.transferOut, 0),
          returnIn: dailyBreakdown.reduce((sum, d) => sum + d.returnIn, 0),
          returnOut: dailyBreakdown.reduce((sum, d) => sum + d.returnOut, 0),
          adjustments: dailyBreakdown.reduce((sum, d) => sum + d.adjustments, 0),
          calculatedClosingStock,
          discrepancy,
          dailyBreakdown,
        });
      } catch (error) {
        console.error('Error calculating reconciliation:', error);
        console.groupEnd();
        toast.error('Failed to calculate reconciliation data');
      } finally {
        setIsLoading(false);
      }
    };

    calculateReconciliation();
  }, [user?.id, currentBusiness?.id, product.id]);

  // Valuation calculations
  const currentCostValue = reconciliationData.currentStock * (product.costPrice || 0);
  const currentStockValue = reconciliationData.currentStock * (product.sellingPrice || 0);

  const reconciledCostValue = reconciliationData.calculatedClosingStock * adjustedCostPrice;
  const reconciledStockValue = reconciliationData.calculatedClosingStock * adjustedSellingPrice;

  const costValueDiff = reconciledCostValue - currentCostValue;
  const stockValueDiff = reconciledStockValue - currentStockValue;

  const hasDiscrepancy = Math.abs(reconciliationData.discrepancy) > 0.01;

  const handleApplyCorrection = async () => {
    if (!user?.id || !currentBusiness?.id) return;

    setIsApplying(true);

    try {
      // Update product quantity and prices
      const { error: updateError } = await supabase
        .from('products')
        .update({
          quantity: reconciliationData.calculatedClosingStock,
          cost_price: adjustedCostPrice,
          selling_price: adjustedSellingPrice
        })
        .eq('id', product.id)
        .eq('user_id', user.id);

      if (updateError) throw updateError;

      // Create a stock history entry for the correction
      const { error: historyError } = await supabase
        .from('stock_history')
        .insert({
          product_id: product.id,
          user_id: user.id,
          location_id: currentBusiness.id,
          previous_quantity: reconciliationData.currentStock,
          new_quantity: reconciliationData.calculatedClosingStock,
          change_reason: 'Stock Reconciliation',
          reference_id: null,
          created_at: new Date().toISOString(),
        });

      if (historyError) throw historyError;

      toast.success(
        `Stock reconciled successfully! Corrected ${Math.abs(
          reconciliationData.discrepancy
        ).toFixed(2)} units.`
      );

      onReconciled();
      onClose();
    } catch (error) {
      console.error('Error reconciling stock:', error);
      toast.error('Failed to reconcile stock. Please try again.');
    } finally {
      setIsApplying(false);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {hasDiscrepancy ? (
              <AlertCircle className="h-5 w-5 text-orange-500" />
            ) : (
              <CheckCircle className="h-5 w-5 text-green-500" />
            )}
            Stock Reconciliation - {product.name}
          </DialogTitle>
          <DialogDescription>
            Review stock calculations and apply corrections if needed
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <div className="text-muted-foreground">Loading reconciliation data...</div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Current Stock</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {reconciliationData.currentStock.toFixed(2)}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">
                    Calculated Stock
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {reconciliationData.calculatedClosingStock.toFixed(2)}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pricing Adjustments */}
            <Card className="border-sales-primary/20 bg-sales-primary/5">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-sales-primary" />
                  Valuation & Price Adjustment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  {canViewCostPrice && (
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Adjustment Cost Price</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">{settings.currency}</span>
                        <input
                          type="number"
                          value={adjustedCostPrice}
                          onChange={(e) => setAdjustedCostPrice(Number(e.target.value))}
                          className="w-full pl-12 pr-4 py-2 bg-white border rounded-md text-sm focus:ring-2 focus:ring-sales-primary/20 outline-none transition-all"
                        />
                      </div>
                      <p className="text-[10px] text-muted-foreground">Affects Cost Value</p>
                    </div>
                  )}
                  {canViewSellingPrice && (
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Adjustment Selling Price</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">{settings.currency}</span>
                        <input
                          type="number"
                          value={adjustedSellingPrice}
                          onChange={(e) => setAdjustedSellingPrice(Number(e.target.value))}
                          className="w-full pl-12 pr-4 py-2 bg-white border rounded-md text-sm focus:ring-2 focus:ring-sales-primary/20 outline-none transition-all"
                        />
                      </div>
                      <p className="text-[10px] text-muted-foreground">Affects Stock Value</p>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-sales-primary/10 grid grid-cols-2 gap-4">
                  {canViewCostPrice && (
                    <div className="p-3 rounded-lg bg-white border shadow-sm">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Cost Valuation Impact</p>
                      <div className="flex items-end justify-between">
                        <span className={`text-base font-bold ${costValueDiff >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {costValueDiff >= 0 ? '+' : ''}{formatFinancial(costValueDiff, 'cost')}
                        </span>
                      </div>
                    </div>
                  )}
                  {canViewSellingPrice && (
                    <div className="p-3 rounded-lg bg-white border shadow-sm">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Stock Valuation Impact</p>
                      <div className="flex items-end justify-between">
                        <span className={`text-base font-bold ${stockValueDiff >= 0 ? 'text-violet-600' : 'text-rose-600'}`}>
                          {stockValueDiff >= 0 ? '+' : ''}{formatFinancial(stockValueDiff, 'selling')}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Calculation Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Stock Calculation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Opening Stock</span>
                  <span className="font-medium">
                    {reconciliationData.openingStock.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-red-600">
                  <span className="text-sm flex items-center gap-1">
                    <TrendingDown className="h-4 w-4" />
                    Items Sold
                  </span>
                  <span className="font-medium">
                    - {reconciliationData.itemsSold.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-emerald-600">
                  <span className="text-sm flex items-center gap-1">
                    <PackagePlus className="h-4 w-4" />
                    Stock Added (Purchase)
                  </span>
                  <span className="font-medium">
                    + {reconciliationData.stockAdded.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-green-600">
                  <span className="text-sm flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    Stock In (Carriage)
                  </span>
                  <span className="font-medium">
                    + {reconciliationData.stockIn.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-orange-600">
                  <span className="text-sm flex items-center gap-1">
                    <PackageMinus className="h-4 w-4" />
                    Transfer Out
                  </span>
                  <span className="font-medium">
                    - {reconciliationData.transferOut.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-blue-600">
                  <span className="text-sm flex items-center gap-1">
                    <PackagePlus className="h-4 w-4" />
                    Return In
                  </span>
                  <span className="font-medium">
                    + {reconciliationData.returnIn.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-purple-600">
                  <span className="text-sm flex items-center gap-1">
                    <PackageMinus className="h-4 w-4" />
                    Return Out
                  </span>
                  <span className="font-medium">
                    - {reconciliationData.returnOut.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-amber-600">
                  <span className="text-sm flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    Manual Adjustments
                  </span>
                  <span className="font-medium">
                    {reconciliationData.adjustments > 0 ? '+' : ''}{reconciliationData.adjustments.toFixed(2)}
                  </span>
                </div>

                <div className="border-t pt-3 flex justify-between items-center font-semibold">
                  <span>Calculated Closing Stock</span>
                  <span>{reconciliationData.calculatedClosingStock.toFixed(2)}</span>
                </div>

                {/* Discrepancy */}
                {hasDiscrepancy && (
                  <div
                    className={`border-t pt-3 flex justify-between items-center ${reconciliationData.discrepancy > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                      }`}
                  >
                    <span className="font-semibold">Discrepancy</span>
                    <Badge
                      variant={
                        reconciliationData.discrepancy > 0 ? 'default' : 'destructive'
                      }
                    >
                      {reconciliationData.discrepancy > 0 ? '+' : ''}
                      {reconciliationData.discrepancy.toFixed(2)} units
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Daily Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Daily Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  <div className="space-y-3">
                    {reconciliationData.dailyBreakdown.length === 0 ? (
                      <div className="text-center text-muted-foreground py-8">
                        No transactions found for this product
                      </div>
                    ) : (
                      reconciliationData.dailyBreakdown.map((day, index) => (
                        <Card key={index} className="p-3 bg-slate-50">
                          <div className="font-semibold text-sm mb-2 text-slate-700">
                            {new Date(day.date).toLocaleDateString('en-US', {
                              weekday: 'short',
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                          <div className="space-y-1.5 text-xs">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Starting Stock:</span>
                              <span className="font-medium">{day.startingStock.toFixed(2)}</span>
                            </div>
                            {day.itemsSold > 0 && (
                              <div className="flex justify-between text-red-600">
                                <span>Items Sold:</span>
                                <span className="font-medium">-{day.itemsSold.toFixed(2)}</span>
                              </div>
                            )}
                            {day.stockAdded > 0 && (
                              <div className="flex justify-between text-emerald-600">
                                <span>Stock Added:</span>
                                <span className="font-medium">+{day.stockAdded.toFixed(2)}</span>
                              </div>
                            )}
                            {day.stockIn > 0 && (
                              <div className="flex justify-between text-green-600">
                                <span>Stock In:</span>
                                <span className="font-medium">+{day.stockIn.toFixed(2)}</span>
                              </div>
                            )}
                            {day.transferOut > 0 && (
                              <div className="flex justify-between text-orange-600">
                                <span>Transfer Out:</span>
                                <span className="font-medium">-{day.transferOut.toFixed(2)}</span>
                              </div>
                            )}
                            {day.returnIn > 0 && (
                              <div className="flex justify-between text-blue-600">
                                <span>Return In:</span>
                                <span className="font-medium">+{day.returnIn.toFixed(2)}</span>
                              </div>
                            )}
                            {day.returnOut > 0 && (
                              <div className="flex justify-between text-purple-600">
                                <span>Return Out:</span>
                                <span className="font-medium">-{day.returnOut.toFixed(2)}</span>
                              </div>
                            )}
                            {day.adjustments !== 0 && (
                              <div className="flex flex-col gap-1 text-amber-600">
                                <div className="flex justify-between">
                                  <span>Adjustments:</span>
                                  <span className="font-medium">{day.adjustments > 0 ? '+' : ''}{day.adjustments.toFixed(2)}</span>
                                </div>
                                {day.adjustmentReasons.length > 0 && (
                                  <div className="text-[10px] pl-2 border-l border-amber-200 text-amber-500 italic">
                                    {day.adjustmentReasons.join(', ')}
                                  </div>
                                )}
                              </div>
                            )}
                            <div className="flex justify-between pt-1.5 border-t border-slate-200">
                              <span className="font-semibold text-slate-700">Ending Stock:</span>
                              <span className="font-bold text-slate-900">{day.endingStock.toFixed(2)}</span>
                            </div>
                          </div>
                        </Card>
                      ))
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Preview Changes */}
            {hasDiscrepancy && showPreview && (
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-base text-blue-900">
                    Preview Changes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-800">Before:</span>
                    <span className="font-medium text-blue-900">
                      {reconciliationData.currentStock.toFixed(2)} units
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-800">After:</span>
                    <span className="font-medium text-blue-900">
                      {reconciliationData.calculatedClosingStock.toFixed(2)} units
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-blue-200">
                    <span className="text-sm font-semibold text-blue-800">
                      Change:
                    </span>
                    <span className="font-semibold text-blue-900">
                      {reconciliationData.discrepancy > 0 ? '+' : ''}
                      {Math.abs(reconciliationData.discrepancy).toFixed(2)} units
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Status Message */}
            {!hasDiscrepancy && (
              <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <p className="text-sm text-green-800">
                  Stock levels are accurate. No reconciliation needed.
                </p>
              </div>
            )}
          </div>
        )}

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          {hasDiscrepancy && (
            <>
              {!showPreview ? (
                <Button onClick={() => setShowPreview(true)}>
                  Preview Changes
                </Button>
              ) : (
                <Button
                  onClick={handleApplyCorrection}
                  disabled={isApplying}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {isApplying ? 'Applying...' : 'Apply Correction'}
                </Button>
              )}
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default StockReconciliation;
