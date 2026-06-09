import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      raf = requestAnimationFrame(animate);
    };

    const expand = () => {
      dotRef.current?.classList.add("expanded");
      ringRef.current?.classList.add("expanded");
    };
    const shrink = () => {
      dotRef.current?.classList.remove("expanded");
      ringRef.current?.classList.remove("expanded");
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [data-cursor-expand]").forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", shrink);
    });

    raf = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference
          w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2
          transition-[width,height] duration-150
          [&.expanded]:w-5 [&.expanded]:h-5"
        style={{ top: 0, left: 0 }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998]
          w-9 h-9 border border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2
          transition-[width,height,border-color] duration-200
          [&.expanded]:w-16 [&.expanded]:h-16 [&.expanded]:border-[var(--yellow)]"
        style={{ top: 0, left: 0 }}
      />
    </>
  );
}
