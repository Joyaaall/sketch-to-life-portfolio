import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const NAVBAR_OFFSET = 80;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const triggers = sectionIds.map((id) => {
      return ScrollTrigger.create({
        trigger: `#${id}`,
        start: `top ${NAVBAR_OFFSET + 40}px`,
        end: "bottom 40%",
        onEnter: () => setActive(`#${id}`),
        onEnterBack: () => setActive(`#${id}`),
      });
    });
    return () => triggers.forEach((t) => t.kill());
  }, []);

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);

    if (href === "#") {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;

    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -NAVBAR_OFFSET, duration: 1.4 });
    } else {
      // Fallback GSAP scroll
      const y = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
      gsap.to(window, { scrollTo: { y, autoKill: false }, duration: 1.2, ease: "power2.inOut" });
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={(e) => scrollTo(e, "#")}
          className="font-display font-bold text-2xl tracking-tight text-foreground"
        >
          Joyal<span className="text-accent">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                className={`font-display font-medium text-sm px-4 py-2 rounded-lg transition-colors duration-200 active:scale-[0.97] ${
                  active === l.href
                    ? "bg-secondary text-foreground"
                    : "text-foreground hover:bg-secondary/60"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="ml-2 font-display font-bold text-sm px-5 py-2.5 bg-foreground text-background rounded-lg brutalist-border brutalist-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200 active:scale-[0.97] inline-block"
            >
              Let's talk
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors active:scale-95"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background brutalist-border border-t-0 border-x-0 px-6 pb-6 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              className={`block font-display font-medium text-lg py-3 ${
                active === l.href ? "text-accent" : "text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
