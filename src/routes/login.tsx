import { createFileRoute } from "@tanstack/react-router";
import { AuthButtons } from "@/components/auth-buttons";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-indigo-950 p-6">
      <section className="flex w-full max-w-md flex-col rounded-[28px] bg-paper px-8 py-12">
        <p className="font-display text-sm tracking-wide text-sage">Miami Dade College</p>
        <h1 className="mt-8 font-display text-5xl leading-none font-medium text-ink">Major Spark</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink">
          Sign in to keep this path for you. Everyone else gets their own.
        </p>
        <div className="mt-10">
          <AuthButtons />
        </div>
      </section>
    </main>
  );
}
