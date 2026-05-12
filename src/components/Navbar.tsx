import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-bg-100/70 px-5 py-2.5 backdrop-blur-xl">
          <a href="/" className="font-display text-2xl font-bold tracking-tight text-text-100">
            syntax
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-text-300 transition-colors hover:text-text-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contato"
              className="relative overflow-hidden inline-flex items-center rounded-full px-5 py-2 text-sm text-white transition-all duration-[250ms] ease-out hover:scale-[1.02] hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #FF5C00 0%, #cc3300 40%, #1a0800 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.25), 0 4px 18px rgba(255,92,0,0.3)",
                backdropFilter: "blur(4px)",
                fontWeight: 500,
              }}
            >
              <span
                aria-hidden
                className="animate-shine-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)",
                }}
              />
              <span className="relative">Falar com a Syntax</span>
            </a>
          </div>

          <button
            className="rounded-full border border-white/10 p-2 text-text-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-bg-100/90 p-4 backdrop-blur-xl md:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-text-200 hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contato"
                  className="block rounded-full px-5 py-2.5 text-center text-sm font-semibold"
                  style={{ background: "#FF6B2B", color: "#000000" }}
                >
                  Falar com a Syntax
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
