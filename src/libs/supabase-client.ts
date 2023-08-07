import { createClient } from "@supabase/supabase-js";
import { SupabaseClientOptions } from "@supabase/supabase-js/dist/module/lib/types";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getSupabase = (tags: string[]) =>
  createClient(supabaseUrl, supabaseAnonKey, {
    fetch: fetch(supabaseUrl, { next: { tags } }),
  } as SupabaseClientOptions<"public">);
