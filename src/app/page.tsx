import { fetchSupabaseName } from "./api/supabase/name/fetch";

export default async function Home() {
  const { data, date } = await fetchSupabaseName();

  return (
    <main>
      <div>
        <div>date: {date}</div>
      </div>
    </main>
  );
}
