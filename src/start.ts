import { auth0Middleware } from "@auth0/auth0-tanstack-start-react/server/middleware";
import { createStart } from "@tanstack/react-start";
import { auth0ServerOptions } from "@/lib/auth0-config";

const auth0Options = auth0ServerOptions();

export const startInstance = createStart(() => ({
  requestMiddleware: auth0Options ? [auth0Middleware(auth0Options)] : [],
}));
