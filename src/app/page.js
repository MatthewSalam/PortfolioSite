import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="top-glow" />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}