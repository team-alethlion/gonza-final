/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { db } from '../../../prisma/db';
import { Prisma } from '@prisma/client';
import { Product, ProductFormData, mapDbProductToProduct, mapProductToDbProduct } from '@/types';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';
import { z } from 'zod';
import { checkProductQuota } from '@/lib/quota-check';

// Validation for bulk update
const bulkUpdateSchema = z.array(z.object({
  id: z.string(),
  updated: z.record(z.any())
})).max(100, "Maximum 100 products can be updated at once");

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
  const session = await auth();
  if (!session || !session.user) return { products: [], count: 0 };
  
  const userBranchId = (session.user as any).branchId;
  if (userBranchId && userBranchId !== businessId) return { products: [], count: 0 };

  const skip = (page - 1) * pageSize;
  const take = pageSize;

  const whereClause: any = {
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

  if (category && category !== 'all') {
    whereClause.category = { name: category };
  }

  if (stockStatus === 'outOfStock') {
    whereClause.stock = 0;
  } else if (stockStatus === 'inStock') {
    whereClause.stock = { gt: 0 };
  }

  try {
    let productsData: any[];
    let totalCount: number;

    if (stockStatus === 'lowStock') {
      const searchPattern = search ? `%${search}%` : null;
      const categoryFilter = category !== 'all' ? category : null;

      const countResult: any[] = await db.$queryRaw`
        SELECT COUNT(*)::integer as count
        FROM "Product" p
        LEFT JOIN "Category" c ON p."categoryId" = c.id
        WHERE p."branchId" = ${businessId}
          AND p.stock > 0 AND p.stock <= p."minStock"
          AND (${searchPattern} IS NULL OR p.name ILIKE ${searchPattern} OR p.sku ILIKE ${searchPattern})
          AND (${categoryFilter} IS NULL OR c.name = ${categoryFilter})
      `;
      totalCount = countResult[0].count;

      productsData = await db.$queryRaw`
        SELECT 
          p.*,
          c.name as "categoryName",
          s.name as "supplierName"
        FROM "Product" p
        LEFT JOIN "Category" c ON p."categoryId" = c.id
        LEFT JOIN "Supplier" s ON p."supplierId" = s.id
        WHERE p."branchId" = ${businessId}
          AND p.stock > 0 AND p.stock <= p."minStock"
          AND (${searchPattern} IS NULL OR p.name ILIKE ${searchPattern} OR p.sku ILIKE ${searchPattern})
          AND (${categoryFilter} IS NULL OR c.name = ${categoryFilter})
        ORDER BY p."createdAt" DESC, p.id DESC
        LIMIT ${take}
        OFFSET ${skip}
      `;

      const formattedProducts = productsData.map((p: any) => ({
        id: p.id,
        name: p.name,
        description: p.description || '',
        category: p.categoryName || 'Uncategorized',
        quantity: Number(p.stock),
        costPrice: Number(p.costPrice),
        sellingPrice: Number(p.sellingPrice),
        supplier: p.supplierName,
        imageUrl: p.image,
        barcode: p.barcode,
        itemNumber: p.sku || '',
        minimumStock: Number(p.minStock),
        createdAt: p.createdAt instanceof Date ? p.createdAt.toISOString() : new Date(p.createdAt).toISOString(),
      }));

      return { products: formattedProducts, count: totalCount };
    }

    const [data, count] = await Promise.all([
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

    totalCount = count;
    const formattedProducts = data.map((p: any) => {
      return {
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
        createdAt: p.createdAt.toISOString(),
      };
    });

    return { products: formattedProducts as any[], count: totalCount };
  } catch (error) {
    console.error('Error fetching products from DB:', error);
    return { products: [], count: 0 };
  }
}

export async function getAllProductsAction(userId: string, businessId: string) {
  const session = await auth();
  if (!session || !session.user) return [];
  if ((session.user as any).branchId && (session.user as any).branchId !== businessId) return [];

  try {
    const productsData = await db.product.findMany({
      where: {
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

export async function getProductsByIdsAction(ids: string[], businessId: string) {
  const session = await auth();
  if (!session || !session.user) return [];
  if ((session.user as any).branchId && (session.user as any).branchId !== businessId) return [];

  try {
    const products = await db.product.findMany({
      where: {
        id: { in: ids },
        branchId: businessId
      },
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
      quantity: Number(p.stock),
      costPrice: Number(p.costPrice),
      sellingPrice: Number(p.sellingPrice),
      supplier: p.supplier?.name,
      imageUrl: p.image,
      barcode: p.barcode,
      itemNumber: p.sku || '',
      minimumStock: Number(p.minStock),
      createdAt: p.createdAt.toISOString(),
    }));
  } catch (error) {
    console.error('Error fetching products by ids:', error);
    return [];
  }
}

export async function getProductsDeltaAction(businessId: string, since?: number) {
  const session = await auth();
  if (!session || !session.user) return { success: false, error: 'Unauthorized' };
  if ((session.user as any).branchId && (session.user as any).branchId !== businessId) return { success: false, error: 'Unauthorized' };

  try {
    const where: any = {
      branchId: businessId,
    };

    if (since) {
      where.updatedAt = {
        gt: new Date(since),
      };
    }

    const products = await db.product.findMany({
      where,
      include: {
        category: true,
        supplier: true,
      },
    });

    const formattedProducts = products.map((p: any) => ({
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
      manufacturerBarcode: p.manufacturerBarcode || null,
      itemNumber: p.sku || '',
      minimumStock: Number(p.minStock),
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
    }));

    return { success: true, products: formattedProducts };
  } catch (error: any) {
    console.error('Error fetching product delta:', error);
    return { success: false, error: error.message };
  }
}

export async function createProductAction(data: any) {
  const session = await auth();
  if (!session || !session.user) return null;
  if ((session.user as any).branchId && (session.user as any).branchId !== data.businessId) return null;

  const agencyId = (session.user as any).agencyId;
  if (agencyId) {
    try {
      await checkProductQuota(agencyId);
    } catch (err: any) {
      console.error('Quota check failed:', err.message);
      return null; // Or return an error object if you update the return type
    }
  }

  try {
    const result = await db.$transaction(async (tx: any) => {
      // 1. Generate next SKU/itemNumber atomically
      const counter = await tx.branchCounter.upsert({
        where: {
          branchId_type: {
            branchId: data.businessId,
            type: 'product'
          }
        },
        update: {
          count: { increment: 1 }
        },
        create: {
          branchId: data.businessId,
          type: 'product',
          count: 1
        }
      });

      const nextSku = `PROD-${counter.count.toString().padStart(4, '0')}`;

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
            locationId: data.businessId,
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
      quantity: Number(result.stock),
      costPrice: Number(result.costPrice),
      sellingPrice: Number(result.sellingPrice),
      supplier: result.supplier?.name,
      imageUrl: result.image,
      barcode: result.barcode,
      itemNumber: result.sku || '',
      minimumStock: Number(result.minStock),
      createdAt: result.createdAt.toISOString(),
    };
  } catch (error) {
    console.error('Error creating product:', error);
    return null;
  }
}

export async function updateProductAction(id: string, branchId: string, updates: any) {
  const session = await auth();
  if (!session || !session.user) return null;
  if ((session.user as any).branchId && (session.user as any).branchId !== branchId) return null;

  try {
    const result = await db.$transaction(async (tx: any) => {
      // 1. Get current product state
      const current = await tx.product.findUnique({
        where: { id, branchId: branchId },
        select: { stock: true, name: true }
      });

      if (!current) throw new Error("Product not found");

      // 2. Perform update
      const updated = await tx.product.update({
        where: { id, branchId: branchId },
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
            locationId: branchId,
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

      return {
        ...updated,
        stock: Number(updated.stock),
        minStock: Number(updated.minStock),
        costPrice: Number(updated.costPrice),
        sellingPrice: Number(updated.sellingPrice),
        createdAt: updated.createdAt.toISOString(),
        updatedAt: updated.updatedAt.toISOString()
      };
    });

    return result;
  } catch (error) {
    console.error('Error updating product:', error);
    return null;
  }
}

export async function deleteProductAction(id: string, branchId: string) {
  const session = await auth();
  if (!session || !session.user) return false;
  if ((session.user as any).branchId && (session.user as any).branchId !== branchId) return false;

  try {
    await db.product.delete({
      where: { id, branchId: branchId }
    });
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
  const session = await auth();
  if (!session || !session.user) return false;
  if ((session.user as any).branchId && (session.user as any).branchId !== businessId) return false;

  try {
    // Validate updates array length and structure
    const validatedUpdates = bulkUpdateSchema.parse(updates);

    // Prisma transaction for bulk updates
    const updatePromises = validatedUpdates.map(u =>
      db.product.update({
        where: { id: u.id, branchId: businessId },
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
    if (error instanceof z.ZodError) {
      console.error('Validation error for bulk update:', error.errors);
      return false;
    }
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

export async function updateProductCategoryAction(id: string, branchId: string, name: string) {
  try {
    const category = await db.category.update({
      where: { id, branchId: branchId },
      data: { name }
    });

    revalidatePath('/inventory');
    return { success: true, data: category };
  } catch (error: any) {
    console.error('Error updating category:', error);
    return { success: false, error: error.message };
  }
}

export async function deleteProductCategoryAction(id: string, branchId: string) {
  try {
    // Check if any products are using this category
    const usageCount = await db.product.count({
      where: { categoryId: id, branchId: branchId }
    });

    if (usageCount > 0) {
      return {
        success: false,
        error: 'Cannot delete category: it is being used by one or more products.'
      };
    }

    await db.category.delete({
      where: { id, branchId: branchId }
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
  const session = await auth();
  if (!session || !session.user) return { costValue: 0, lowStock: 0, outOfStock: 0, stockValue: 0 };
  if ((session.user as any).branchId && (session.user as any).branchId !== businessId) return { costValue: 0, lowStock: 0, outOfStock: 0, stockValue: 0 };

  if (!businessId) return { costValue: 0, lowStock: 0, outOfStock: 0, stockValue: 0 };

  try {
    const stats = await db.$queryRaw`
      SELECT 
        COALESCE(SUM(CAST(stock AS DECIMAL) * CAST("costPrice" AS DECIMAL)), 0) as "costValue",
        COALESCE(SUM(CAST(stock AS DECIMAL) * CAST("sellingPrice" AS DECIMAL)), 0) as "stockValue",
        CAST(COUNT(CASE WHEN stock <= 0 THEN 1 END) AS INTEGER) as "outOfStock",
        CAST(COUNT(CASE WHEN stock > 0 AND stock <= "minStock" THEN 1 END) AS INTEGER) as "lowStock"
      FROM "Product"
      WHERE "branchId" = ${businessId}
    `;

    const result = (stats as any)[0];

    return {
      costValue: Number(result.costValue),
      stockValue: Number(result.stockValue),
      outOfStock: Number(result.outOfStock),
      lowStock: Number(result.lowStock)
    };
  } catch (error) {
    console.error('Error fetching product stats:', error);
    return { costValue: 0, lowStock: 0, outOfStock: 0, stockValue: 0 };
  }
}

// --- BARCODE LOOKUP ---

export async function lookupProductByBarcodeAction(code: string, branchId: string) {
  const session = await auth();
  if (!session || !session.user) return null;
  if ((session.user as any).branchId && (session.user as any).branchId !== branchId) return null;

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
      },
      include: {
        category: true,
        supplier: true,
      }
    });
    return product ? {
      id: product.id,
      name: product.name,
      description: product.description || '',
      category: (product as any).category?.name || 'Uncategorized',
      quantity: Number(product.stock),
      costPrice: Number(product.costPrice),
      sellingPrice: Number(product.sellingPrice),
      supplier: (product as any).supplier?.name,
      imageUrl: product.image,
      barcode: product.barcode,
      manufacturerBarcode: product.manufacturerBarcode || null,
      itemNumber: product.sku || '',
      minimumStock: Number(product.minStock),
      createdAt: product.createdAt.toISOString(),
      updatedAt: product.updatedAt.toISOString()
    } as any : null;
  } catch (error) {
    console.error('[lookupProductByBarcodeAction] Error:', error);
    return null;
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
  const session = await auth();
  if (!session || !session.user) return [];
  if ((session.user as any).branchId && (session.user as any).branchId !== branchId) return [];

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

    return products.map((p: any) => ({
      ...p,
      costPrice: Number(p.costPrice),
      sellingPrice: Number(p.sellingPrice),
      stock: Number(p.stock),
      minStock: Number(p.minStock),
      createdAt: p.createdAt.toISOString(),
      updatedAt: p.updatedAt.toISOString()
    }));
  } catch (error) {
    console.error('[getFilteredProductsForExportAction] Error:', error);
    return [];
  }
}
