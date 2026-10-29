import About from "@/components/sections/About";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
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
      <Certificates />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
