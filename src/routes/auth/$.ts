import { auth0Handlers, auth0Server } from "@auth0/auth0-tanstack-start-react/server";
import { createFileRoute } from "@tanstack/react-router";
import { auth0ServerOptions } from "@/lib/auth0-config";

async function handle(request: Request) {
  const handlers = auth0Handlers(auth0Server(auth0ServerOptions()));
  return request.method.toUpperCase() === "POST" ? handlers.POST() : handlers.GET();
}

export const Route = createFileRoute("/auth/$")({
  server: {
    handlers: {
      GET: ({ request }) => handle(request),
      POST: ({ request }) => handle(request),
    },
  },
});
