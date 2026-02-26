-- Update the SELECT policy to restrict customer viewing to only owners and managers
DROP POLICY IF EXISTS "Business members can view customers" ON public.customers;

CREATE POLICY "Only owners and managers can view customers"
ON public.customers
FOR SELECT
USING (
  location_id IN (
    SELECT business_location_id 
    FROM public.business_profiles 
    WHERE created_by = auth.uid() 
      AND is_active = true 
      AND role IN ('owner', 'manager')
  )
);

-- Update comment to reflect the stricter access model
COMMENT ON TABLE public.customers IS 'Customer data with strict role-based access control. Only owners and managers can view, create, or update customer data. Email and phone are field-level encrypted. Staff cannot access customer information.';