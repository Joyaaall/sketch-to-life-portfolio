import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TestimonialCards from "@/components/TestimonialCards";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      <div className={loading ? "opacity-0" : "opacity-100"}>
        <Navbar />
        <Hero />
        <TestimonialCards />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <footer className="text-center py-8 text-sm text-muted-foreground font-display">
          © {new Date().getFullYear()} Joyal. Built with care & too much coffee.
        </footer>
      </div>
    </>
  );
};

export default Index;
