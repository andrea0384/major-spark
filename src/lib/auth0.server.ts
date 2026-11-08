import { createServerFn } from "@tanstack/react-start";
import type { Auth0ServerOptions } from "@auth0/auth0-tanstack-start-react/types";

function read(name: string) {
  const value = process.env[name]?.trim();
  return value || undefined;
}

/**
 * Public Auth0 values may arrive as VITE_AUTH0_DOMAIN / VITE_AUTH0_CLIENT_ID.
 * The client secret and session secret are server-only and are never read
 * from a VITE_ variable.
 */
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

export const auth0Ready = createServerFn({ method: "GET" }).handler(async () => {
  return { ready: auth0ServerOptions() !== null };
});
