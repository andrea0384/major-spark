import { useAuth0, useLogin, useLogout } from "@auth0/auth0-tanstack-start-react/client";

export function AuthButtons({ bar = false }: { bar?: boolean }) {
  const login = useLogin();
  const logout = useLogout();
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated) {
    return bar ? (
      <button
        type="button"
        onClick={() => logout()}
        className="h-10 rounded-full border border-rule bg-paper px-4 text-sm font-semibold text-sage"
      >
        Log out
      </button>
    ) : (
      <div className="flex flex-col gap-3">
        {user?.email ? <p className="text-sm text-ink">{user.email}</p> : null}
        <button
          type="button"
          onClick={() => logout()}
          className="h-12 w-full rounded-full border border-neon text-base font-semibold text-sage"
        >
          Log out
        </button>
      </div>
    );
  }

  const loginButton = (
    <button
      type="button"
      onClick={() => login("/")}
      className={
        bar
          ? "h-10 rounded-full bg-neon px-4 text-sm font-semibold text-paper shadow-neon"
          : "h-12 w-full rounded-full bg-neon text-base font-semibold text-paper shadow-neon"
      }
    >
      Log in
    </button>
  );
  const signUpButton = (
    <button
      type="button"
      onClick={() => login("/", { authorizationParams: { screen_hint: "signup" } })}
      className={
        bar
          ? "h-10 rounded-full border border-neon bg-paper px-4 text-sm font-semibold text-sage"
          : "h-12 w-full rounded-full border border-neon text-base font-semibold text-sage"
      }
    >
      Sign up
    </button>
  );

  if (bar) {
    return (
      <div className="flex gap-2">
        {loginButton}
        {signUpButton}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {loginButton}
      {signUpButton}
    </div>
  );
}
