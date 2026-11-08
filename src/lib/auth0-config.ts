import type { Auth0ServerOptions } from "@auth0/auth0-tanstack-start-react/types";

function read(name: string) {
  const value = process.env[name]?.trim();
  return value || undefined;
}

/** Public values fall back so the build can finish when Vercel has not injected them yet. */
export function auth0ServerOptions(): Auth0ServerOptions {
  const domain = process.env.VITE_AUTH0_DOMAIN || process.env.AUTH0_DOMAIN || "placeholder.auth0.com";
  const clientId = process.env.VITE_AUTH0_CLIENT_ID || process.env.AUTH0_CLIENT_ID || "placeholder-client-id";
  const clientSecret = read("AUTH0_CLIENT_SECRET");
  const secret = read("AUTH0_SECRET");
  const appBaseUrl = read("APP_BASE_URL");
  return {
    domain: () => domain,
    clientId,
    ...(clientSecret ? { clientSecret } : {}),
    ...(secret ? { secret } : {}),
    ...(appBaseUrl ? { appBaseUrl } : {}),
  };
}
