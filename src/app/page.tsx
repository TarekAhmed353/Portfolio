import BackgroundGlow from "@/components/BackgroundGlow";
import { navLinks, site } from "@/data/site";

// Placeholder sections so the navbar links and active highlighting can be
// tested. Each one is replaced by the real section in steps 4–9.
const placeholders = navLinks.slice(1).map((link) => ({
  id: link.href.split("#")[1],
  title: link.label,
}));

export default function Home() {
  return (
    <main className="flex-1">
      <section
        id="home"
        className="relative isolate flex min-h-screen items-center px-4 pt-16 sm:px-6"
      >
        <BackgroundGlow />
        <div className="mx-auto w-full max-w-6xl space-y-4">
          <p className="font-mono text-sm text-secondary">Hi, I&apos;m</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            <span className="text-gradient">{site.name}</span>
          </h1>
          <p className="text-xl font-semibold sm:text-2xl">{site.designation}</p>
          <p className="max-w-xl text-muted">
            Hero section coming in step 4. Scroll down or use the navbar to
            test the links.
          </p>
        </div>
      </section>

      {placeholders.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`flex min-h-[70vh] items-center px-4 sm:px-6 ${
            i % 2 === 0 ? "bg-surface-muted/50" : ""
          }`}
        >
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="text-3xl font-bold">{section.title}</h2>
            <p className="mt-2 text-muted">Placeholder section.</p>
          </div>
        </section>
      ))}
    </main>
  );
}
