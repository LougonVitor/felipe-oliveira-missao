import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import candidate from "@/assets/candidate.jpg";
import { CANDIDATE } from "@/lib/content";

const TICKER_ITEMS = [
  "MISSÃO", "SEGURANÇA", "SOBERANIA", "FAMÍLIA",
  "TRABALHO", "BRASIL", "ESPÍRITO SANTO", "HONRA",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="flex flex-col" style={{ height: "100vh" }}>
      <section
        id="inicio"
        ref={ref}
        className="relative bg-[var(--black)] text-[var(--white)] overflow-hidden flex items-center"
        style={{ flex: "1 1 0", minHeight: 0 }}
      >
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--yellow)]/[0.06] blur-[100px] pointer-events-none" />

        <motion.div
          style={{ opacity }}
          className="relative w-full max-w-[1300px] mx-auto px-6 md:px-10 h-full flex flex-col lg:grid lg:grid-cols-[1fr_380px] lg:items-center gap-4 lg:gap-10 overflow-y-auto lg:overflow-visible pt-20 pb-6 lg:py-0"
        >
          {/* IMAGE — mobile: compact top banner */}
          <div className="lg:hidden w-full flex-shrink-0" style={{ height: "220px" }}>
            <div className="relative h-full">
              <div className="absolute -inset-1 border border-[var(--yellow)]/20 pointer-events-none z-10" />
              <img
                src={candidate}
                alt={CANDIDATE.fullName}
                className="w-full h-full object-cover object-top grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 bg-[var(--yellow)] text-[var(--black)] font-display font-black text-[9px] uppercase tracking-[0.18em] px-2 py-1 z-20">
                #BombeiroOliveira · {CANDIDATE.party}
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="flex flex-col gap-3 lg:gap-4 flex-shrink-0">
            {/* Badge */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 border border-[var(--yellow)]/40 px-3 py-1 self-start"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--yellow)] animate-pulse-dot flex-shrink-0" />
              <span className="text-[var(--yellow)] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em] leading-none">
                {CANDIDATE.role} · {CANDIDATE.state}
              </span>
            </motion.div>

            {/* Headline */}
            <h1
              className="font-display font-black uppercase leading-[0.9]"
              style={{ fontSize: "clamp(38px, 6.5vw, 96px)" }}
            >
              {[
                { text: "QUEM PROTEGE", accent: "PROTEGE" },
                { text: "VIDAS,", accent: null },
                { text: "DEFENDE O BRASIL.", accent: "BRASIL." },
              ].map(({ text, accent }, i) => (
                <div key={text} className="overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.85, delay: 0.3 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {accent
                      ? text.split(accent).map((part, j, arr) => (
                          <span key={j}>
                            {part}
                            {j < arr.length - 1 && (
                              <span style={{ color: "var(--yellow)" }}>{accent}</span>
                            )}
                          </span>
                        ))
                      : text}
                  </motion.span>
                </div>
              ))}
            </h1>

            {/* Sub */}
            <motion.p
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="text-sm text-white/60 leading-relaxed font-light max-w-[480px]"
            >
              {CANDIDATE.intro}
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo("propostas")}
                className="font-display font-bold text-[11px] uppercase tracking-[0.2em] bg-[var(--yellow)] text-[var(--black)] px-6 py-3 hover:bg-white transition-colors clip-corner"
              >
                Ver Propostas →
              </button>
              <button
                onClick={() => scrollTo("missao")}
                className="font-display font-bold text-[11px] uppercase tracking-[0.2em] border border-white/25 text-white px-6 py-3 hover:border-[var(--yellow)] hover:text-[var(--yellow)] transition-colors"
              >
                Conheça a Missão
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-3 gap-3 pt-3 border-t border-white/[0.08] max-w-xs"
            >
              <Stat value="20+" label="anos no CBMES" accent />
              <Stat value="2º" label="Sargento BM" />
              <Stat value="ES" label="Serra · ES" />
            </motion.div>
          </div>

          {/* IMAGE — desktop right column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block h-full py-16"
          >
            <div className="relative h-full">
              <div className="absolute -inset-3 border border-[var(--yellow)]/20 pointer-events-none z-10" />
              <img
                src={candidate}
                alt={CANDIDATE.fullName}
                className="w-full h-full object-cover object-top grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 bg-[var(--yellow)] text-[var(--black)] font-display font-black text-[10px] uppercase tracking-[0.2em] px-3 py-2 z-20">
                #BombeiroOliveira · {CANDIDATE.party}
              </div>
              <div className="absolute top-4 right-[-12px] bg-[var(--red)] text-white font-display font-black text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 z-20">
                Pré-candidato a Dep. Federal · ES
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.button
          onClick={() => scrollTo("sobre")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity } }}
          className="hidden lg:flex absolute bottom-5 right-8 z-10 flex-col items-center gap-1 text-white/40 hover:text-[var(--yellow)] transition-colors"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={14} />
        </motion.button>
      </section>

      {/* TICKER */}
      <div className="bg-[var(--yellow)] overflow-hidden flex-shrink-0 border-t-2 border-[var(--black)]" style={{ height: "44px" }}>
        <div className="flex animate-ticker whitespace-nowrap h-full items-center">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="font-display font-black text-[12px] uppercase tracking-[0.3em] px-7 text-[var(--black)] flex items-center gap-5">
              {item}<span className="text-[var(--black)]/30">★</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div>
      <div className="font-display font-black leading-none" style={{ fontSize: "clamp(24px,3.5vw,44px)", color: accent ? "var(--yellow)" : "var(--white)" }}>
        {value}
      </div>
      <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40 mt-1">{label}</div>
    </div>
  );
}
