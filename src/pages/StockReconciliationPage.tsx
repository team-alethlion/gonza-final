
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
import { Product } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AlertCircle, TrendingDown, TrendingUp, PackagePlus, PackageMinus, Wrench } from 'lucide-react';
import { useProfiles } from '@/contexts/ProfileContext';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useNavigate } from 'react-router-dom';
import {
  getAllProductsAction
} from '@/app/actions/products';
import {
  getProductReconciliationAction,
  getStockRepairsPreviewAction,
  repairStockChainsAction,
  createStockHistoryAction
} from '@/app/actions/inventory';
import { format } from 'date-fns';

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
  excludedSalesQty: number;
  openingDate: string | null;
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

  const [search, setSearch] = useState('');
  const [dialogProduct, setDialogProduct] = React.useState<Product | null>(null);
  const [isBulkReconciling, setIsBulkReconciling] = useState(false);
  const [isCalculatingPreview, setIsCalculatingPreview] = useState(false);
  const [showBulkPreview, setShowBulkPreview] = useState(false);
  const [reconciliationPreviews, setReconciliationPreviews] = useState<ReconciliationPreview[]>([]);
  const [selectedPreview, setSelectedPreview] = useState<ReconciliationPreview | null>(null);
  const [isRepairingChains, setIsRepairingChains] = useState(false);
  const [repairPreviews, setRepairPreviews] = useState<any[]>([]);
  const [showRepairPreview, setShowRepairPreview] = useState(false);
  const [isCalculatingRepairPreview, setIsCalculatingRepairPreview] = useState(false);

  // Load ALL products
  const { data: allProducts = [], isLoading } = useQuery({
    queryKey: ['all-products-reconciliation', user?.id, currentBusiness?.id],
    queryFn: async () => {
      if (!user?.id || !currentBusiness?.id) return [];
      return await getAllProductsAction(user.id, currentBusiness.id);
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
    if (!currentBusiness?.id) return;
    setIsRepairingChains(true);
    try {
      const result = await repairStockChainsAction(currentBusiness.id);
      if (result.success && result.data) {
        const { repaired, failed } = result.data;
        if (failed === 0) {
          toast.success(`Stock chains repaired successfully for ${repaired} product(s).`);
        } else {
          toast.warning(`Repaired ${repaired} product(s). ${failed} failed.`);
        }
      }
    } catch (error) {
      console.error('Error repairing stock chains:', error);
      toast.error('Failed to repair stock chains.');
    } finally {
      setIsRepairingChains(false);
      setShowRepairPreview(false);
    }
  };

  const handleRepairPreview = async () => {
    if (!currentBusiness?.id) return;
    setIsCalculatingRepairPreview(true);
    try {
      const result = await getStockRepairsPreviewAction(currentBusiness.id);
      if (result.success && result.data) {
        setRepairPreviews(result.data);
        if (result.data.length === 0) {
          toast.success("No broken stock chains found!");
        } else {
          setShowRepairPreview(true);
        }
      }
    } catch (error) {
      console.error('Error previewing stock repairs:', error);
      toast.error('Failed to preview stock repairs.');
    } finally {
      setIsCalculatingRepairPreview(false);
    }
  };

  const calculateBulkPreview = async () => {
    if (!currentBusiness?.id) return;

    setIsCalculatingPreview(true);
    const previews: ReconciliationPreview[] = [];

    try {
      for (const product of allProducts) {
        const result = await getProductReconciliationAction(currentBusiness.id, product.id);
        if (result.success && result.data && Math.abs(result.data.discrepancy) > 0.01) {
          previews.push(result.data as ReconciliationPreview);
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

  const handleBulkReconciliation = async () => {
    if (!user?.id || !currentBusiness?.id || reconciliationPreviews.length === 0) return;

    setIsBulkReconciling(true);

    try {
      let successCount = 0;
      let errorCount = 0;

      for (const preview of reconciliationPreviews) {
        try {
          const result = await createStockHistoryAction({
            userId: user.id,
            locationId: currentBusiness.id,
            productId: preview.product.id,
            previousQuantity: preview.currentStock,
            newQuantity: preview.calculatedStock,
            changeReason: 'Bulk Stock Reconciliation',
            createdAt: new Date().toISOString()
          });

          if (result.success) {
            successCount++;
          } else {
            throw new Error(result.error);
          }
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
                    <li className="p-3 text-sm text-muted-foreground">Loading products...</li>
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
              {reconciliationPreviews.length} product(s) with discrepancies found.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
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
                              <span className="text-muted-foreground">Current:</span> {Number(preview.currentStock).toFixed(2)}
                            </div>
                            <div className="text-sm">
                              <span className="text-muted-foreground">Calculated:</span> {Number(preview.calculatedStock).toFixed(2)}
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
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Current Stock</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{Number(selectedPreview.currentStock).toFixed(2)}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Calculated Stock</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{Number(selectedPreview.calculatedStock).toFixed(2)}</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Stock Calculation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Opening Stock</span>
                    <span className="font-medium">{Number(selectedPreview.openingStock).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span className="text-sm flex items-center gap-1">
                      <TrendingDown className="h-4 w-4" /> Items Sold
                    </span>
                    <span className="font-medium">-{Number(selectedPreview.itemsSold).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-emerald-600">
                    <span className="text-sm flex items-center gap-1">
                      <PackagePlus className="h-4 w-4" /> Stock Added
                    </span>
                    <span className="font-medium">+{Number(selectedPreview.stockAdded).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-semibold">
                    <span>Calculated Closing Stock</span>
                    <span>{Number(selectedPreview.calculatedStock).toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <DialogFooter>
              <Button onClick={() => setSelectedPreview(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default StockReconciliationPage;