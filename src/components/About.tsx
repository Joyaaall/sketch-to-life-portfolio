import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StarDoodle, SquiggleDoodle } from "./Doodles";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content",
        { y: 40, opacity: 0, filter: "blur(4px)" },
        {
          y: 0, opacity: 1, filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="about" className="px-6 py-24 md:py-32 relative">
      <div className="max-w-3xl mx-auto relative">
        <StarDoodle className="absolute -top-8 -left-8 text-secondary animate-wiggle" size={28} />
        <SquiggleDoodle className="absolute -bottom-6 -right-6 text-accent" size={80} />

        <div className="about-content">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-8 tracking-tight" style={{ lineHeight: "1.1" }}>
            About me
          </h2>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-prose" style={{ textWrap: "pretty" }}>
            <p>
              I'm a developer and designer who cares deeply about how things <span className="font-semibold text-foreground">feel</span>, not just how they work. I believe the best digital products come from obsessing over the small details — the hover state, the loading transition, the way a page breathes.
            </p>
            <p>
              When I'm not writing code, I'm probably sketching interfaces, experimenting with animation libraries, or figuring out how to make something 5% more delightful. I love the space where <span className="font-semibold text-foreground">engineering meets creativity</span>.
            </p>
            <p>
              I'm always looking for interesting problems to solve and cool people to collaborate with. If you have a wild idea — let's bring it to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
