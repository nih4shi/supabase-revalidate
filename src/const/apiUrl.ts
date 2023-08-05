import { headers } from "next/dist/client/components/headers";

export const apiUrl = () => {
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "http";
  const host = headers().get("host");
  return `${protocol}://${host}/api`;
};
