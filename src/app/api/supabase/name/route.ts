import { NextRequest, NextResponse } from "next/server";
import { supabase } from "src/libs/supabase-client";

export async function GET(request: NextRequest) {
  const { data, error } = await supabase.from("name").select("*");

  if (!data) return [];

  return NextResponse.json({ data: data, now: Date.now() });
}
