/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';

export async function getMessagesAction(userId: string, businessId: string) {
    try {
        const messages = await db.message.findMany({
            where: {
                userId,
                locationId: businessId
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return {
            success: true,
            data: messages.map((msg: any) => ({
                id: msg.id,
                userId: msg.userId,
                locationId: msg.locationId,
                profileId: msg.profileId,
                customerId: msg.customerId,
                phoneNumber: msg.phoneNumber,
                content: msg.content,
                status: msg.status,
                smsCreditsUsed: msg.smsCreditsUsed,
                templateId: msg.templateId,
                errorMessage: msg.errorMessage,
                sentAt: msg.sentAt?.toISOString(),
                deliveredAt: msg.deliveredAt?.toISOString(),
                createdAt: msg.createdAt.toISOString(),
                updatedAt: msg.updatedAt.toISOString(),
                metadata: msg.metadata
            }))
        };
    } catch (error: any) {
        console.error('Error fetching messages:', error);
        return { success: false, error: error.message };
    }
}

export async function createMessageAction(data: any) {
    try {
        const smsCreditsToDeduct = data.smsCreditsUsed || 0;
        const isSent = data.status === 'sent';

        const result = await db.$transaction(async (tx) => {
            // 1. If status is 'sent' and we have a profileId, deduct credits first
            // This also acts as our credit check thanks to the 'gte' condition
            if (isSent && data.profileId && smsCreditsToDeduct > 0) {
                try {
                    await tx.user.update({
                        where: { 
                            id: data.profileId,
                            credits: {
                                gte: smsCreditsToDeduct
                            }
                        },
                        data: {
                            credits: {
                                decrement: smsCreditsToDeduct
                            }
                        }
                    });
                } catch (error: any) {
                    // If the record is not found or the 'gte' condition fails, 
                    // Prisma throws a P2025 (Record not found) error.
                    if (error.code === 'P2025') {
                        throw new Error("Insufficient SMS credits or user not found.");
                    }
                    throw error;
                }
            }

            // 2. Create the message record
            const message = await tx.message.create({
                data: {
                    userId: data.userId,
                    locationId: data.locationId,
                    profileId: data.profileId,
                    customerId: data.customerId,
                    phoneNumber: data.phoneNumber,
                    content: data.content,
                    status: data.status || 'pending',
                    smsCreditsUsed: smsCreditsToDeduct,
                    templateId: data.templateId,
                    metadata: data.metadata
                }
            });

            return message;
        });

        revalidatePath('/messages');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error creating message:', error);
        return { success: false, error: error.message };
    }
}

export async function getMessageTemplatesAction(userId: string, businessId: string) {
    try {
        const templates = await db.messageTemplate.findMany({
            where: {
                userId,
                locationId: businessId
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return { success: true, data: templates };
    } catch (error: any) {
        console.error('Error fetching message templates:', error);
        return { success: false, error: error.message };
    }
}

export async function createMessageTemplateAction(data: any) {
    try {
        const template = await db.messageTemplate.create({
            data: {
                userId: data.userId,
                locationId: data.locationId,
                name: data.name,
                content: data.content,
                category: data.category,
                variables: data.variables,
                isDefault: data.isDefault || false
            }
        });

        revalidatePath('/messages');
        return { success: true, data: template };
    } catch (error: any) {
        console.error('Error creating message template:', error);
        return { success: false, error: error.message };
    }
}

export async function updateMessageTemplateAction(id: string, data: any) {
    try {
        const template = await db.messageTemplate.update({
            where: { id },
            data: {
                name: data.name,
                content: data.content,
                category: data.category,
                variables: data.variables,
                isDefault: data.isDefault
            }
        });

        revalidatePath('/messages');
        return { success: true, data: template };
    } catch (error: any) {
        console.error('Error updating message template:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteMessageTemplateAction(id: string) {
    try {
        await db.messageTemplate.delete({
            where: { id }
        });

        revalidatePath('/messages');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting message template:', error);
        return { success: false, error: error.message };
    }
}
