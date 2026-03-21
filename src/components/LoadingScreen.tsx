import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { StarDoodle } from "./Doodles";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete,
        });
      },
    });

    // Animate progress bar
    tl.to({ val: 0 }, {
      val: 100,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: function () {
        const v = Math.round(this.targets()[0].val);
        setProgress(v);
        if (progressRef.current) {
          progressRef.current.style.width = `${v}%`;
        }
      },
    });

    // Animate the text letters
    gsap.fromTo(
      ".loading-letter",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.06, duration: 0.5, ease: "back.out(2)" }
    );

    return () => { tl.kill(); };
  }, [onComplete]);

  const letters = "Joyal".split("");

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary"
    >
      <StarDoodle className="absolute top-12 left-16 text-secondary animate-spin-slow" size={40} />
      <StarDoodle className="absolute bottom-20 right-20 text-accent animate-wiggle" size={28} />
      <StarDoodle className="absolute top-1/4 right-1/4 text-foreground animate-float" size={20} />

      <div className="flex items-baseline gap-1 mb-8">
        {letters.map((l, i) => (
          <span key={i} className="loading-letter font-display text-6xl md:text-8xl font-bold text-foreground">
            {l}
          </span>
        ))}
        <span className="loading-letter font-display text-4xl md:text-6xl font-bold text-foreground ml-4">
          loading...
        </span>
      </div>

      <div className="w-64 md:w-80 h-6 brutalist-border rounded-full overflow-hidden bg-card">
        <div
          ref={progressRef}
          className="h-full bg-secondary rounded-full transition-none"
          style={{ width: "0%" }}
        />
      </div>
      <span className="font-display font-bold text-lg mt-3 text-foreground">{progress}%</span>
    </div>
  );
};

export default LoadingScreen;
