import { motion } from "framer-motion";
import { useRef } from "react";
import { CANDIDATE, PILARES, TRAJETORIA } from "@/lib/content";
import aboutBg from "@/assets/about-bg.jpg";

export default function About() {
  return (
    <>
      {/* ── SOBRE ── */}
      <section
        id="sobre"
        className="relative text-[var(--white)] overflow-hidden flex items-center py-20 lg:py-0"
        style={{ minHeight: "100vh" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBg})`, filter: "brightness(0.25)" }}
        />

        {/* Inner shadow vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 120px 60px rgba(0,0,0,0.9)",
          }}
        />

        {/* Extra edge blur — radial gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 100%)",
          }}
        />

        {/* Yellow accent line */}
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[var(--yellow)] to-transparent z-10" />

        <div className="relative z-10 max-w-[1300px] mx-auto w-full px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <Reveal from="left">
            <div className="section-tag mb-3" style={{ color: "var(--yellow)" }}>// 01 Sobre</div>
            <h2
              className="font-display font-black uppercase leading-[0.93] mb-5"
              style={{ fontSize: "clamp(40px,4.5vw,72px)", color: "var(--white)" }}
            >
              Do <span style={{ color: "var(--yellow)" }}>quartel</span>
              <br />
              para <span style={{ color: "var(--yellow)" }}>Brasília</span>.
            </h2>

            <p className="text-sm font-light leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.75)" }}>
              <strong className="font-semibold" style={{ color: "var(--white)" }}>{CANDIDATE.fullName}</strong>, o{" "}
              {CANDIDATE.nickname}, nasceu em {CANDIDATE.birth} em Vitória-ES. Aos {CANDIDATE.age}{" "}
              anos, carrega quase duas décadas no {CANDIDATE.corp}.
            </p>
            <p className="text-sm font-light leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.75)" }}>
              Filho de pai capixaba e mãe baiana, casado com Márcia Pereira, residente na Serra.
              Bacharel e pós-graduado em Direito.
            </p>

            <blockquote className="border-l-[3px] border-[var(--yellow)] pl-5 py-3" style={{ background: "rgba(232,200,64,0.08)" }}>
              <p className="font-display text-base font-semibold italic leading-snug" style={{ color: "var(--white)" }}>
                "Eu não falo de segurança de gabinete. Eu vivo a segurança na linha de frente."
              </p>
            </blockquote>
          </Reveal>

          {/* Right — pillars grid */}
          <Reveal from="right">
            <div className="grid grid-cols-2 gap-3">
              {PILARES.map((p, i) => (
                <motion.div
                  key={p.titulo}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="hover-bar border p-5 hover:border-[var(--yellow)] transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(0,0,0,0.92)" }}
                  data-cursor-expand
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--yellow)] mb-2">
                    // {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-display font-bold text-lg uppercase mb-1" style={{ color: "var(--white)" }}>
                    {p.titulo}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{p.desc}</div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TRAJETÓRIA HORIZONTAL (WHITE) ── */}
      <section
        id="trajetoria"
        className="bg-[var(--white)] overflow-hidden flex flex-col"
        style={{ height: "100vh" }}
      >
        {/* Header */}
        <div className="max-w-[1300px] mx-auto w-full px-6 md:px-10 pt-16 pb-6 flex items-end justify-between flex-wrap gap-3 flex-shrink-0">
          <div>
            <div className="section-tag mb-3" style={{ color: "var(--yellow)" }}>
              // 01.1 Trajetória
            </div>
            <h3
              className="font-display font-black uppercase text-black"
              style={{ fontSize: "clamp(32px,3.5vw,52px)" }}
            >
              Uma vida de <span style={{ color: "var(--yellow)" }}>missão</span>.
            </h3>
          </div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35 flex items-center gap-2">
            Arraste para o lado →
          </div>
        </div>

        {/* Track — fills remaining height */}
        <div className="flex-1 min-h-0 flex flex-col justify-center">
          <HorizontalTrack />
        </div>
      </section>
    </>
  );
}

function HorizontalTrack() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef  = useRef<HTMLDivElement>(null);
  const scrollXRef   = useRef(0);
  const isDragging   = useRef(false);
  const pointerStart = useRef(0);
  const scrollStart  = useRef(0);

  const getMax = () => {
    const track = trackRef.current;
    const outer = outerRef.current;
    if (!track || !outer) return 0;
    return Math.max(0, track.scrollWidth - outer.offsetWidth);
  };

  const setScroll = (val: number) => {
    const max = getMax();
    scrollXRef.current = Math.max(0, Math.min(max, val));
    if (trackRef.current)
      trackRef.current.style.transform = `translateX(-${scrollXRef.current}px)`;
    if (fillRef.current)
      fillRef.current.style.width = max > 0 ? `${(scrollXRef.current / max) * 100}%` : "0%";
  };

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current  = true;
    pointerStart.current = e.clientX;
    scrollStart.current  = scrollXRef.current;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    setScroll(scrollStart.current + (pointerStart.current - e.clientX));
  };
  const onPointerUp = () => { isDragging.current = false; };

  const onWheel = (e: React.WheelEvent) => {
    const cur = scrollXRef.current;
    const max = getMax();
    if ((e.deltaY > 0 && cur < max) || (e.deltaY < 0 && cur > 0)) {
      e.preventDefault();
      setScroll(cur + e.deltaY * 1.5);
    }
  };

  // Card dimensions — taller and wider for better readability
  const CARD_W = 340;
  const CARD_H = 300;

  return (
    <div onWheel={onWheel}>
      {/* Overflow mask */}
      <div ref={outerRef} className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-4 px-10 will-change-transform"
          style={{ transform: "translateX(0)" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {TRAJETORIA.map((t, i) => (
            <div
              key={t.title}
              className="hover-bar shrink-0 border border-black/12 hover:border-[var(--yellow)] transition-colors bg-[var(--white)] flex flex-col relative overflow-hidden"
              style={{ width: `${CARD_W}px`, height: `${CARD_H}px` }}
              data-cursor-expand
            >
              {/* Tag — flush to top inside the card */}
              <div className="bg-[var(--yellow)] text-black font-display text-[14px] uppercase tracking-[0.18em] px-3 py-2 w-full flex-shrink-0">
                {String(i + 1).padStart(2, "0")} · {t.year}
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 px-5 pt-4 pb-3 overflow-hidden">
                <h4
                  className="font-display font-bold uppercase leading-tight mb-2 flex-shrink-0"
                  style={{ fontSize: "16px", color: "var(--yellow)" }}
                >
                  {t.title}
                </h4>
                <p className="text-xs text-black/90 leading-relaxed">{t.text}</p>
              </div>

              {/* Ghost number */}
              <div
                className="absolute bottom-1 right-2 font-display font-black leading-none select-none pointer-events-none"
                style={{ fontSize: "52px", color: "rgba(10,10,10,0.045)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mx-10 mt-5 h-px bg-black/10 relative overflow-hidden">
        <div ref={fillRef} className="absolute inset-y-0 left-0 bg-[var(--yellow)] w-0 transition-none" />
      </div>
    </div>
  );
}

function Reveal({ children, from = "bottom" }: { children: React.ReactNode; from?: "left" | "right" | "bottom" }) {
  const initial =
    from === "left"  ? { opacity: 0, x: -30 } :
    from === "right" ? { opacity: 0, x:  30 } :
                       { opacity: 0, y:  30 };
  const animate = from === "bottom" ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 };
  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
