import { auth0Handlers, auth0Server } from "@auth0/auth0-tanstack-start-react/server";
import { createFileRoute } from "@tanstack/react-router";
import { auth0ServerOptions } from "@/lib/auth0-config";

async function handle(request: Request) {
  const options = auth0ServerOptions();
  if (!options) {
    return new Response("Sign-in is not configured yet.", {
      status: 503,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }
  const handlers = auth0Handlers(auth0Server(options));
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
