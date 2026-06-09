import { motion } from "framer-motion";
import { Instagram, Youtube, Twitter } from "lucide-react";
import { CANDIDATE } from "@/lib/content";

const SOCIALS = [
  { name: "Instagram", handle: "@sgt_bm_oliveira", href: CANDIDATE.socials.instagram, icon: <Instagram size={18} /> },
  { name: "X (Twitter)", handle: "@FelipeOliSant", href: CANDIDATE.socials.x, icon: <Twitter size={18} /> },
  {
    name: "TikTok", handle: "@sgt_bm_oliveira", href: CANDIDATE.socials.tiktok,
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>,
  },
  { name: "YouTube", handle: "@SGT_BM_OLIVEIRA", href: CANDIDATE.socials.youtube, icon: <Youtube size={18} /> },
  {
    name: "Kwai", handle: "@honlf406", href: CANDIDATE.socials.kwai,
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>,
  },
];

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative bg-[var(--black)] text-[var(--white)] flex items-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none" style={{ width: "600px", height: "600px", background: "radial-gradient(circle, rgba(232,200,64,0.05) 0%, transparent 60%)" }} />

      <div className="relative max-w-[1300px] mx-auto w-full px-6 md:px-10 py-24 flex flex-col items-center gap-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="section-tag justify-center mb-4">// 04 Contato</div>
          <h2 className="font-display font-black uppercase leading-[0.88] mb-4" style={{ fontSize: "clamp(48px,7vw,100px)" }}>
            <span style={{ color: "var(--yellow)" }}>Siga</span> a<br />Missão.
          </h2>
          <p className="text-sm font-light text-white/45 max-w-[380px] mx-auto leading-relaxed">
            Acompanhe o trabalho do Bombeiro Oliveira e faça parte dessa mudança real para o Espírito Santo.
          </p>
        </motion.div>

        {/* Socials — 2 col mobile, 3 col tablet, 5 col desktop */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/[0.08]"
        >
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group bg-[var(--black)] px-4 py-6 flex flex-col items-center text-center hover:bg-white/[0.03] transition-colors overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--yellow)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              <div className="w-9 h-9 rounded-full border flex items-center justify-center mb-2.5 transition-all duration-300 group-hover:border-[var(--yellow)] group-hover:text-[var(--yellow)]" style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}>
                {s.icon}
              </div>
              <div className="font-display font-bold text-[11px] uppercase tracking-[0.18em] text-[var(--white)]">{s.name}</div>
              <div className="text-[10px] text-white/35 mt-0.5">{s.handle}</div>
            </a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <p className="font-display font-bold uppercase tracking-[0.05em] text-white/30 mb-6 leading-tight px-4" style={{ fontSize: "clamp(15px,2.2vw,28px)" }}>
            "Quem protege vidas{" "}
            <span style={{ color: "var(--yellow)" }}>está pronto para defender o Brasil."</span>
          </p>
          <a
            href={CANDIDATE.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-display font-bold text-[12px] uppercase tracking-[0.2em] bg-[var(--yellow)] text-[var(--black)] px-10 py-4 hover:bg-white transition-colors clip-corner"
          >
            Apoiar Agora →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
