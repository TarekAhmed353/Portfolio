import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />

      {/* Placeholder until step 9 */}
      <section
        id="contact"
        className="flex min-h-[70vh] items-center bg-surface-muted/50 px-4 sm:px-6"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-2 text-muted">Placeholder section.</p>
        </div>
      </section>
    </main>
  );
}
