import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhakti — Personal Website" },
      { name: "description", content: "Welcome to Bhakti's personal corner of the web." },
      { property: "og:title", content: "Bhakti — Personal Website" },
      { property: "og:description", content: "Welcome to Bhakti's personal corner of the web." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Hello, I'm</p>
      <h1 className="mt-4 font-serif text-7xl md:text-9xl text-primary">Bhakti</h1>
      <p className="mt-6 max-w-md text-lg text-muted-foreground">
        Dreamer, learner and creator. Welcome to my little corner of the internet.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-2xl w-full">
        {[
          ["About", "Curious mind who loves learning new things."],
          ["Passions", "Art, music, books and good conversations."],
          ["Say hi", "Always happy to meet new people."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border bg-card p-6 text-left">
            <h2 className="font-serif text-2xl text-primary">{t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
      <footer className="mt-16 text-xs text-muted-foreground">© 2026 Bhakti</footer>
    </main>
  );
}
