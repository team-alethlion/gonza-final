import React, { useState, useMemo } from 'react';
import { useAuth } from '@/components/auth/AuthProvider';
import { useBusiness } from '@/contexts/BusinessContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import StockReconciliation from '@/components/inventory/StockReconciliation';
import InventoryPageSkeleton from '@/components/inventory/InventoryPageSkeleton';
import { Product, mapDbProductToProduct } from '@/types';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AlertCircle, TrendingDown, TrendingUp, PackagePlus, PackageMinus, Wrench } from 'lucide-react';
import { useProfiles } from '@/contexts/ProfileContext';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useNavigate } from 'react-router-dom';
import { useStockHistory, ChainRepairPreview } from '@/hooks/useStockHistory';

interface ReconciliationPreview {
  product: Product;
  currentStock: number;
  calculatedStock: number;
  discrepancy: number;
  openingStock: number;
  itemsSold: number;
  stockAdded: number;
  transferOut: number;
  returnIn: number;
  returnOut: number;
  adjustments: number;
  excludedSalesCount: number;
  excludedSalesQty: number;
  openingDate: Date | null;
  dailyBreakdown: Array<{
    date: string;
    startingStock: number;
    itemsSold: number;
    stockAdded: number;
    transferOut: number;
    returnIn: number;
    returnOut: number;
    adjustments: number;
    endingStock: number;
  }>;
}

const StockReconciliationPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { currentBusiness, isLoading: businessLoading } = useBusiness();
  const { hasPermission, isLoading: profilesLoading } = useProfiles();
  const { repairAllStockChains, previewStockChainRepairs } = useStockHistory(user?.id);
  const [search, setSearch] = useState('');
  const [dialogProduct, setDialogProduct] = React.useState<Product | null>(null);
  const [isBulkReconciling, setIsBulkReconciling] = useState(false);
  const [isCalculatingPreview, setIsCalculatingPreview] = useState(false);
  const [showBulkPreview, setShowBulkPreview] = useState(false);
  const [reconciliationPreviews, setReconciliationPreviews] = useState<ReconciliationPreview[]>([]);
  const [selectedPreview, setSelectedPreview] = useState<ReconciliationPreview | null>(null);
  const [isRepairingChains, setIsRepairingChains] = useState(false);
  const [repairProgress, setRepairProgress] = useState<{ current: number; total: number } | null>(null);
  const [repairPreviews, setRepairPreviews] = useState<ChainRepairPreview[]>([]);
  const [showRepairPreview, setShowRepairPreview] = useState(false);
  const [isCalculatingRepairPreview, setIsCalculatingRepairPreview] = useState(false);

  // Load ALL products using chunked pagination
  const { data: allProducts = [], isLoading } = useQuery({
    queryKey: ['all-products-reconciliation', user?.id, currentBusiness?.id],
    queryFn: async () => {
      if (!user?.id || !currentBusiness?.id) return [];

      const chunkSize = 1000;
      let allProductsData: any[] = [];
      let start = 0;
      let hasMore = true;

      while (hasMore) {
        const { data: chunk, error } = await supabase
          .from('products')
          .select('*')
          .eq('user_id', user.id)
          .eq('location_id', currentBusiness.id)
          .order('created_at', { ascending: false })
          .order('id', { ascending: false })
          .range(start, start + chunkSize - 1);

        if (error) throw error;

        if (chunk && chunk.length > 0) {
          allProductsData.push(...chunk);
          start += chunkSize;
          hasMore = chunk.length === chunkSize;
        } else {
          hasMore = false;
        }
      }

      return allProductsData.map(mapDbProductToProduct);
    },
    enabled: !!user?.id && !!currentBusiness?.id,
    staleTime: 2 * 60_000,
  });

  // Client-side filtering
  const filteredProducts = useMemo(() => {
    if (!search.trim()) return [];

    const searchLower = search.toLowerCase();
    return allProducts.filter((p) =>
      p.name.toLowerCase().includes(searchLower) ||
      p.itemNumber?.toLowerCase().includes(searchLower) ||
      p.category?.toLowerCase().includes(searchLower) ||
      p.supplier?.toLowerCase().includes(searchLower) ||
      p.description?.toLowerCase().includes(searchLower)
    );
  }, [allProducts, search]);

  const handleRepairAllChains = async () => {
    if (!user?.id || !currentBusiness?.id) return;
    setIsRepairingChains(true);
    setRepairProgress(null);
    try {
      const { repaired, failed } = await repairAllStockChains((current, total) => {
        setRepairProgress({ current, total });
      });
      if (failed === 0) {
        toast.success(`Stock chains repaired successfully for ${repaired} product(s).`);
      } else {
        toast.warning(`Repaired ${repaired} product(s). ${failed} failed — check the console for details.`);
      }
    } catch (error) {
      console.error('Error repairing stock chains:', error);
      toast.error('Failed to repair stock chains.');
    } finally {
      setIsRepairingChains(false);
      setRepairProgress(null);
      setShowRepairPreview(false);
    }
  };

  const handleRepairPreview = async () => {
    if (!user?.id || !currentBusiness?.id) return;
    setIsCalculatingRepairPreview(true);
    setRepairProgress(null);
    try {
      const broken = await previewStockChainRepairs((current, total) => {
        setRepairProgress({ current, total });
      });
      setRepairPreviews(broken);
      if (broken.length === 0) {
        toast.success("No broken stock chains found! Everything is consistent.");
      } else {
        setShowRepairPreview(true);
      }
    } catch (error) {
      console.error('Error previewing stock repairs:', error);
      toast.error('Failed to preview stock repairs.');
    } finally {
      setIsCalculatingRepairPreview(false);
      setRepairProgress(null);
    }
  };

  const calculateBulkPreview = async () => {
    if (!user?.id || !currentBusiness?.id) return;

    setIsCalculatingPreview(true);
    const previews: ReconciliationPreview[] = [];

    try {
      for (const product of allProducts) {
        const preview = await calculateProductReconciliation(product);
        if (preview && Math.abs(preview.discrepancy) > 0.01) {
          previews.push(preview);
        }
      }

      setReconciliationPreviews(previews);
      setShowBulkPreview(true);
    } catch (error) {
      console.error('Error calculating preview:', error);
      toast.error('Failed to calculate reconciliation preview.');
    } finally {
      setIsCalculatingPreview(false);
    }
  };

  const isValidUUID = (str: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str);

  const calculateProductReconciliation = async (product: Product): Promise<ReconciliationPreview | null> => {
    if (!user?.id || !currentBusiness?.id) return null;

    console.group(`Reconciliation Debug: ${product.name} (${product.item_number})`);
    console.log('Product Identifiers:', { id: product.id, itemNumber: product.item_number });

    try {
      const chunkSize = 1000;

      // Support both UUID and itemNumber as product identifiers
      // BUT only use valid UUIDs for the stock_history product_id column
      const historyProductIds = [product.id, product.itemNumber]
        .filter((id): id is string => !!id && isValidUUID(id));

      // 1. Get opening stock from the very first entry
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

      // 2. Load all sales for this product to cross-verify
      let allSalesData: any[] = [];
      let salesStart = 0;
      let hasSalesMore = true;

      while (hasSalesMore) {
        const { data: salesChunk } = await supabase
          .from('sales')
          .select('items, date, receipt_number')
          .eq('location_id', currentBusiness.id)
          .range(salesStart, salesStart + chunkSize - 1)
          .order('date', { ascending: true });

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
        let query = supabase
          .from('stock_history')
          .select('*')
          .eq('location_id', currentBusiness.id)
          .order('created_at', { ascending: true })
          .order('id', { ascending: true })
          .range(historyStart, historyStart + chunkSize - 1);

        // Support both UUID and itemNumber as product identifiers
        // BUT only use valid UUIDs for the stock_history product_id column
        const ids = [product.id, product.itemNumber]
          .filter((id): id is string => !!id && isValidUUID(id));
        query = query.in('product_id', ids);

        const { data: chunk, error } = await query;
        if (error) throw error;

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
        transferOut: number;
        returnIn: number;
        returnOut: number;
        adjustments: number;
      }>();

      let excludedSalesCount = 0;
      let excludedSalesQty = 0;
      let trackedSalesQty = 0;

      // Process Sales table source
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
          if (soldQty > 0) {
            excludedSalesCount++;
            excludedSalesQty += soldQty;
          }
          return;
        }

        const dateStr = saleDate.toISOString().split('T')[0];
        if (soldQty > 0) {
          trackedSalesQty += soldQty;
          const day = dailyTransactions.get(dateStr) || { itemsSold: 0, stockAdded: 0, transferOut: 0, returnIn: 0, returnOut: 0, adjustments: 0 };
          day.itemsSold += soldQty;
          dailyTransactions.set(dateStr, day);
        }
      });
      console.log('Sales Processing Done:', { trackedSalesQty, excludedSalesQty, excludedSalesCount });

      let histAdded = 0, histTrans = 0, histRetIn = 0, histRetOut = 0, histAdj = 0;

      // Process History table source
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

        const day = dailyTransactions.get(date) || { itemsSold: 0, stockAdded: 0, transferOut: 0, returnIn: 0, returnOut: 0, adjustments: 0 };

        if (reason.includes('purchase') || reason.includes('addition') || reason.includes('initial')) {
          day.stockAdded += delta;
          histAdded += delta;
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
          console.log(`- Adjustment Record: [${entry.change_reason}] Change: ${delta > 0 ? '+' : ''}${delta}`);
        }

        dailyTransactions.set(date, day);
      });
      console.log('History Processing Done:', { histAdded, histTrans, histRetIn, histRetOut, histAdj });

      // 5. Calculate daily breakdown and final balance
      const sortedDates = Array.from(dailyTransactions.keys()).sort();
      const dailyBreakdown: ReconciliationPreview['dailyBreakdown'] = [];
      let runningStock = openingStock;

      sortedDates.forEach(date => {
        const day = dailyTransactions.get(date)!;
        const startingStock = runningStock;
        const endingStock = startingStock - day.itemsSold + day.stockAdded - day.transferOut + day.returnIn - day.returnOut + day.adjustments;

        dailyBreakdown.push({
          date,
          startingStock,
          itemsSold: day.itemsSold,
          stockAdded: day.stockAdded,
          transferOut: day.transferOut,
          returnIn: day.returnIn,
          returnOut: day.returnOut,
          adjustments: day.adjustments,
          endingStock,
        });

        runningStock = endingStock;
      });

      const calculatedStock = runningStock;
      const currentStock = Number(product.quantity) || 0;
      const discrepancy = currentStock - calculatedStock;

      console.log('Final Totals:', { openingStock, calculatedStock, currentStock, discrepancy });
      console.groupEnd();

      return {
        product,
        currentStock,
        calculatedStock,
        discrepancy,
        openingStock,
        itemsSold: dailyBreakdown.reduce((sum, d) => sum + d.itemsSold, 0),
        stockAdded: dailyBreakdown.reduce((sum, d) => sum + d.stockAdded, 0),
        transferOut: dailyBreakdown.reduce((sum, d) => sum + d.transferOut, 0),
        returnIn: dailyBreakdown.reduce((sum, d) => sum + d.returnIn, 0),
        returnOut: dailyBreakdown.reduce((sum, d) => sum + d.returnOut, 0),
        adjustments: dailyBreakdown.reduce((sum, d) => sum + d.adjustments, 0),
        excludedSalesCount,
        excludedSalesQty,
        openingDate,
        dailyBreakdown,
      };
    } catch (error) {
      console.error(`Error calculating reconciliation for ${product.name}:`, error);
      console.groupEnd();
      return null;
    }
  };

  const handleBulkReconciliation = async () => {
    if (!user?.id || !currentBusiness?.id || reconciliationPreviews.length === 0) return;

    setIsBulkReconciling(true);

    try {
      let successCount = 0;
      let errorCount = 0;

      for (const preview of reconciliationPreviews) {
        try {
          // Update product quantity
          const { error: updateError } = await supabase
            .from('products')
            .update({ quantity: preview.calculatedStock })
            .eq('id', preview.product.id)
            .eq('user_id', user.id);

          if (updateError) throw updateError;

          // Create stock history entry
          const { error: historyError } = await supabase
            .from('stock_history')
            .insert({
              product_id: preview.product.id,
              user_id: user.id,
              location_id: currentBusiness.id,
              previous_quantity: preview.currentStock,
              new_quantity: preview.calculatedStock,
              change_reason: 'Bulk Stock Reconciliation',
              reference_id: null,
              created_at: new Date().toISOString(),
            });

          if (historyError) throw historyError;
          successCount++;
        } catch (error) {
          errorCount++;
          console.error(`Failed to reconcile ${preview.product.name}:`, error);
        }
      }

      toast.success(`Bulk reconciliation complete! Updated ${successCount} product(s).`);
      if (errorCount > 0) {
        toast.error(`${errorCount} product(s) failed.`);
      }

      setShowBulkPreview(false);
      setReconciliationPreviews([]);
    } catch (error) {
      console.error('Bulk reconciliation error:', error);
      toast.error('Failed to complete bulk reconciliation.');
    } finally {
      setIsBulkReconciling(false);
    }
  };

  if (businessLoading || profilesLoading || !currentBusiness) {
    return <InventoryPageSkeleton />;
  }

  if (!hasPermission('inventory', 'stock_adjustment')) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Access Denied</AlertTitle>
          <AlertDescription>
            You do not have permission to access stock reconciliation.
            Please contact your administrator if you believe this is an error.
          </AlertDescription>
        </Alert>
        <div className="mt-4">
          <Button onClick={() => navigate('/inventory')} variant="outline">
            Back to Inventory
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-2 md:p-6 space-y-4 md:space-y-6 max-w-full">
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-sales-dark">Stock Reconciliation</h1>
          <p className="text-sm md:text-base text-muted-foreground">Select a product, preview the correction, then apply.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={handleRepairPreview}
            disabled={isRepairingChains || isCalculatingRepairPreview || isLoading || allProducts.length === 0}
            variant="outline"
            size="lg"
          >
            <AlertCircle className="h-4 w-4 mr-2" />
            {isCalculatingRepairPreview ? 'Scanning...' : 'Preview Repairs'}
          </Button>
          <Button
            onClick={handleRepairAllChains}
            disabled={isRepairingChains || isCalculatingRepairPreview || isLoading || allProducts.length === 0}
            variant="secondary"
            size="lg"
          >
            <Wrench className="h-4 w-4 mr-2" />
            {isRepairingChains ? 'Repairing...' : 'Quick Repair All'}
          </Button>
          <Button
            onClick={calculateBulkPreview}
            disabled={isCalculatingPreview || isLoading || allProducts.length === 0}
            size="lg"
          >
            {isCalculatingPreview ? 'Calculating...' : 'Reconcile All Products'}
          </Button>
        </div>
      </div>

      {/* Repair progress bar */}
      {(isRepairingChains || isCalculatingRepairPreview) && repairProgress && (
        <Card>
          <CardContent className="pt-4 space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{isRepairingChains ? 'Repairing stock chains…' : 'Scanning for broken chains…'}</span>
              <span>{repairProgress.current} / {repairProgress.total}</span>
            </div>
            <Progress value={Math.round((repairProgress.current / repairProgress.total) * 100)} />
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Search Product</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input
            placeholder="Search by name, item number, category, or supplier"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <div className="border rounded-md">
              <ScrollArea className="max-h-96">
                <ul className="divide-y">
                  {isLoading && (
                    <li className="p-3 text-sm text-muted-foreground">Loading all products...</li>
                  )}
                  {(!isLoading && filteredProducts.length === 0) && (
                    <li className="p-3 text-sm text-muted-foreground">No matching products found</li>
                  )}
                  {(!isLoading && filteredProducts).map((p) => (
                    <li key={p.id} className="p-3 hover:bg-muted/40 cursor-pointer" onClick={() => setDialogProduct(p)}>
                      <div className="font-medium">{p.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {p.itemNumber ? `Item: ${p.itemNumber}` : '—'} • Qty: {p.quantity} • Cat: {p.category || '—'}
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
              {!isLoading && filteredProducts.length > 0 && (
                <div className="p-2 border-t text-xs text-muted-foreground">
                  Showing {filteredProducts.length} of {allProducts.length} total products
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {dialogProduct && (
        <StockReconciliation
          product={dialogProduct}
          onClose={() => setDialogProduct(null)}
          onReconciled={() => setDialogProduct(null)}
        />
      )}

      {/* Bulk Reconciliation Preview Dialog */}
      <Dialog open={showBulkPreview} onOpenChange={setShowBulkPreview}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              Bulk Reconciliation Preview
            </DialogTitle>
            <DialogDescription>
              {reconciliationPreviews.length} product(s) with discrepancies found. Review and apply corrections.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Products to Update</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{reconciliationPreviews.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Total Adjustment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {reconciliationPreviews.reduce((sum, p) => sum + Math.abs(p.discrepancy), 0).toFixed(2)} units
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product List */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Products with Discrepancies</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-2">
                    {reconciliationPreviews.map((preview) => (
                      <Card
                        key={preview.product.id}
                        className="p-3 cursor-pointer hover:bg-muted/50"
                        onClick={() => setSelectedPreview(preview)}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="font-semibold">{preview.product.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {preview.product.itemNumber && `Item: ${preview.product.itemNumber}`}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm">
                              <span className="text-muted-foreground">Current:</span> {preview.currentStock.toFixed(2)}
                            </div>
                            <div className="text-sm">
                              <span className="text-muted-foreground">Calculated:</span> {preview.calculatedStock.toFixed(2)}
                            </div>
                            <Badge variant={preview.discrepancy > 0 ? 'default' : 'destructive'} className="mt-1">
                              {preview.discrepancy > 0 ? '+' : ''}{preview.discrepancy.toFixed(2)}
                            </Badge>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowBulkPreview(false)} disabled={isBulkReconciling}>
              Cancel
            </Button>
            <Button onClick={handleBulkReconciliation} disabled={isBulkReconciling}>
              {isBulkReconciling ? 'Applying...' : `Apply Reconciliation (${reconciliationPreviews.length} products)`}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Individual Product Detail Dialog */}
      {selectedPreview && (
        <Dialog open={!!selectedPreview} onOpenChange={() => setSelectedPreview(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedPreview.product.name}</DialogTitle>
              <DialogDescription>Detailed reconciliation breakdown</DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              {/* Summary */}
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Current Stock</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{selectedPreview.currentStock.toFixed(2)}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Calculated Stock</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{selectedPreview.calculatedStock.toFixed(2)}</div>
                  </CardContent>
                </Card>
              </div>

              {/* Formula Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Stock Calculation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Opening Stock</span>
                    <span className="font-medium">{selectedPreview.openingStock.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span className="text-sm flex items-center gap-1">
                      <TrendingDown className="h-4 w-4" /> Items Sold (Since {selectedPreview.openingDate ? format(selectedPreview.openingDate, 'MMM d, yyyy') : 'Start'})
                    </span>
                    <span className="font-medium">-{selectedPreview.itemsSold.toFixed(2)}</span>
                  </div>
                  {selectedPreview.excludedSalesQty > 0 && (
                    <div className="flex justify-between text-muted-foreground italic bg-slate-50 px-2 py-1 rounded text-[11px]">
                      <span>Note: {selectedPreview.excludedSalesQty.toFixed(2)} units sold before tracking began were ignored.</span>
                    </div>
                  )}
                  <div className="flex justify-between text-emerald-600">
                    <span className="text-sm flex items-center gap-1">
                      <PackagePlus className="h-4 w-4" /> Stock Added
                    </span>
                    <span className="font-medium">+{selectedPreview.stockAdded.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-orange-600">
                    <span className="text-sm flex items-center gap-1">
                      <PackageMinus className="h-4 w-4" /> Transfer Out
                    </span>
                    <span className="font-medium">-{selectedPreview.transferOut.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-blue-600">
                    <span className="text-sm flex items-center gap-1">
                      <PackagePlus className="h-4 w-4" /> Return In
                    </span>
                    <span className="font-medium">+{selectedPreview.returnIn.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-purple-600">
                    <span className="text-sm flex items-center gap-1">
                      <PackageMinus className="h-4 w-4" /> Return Out
                    </span>
                    <span className="font-medium">-{selectedPreview.returnOut.toFixed(2)}</span>
                  </div>
                  {selectedPreview.adjustments !== 0 && (
                    <div className={`flex justify-between ${selectedPreview.adjustments > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                      <span className="text-sm flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" /> Adjustments
                      </span>
                      <span className="font-medium">
                        {selectedPreview.adjustments > 0 ? '+' : ''}{selectedPreview.adjustments.toFixed(2)}
                      </span>
                    </div>
                  )}
                  <div className="border-t pt-3 flex justify-between font-semibold">
                    <span>Calculated Closing Stock</span>
                    <span>{selectedPreview.calculatedStock.toFixed(2)}</span>
                  </div>
                  <div className={`border-t pt-3 flex justify-between font-semibold ${selectedPreview.discrepancy > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    <span>Discrepancy</span>
                    <Badge variant={selectedPreview.discrepancy > 0 ? 'default' : 'destructive'}>
                      {selectedPreview.discrepancy > 0 ? '+' : ''}{selectedPreview.discrepancy.toFixed(2)}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Daily Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Daily Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {selectedPreview.dailyBreakdown.length === 0 ? (
                        <div className="text-center text-muted-foreground py-8">No transactions found</div>
                      ) : (
                        selectedPreview.dailyBreakdown.map((day, index) => (
                          <Card key={index} className="p-3 bg-slate-50">
                            <div className="font-semibold text-sm mb-2">
                              {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
                            </div>
                            <div className="space-y-1 text-xs">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Starting:</span>
                                <span className="font-medium">{day.startingStock.toFixed(2)}</span>
                              </div>
                              {day.itemsSold > 0 && (
                                <div className="flex justify-between text-red-600">
                                  <span>Sold:</span>
                                  <span className="font-medium">-{day.itemsSold.toFixed(2)}</span>
                                </div>
                              )}
                              {day.stockAdded > 0 && (
                                <div className="flex justify-between text-emerald-600">
                                  <span>Added:</span>
                                  <span className="font-medium">+{day.stockAdded.toFixed(2)}</span>
                                </div>
                              )}
                              {day.transferOut > 0 && (
                                <div className="flex justify-between text-orange-600">
                                  <span>Transfer Out:</span>
                                  <span className="font-medium">-{day.transferOut.toFixed(2)}</span>
                                </div>
                              )}
                              {day.adjustments !== 0 && (
                                <div className={`flex justify-between ${day.adjustments > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                                  <span>Adjustments:</span>
                                  <span className="font-medium">
                                    {day.adjustments > 0 ? '+' : ''}{day.adjustments.toFixed(2)}
                                  </span>
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
                              <div className="flex justify-between pt-1 border-t">
                                <span className="font-semibold">Ending:</span>
                                <span className="font-bold">{day.endingStock.toFixed(2)}</span>
                              </div>
                            </div>
                          </Card>
                        ))
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            <DialogFooter>
              <Button onClick={() => setSelectedPreview(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      <Dialog open={showRepairPreview} onOpenChange={setShowRepairPreview}>
        <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col p-0">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-sales-dark" />
              Stock Chain Repair Preview
            </DialogTitle>
            <DialogDescription>
              The following products have broken stock history chains. Committing repairs will fix the previous/new quantity sequences without deleting data.
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-1 px-6">
            <div className="py-4 space-y-6">
              {repairPreviews.map((preview) => (
                <div key={preview.productId} className="border border-slate-200 rounded-lg overflow-hidden">
                  <div className="bg-slate-50 px-4 py-3 flex justify-between items-center border-b border-slate-200">
                    <div className="font-semibold text-sales-dark">{preview.productName}</div>
                    <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">
                      {preview.brokenEntries.length} entries broken
                    </Badge>
                  </div>
                  <div className="p-4 bg-white overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-muted-foreground border-b border-slate-100">
                          <th className="pb-2 font-medium">Date</th>
                          <th className="pb-2 font-medium">Reason</th>
                          <th className="pb-2 font-medium">Current Sequence</th>
                          <th className="pb-2 font-medium">Fixed Sequence</th>
                        </tr>
                      </thead>
                      <tbody>
                        {preview.brokenEntries.map((entry, idx) => (
                          <tr key={idx} className="border-b border-slate-50 last:border-0">
                            <td className="py-2 text-muted-foreground whitespace-nowrap">
                              {new Date(entry.createdAt).toLocaleDateString()}
                            </td>
                            <td className="py-2 italic max-w-xs truncate">{entry.changeReason}</td>
                            <td className="py-2 font-mono text-xs">
                              <span className="text-red-500">{entry.currentPrevQty}</span> → <span className="text-red-500">{entry.currentNewQty}</span>
                            </td>
                            <td className="py-2 font-mono text-xs">
                              <span className="text-green-600">{entry.fixedPrevQty}</span> → <span className="text-green-600">{entry.fixedNewQty}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-slate-50 px-4 py-2 text-xs flex justify-between text-muted-foreground">
                    <span>Final stock will correct from <b>{preview.currentProductQty}</b> to <b>{preview.finalFixedQty}</b></span>
                    <span>{preview.totalEntries} total history rows</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <DialogFooter className="p-6 pt-2 bg-slate-50 border-t">
            <Button variant="outline" onClick={() => setShowRepairPreview(false)}>
              Cancel
            </Button>
            <Button onClick={handleRepairAllChains} disabled={isRepairingChains}>
              {isRepairingChains ? 'Committing Reforms...' : `Repair All ${repairPreviews.length} Products`}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StockReconciliationPage;