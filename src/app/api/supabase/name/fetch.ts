import { getSupabase } from "@/libs/supabase-client";

export const fetchSupabaseName = async () => {
  const { data, error } = await getSupabase(
    ["supabase-name"] // revalidateTag
  )
    .from("score")
    .select("*");

  if (!data) return { data: [], date: Date.now() };

  return { data: data, date: Date.now() };
};
