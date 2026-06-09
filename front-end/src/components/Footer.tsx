import { CANDIDATE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[var(--black)] border-t border-white/[0.06] px-10 py-5 flex items-center justify-between flex-wrap gap-3">
      <div className="font-display font-black text-[12px] uppercase tracking-[0.2em] text-[var(--yellow)]">
        Bombeiro Oliveira · Deputado Federal · ES
      </div>
      <div className="text-[10px] tracking-[0.1em] text-white/25">
        Material de divulgação eleitoral · Partido {CANDIDATE.party}
      </div>
    </footer>
  );
}
