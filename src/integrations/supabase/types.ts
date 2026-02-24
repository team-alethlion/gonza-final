export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      business_profiles: {
        Row: {
          id: string;
          business_location_id: string;
          profile_name: string;
          email: string;
          phone_number: string | null;
          role: string;
          pin: string;
          role_id: string | null;
          is_active: boolean;
          created_by: string;
          created_at: string;
          updated_at: string;
          sms_credits: number;
        };
        Insert: {
          id?: string;
          business_location_id: string;
          profile_name: string;
          email: string;
          phone_number?: string | null;
          role?: string;
          pin?: string;
          role_id?: string | null;
          is_active?: boolean;
          created_by: string;
          created_at?: string;
          updated_at?: string;
          sms_credits?: number;
        };
        Update: {
          id?: string;
          business_location_id?: string;
          profile_name?: string;
          email?: string;
          phone_number?: string | null;
          role?: string;
          pin?: string;
          role_id?: string | null;
          is_active?: boolean;
          created_by?: string;
          created_at?: string;
          updated_at?: string;
          sms_credits?: number;
        };
        Relationships: [
          {
            foreignKeyName: "business_profiles_business_location_id_fkey";
            columns: ["business_location_id"];
            referencedRelation: "business_locations";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "business_profiles_role_id_fkey";
            columns: ["role_id"];
            referencedRelation: "business_roles";
            referencedColumns: ["id"];
          }
        ];
      };
      business_roles: {
        Row: {
          id: string;
          business_location_id: string;
          name: string;
          description: string | null;
          permissions: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          business_location_id: string;
          name: string;
          description?: string | null;
          permissions?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          business_location_id?: string;
          name?: string;
          description?: string | null;
          permissions?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "business_roles_business_location_id_fkey";
            columns: ["business_location_id"];
            referencedRelation: "business_locations";
            referencedColumns: ["id"];
          }
        ];
      };
      customers: {
        Row: {
          id: string;
          full_name: string | null;
          phone_number: string | null;
          email: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          full_name?: string | null;
          phone_number?: string | null;
          email?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          phone_number?: string | null;
          email?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      messages: {
        Row: {
          id: string;
          user_id: string;
          location_id: string;
          profile_id: string | null;
          customer_id: string | null;
          phone_number: string;
          content: string;
          status: string;
          sms_credits_used: number;
          template_id: string | null;
          error_message: string | null;
          sent_at: string | null;
          delivered_at: string | null;
          created_at: string;
          updated_at: string;
          metadata: Json | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          location_id: string;
          profile_id?: string | null;
          customer_id?: string | null;
          phone_number: string;
          content: string;
          status?: string;
          sms_credits_used?: number;
          template_id?: string | null;
          error_message?: string | null;
          sent_at?: string | null;
          delivered_at?: string | null;
          created_at?: string;
          updated_at?: string;
          metadata?: Json | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          location_id?: string;
          profile_id?: string | null;
          customer_id?: string | null;
          phone_number?: string;
          content?: string;
          status?: string;
          sms_credits_used?: number;
          template_id?: string | null;
          error_message?: string | null;
          sent_at?: string | null;
          delivered_at?: string | null;
          created_at?: string;
          updated_at?: string;
          metadata?: Json | null;
        };
        Relationships: [];
      };
      message_templates: {
        Row: {
          id: string;
          user_id: string;
          location_id: string;
          name: string;
          content: string;
          category: string | null;
          variables: Json;
          is_default: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          location_id: string;
          name: string;
          content: string;
          category?: string | null;
          variables?: Json;
          is_default?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          location_id?: string;
          name?: string;
          content?: string;
          category?: string | null;
          variables?: Json;
          is_default?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      sms_credit_purchases: {
        Row: {
          id: string;
          user_id: string;
          location_id: string;
          profile_id: string | null;
          credits_amount: number;
          total_cost: number;
          payment_phone_number: string;
          payment_status: string;
          pesapal_tracking_id: string | null;
          pesapal_merchant_reference: string | null;
          pesapal_redirect_url: string | null;
          payment_method: string | null;
          payment_completed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          location_id: string;
          profile_id?: string | null;
          credits_amount: number;
          total_cost: number;
          payment_phone_number: string;
          payment_status?: string;
          pesapal_tracking_id?: string | null;
          pesapal_merchant_reference?: string | null;
          pesapal_redirect_url?: string | null;
          payment_method?: string | null;
          payment_completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          location_id?: string;
          profile_id?: string | null;
          credits_amount?: number;
          total_cost?: number;
          payment_phone_number?: string;
          payment_status?: string;
          pesapal_tracking_id?: string | null;
          pesapal_merchant_reference?: string | null;
          pesapal_redirect_url?: string | null;
          payment_method?: string | null;
          payment_completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      business_locations: {
        Row: {
          id: string;
          name: string;
          address: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          address?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          address?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      products: {
        Row: {
          id: string;
          user_id: string;
          item_number: string;
          name: string;
          description: string | null;
          category: string;
          quantity: number;
          cost_price: number;
          selling_price: number;
          supplier: string | null;
          image_url: string | null;
          barcode: string | null;
          manufacturer_barcode: string | null;
          minimum_stock: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          item_number: string;
          name: string;
          description?: string | null;
          category: string;
          quantity: number;
          cost_price: number;
          selling_price: number;
          supplier?: string | null;
          image_url?: string | null;
          barcode?: string | null;
          manufacturer_barcode?: string | null;
          minimum_stock: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          item_number?: string;
          name?: string;
          description?: string | null;
          category?: string;
          quantity?: number;
          cost_price?: number;
          selling_price?: number;
          supplier?: string | null;
          image_url?: string | null;
          barcode?: string | null;
          manufacturer_barcode?: string | null;
          minimum_stock?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      stock_history: {
        Row: {
          id: string;
          user_id: string;
          product_id: string;
          previous_quantity: number;
          new_quantity: number;
          change_reason: string;
          reference_id: string | null;
          receipt_number: string | null;
          location_id: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          product_id: string;
          previous_quantity: number;
          new_quantity: number;
          change_reason: string;
          reference_id?: string | null;
          receipt_number?: string | null;
          location_id?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          product_id?: string;
          previous_quantity?: number;
          new_quantity?: number;
          change_reason?: string;
          reference_id?: string | null;
          receipt_number?: string | null;
          location_id?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      sales: {
        Row: {
          id: string;
          user_id: string;
          location_id: string;
          receipt_number: string;
          customer_name: string;
          customer_address: string | null;
          customer_contact: string | null;
          customer_id: string | null;
          items: Json;
          payment_status: string;
          profit: number;
          date: string;
          tax_rate: number | null;
          created_at: string;
          updated_at: string;
          cash_transaction_id: string | null;
          amount_paid: number | null;
          amount_due: number | null;
          notes: string | null;
          category_id: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          location_id: string;
          receipt_number: string;
          customer_name: string;
          customer_address?: string | null;
          customer_contact?: string | null;
          customer_id?: string | null;
          items: Json;
          payment_status: string;
          profit: number;
          date: string;
          tax_rate?: number | null;
          created_at?: string;
          updated_at?: string;
          cash_transaction_id?: string | null;
          amount_paid?: number | null;
          amount_due?: number | null;
          notes?: string | null;
          category_id?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          location_id?: string;
          receipt_number?: string;
          customer_name?: string;
          customer_address?: string | null;
          customer_contact?: string | null;
          customer_id?: string | null;
          items?: Json;
          payment_status?: string;
          profit?: number;
          date?: string;
          tax_rate?: number | null;
          created_at?: string;
          updated_at?: string;
          cash_transaction_id?: string | null;
          amount_paid?: number | null;
          amount_due?: number | null;
          notes?: string | null;
          category_id?: string | null;
        };
        Relationships: [];
      };
      expenses: {
        Row: {
          id: string;
          user_id: string;
          location_id: string;
          amount: number;
          description: string;
          category: string | null;
          date: string;
          payment_method: string | null;
          person_in_charge: string | null;
          receipt_image: string | null;
          cash_account_id: string | null;
          cash_transaction_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          location_id: string;
          amount: number;
          description: string;
          category?: string | null;
          date: string;
          payment_method?: string | null;
          person_in_charge?: string | null;
          receipt_image?: string | null;
          cash_account_id?: string | null;
          cash_transaction_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          location_id?: string;
          amount?: number;
          description?: string;
          category?: string | null;
          date?: string;
          payment_method?: string | null;
          person_in_charge?: string | null;
          receipt_image?: string | null;
          cash_account_id?: string | null;
          cash_transaction_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      sales_goals: {
        Row: {
          id: string;
          user_id: string;
          location_id: string;
          month: number;
          year: number;
          daily_goal: number;
          weekly_goal: number;
          monthly_goal: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          location_id: string;
          month: number;
          year: number;
          daily_goal?: number;
          weekly_goal?: number;
          monthly_goal?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          location_id?: string;
          month?: number;
          year?: number;
          daily_goal?: number;
          weekly_goal?: number;
          monthly_goal?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      subscription_payments: {
        Row: {
          id: string;
          user_id: string;
          location_id: string;
          amount: number;
          currency: string;
          payment_status: string | null;
          pesapal_tracking_id: string | null;
          payment_method: string | null;
          billing_cycle: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          user_id: string;
          location_id: string;
          amount: number;
          currency?: string;
          payment_status?: string | null;
          pesapal_tracking_id?: string | null;
          payment_method?: string | null;
          billing_cycle?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          location_id?: string;
          amount?: number;
          currency?: string;
          payment_status?: string | null;
          pesapal_tracking_id?: string | null;
          payment_method?: string | null;
          billing_cycle?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "subscription_payments_location_id_fkey";
            columns: ["location_id"];
            referencedRelation: "business_locations";
            referencedColumns: ["id"];
          }
        ];
      };
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
  | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
    DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
    DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
    DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] &
    DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema["Tables"]
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema["Tables"]
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
  | keyof DefaultSchema["Enums"]
  | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
  : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
  | keyof DefaultSchema["CompositeTypes"]
  | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
  : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
