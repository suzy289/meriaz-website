"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#technologie", label: "Technologie" },
  { href: "#tarification", label: "Tarification" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-xl bg-slate-950/70 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-orange-500 rounded-xl flex items-center justify-center font-bold">
            M
          </div>
          <div>
            <div className="font-semibold text-lg">Meriaz</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest">
              La finance de A à Z
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/30"
          >
            Démonstration
          </a>
        </nav>

        <button
          className="lg:hidden p-2 rounded-xl border border-white/10"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-slate-950/90 backdrop-blur-xl">
          <div className="container py-4 space-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2 rounded-xl bg-white/5 text-gray-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-center font-semibold"
            >
              Démonstration
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

