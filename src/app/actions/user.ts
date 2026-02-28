/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { sendEmail } from '@/utils/emailService';

export async function requestDataDeletionAction(data: { name: string, email: string, reason: string }) {
    try {
        // 1. Find the user by email
        const user = await db.user.findUnique({
            where: { email: data.email }
        });

        // 2. Record the request in the database (even if user doesn't exist, for audit)
        if (user) {
            await db.deletionRequest.create({
                data: {
                    userId: user.id,
                    reason: data.reason,
                    status: 'pending'
                }
            });

            // 3. Optional: Flag user as 'INACTIVE' or pending deletion
            // await db.user.update({
            //     where: { id: user.id },
            //     data: { status: 'INACTIVE' }
            // });
        }

        // 4. Send "email" (simulated)
        await sendEmail({
            to: 'gonzabrands@gmail.com',
            subject: `Data Deletion Request - ${data.name}`,
            body: `
                Data Deletion Request
                
                Name: ${data.name}
                Email: ${data.email}
                User ID: ${user?.id || 'Not Found'}
                
                Reason for deletion:
                ${data.reason}
                
                This request was submitted on ${new Date().toLocaleDateString()}.
            `
        });

        return { success: true };
    } catch (error: any) {
        console.error('Error recording deletion request:', error);
        return { success: false, error: error.message };
    }
}
