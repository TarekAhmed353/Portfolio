import ThemeToggle from "@/components/ThemeToggle";

// Temporary page to check the fonts, colours and theme toggle.
// The real sections replace it from step 3 onwards.
const swatches = [
  { name: "Primary", className: "bg-primary" },
  { name: "Secondary", className: "bg-secondary" },
  { name: "Surface", className: "bg-surface" },
  { name: "Surface muted", className: "bg-surface-muted" },
  { name: "Muted text", className: "bg-muted" },
  { name: "Border", className: "bg-border" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-10 px-4 py-16 sm:px-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm text-muted">step 1 · setup</span>
        <ThemeToggle />
      </div>

      <div className="space-y-4">
        <p className="font-mono text-sm text-secondary">Hi, I&apos;m</p>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          <span className="text-gradient">Tarek Ahmed</span>
        </h1>
        <p className="text-xl font-semibold sm:text-2xl">
          Aspiring Full-Stack Developer
        </p>
        <p className="max-w-xl text-muted">
          CSE Student · AI/ML Enthusiast. This page is a temporary preview of
          the colour palette and the light/dark toggle.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <button className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover">
            Primary button
          </button>
          <button className="rounded-full border border-border bg-surface px-6 py-3 font-semibold transition-colors hover:border-secondary hover:text-secondary">
            Secondary button
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {swatches.map((swatch) => (
          <div
            key={swatch.name}
            className="overflow-hidden rounded-xl border border-border bg-surface"
          >
            <div className={`h-14 ${swatch.className}`} />
            <p className="px-3 py-2 text-sm text-muted">{swatch.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
