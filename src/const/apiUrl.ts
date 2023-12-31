import { headers } from "next/dist/client/components/headers";

export const apiUrl = () => {
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  const host = headers().get("host");
  return `${protocol}://${host}/api`;
};
