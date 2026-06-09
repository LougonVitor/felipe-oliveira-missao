import { useEffect, useState } from "react";

const LINKS = [
  { href: "#sobre",    label: "Sobre" },
  { href: "#propostas", label: "Propostas" },
  { href: "#missao",   label: "Missão" },
  { href: "#contato",  label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-10 py-5 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-[var(--black)]/90 backdrop-blur-md" : ""
      }`}
    >
      {/* Logo */}
      <span className="font-display font-black text-[13px] tracking-[0.2em] uppercase text-[var(--yellow)]">
        Bombeiro Oliveira
      </span>

      {/* Links — hidden on mobile */}
      <ul className="hidden md:flex gap-8 list-none">
        {LINKS.map((l) => (
          <li key={l.href}>
            <button
              onClick={() => scrollTo(l.href)}
              className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60 hover:text-[var(--yellow)] transition-colors"
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => scrollTo("#contato")}
        className="hidden md:block text-[11px] font-bold tracking-[0.18em] uppercase bg-[var(--yellow)] text-[var(--black)] px-5 py-2 hover:opacity-85 transition-opacity"
      >
        Apoiar
      </button>
    </nav>
  );
}
