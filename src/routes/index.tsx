import { useAuth0, useLogin } from "@auth0/auth0-tanstack-start-react/client";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { isSchoolEmail } from "@/lib/school-email";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => ({
    denied: search.denied === "school" ? ("school" as const) : undefined,
  }),
  component: Landing,
});

function Landing() {
  const login = useLogin();
  const navigate = useNavigate();
  const { denied } = Route.useSearch();
  const { isAuthenticated, isLoading, user } = useAuth0();
  const schoolAccount = isAuthenticated && isSchoolEmail(user?.email);

  useEffect(() => {
    if (!isLoading && schoolAccount) {
      void navigate({ to: "/app" });
    }
  }, [isLoading, navigate, schoolAccount]);

  return (
    <main className="relative isolate min-h-dvh">
      <img
        src="/landing-book.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <h1 className="absolute top-[9%] right-0 left-0 z-10 text-center font-display text-5xl font-normal text-white uppercase sm:text-7xl">
        Major Spark
      </h1>

      <div className="absolute right-0 bottom-[8%] left-0 z-10 flex flex-col items-center gap-3 px-6">
        {denied ? (
          <p className="max-w-sm text-center font-sans text-sm text-white">Use an @mymdc.net email to enter.</p>
        ) : null}
        <button
          type="button"
          onClick={() => {
            if (typeof window === "undefined") return;
            login("/app", denied ? { authorizationParams: { prompt: "login" } } : undefined);
          }}
          className="bg-transparent pl-[0.55em] font-sans text-2xl font-medium tracking-[0.55em] text-white uppercase"
          style={{
            textShadow: "0 0 6px #67e8f9, 0 0 14px #38bdf8, 0 0 28px #2563eb",
          }}
        >
          Enter
        </button>
      </div>
    </main>
  );
}

// Cache Busting Deploy Flag V2
// CACHE_FORCE_CLEAR_HASH_999

