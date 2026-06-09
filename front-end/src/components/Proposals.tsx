import { motion } from "framer-motion";
import { PROPOSTAS } from "@/lib/content";

export default function Proposals() {
  return (
    <section
      id="propostas"
      className="relative bg-[var(--black)] text-[var(--white)] overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="relative max-w-[1300px] mx-auto px-6 md:px-10 flex flex-col min-h-screen">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-20 pb-8 flex-shrink-0 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="section-tag mb-3">// 02 Propostas</div>
            <h2 className="font-display font-black uppercase leading-[0.9]" style={{ fontSize: "clamp(36px,5vw,76px)" }}>
              Seis frentes.{" "}
              <span style={{ color: "var(--yellow)" }}>Uma missão.</span>
            </h2>
          </div>
          <p className="text-sm font-light text-white/50 leading-relaxed md:max-w-[280px]">
            Segurança, soberania e educação são o tripé da minha atuação na Câmara.
          </p>
        </motion.div>

        {/* Cards grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] mb-10">
          {PROPOSTAS.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="hover-bar relative bg-[var(--black)] px-6 py-7 flex flex-col hover:bg-white/[0.025] transition-colors overflow-hidden"
            >
              <div className="absolute top-2 right-3 font-display font-black leading-none select-none pointer-events-none" style={{ fontSize: "56px", color: "rgba(232,200,64,0.06)" }}>
                {p.n}
              </div>
              <div className="section-tag mb-3">Proposta {p.n}</div>
              <h3 className="font-display font-bold uppercase leading-tight mb-2 text-[var(--white)] pr-6" style={{ fontSize: "clamp(15px,1.4vw,20px)" }}>
                {p.titulo}
              </h3>
              <p className="text-xs font-semibold mb-3 leading-snug" style={{ color: "rgba(232,200,64,0.8)" }}>
                {p.resumo}
              </p>
              <div className="h-px bg-white/[0.08] mb-3" />
              <p className="text-xs text-white/50 leading-relaxed flex-1">{p.detalhe}</p>
              <div className="mt-4 text-[9px] font-bold uppercase tracking-[0.25em] text-white/20">
                {String(i + 1).padStart(2, "0")} / {String(PROPOSTAS.length).padStart(2, "0")}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
