import { useLogin, useLogout, useAuth0 } from "@auth0/auth0-tanstack-start-react/client";

export function AuthButtons({ ready }: { ready: boolean }) {
  const login = useLogin();
  const logout = useLogout();
  const { isAuthenticated, user } = useAuth0();

  if (!ready) {
    return (
      <p className="text-sm leading-relaxed text-muted">
        Sign-in is not turned on yet. Add VITE_AUTH0_DOMAIN and VITE_AUTH0_CLIENT_ID, plus the server-only AUTH0_CLIENT_SECRET and AUTH0_SECRET.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {isAuthenticated ? (
        <>
          {user?.email ? <p className="text-sm text-ink">{user.email}</p> : null}
          <button
            type="button"
            onClick={() => logout()}
            className="h-12 w-full rounded-full border border-neon text-base font-semibold text-sage"
          >
            Log out
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={() => login("/")}
          className="h-12 w-full rounded-full bg-neon text-base font-semibold text-paper shadow-neon"
        >
          Log in
        </button>
      )}
    </div>
  );
}
