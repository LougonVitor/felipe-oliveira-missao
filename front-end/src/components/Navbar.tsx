import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "sobre",     label: "Sobre" },
  { href: "propostas", label: "Propostas" },
  { href: "missao",    label: "Missão" },
  { href: "contato",   label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled || open ? "bg-[var(--black)] shadow-lg" : ""
        }`}
      >
        {/* Logo */}
        <span className="font-display font-black text-[13px] tracking-[0.2em] uppercase text-[var(--yellow)] z-10">
          Bombeiro Oliveira
        </span>

        {/* Desktop links */}
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

        {/* Desktop CTA */}
        <button
          onClick={() => scrollTo("contato")}
          className="hidden md:block text-[11px] font-bold tracking-[0.18em] uppercase bg-[var(--yellow)] text-[var(--black)] px-5 py-2 hover:opacity-85 transition-opacity"
        >
          Apoiar
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden z-10 text-white p-1"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-[150] bg-[var(--black)] flex flex-col items-center justify-center gap-8 md:hidden">
          {LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-display font-black text-3xl uppercase tracking-[0.2em] text-white hover:text-[var(--yellow)] transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contato")}
            className="mt-4 font-display font-black text-[13px] uppercase tracking-[0.2em] bg-[var(--yellow)] text-[var(--black)] px-10 py-4"
          >
            Apoiar
          </button>
        </div>
      )}
    </>
  );
}
