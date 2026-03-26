import { useState, useCallback, useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TestimonialCards from "@/components/TestimonialCards";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import PhotoCarousel from "@/components/PhotoCarousel";
import Contact from "@/components/Contact";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [loading]);

  // Expose lenis globally for navbar scroll-to
  useEffect(() => {
    (window as any).__lenis = lenisRef.current;
  });

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
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
