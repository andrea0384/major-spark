import type { Auth0ServerOptions } from "@auth0/auth0-tanstack-start-react/types";

function read(name: string) {
  const value = process.env[name]?.trim();
  return value || undefined;
}

export function auth0ServerOptions(): Auth0ServerOptions | null {
  const domain = read("VITE_AUTH0_DOMAIN") ?? read("AUTH0_DOMAIN");
  const clientId = read("VITE_AUTH0_CLIENT_ID") ?? read("AUTH0_CLIENT_ID");
  const clientSecret = read("AUTH0_CLIENT_SECRET");
  const secret = read("AUTH0_SECRET");
  if (!domain || !clientId || !clientSecret || !secret) return null;
  if (Buffer.byteLength(secret, "utf8") < 32) return null;
  return {
    domain: () => domain,
    clientId,
    clientSecret,
    secret,
  };
}
