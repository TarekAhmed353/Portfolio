import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import { navLinks } from "@/data/site";

// Placeholder sections so the navbar links can be tested. Each one is
// replaced by the real section in steps 7–9.
const placeholders = navLinks.slice(3).map((link) => ({
  id: link.href.split("#")[1],
  title: link.label,
}));

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Skills />

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
