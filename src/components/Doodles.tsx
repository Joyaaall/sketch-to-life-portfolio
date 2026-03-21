export const StarDoodle = ({ className = "", size = 32 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M16 2L19.5 12.5L30 16L19.5 19.5L16 30L12.5 19.5L2 16L12.5 12.5L16 2Z" 
      stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
  </svg>
);

export const FlowerDoodle = ({ className = "", size = 36 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" className={className}>
    <circle cx="18" cy="10" r="5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="25" cy="16" r="5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="22" cy="25" r="5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="14" cy="25" r="5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="11" cy="16" r="5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="18" cy="18" r="3" fill="currentColor"/>
  </svg>
);

export const ArrowDoodle = ({ className = "", size = 80 }: { className?: string; size?: number }) => (
  <svg width={size} height={size * 0.5} viewBox="0 0 80 40" fill="none" className={className}>
    <path d="M5 35C15 35 25 20 40 15C55 10 65 20 75 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M65 5L76 10L68 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export const SquiggleDoodle = ({ className = "", size = 100 }: { className?: string; size?: number }) => (
  <svg width={size} height={size * 0.2} viewBox="0 0 100 20" fill="none" className={className}>
    <path d="M2 10C12 2 22 18 32 10C42 2 52 18 62 10C72 2 82 18 92 10" 
      stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
  </svg>
);

export const CircleDoodle = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="currentColor" opacity="0.3"/>
  </svg>
);

export const CrossDoodle = ({ className = "", size = 20 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const HeartDoodle = ({ className = "", size = 28 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
    <path d="M14 24C14 24 3 17 3 9.5C3 5 6.5 2 10 2C12 2 13.5 3 14 4.5C14.5 3 16 2 18 2C21.5 2 25 5 25 9.5C25 17 14 24 14 24Z" 
      stroke="currentColor" strokeWidth="2.5" fill="currentColor" opacity="0.8"/>
  </svg>
);
