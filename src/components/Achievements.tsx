import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, Award, Star, Zap, Target, Flame } from "lucide-react";
import { StarDoodle, FlowerDoodle } from "./Doodles";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "1st place at DevJam 2024 — built a real-time collab tool in 48 hours.",
    color: "bg-secondary",
    rotate: "rotate-1",
  },
  {
    icon: Award,
    title: "Open Source Contributor",
    description: "500+ contributions across popular React & Node.js libraries.",
    color: "bg-primary",
    rotate: "-rotate-1",
  },
  {
    icon: Star,
    title: "5-Star Freelancer",
    description: "Maintained a perfect rating across 30+ client projects.",
    color: "bg-accent",
    rotate: "rotate-2",
  },
  {
    icon: Zap,
    title: "Performance Optimizer",
    description: "Reduced load times by 60% for an e-commerce platform with 1M+ users.",
    color: "bg-green",
    rotate: "-rotate-2",
  },
  {
    icon: Target,
    title: "Product Launch",
    description: "Designed & shipped a SaaS dashboard used by 10K+ daily active users.",
    color: "bg-secondary",
    rotate: "rotate-1",
  },
  {
    icon: Flame,
    title: "Community Speaker",
    description: "Spoke at 5+ local meetups on animation, design systems & DX.",
    color: "bg-primary",
    rotate: "-rotate-1",
  },
];

const Achievements = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ach-heading",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        }
      );
      gsap.fromTo(
        ".ach-card",
        { y: 50, opacity: 0, scale: 0.92 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          duration: 0.55,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: ".ach-grid", start: "top 85%", once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="achievements" className="px-6 py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto relative">
        <StarDoodle className="absolute -top-6 right-4 text-secondary animate-wiggle" size={24} />
        <FlowerDoodle className="absolute bottom-0 -left-6 text-accent animate-float" size={32} />

        <h2
          className="ach-heading font-display font-bold text-4xl md:text-5xl text-foreground mb-12 tracking-tight"
          style={{ lineHeight: "1.1" }}
        >
          Achievements
        </h2>

        <div className="ach-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className={`ach-card ${a.color} ${a.rotate} brutalist-border brutalist-shadow rounded-xl p-6 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-200 cursor-default group`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-background brutalist-border rounded-lg p-2 group-hover:scale-110 transition-transform duration-200">
                    <Icon size={22} className="text-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground leading-tight">
                    {a.title}
                  </h3>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">{a.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
