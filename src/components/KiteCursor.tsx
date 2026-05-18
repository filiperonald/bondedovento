import { useEffect, useRef, useState } from "react";

export function KiteCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const tailRef = useRef<SVGPathElement>(null);
  const trail = useRef<{ x: number; y: number }[]>([]);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("kite-cursor");

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      const { x, y } = pos.current;
      trail.current.unshift({ x, y });
      if (trail.current.length > 18) trail.current.pop();
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
      }
      if (tailRef.current && trail.current.length > 1) {
        const d = trail.current
          .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
          .join(" ");
        tailRef.current.setAttribute("d", d);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("kite-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <svg
        className="pointer-events-none fixed inset-0 z-[60] h-full w-full"
        aria-hidden
      >
        <path
          ref={tailRef}
          fill="none"
          stroke="var(--pink-pop)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[61] h-10 w-10 will-change-transform"
        aria-hidden
      >
        <svg viewBox="0 0 40 40" className="h-full w-full drop-shadow-md animate-wiggle">
          <polygon
            points="20,2 38,20 20,38 2,20"
            fill="var(--sun)"
            stroke="var(--graphite)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <line x1="20" y1="2" x2="20" y2="38" stroke="var(--graphite)" strokeWidth="1.4" />
          <line x1="2" y1="20" x2="38" y2="20" stroke="var(--graphite)" strokeWidth="1.4" />
          <circle cx="20" cy="20" r="3" fill="var(--flame)" stroke="var(--graphite)" strokeWidth="1.2" />
        </svg>
      </div>
    </>
  );
}
