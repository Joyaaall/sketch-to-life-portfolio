import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { label: "React", color: "bg-primary" },
  { label: "TypeScript", color: "bg-secondary" },
  { label: "Node.js", color: "bg-green" },
  { label: "GSAP", color: "bg-accent" },
  { label: "Tailwind CSS", color: "bg-primary" },
  { label: "UI/UX Design", color: "bg-secondary" },
  { label: "Next.js", color: "bg-accent" },
  { label: "Figma", color: "bg-green" },
  { label: "PostgreSQL", color: "bg-secondary" },
  { label: "Docker", color: "bg-primary" },
  { label: "Git & CI/CD", color: "bg-accent" },
  { label: "Self-hosting", color: "bg-green" },
];

const Skills = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-heading",
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 75%", once: true } }
      );
      gsap.fromTo(
        ".skill-pill",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.05, duration: 0.4, ease: "back.out(3)", scrollTrigger: { trigger: ".skill-grid", start: "top 85%", once: true } }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="skills" className="px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="skill-heading font-display font-bold text-4xl md:text-5xl text-foreground mb-12 tracking-tight" style={{ lineHeight: "1.1" }}>
          What I work with
        </h2>
        <div className="skill-grid flex flex-wrap gap-4">
          {skills.map((s, i) => (
            <span
              key={i}
              className={`skill-pill ${s.color} font-display font-bold text-sm md:text-base px-5 py-3 rounded-xl brutalist-border brutalist-shadow-sm text-foreground hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200 cursor-default active:scale-[0.96]`}
            >
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
