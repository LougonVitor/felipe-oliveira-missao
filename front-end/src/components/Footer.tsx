import { CANDIDATE } from "@/lib/content";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<>
		<footer className="bg-[var(--black)] border-t border-white/[0.06] px-10 py-5 flex items-center justify-between flex-wrap gap-3">
		<a
			href="https://www.instagram.com/lougonvitor/"
			target="_blank"
			rel="noopener noreferrer"
			className="group flex items-center gap-2 text-[var(--yellow)] hover:text-white transition-colors duration-200"
		>
			<FaInstagram className="text-[14px] shrink-0" />
			<span className="font-display text-[11px] uppercase tracking-[0.2em] border-b border-[var(--yellow)]/40 group-hover:border-white/40 transition-colors duration-200">
			Site desenvolvido por @lougonvitor
			</span>
		</a>
		<div className="text-[10px] tracking-[0.1em] text-white/25">
			Material de divulgação eleitoral · Partido {CANDIDATE.party}
		</div>
		</footer>
		</>
	);
}