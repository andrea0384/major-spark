import type { Auth0ServerOptions } from "@auth0/auth0-tanstack-start-react/types";

function read(name: string) {
  const value = process.env[name]?.trim();
  return value || undefined;
}

/** Values come only from the server environment. Domain is resolved per request so Vercel can supply the public URL. */
export function auth0ServerOptions(): Auth0ServerOptions {
  const domain = read("VITE_AUTH0_DOMAIN") ?? read("AUTH0_DOMAIN");
  const clientId = read("VITE_AUTH0_CLIENT_ID") ?? read("AUTH0_CLIENT_ID");
  const clientSecret = read("AUTH0_CLIENT_SECRET");
  const secret = read("AUTH0_SECRET");
  const appBaseUrl = read("APP_BASE_URL");
  return {
    ...(domain ? { domain: () => domain } : {}),
    ...(clientId ? { clientId } : {}),
    ...(clientSecret ? { clientSecret } : {}),
    ...(secret ? { secret } : {}),
    ...(appBaseUrl ? { appBaseUrl } : {}),
  };
}
