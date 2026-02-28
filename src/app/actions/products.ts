/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { db } from '../../../prisma/db';
import { Product, ProductFormData, mapDbProductToProduct, mapProductToDbProduct } from '@/types';
import { revalidatePath } from 'next/cache';

// We implement server actions for the products here

export async function getProductsAction({
  userId,
  businessId,
  page,
  pageSize,
  search,
  category,
  stockStatus,
}: {
  userId: string;
  businessId: string;
  page: number;
  pageSize: number;
  search?: string;
  category?: string;
  stockStatus?: 'inStock' | 'outOfStock' | 'lowStock' | 'all';
}) {
  if (!userId || !businessId) return { products: [], count: 0 };

  const skip = (page - 1) * pageSize;
  const take = pageSize;

  const whereClause: any = {
    userId: userId,
    branchId: businessId,
  };

  if (search) {
    whereClause.OR = [
      { name: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
      { sku: { contains: search, mode: 'insensitive' } },
      { barcode: { contains: search, mode: 'insensitive' } },
    ];
  }

  if (category) {
    whereClause.category = { name: category };
  }

  if (stockStatus === 'outOfStock') {
    whereClause.stock = 0;
  } else if (stockStatus === 'inStock') {
    whereClause.stock = { gt: 0 };
  } else if (stockStatus === 'lowStock') {
    // Handling lowStock is complex because minStock is compared locally or using direct SQL in Prisma
    // For now, we will handle it with Prisma's raw query or by filtering in memory if necessary
    // Fortunately, since PRISMA 5.0, column comparison still needs raw queries or we can fetch and filter if small
    // Here we'll fetch them all if lowStock is enabled, or add a generated column. 
    // We will do a basic fetch and filter later if needed.
  }

  try {
    const [productsData, totalCount] = await Promise.all([
      db.product.findMany({
        where: whereClause,
        skip,
        take,
        orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
        include: {
          category: true,
          supplier: true,
        }
      }),
      db.product.count({ where: whereClause })
    ]);

    // Map the Prisma product model back to the application's Product type
    let formattedProducts = productsData.map((p: any) => {
      // Assuming mapping exists, we will map it
      return {
        id: p.id,
        name: p.name,
        description: p.description || '',
        category: p.category?.name || 'Uncategorized',
        quantity: p.stock,
        costPrice: p.costPrice,
        sellingPrice: p.sellingPrice,
        supplier: p.supplier?.name,
        imageUrl: p.image,
        barcode: p.barcode,
        itemNumber: p.sku || '',
        minimumStock: p.minStock,
        createdAt: p.createdAt,
      };
    });

    if (stockStatus === 'lowStock') {
      formattedProducts = formattedProducts.filter((p: any) => p.quantity > 0 && p.quantity <= p.minimumStock);
    }

    return { products: formattedProducts as any[], count: totalCount };
  } catch (error) {
    console.error('Error fetching products from DB:', error);
    return { products: [], count: 0 };
  }
}

export async function getAllProductsAction(userId: string, businessId: string) {
  if (!userId || !businessId) return [];

  try {
    const productsData = await db.product.findMany({
      where: {
        userId: userId,
        branchId: businessId,
      },
      orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
      include: {
        category: true,
        supplier: true,
      }
    });

    return productsData.map((p: any) => ({
      id: p.id,
      name: p.name,
      description: p.description || '',
      category: p.category?.name || 'Uncategorized',
      quantity: Number(p.stock),
      costPrice: Number(p.costPrice),
      sellingPrice: Number(p.sellingPrice),
      supplier: p.supplier?.name,
      imageUrl: p.image,
      barcode: p.barcode,
      itemNumber: p.sku || '',
      minimumStock: Number(p.minStock),
      createdAt: p.createdAt,
    }));
  } catch (error) {
    console.error('Error fetching all products from DB:', error);
    return [];
  }
}

export async function getProductsByIdsAction(ids: string[], businessId?: string) {
  try {
    const where: any = {
      id: { in: ids }
    };
    if (businessId) {
      where.branchId = businessId;
    }

    const products = await db.product.findMany({
      where,
      include: {
        category: true,
        supplier: true,
      }
    });

    return products.map((p: any) => ({
      id: p.id,
      name: p.name,
      description: p.description || '',
      category: p.category?.name || 'Uncategorized',
      quantity: p.stock,
      costPrice: p.costPrice,
      sellingPrice: p.sellingPrice,
      supplier: p.supplier?.name,
      imageUrl: p.image,
      barcode: p.barcode,
      itemNumber: p.sku || '',
      minimumStock: p.minStock,
      createdAt: p.createdAt,
    }));
  } catch (error) {
    console.error('Error fetching products by ids:', error);
    return [];
  }
}

export async function createProductAction(data: any) {
  try {
    const result = await db.$transaction(async (tx: any) => {
      // 1. Generate next SKU/itemNumber for this branch
      const lastProduct = await tx.product.findFirst({
        where: { branchId: data.businessId },
        orderBy: { sku: 'desc' },
        select: { sku: true }
      });

      let nextSku = "PROD-0001";
      if (lastProduct && lastProduct.sku) {
        const currentNumber = parseInt(lastProduct.sku.replace("PROD-", "")) || 0;
        nextSku = `PROD-${(currentNumber + 1).toString().padStart(4, '0')}`;
      }

      // 2. Create the product
      const product = await tx.product.create({
        data: {
          name: data.name,
          description: data.description,
          branchId: data.businessId,
          userId: data.userId,
          categoryId: data.categoryId || null,
          supplierId: data.supplierId || null,
          sku: nextSku,
          barcode: data.barcode,
          image: data.imageUrl,
          costPrice: data.costPrice || 0,
          sellingPrice: data.sellingPrice || 0,
          stock: data.quantity || 0,
          minStock: data.minimumStock || 0,
          createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
        },
        include: {
          category: true,
          supplier: true,
        }
      });

      // 3. Create initial stock history if quantity > 0
      if (data.quantity > 0) {
        await tx.productHistory.create({
          data: {
            userId: data.userId,
            productId: product.id,
            type: 'CREATED',
            oldStock: 0,
            newStock: data.quantity,
            quantityChange: data.quantity,
            reason: `[${product.name}] | Initial stock`,
            createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
          }
        });
      }

      return product;
    });

    return {
      id: result.id,
      name: result.name,
      description: result.description || '',
      category: result.category?.name || 'Uncategorized',
      quantity: result.stock,
      costPrice: result.costPrice,
      sellingPrice: result.sellingPrice,
      supplier: result.supplier?.name,
      imageUrl: result.image,
      barcode: result.barcode,
      itemNumber: result.sku || '',
      minimumStock: result.minStock,
      createdAt: result.createdAt,
    };
  } catch (error) {
    console.error('Error creating product:', error);
    return null;
  }
}

export async function updateProductAction(id: string, updates: any) {
  try {
    const result = await db.$transaction(async (tx: any) => {
      // 1. Get current product state
      const current = await tx.product.findUnique({
        where: { id },
        select: { stock: true, name: true }
      });

      if (!current) throw new Error("Product not found");

      // 2. Perform update
      const updated = await tx.product.update({
        where: { id },
        data: {
          name: updates.name,
          description: updates.description,
          categoryId: updates.categoryId !== undefined ? updates.categoryId : undefined,
          supplierId: updates.supplierId !== undefined ? updates.supplierId : undefined,
          sku: updates.itemNumber || updates.sku,
          barcode: updates.barcode,
          image: updates.imageUrl,
          costPrice: updates.costPrice,
          sellingPrice: updates.sellingPrice,
          stock: updates.quantity,
          minStock: updates.minimumStock,
        }
      });

      // 3. Create history if quantity changed
      if (updates.quantity !== undefined && updates.quantity !== current.stock && updates.customChangeReason !== 'skip-history') {
        let changeReason = updates.customChangeReason;
        if (!changeReason) {
          if (updates.isFromSale) changeReason = "Sale";
          else if (updates.quantity > current.stock) changeReason = "Manual stock addition";
          else changeReason = "Manual stock reduction";
        }

        const snapshottedReason = `[${updated.name}] | ${changeReason}`;

        await tx.productHistory.create({
          data: {
            userId: updates.userId,
            productId: updated.id,
            type: updates.isFromSale ? 'SALE' : (updates.quantity > current.stock ? 'RESTOCK' : 'ADJUSTMENT'),
            oldStock: current.stock,
            newStock: updates.quantity,
            quantityChange: updates.quantity - current.stock,
            reason: snapshottedReason,
            referenceId: updates.referenceId || null,
          }
        });
      }

      return updated;
    });

    return result;
  } catch (error) {
    console.error('Error updating product:', error);
    return null;
  }
}

export async function deleteProductAction(id: string) {
  try {
    await db.product.delete({
      where: { id }
    });
    // revalidatePath('/inventory/products');
    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
    return false;
  }
}

export async function updateProductsBulkAction(
  updates: Array<{ id: string; updated: Partial<any> }>,
  businessId: string
) {
  try {
    // Prisma transaction for bulk updates
    const updatePromises = updates.map(u =>
      db.product.update({
        where: { id: u.id },
        data: {
          ...(u.updated.name && { name: u.updated.name }),
          ...(u.updated.description !== undefined && { description: u.updated.description }),
          ...(u.updated.categoryId !== undefined && { categoryId: u.updated.categoryId }),
          ...(u.updated.supplierId !== undefined && { supplierId: u.updated.supplierId }),
          ...(u.updated.sku !== undefined && { sku: u.updated.sku }),
          ...(u.updated.barcode !== undefined && { barcode: u.updated.barcode }),
          ...(u.updated.costPrice !== undefined && { costPrice: u.updated.costPrice }),
          ...(u.updated.sellingPrice !== undefined && { sellingPrice: u.updated.sellingPrice }),
          ...(u.updated.quantity !== undefined && { stock: u.updated.quantity }),
          ...(u.updated.minimumStock !== undefined && { minStock: u.updated.minimumStock }),
        }
      })
    );

    await db.$transaction(updatePromises);
    return true;
  } catch (error) {
    console.error('Error performing bulk update:', error);
    return false;
  }
}

// --- PRODUCT CATEGORIES ---

export async function getProductCategoriesAction(locationId: string) {
  try {
    const categories = await db.category.findMany({
      where: { branchId: locationId },
      orderBy: { name: 'asc' }
    });

    return {
      success: true,
      data: categories.map((c: any) => ({
        id: c.id,
        name: c.name,
        created_at: c.createdAt.toISOString(),
      }))
    };
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    return { success: false, error: error.message };
  }
}

export async function createProductCategoryAction(locationId: string, userId: string, name: string) {
  try {
    const category = await db.category.create({
      data: {
        branchId: locationId,
        userId,
        name
      }
    });

    revalidatePath('/inventory');
    return { success: true, data: category };
  } catch (error: any) {
    console.error('Error creating category:', error);
    return { success: false, error: error.message };
  }
}

export async function updateProductCategoryAction(id: string, name: string) {
  try {
    const category = await db.category.update({
      where: { id },
      data: { name }
    });

    revalidatePath('/inventory');
    return { success: true, data: category };
  } catch (error: any) {
    console.error('Error updating category:', error);
    return { success: false, error: error.message };
  }
}

export async function deleteProductCategoryAction(id: string) {
  try {
    // Check if any products are using this category
    const usageCount = await db.product.count({
      where: { categoryId: id }
    });

    if (usageCount > 0) {
      return {
        success: false,
        error: 'Cannot delete category: it is being used by one or more products.'
      };
    }

    await db.category.delete({
      where: { id }
    });

    revalidatePath('/inventory');
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting category:', error);
    return { success: false, error: error.message };
  }
}

// --- PRODUCT STATS ---

export async function getProductStatsAction(businessId: string) {
  if (!businessId) return { costValue: 0, lowStock: 0, outOfStock: 0, stockValue: 0 };

  try {
    const products = await db.product.findMany({
      where: { branchId: businessId },
      select: {
        stock: true,
        costPrice: true,
        sellingPrice: true,
        minStock: true,
      }
    });

    let costValue = 0;
    let lowStock = 0;
    let outOfStock = 0;
    let stockValue = 0;

    products.forEach((p: any) => {
      const qty = Number(p.stock) || 0;
      const cost = Number(p.costPrice) || 0;
      const selling = Number(p.sellingPrice) || 0;
      const minStock = Number(p.minStock) || 0;

      costValue += cost * qty;
      stockValue += selling * qty;

      if (qty === 0) {
        outOfStock++;
      } else if (qty > 0 && qty <= minStock) {
        lowStock++;
      }
    });

    return { costValue, lowStock, outOfStock, stockValue };
  } catch (error) {
    console.error('Error fetching product stats:', error);
    return { costValue: 0, lowStock: 0, outOfStock: 0, stockValue: 0 };
  }
}

// --- BARCODE LOOKUP ---

export async function lookupProductByBarcodeAction(code: string, branchId: string) {
  if (!code || !branchId) return null;
  try {
    const lowerCode = code.toLowerCase();
    const product = await db.product.findFirst({
      where: {
        branchId,
        OR: [
          { barcode: { contains: lowerCode, mode: 'insensitive' } },
          { sku: { contains: lowerCode, mode: 'insensitive' } },
        ]
      }
    });
    return product;
  } catch (error) {
    console.error('[lookupProductByBarcodeAction] Error:', error);
    return null;
  }
}

// --- BARCODE SCANNER (all products for scanner preload) ---

export async function getProductsForBarcodeScannerAction(branchId: string) {
  if (!branchId) return [];
  try {
    const products = await db.product.findMany({
      where: { branchId },
      select: {
        id: true, name: true, barcode: true, sku: true,
        sellingPrice: true, costPrice: true, stock: true,
        description: true, categoryId: true, branchId: true,
        minStock: true, imageUrl: true, createdAt: true, updatedAt: true,
      },
    });
    return products;
  } catch (error) {
    console.error('[getProductsForBarcodeScannerAction] Error:', error);
    return [];
  }
}

// --- SALE CASH TRANSACTION ID UPDATE ---

export async function updateSaleCashTransactionAction(saleId: string, cashTransactionId: string) {
  try {
    await db.sale.update({
      where: { id: saleId },
      data: { cashTransactionId },
    });
    return { success: true };
  } catch (error: any) {
    console.error('[updateSaleCashTransactionAction] Error:', error);
    return { success: false, error: error.message };
  }
}

// --- FILTERED PRODUCTS FOR EXPORT (all pages) ---

export async function getFilteredProductsForExportAction(
  branchId: string,
  filters?: { search?: string; category?: string; stockStatus?: string }
) {
  if (!branchId) return [];
  try {
    const where: any = { branchId };

    if (filters?.search) {
      const s = filters.search;
      where.OR = [
        { name: { contains: s, mode: 'insensitive' } },
        { description: { contains: s, mode: 'insensitive' } },
        { sku: { contains: s, mode: 'insensitive' } },
      ];
    }

    if (filters?.stockStatus === 'outOfStock') {
      where.stock = 0;
    } else if (filters?.stockStatus === 'inStock') {
      where.stock = { gt: 0 };
    }

    const products = await db.product.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    return products;
  } catch (error) {
    console.error('[getFilteredProductsForExportAction] Error:', error);
    return [];
  }
}
