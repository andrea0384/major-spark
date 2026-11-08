import { createFileRoute } from "@tanstack/react-router";

export function authFallback() {
  return { safeBuild: true, user: null };
}

export const Route = createFileRoute("/api/auth")({
  loader: async () => authFallback(),
  server: {
    handlers: {
      GET: async () => Response.json(authFallback()),
      POST: async () => Response.json(authFallback()),
    },
  },
});
