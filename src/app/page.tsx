import Navbar from "@/components/navbar";
import About from "@/components/about";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
export default function Home() {
  return (
    <div>
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
    </div>
  );
}
