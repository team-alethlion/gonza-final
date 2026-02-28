"use client";
import React, { useState, useEffect } from 'react';
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
import { toast } from 'sonner';
import { useBusiness } from '@/contexts/BusinessContext';
import { useBusinessSettings } from '@/hooks/useBusinessSettings';
import { useFinancialVisibility } from '@/hooks/useFinancialVisibility';
import { getProductReconciliationAction } from '@/app/actions/inventory';
import { updateProductAction } from '@/app/actions/products';

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
  transferOut: number;
  returnIn: number;
  returnOut: number;
  adjustments: number;
  calculatedClosingStock: number;
  discrepancy: number;
  openingDate: string | null;
  excludedSalesQty: number;
  dailyBreakdown: DailyBreakdown[];
}

interface DailyBreakdown {
  date: string;
  startingStock: number;
  itemsSold: number;
  stockAdded: number;
  transferOut: number;
  returnIn: number;
  returnOut: number;
  adjustments: number;
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
    transferOut: 0,
    returnIn: 0,
    returnOut: 0,
    adjustments: 0,
    calculatedClosingStock: 0,
    discrepancy: 0,
    openingDate: null,
    excludedSalesQty: 0,
    dailyBreakdown: [],
  });

  // Updated state for price adjustments
  const [adjustedCostPrice, setAdjustedCostPrice] = useState<number>(product.costPrice || 0);
  const [adjustedSellingPrice, setAdjustedSellingPrice] = useState<number>(product.sellingPrice || 0);

  // Initialize prices when product changes
  useEffect(() => {
    setAdjustedCostPrice(product.costPrice || 0);
    setAdjustedSellingPrice(product.sellingPrice || 0);
  }, [product.id, product.costPrice, product.sellingPrice]);

  useEffect(() => {
    const calculateReconciliation = async () => {
      if (!currentBusiness?.id) return;

      setIsLoading(true);
      try {
        const result = await getProductReconciliationAction(currentBusiness.id, product.id);
        if (result.success && result.data) {
          setReconciliationData(result.data as ReconciliationData);
        } else {
          toast.error(result.error || 'Failed to calculate reconciliation data');
        }
      } catch (error) {
        console.error('Error calculating reconciliation:', error);
        toast.error('An unexpected error occurred during reconciliation calculation');
      } finally {
        setIsLoading(false);
      }
    };

    calculateReconciliation();
  }, [currentBusiness?.id, product.id]);

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
      // Use the updated updateProductAction which handles history internally
      const result = await updateProductAction(product.id, {
        userId: user.id,
        quantity: reconciliationData.calculatedClosingStock,
        costPrice: adjustedCostPrice,
        sellingPrice: adjustedSellingPrice,
        customChangeReason: 'Stock Reconciliation'
      });

      if (result) {
        toast.success(
          `Stock reconciled successfully! Corrected ${Math.abs(
            reconciliationData.discrepancy
          ).toFixed(2)} units.`
        );
        onReconciled();
        onClose();
      } else {
        throw new Error('Update failed');
      }
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
                <CardTitle className="text-base">Stock Calculation Summary</CardTitle>
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
                    Stock Added
                  </span>
                  <span className="font-medium">
                    + {reconciliationData.stockAdded.toFixed(2)}
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

                <div className="border-t pt-3 flex justify-between items-center font-semibold text-lg">
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
                    <span className="font-semibold">Actual vs Calculated Discrepancy</span>
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
                              <div className="flex justify-between text-amber-600">
                                <span>Adjustments:</span>
                                <span className="font-medium">{day.adjustments > 0 ? '+' : ''}{day.adjustments.toFixed(2)}</span>
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
                    Preview Correction
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-800">Current (Recorded):</span>
                    <span className="font-medium text-blue-900">
                      {reconciliationData.currentStock.toFixed(2)} units
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-800">Calculated (History):</span>
                    <span className="font-medium text-blue-900">
                      {reconciliationData.calculatedClosingStock.toFixed(2)} units
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-blue-200">
                    <span className="text-sm font-semibold text-blue-800">
                      Correction Amount:
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
                  Stock levels are accurate based on transaction history.
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
                  Preview Correction
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
