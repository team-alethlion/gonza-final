import { createClient } from '@supabase/supabase-js';

// Adjusted for Next.js compatibility: using process.env instead of import.meta.env
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Fallback for the case where variables are named differently in migration
const finalUrl = supabaseUrl || (typeof window !== 'undefined' ? (window as any).VITE_SUPABASE_URL : '');
const finalKey = supabaseAnonKey || (typeof window !== 'undefined' ? (window as any).VITE_SUPABASE_ANON_KEY : '');

export const supabase = createClient(finalUrl, finalKey);
