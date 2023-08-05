import { apiUrl } from "@/const/apiUrl";

export const fetchSupabaseName = async () => {
  const fetchResponse = await fetch(`${apiUrl()}/supabase/name`, {
    next: { tags: ["supabase-name"] },
  });

  if (fetchResponse.status !== 200) {
    return { data: [], date: Date.now() };
  }

  const { data, now } = await fetchResponse.json();

  return { data: data, date: now };
};
