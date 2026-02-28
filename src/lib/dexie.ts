import Dexie, { type EntityTable } from 'dexie';
import { Product, Customer, Sale } from '@/types';

export interface SyncMetadata {
  id: string; // branchId
  lastSyncedAt: number;
}

export interface PendingSale {
  id?: number; // Auto-incrementing local ID
  saleData: any;
  branchId: string;
  userId: string;
  createdAt: number;
  status: 'pending' | 'syncing' | 'failed';
  error?: string;
  retryCount: number;
}

export class GonzaDatabase extends Dexie {
  products!: EntityTable<Product, 'id'>;
  customers!: EntityTable<Customer, 'id'>;
  pendingSales!: EntityTable<PendingSale, 'id'>;
  syncMetadata!: EntityTable<SyncMetadata, 'id'>;

  constructor() {
    super('GonzaDatabase');
    this.version(2).stores({
      products: 'id, name, barcode, itemNumber, category, updatedAt',
      customers: 'id, fullName, phoneNumber, categoryId',
      pendingSales: '++id, branchId, userId, status',
      syncMetadata: 'id'
    });
  }
}

export const localDb = new GonzaDatabase();
