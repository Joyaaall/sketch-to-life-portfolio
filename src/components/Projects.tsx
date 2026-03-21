import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Riff — Music Discovery",
    desc: "A playful app for discovering underground tracks with AI-powered recommendations and community playlists.",
    tech: ["React", "Node.js", "Spotify API"],
    color: "bg-primary",
    tag: "featured",
  },
  {
    title: "Pixelfolio",
    desc: "Drag-and-drop portfolio builder for designers. Real-time collaboration with export to PDF.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    color: "bg-secondary",
    tag: "new",
  },
  {
    title: "HomeBase",
    desc: "Self-hosted dashboard for managing personal servers, containers, and automation tasks.",
    tech: ["React", "Docker", "Go"],
    color: "bg-accent",
    tag: null,
  },
  {
    title: "MotionKit",
    desc: "Open-source animation utility library for React. Declarative API with zero-dependency footprint.",
    tech: ["TypeScript", "GSAP", "Vite"],
    color: "bg-green",
    tag: null,
  },
];

const Projects = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".proj-heading",
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 75%", once: true } }
      );
      gsap.fromTo(
        ".proj-card",
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.6, ease: "back.out(1.4)", scrollTrigger: { trigger: ".proj-grid", start: "top 80%", once: true } }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="projects" className="px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="proj-heading font-display font-bold text-4xl md:text-5xl text-foreground mb-12 tracking-tight" style={{ lineHeight: "1.1" }}>
          Projects
        </h2>

        <div className="proj-grid grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`proj-card group ${p.color} rounded-2xl brutalist-border brutalist-shadow p-6 relative transition-all duration-200 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none active:scale-[0.98]`}
            >
              {p.tag && (
                <span className="absolute -top-3 -right-3 bg-foreground text-background font-display font-bold text-[11px] uppercase px-3 py-1 rounded-full brutalist-border border-foreground">
                  {p.tag}
                </span>
              )}

              {/* Thumbnail placeholder */}
              <div className="w-full h-36 rounded-lg bg-background/50 brutalist-border mb-4 flex items-center justify-center">
                <span className="font-display text-muted-foreground text-sm">Preview</span>
              </div>

              <h3 className="font-display font-bold text-xl text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-foreground/70 mb-4 leading-relaxed">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="bg-background/60 brutalist-border border-2 rounded-full px-3 py-0.5 text-xs font-display font-semibold text-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a href="#" className="flex items-center gap-1.5 font-display font-bold text-sm text-foreground hover:underline underline-offset-4">
                  <ExternalLink size={14} /> View project
                </a>
                <a href="#" className="flex items-center gap-1.5 font-display font-bold text-sm text-foreground hover:underline underline-offset-4">
                  <Github size={14} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
