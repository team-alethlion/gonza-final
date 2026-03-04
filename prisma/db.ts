import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const db =
  globalForPrisma.prisma ||
  (() => {
    const client = new PrismaClient({
      adapter,
      log: ['error', 'warn'],
    });
    
    // Test if emailVerification exists on this instance
    if ('emailVerification' in client) {
      console.log('[Prisma] Client initialized successfully with emailVerification model');
    } else {
      console.error('[Prisma] CRITICAL: emailVerification model MISSING from initialized client');
    }
    
    return client;
  })();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
}

export * from '@prisma/client';
