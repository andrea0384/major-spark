import { createFileRoute } from "@tanstack/react-router";

const VOICE = "EXAVITQu4vr4xnSDxMaL";

export const Route = createFileRoute("/api/speak")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const key = process.env.ELEVENLABS_API_KEY;
        const body = await request.json().catch(() => null);
        const text = typeof body?.text === "string" ? body.text.replace(/\s+/g, " ").trim().slice(0, 800) : "";
        if (!text) return Response.json({ error: "empty" }, { status: 400 });
        const upstream = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE}`, {
          method: "POST",
          headers: {
            "xi-api-key": key ?? "",
            "Content-Type": "application/json",
            Accept: "audio/mpeg",
          },
          body: JSON.stringify({
            text,
            model_id: "eleven_multilingual_v2",
            voice_settings: {
              stability: 0.4,
              similarity_boost: 0.8,
              style: 0,
              use_speaker_boost: true,
              speed: 0.94,
            },
          }),
        });
        if (!upstream.ok || !upstream.body) return Response.json({ error: "upstream" }, { status: 502 });
        return new Response(upstream.body, { headers: { "Content-Type": "audio/mpeg" } });
      },
    },
  },
});
