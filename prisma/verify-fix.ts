import { db } from './db';

async function main() {
    console.log('🔍 Verifying Prisma findUnique...');
    try {
        const user = await db.user.findUnique({
            where: { email: 'admin@gonza.com' },
            select: { email: true, emailVerified: true }
        });
        console.log('✅ User found:', user);
        if (user && user.emailVerified instanceof Date) {
            console.log('✅ emailVerified is a valid Date instance.');
        } else if (user && user.emailVerified === null) {
             console.log('✅ emailVerified is null (which is valid for DateTime?).');
        } else {
            console.error('❌ emailVerified is NOT a Date or null:', typeof user?.emailVerified, user?.emailVerified);
        }
    } catch (error) {
        console.error('❌ Prisma findUnique failed:', error);
    } finally {
        await db.$disconnect();
    }
}

main();
