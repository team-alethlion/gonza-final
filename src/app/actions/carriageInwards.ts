/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';

export async function getCarriageInwardsAction(branchId: string) {
    try {
        const records = await db.carriageInward.findMany({
            where: { branchId },
            orderBy: [{ date: 'desc' }, { createdAt: 'desc' }],
        });
        return {
            success: true,
            data: records.map((r: any) => ({
                id: r.id,
                userId: r.userId,
                locationId: r.branchId,
                supplierName: r.supplierName,
                details: r.details,
                amount: Number(r.amount),
                date: r.date.toISOString(),
                cashAccountId: r.cashAccountId,
                cashTransactionId: r.cashTransactionId,
                createdAt: r.createdAt.toISOString(),
                updatedAt: r.updatedAt.toISOString(),
            })),
        };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function createCarriageInwardAction(
    userId: string,
    branchId: string,
    data: { supplierName: string; details: string; amount: number; date: Date; cashAccountId?: string }
) {
    try {
        const record = await db.carriageInward.create({
            data: {
                userId,
                branchId,
                supplierName: data.supplierName,
                details: data.details,
                amount: data.amount,
                date: data.date,
                cashAccountId: data.cashAccountId || null,
            },
        });
        return { success: true, data: record };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function updateCarriageInwardAction(
    id: string,
    branchId: string,
    updates: Partial<{ supplierName: string; details: string; amount: number; date: Date }>
) {
    try {
        const updateData: any = {};
        if (updates.supplierName !== undefined) updateData.supplierName = updates.supplierName;
        if (updates.details !== undefined) updateData.details = updates.details;
        if (updates.amount !== undefined) updateData.amount = updates.amount;
        if (updates.date !== undefined) updateData.date = updates.date;

        await db.carriageInward.update({ where: { id, branchId }, data: updateData });
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function deleteCarriageInwardAction(id: string, branchId: string) {
    try {
        await db.carriageInward.delete({ where: { id, branchId } });
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}
