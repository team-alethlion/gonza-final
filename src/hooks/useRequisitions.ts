import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import {
  getRequisitionsAction,
  createRequisitionAction,
  updateRequisitionAction,
  deleteRequisitionAction
} from '@/app/actions/inventory';

export interface Requisition {
  id: string;
  userId: string;
  locationId: string;
  requisitionNumber: string;
  title: string;
  items: RequisitionItem[];
  notes: string | null;
  status: 'draft' | 'submitted' | 'approved' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

export interface RequisitionItem {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  urgentItem?: boolean;
}

export const useRequisitions = (userId: string | undefined, locationId: string | undefined) => {
  const [requisitions, setRequisitions] = useState<Requisition[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const loadRequisitions = async () => {
    if (!userId || !locationId) {
      setRequisitions([]);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const result = await getRequisitionsAction(userId, locationId);
      if (result.success && result.data) {
        setRequisitions(result.data.map((req: any) => ({
          ...req,
          createdAt: new Date(req.createdAt),
          updatedAt: new Date(req.updatedAt)
        })));
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Error loading requisitions:', error);
      toast({
        title: "Error",
        description: "Failed to load requisitions. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadRequisitions();
  }, [userId, locationId]);

  const createRequisition = async (
    title: string,
    items: RequisitionItem[],
    notes?: string
  ): Promise<Requisition | null> => {
    if (!userId || !locationId) return null;

    try {
      const requisitionNumber = generateRequisitionNumber();

      const result = await createRequisitionAction({
        userId,
        locationId,
        requisitionNumber,
        title,
        items,
        notes: notes || null,
        status: 'draft'
      });

      if (!result.success || !result.data) {
        throw new Error(result.error);
      }

      const data = result.data;
      const newRequisition: Requisition = {
        ...data,
        createdAt: new Date(data.createdAt),
        updatedAt: new Date(data.updatedAt)
      };

      setRequisitions(prev => [newRequisition, ...prev]);

      toast({
        title: "Requisition created",
        description: `Requisition ${requisitionNumber} has been created successfully.`
      });

      return newRequisition;
    } catch (error) {
      console.error('Error creating requisition:', error);
      toast({
        title: "Error",
        description: "Failed to create requisition. Please try again.",
        variant: "destructive"
      });
      return null;
    }
  };

  const updateRequisition = async (
    id: string,
    updates: Partial<{
      title: string;
      items: RequisitionItem[];
      notes: string;
      status: 'draft' | 'submitted' | 'approved' | 'completed';
    }>
  ): Promise<boolean> => {
    if (!userId) return false;

    try {
      const result = await updateRequisitionAction(id, userId, updates);

      if (!result.success || !result.data) {
        throw new Error(result.error);
      }

      const data = result.data;
      const updatedRequisition: Requisition = {
        ...data,
        createdAt: new Date(data.createdAt),
        updatedAt: new Date(data.updatedAt)
      };

      setRequisitions(prev => prev.map(req => req.id === id ? updatedRequisition : req));

      toast({
        title: "Requisition updated",
        description: "Requisition has been updated successfully."
      });

      return true;
    } catch (error) {
      console.error('Error updating requisition:', error);
      toast({
        title: "Error",
        description: "Failed to update requisition. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };

  const deleteRequisition = async (id: string): Promise<boolean> => {
    if (!userId) return false;

    try {
      const result = await deleteRequisitionAction(id, userId);

      if (!result.success) {
        throw new Error(result.error);
      }

      setRequisitions(prev => prev.filter(req => req.id !== id));

      toast({
        title: "Requisition deleted",
        description: "Requisition has been deleted successfully."
      });

      return true;
    } catch (error) {
      console.error('Error deleting requisition:', error);
      toast({
        title: "Error",
        description: "Failed to delete requisition. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };

  return {
    requisitions,
    isLoading,
    loadRequisitions,
    createRequisition,
    updateRequisition,
    deleteRequisition
  };
};

const generateRequisitionNumber = () => {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const time = date.getTime().toString().slice(-4);
  return `REQ${year}${month}${day}${time}`;
};