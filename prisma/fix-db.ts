import { db } from './db';

async function main() {
    console.log('🔄 Fixing emailVerified column...');
    
    // In PostgreSQL, if the column is currently BOOLEAN but Prisma thinks it's TIMESTAMP,
    // we need to alter the column type.
    // If the column is already TIMESTAMP but contains invalid data (unlikely for PG), 
    // we need to fix the data.
    
    try {
        console.log('🗑️ Dropping emailVerified column...');
        await db.$executeRawUnsafe('ALTER TABLE "User" DROP COLUMN IF EXISTS "emailVerified" CASCADE;');
        
        console.log('🆕 Recreating emailVerified column as TIMESTAMP...');
        await db.$executeRawUnsafe('ALTER TABLE "User" ADD COLUMN "emailVerified" TIMESTAMP WITH TIME ZONE;');
        
        console.log('✅ Successfully fixed column type.');
        
        console.log('🔄 Updating seeded users to be verified...');
        await db.$executeRawUnsafe('UPDATE "User" SET "emailVerified" = NOW();');
        console.log('✅ Successfully updated users.');
    } catch (error) {
        console.error('❌ Failed to fix database:', error);
    } finally {
        await db.$disconnect();
    }
}

main();
