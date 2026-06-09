import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Instagram, Twitter, ExternalLink, Send } from "lucide-react";
import {
  CANDIDATOS_ES,
  LIDERES_NACIONAIS,
  MISSAO_ES_INSTAGRAM,
} from "@/lib/content";

// Social icon map
function SocialIcon({ rede }: { rede: string }) {
  if (rede === "Instagram") return <Instagram size={11} />;
  if (rede === "X")         return <Twitter size={11} />;
  if (rede === "Telegram")  return <Send size={11} />;
  if (rede === "TikTok")    return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
  if (rede === "Facebook") return <ExternalLink size={11} />;
  return <ExternalLink size={11} />;
}

// Initials avatar or photo
function Avatar({
  sigla,
  photo,
  size = 56,
  highlight = false,
}: {
  sigla: string;
  photo?: string;
  size?: number;
  highlight?: boolean;
}) {
  if (photo) {
    return (
      <div
        className="rounded-full flex-shrink-0 overflow-hidden border-2"
        style={{
          width: size,
          height: size,
          borderColor: highlight ? "var(--yellow)" : "rgba(232,200,64,0.35)",
        }}
      >
        <img src={photo} alt={sigla} className="w-full h-full object-cover object-top" />
      </div>
    );
  }
  return (
    <div
      className="rounded-full flex items-center justify-center font-display font-black flex-shrink-0 border-2 transition-all duration-300"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.3,
        background: highlight ? "var(--yellow)" : "rgba(232,200,64,0.1)",
        borderColor: highlight ? "var(--yellow)" : "rgba(232,200,64,0.25)",
        color: highlight ? "var(--black)" : "var(--yellow)",
      }}
    >
      {sigla}
    </div>
  );
}

// Leader card (national — large horizontal)
function LeaderCard({ lider }: { lider: (typeof LIDERES_NACIONAIS)[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      whileHover={{ borderColor: "rgba(232,200,64,0.5)" }}
      className="flex items-center gap-5 border border-white/[0.08] p-5 bg-white/[0.02] transition-colors"
    >
      <Avatar sigla={lider.sigla} photo={lider.photo} size={64} />
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">
          {lider.cargo}
        </div>
        <div className="font-display font-black text-xl uppercase text-white leading-none mb-3">
          {lider.nome}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {lider.socials.map((s) => (
            <a
              key={s.rede}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-white/[0.12] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 hover:border-[var(--yellow)] hover:text-[var(--yellow)] transition-all duration-200"
              data-cursor-expand
            >
              <SocialIcon rede={s.rede} />
              {s.rede}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Candidate card (smaller grid card)
function CandidateCard({
  c,
  i,
}: {
  c: (typeof CANDIDATOS_ES)[0];
  i: number;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.35, delay: i * 0.04 }}
      whileHover={{ borderColor: c.destaque ? "var(--yellow)" : "rgba(255,255,255,0.2)" }}
      className="flex items-start gap-4 p-4 border transition-colors relative overflow-hidden"
      style={{
        borderColor: c.destaque ? "rgba(232,200,64,0.4)" : "rgba(255,255,255,0.07)",
        background: c.destaque ? "rgba(232,200,64,0.04)" : "rgba(255,255,255,0.015)",
      }}
    >
      {/* Highlight accent */}
      {c.destaque && (
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "var(--yellow)" }}
        />
      )}

      <Avatar sigla={c.sigla} photo={c.photo} size={48} highlight={!!c.destaque} />

      <div className="flex-1 min-w-0">
        <div
          className="font-display font-black text-base uppercase leading-tight mb-0.5"
          style={{ color: c.destaque ? "var(--yellow)" : "var(--white)" }}
        >
          {c.nome}
        </div>
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35 mb-2.5">
          {c.cargo}
        </div>
        <div className="flex flex-wrap gap-1">
          {c.socials.map((s) => (
            <a
              key={s.rede}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 border border-white/[0.1] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white/40 hover:border-[var(--yellow)] hover:text-[var(--yellow)] transition-all duration-200"
              data-cursor-expand
            >
              <SocialIcon rede={s.rede} />
              {s.rede}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function PartyMission() {
  const [tab, setTab] = useState<"federal" | "estadual">("federal");
  const filtered = CANDIDATOS_ES.filter((c) => c.tab === tab);

  return (
    <section
      id="missao"
      className="relative bg-[var(--black)] text-[var(--white)] overflow-hidden flex flex-col"
      style={{ height: "100vh" }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
      {/* Glow top-right */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle at top right, rgba(232,200,64,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative flex-1 min-h-0 max-w-[1300px] mx-auto w-full px-10 flex flex-col py-12 gap-8">

        {/* ── TOP ROW: title + national leaders ── */}
        <div className="flex gap-10 flex-shrink-0" style={{ minHeight: "220px" }}>

          {/* Left: title — takes up natural space */}
          <motion.div
            className="flex-1 flex flex-col justify-center"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag mb-3">// 03 Outros pré-candidatos</div>
            <h2
              className="font-display font-black uppercase leading-[0.9] mb-4"
              style={{ fontSize: "clamp(36px,4vw,64px)" }}
            >
              Missão no{" "}
              <span style={{ color: "var(--yellow)" }}>Espírito</span>
              <br />
              <span style={{ color: "var(--yellow)" }}>Santo</span>.
            </h2>
            <p className="text-sm font-light text-white/50 leading-relaxed mb-5 max-w-xs">
              Conheça os perfis do movimento no estado e acompanhe seus canais oficiais.
            </p>
            <a
              href={MISSAO_ES_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[var(--yellow)] px-4 py-2.5 font-display font-black text-[11px] uppercase tracking-[0.2em] text-[var(--yellow)] hover:bg-[var(--yellow)] hover:text-[var(--black)] transition-all duration-200 self-start"
              data-cursor-expand
            >
              <Instagram size={13} />
              Instagram Missão ES
            </a>
          </motion.div>

          {/* Right: leaders — same flex width, centered vertically */}
          <div className="flex-1 flex flex-col justify-center gap-3">
            {LIDERES_NACIONAIS.map((l, i) => (
              <motion.div
                key={l.nome}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <LeaderCard lider={l} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── TABS ── */}
        <div className="flex items-center gap-0 flex-shrink-0 self-start">
          {(["federal", "estadual"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="relative font-display font-black text-[12px] uppercase tracking-[0.2em] px-6 py-2.5 transition-all duration-200"
              style={{
                color: tab === t ? "var(--black)" : "rgba(255,255,255,0.4)",
                background: tab === t ? "var(--yellow)" : "transparent",
                border: "1px solid",
                borderColor: tab === t ? "var(--yellow)" : "rgba(255,255,255,0.1)",
              }}
              data-cursor-expand
            >
              {t === "federal" ? "Federal" : "Estadual"}
              {tab === t && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 -z-10"
                  style={{ background: "var(--yellow)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ── CANDIDATE GRID ── */}
        <div className="flex-1 min-h-0 overflow-y-auto scroll-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-3 gap-3 pb-2"
            >
              {filtered.map((c, i) => (
                <CandidateCard key={c.nome} c={c} i={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
