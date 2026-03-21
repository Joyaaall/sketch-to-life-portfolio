import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { StarDoodle, HeartDoodle } from "./Doodles";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-card",
        { y: 60, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.4)", scrollTrigger: { trigger: ref.current, start: "top 75%", once: true } }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="contact" className="px-6 py-24 md:py-32">
      <div className="max-w-2xl mx-auto">
        <div className="contact-card bg-secondary rounded-2xl brutalist-border brutalist-shadow p-8 md:p-12 relative overflow-hidden">
          <StarDoodle className="absolute top-4 right-6 text-foreground animate-spin-slow" size={24} />
          <HeartDoodle className="absolute bottom-6 left-6 text-accent animate-float" size={32} />

          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4 tracking-tight" style={{ lineHeight: "1.1" }}>
            Let's talk!
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-md" style={{ textWrap: "pretty" }}>
            Got a cool project, a wild idea, or just want to say hi? I'm always down for a chat.
          </p>

          <a
            href="mailto:hello@joyal.dev"
            className="inline-flex items-center gap-2 font-display font-bold text-base px-7 py-3.5 bg-foreground text-background rounded-lg brutalist-border brutalist-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200 active:scale-[0.97] mb-8"
          >
            <Mail size={18} /> hello@joyal.dev
          </a>

          <div className="flex gap-4 mt-2">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-12 h-12 flex items-center justify-center bg-background rounded-lg brutalist-border brutalist-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200 active:scale-[0.95] text-foreground"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
