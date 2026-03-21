import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { text: "Clean code, smooth UI", bg: "bg-primary", rotate: "-rotate-2" },
  { text: "Design that actually feels good", bg: "bg-secondary", rotate: "rotate-3" },
  { text: "Built with real-world thinking", bg: "bg-accent", rotate: "-rotate-1" },
];

const TestimonialCards = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tcard",
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0, opacity: 1, scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="px-6 py-12 max-w-5xl mx-auto">
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`tcard ${t.bg} ${t.rotate} brutalist-border brutalist-shadow rounded-xl px-6 py-5 max-w-xs`}
          >
            <p className="font-display font-bold text-lg text-foreground">"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCards;
