import { useState, useEffect } from 'react';
import { useBusiness } from '@/contexts/BusinessContext';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/components/auth/AuthProvider';
import {
  getCustomerCategoriesAction,
  createCustomerCategoryAction,
  updateCustomerCategoryAction,
  deleteCustomerCategoryAction
} from '@/app/actions/customers';

export interface CustomerCategory {
  id: string;
  name: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

export const useCustomerCategories = () => {
  const [categories, setCategories] = useState<CustomerCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentBusiness } = useBusiness();
  const { user } = useAuth();

  const fetchCategories = async () => {
    if (!currentBusiness) {
      setCategories([]);
      setIsLoading(false);
      return;
    }

    try {
      const result = await getCustomerCategoriesAction(currentBusiness.id);
      if (result.success && result.data) {
        setCategories(result.data as any);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Error fetching customer categories:', error);
      toast({
        title: "Error",
        description: "Failed to fetch customer categories",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [currentBusiness]);

  const createCategory = async (name: string) => {
    if (!currentBusiness || !user) {
      toast({
        title: "Error",
        description: "No business selected or user not authenticated",
        variant: "destructive",
      });
      return false;
    }

    try {
      const result = await createCustomerCategoryAction(currentBusiness.id, user.id, name);
      if (result.success) {
        toast({
          title: "Success",
          description: "Customer category created successfully",
        });
        fetchCategories();
        return true;
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Error creating customer category:', error);
      toast({
        title: "Error",
        description: "Failed to create customer category",
        variant: "destructive",
      });
      return false;
    }
  };

  const updateCategory = async (id: string, name: string) => {
    try {
      const result = await updateCustomerCategoryAction(id, name);
      if (result.success) {
        toast({
          title: "Success",
          description: "Customer category updated successfully",
        });
        fetchCategories();
        return true;
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Error updating customer category:', error);
      toast({
        title: "Error",
        description: "Failed to update customer category",
        variant: "destructive",
      });
      return false;
    }
  };

  const deleteCategory = async (id: string) => {
    try {
      const result = await deleteCustomerCategoryAction(id);
      if (result.success) {
        toast({
          title: "Success",
          description: "Customer category deleted successfully",
        });
        fetchCategories();
        return true;
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Error deleting customer category:', error);
      toast({
        title: "Error",
        description: "Failed to delete customer category",
        variant: "destructive",
      });
      return false;
    }
  };

  return {
    categories,
    isLoading,
    createCategory,
    updateCategory,
    deleteCategory,
    refetch: fetchCategories,
  };
};
