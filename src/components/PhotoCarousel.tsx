import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SquiggleDoodle, StarDoodle } from "./Doodles";

gsap.registerPlugin(ScrollTrigger);

const photos = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    caption: "Late-night coding sessions ☕",
    color: "bg-primary",
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    caption: "Building cool things, one commit at a time",
    color: "bg-secondary",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    caption: "Team hackathon vibes 🚀",
    color: "bg-accent",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
    caption: "Whiteboard brainstorming sessions",
    color: "bg-green",
  },
  {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
    caption: "Speaking at local meetups",
    color: "bg-secondary",
  },
];

const PhotoCarousel = () => {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".carousel-heading",
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
        ".carousel-wrapper",
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".carousel-wrapper", start: "top 85%", once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === current) return;
      setIsAnimating(true);

      const track = trackRef.current;
      if (!track) return;

      gsap.to(track, {
        x: `-${index * 100}%`,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrent(index);
          setIsAnimating(false);
        },
      });
    },
    [current, isAnimating]
  );

  const prev = useCallback(() => {
    goTo(current <= 0 ? photos.length - 1 : current - 1);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo(current >= photos.length - 1 ? 0 : current + 1);
  }, [current, goTo]);

  return (
    <section ref={ref} className="px-6 py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto relative">
        <StarDoodle className="absolute -top-6 -right-4 text-secondary animate-float" size={26} />
        <SquiggleDoodle className="absolute -bottom-4 left-8 text-accent animate-wiggle" size={70} />

        <h2
          className="carousel-heading font-display font-bold text-4xl md:text-5xl text-foreground mb-12 tracking-tight"
          style={{ lineHeight: "1.1" }}
        >
          Moments & memories
        </h2>

        <div className="carousel-wrapper relative">
          {/* Main carousel frame */}
          <div className="brutalist-border brutalist-shadow rounded-2xl overflow-hidden bg-card relative">
            <div className="overflow-hidden">
              <div
                ref={trackRef}
                className="flex"
                style={{ width: `${photos.length * 100}%` }}
              >
                {photos.map((photo, i) => (
                  <div
                    key={i}
                    className="relative"
                    style={{ width: `${100 / photos.length}%` }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full aspect-[3/2] object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Caption bar */}
            <div className="px-5 py-4 bg-card border-t-4 border-foreground flex items-center justify-between">
              <p className="font-display font-bold text-foreground text-sm md:text-base">
                {photos[current].caption}
              </p>
              <span className="font-display text-sm text-muted-foreground">
                {current + 1}/{photos.length}
              </span>
            </div>
          </div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-background brutalist-border brutalist-shadow-sm rounded-full p-2.5 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200 active:scale-95 z-10"
            aria-label="Previous photo"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 bg-background brutalist-border brutalist-shadow-sm rounded-full p-2.5 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200 active:scale-95 z-10"
            aria-label="Next photo"
          >
            <ChevronRight size={20} className="text-foreground" />
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {photos.map((p, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3.5 h-3.5 rounded-full brutalist-border transition-all duration-200 ${
                  i === current
                    ? `${p.color} scale-110`
                    : "bg-muted hover:scale-110"
                }`}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
