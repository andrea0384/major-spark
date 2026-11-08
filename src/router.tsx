import { auth0RouterContext } from "@auth0/auth0-tanstack-start-react/client";
import type { Auth0RouterContext } from "@auth0/auth0-tanstack-start-react/types";
import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { previewPathRewrite } from "@/lib/preview-path-prefix";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return createRouter({
    routeTree,
    rewrite: previewPathRewrite(),
    defaultErrorComponent: AppErrorComponent,
    context: { auth0: auth0RouterContext } as { auth0: Auth0RouterContext },
  });
}
