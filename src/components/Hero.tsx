import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StarDoodle, ArrowDoodle, FlowerDoodle, HeartDoodle } from "./Doodles";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-headline", { y: 60, opacity: 0, filter: "blur(4px)" }, { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 })
        .fromTo(".hero-sub", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
        .fromTo(".hero-btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.5 }, "-=0.3")
        .fromTo(".hero-card", { scale: 0.85, opacity: 0, rotate: -5 }, { scale: 1, opacity: 1, rotate: 0, duration: 0.7, ease: "back.out(1.4)" }, "-=0.5")
        .fromTo(".hero-doodle", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.08, duration: 0.4, ease: "back.out(3)" }, "-=0.3");

      // Parallax on hero doodles during scroll
      gsap.to(".hero-doodle", {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Smooth scroll handler for hero CTAs
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.4 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center pt-24 pb-16 px-6 relative overflow-hidden will-change-transform">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Left */}
        <div className="relative z-10">
          <h1 className="hero-headline font-display font-bold text-foreground leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl" style={{ textWrap: "balance" }}>
            Hey, I'm Joyal — I build and design things people actually enjoy.
          </h1>
          <p className="hero-sub mt-6 text-muted-foreground text-lg max-w-lg" style={{ textWrap: "pretty" }}>
            A creative developer who turns wild ideas into polished digital experiences with clean code and smooth motion.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              onClick={(e) => scrollTo(e, "#projects")}
              className="hero-btn font-display font-bold text-sm px-7 py-3.5 bg-primary text-primary-foreground rounded-lg brutalist-border brutalist-shadow hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all duration-200 active:scale-[0.97] inline-block"
            >
              View my work
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="hero-btn font-display font-bold text-sm px-7 py-3.5 bg-background text-foreground rounded-lg brutalist-border hover:bg-muted transition-colors duration-200 active:scale-[0.97] inline-block"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* Right — profile card */}
        <div className="relative flex justify-center md:justify-end">
          <div className="hero-card relative w-72 h-80 sm:w-80 sm:h-96 bg-primary rounded-2xl brutalist-border brutalist-shadow flex items-center justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-secondary brutalist-border flex items-center justify-center">
              <span className="font-display font-bold text-5xl sm:text-6xl text-foreground">J</span>
            </div>
            {/* Sticker badge */}
            <div className="absolute -top-4 -right-4 bg-secondary brutalist-border rounded-full px-4 py-2 rotate-12 brutalist-shadow-sm">
              <span className="font-display font-bold text-xs text-foreground">Open to work ✦</span>
            </div>
          </div>

          {/* Doodles */}
          <StarDoodle className="hero-doodle absolute -top-4 left-4 text-secondary animate-float will-change-transform" size={36} />
          <FlowerDoodle className="hero-doodle absolute bottom-8 -left-4 text-accent animate-wiggle will-change-transform" size={40} />
          <HeartDoodle className="hero-doodle absolute top-12 -right-6 text-accent animate-float-reverse will-change-transform" size={30} />
          <ArrowDoodle className="hero-doodle absolute -bottom-2 right-8 text-foreground rotate-[20deg] will-change-transform" size={90} />
          <StarDoodle className="hero-doodle absolute bottom-0 left-16 text-foreground animate-spin-slow will-change-transform" size={16} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
