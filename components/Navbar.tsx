"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Sun, 
  Moon,
  Wallet,
  Users,
  Building2,
  Shield,
  BarChart3,
  FileText,
  HelpCircle,
  BookOpen,
  Zap,
  Network,
  CreditCard,
  TrendingUp,
  Settings
} from "lucide-react";

const menuItems = [
  {
    label: "Services",
    href: "#services",
    icon: Wallet,
    dropdown: [
      { label: "Portefeuilles Numériques", href: "#pay", icon: Wallet },
      { label: "Gestion des Agents", href: "#connect", icon: Users },
      { label: "API & Intégrations", href: "#api", icon: Network },
      { label: "Paiements Mobile Money", href: "#mobile-money", icon: CreditCard }
    ]
  },
  {
    label: "Solutions",
    href: "#solutions",
    icon: Building2,
    dropdown: [
      { label: "Pour les IMF", href: "#imf", icon: Building2 },
      { label: "Pour les Coopératives", href: "#cooperatives", icon: Users },
      { label: "Pour les Néo-banques", href: "#neobanks", icon: TrendingUp },
      { label: "Solutions Entreprise", href: "#enterprise", icon: Settings }
    ]
  },
  {
    label: "Ressources",
    href: "#ressources",
    icon: BookOpen,
    dropdown: [
      { label: "Documentation", href: "#docs", icon: FileText },
      { label: "Guides & Tutoriels", href: "#guides", icon: BookOpen },
      { label: "Centre d'Aide", href: "#help", icon: HelpCircle },
      { label: "Blog & Actualités", href: "#blog", icon: FileText }
    ]
  },
  {
    label: "Sécurité",
    href: "#securite",
    icon: Shield,
    dropdown: [
      { label: "Conformité COBAC", href: "#cobac", icon: Shield },
      { label: "Chiffrement AES-256", href: "#encryption", icon: Shield },
      { label: "Audit & Certification", href: "#audit", icon: FileText }
    ]
  }
];

const simpleLinks = [
  { href: "#technologie", label: "Technologie" },
  { href: "#tarification", label: "Tarification" },
  { href: "#about", label: "À propos" }
];

const languages = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [currentLang, setCurrentLang] = useState("fr");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    
    // Écouter l'événement de visibilité de la TopBar
    const handleTopBarVisibility = (event: CustomEvent) => {
      setTopBarVisible(event.detail.visible);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener('topbar-visibility', handleTopBarVisibility as EventListener);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener('topbar-visibility', handleTopBarVisibility as EventListener);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header
      className={`fixed left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        topBarVisible
          ? "top-[40px]"
          : "top-0"
      } ${
        isScrolled
          ? "backdrop-blur-xl bg-white/95 border-b border-slate-200 shadow-soft-xl"
          : "backdrop-blur-sm bg-white/80"
      }`}
    >

      {/* Animation de lumière qui scrolle - Multiples couches pour effet brillant */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Couche principale - lumière bleue large */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-brand-sky/50 to-transparent animate-shimmer" />
        </div>
        {/* Couche secondaire - lumière menthe brillante */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-brand-mint/60 to-transparent animate-shimmer-bright" />
        </div>
        {/* Couche accent - lumière blanche intense */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-1/5 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shimmer-delay-1" />
        </div>
        {/* Ligne de lumière fine en haut pour effet de brillance */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-sky/80 to-transparent animate-shimmer-delay-03" />
        {/* Ligne de lumière fine en bas */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-mint/60 to-transparent animate-shimmer" />
      </div>

      <div className="container relative z-10">
        <div className="flex items-center justify-between py-4">
          {/* Logo Kazimo avec séparateur incliné */}
          <div className="flex items-center space-x-4 relative">
            {/* Petite forme décorative au-dessus du logo */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-8 pointer-events-none z-10">
              <svg
                viewBox="0 0 80 32"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="logoDecoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1565C0" />
                    <stop offset="50%" stopColor="#5DAEFF" />
                    <stop offset="100%" stopColor="#12B3B3" />
                  </linearGradient>
                </defs>
                {/* Petite courbe élégante */}
                <path
                  d="M 0,16 Q 20,4 40,16 T 80,16"
                  stroke="url(#logoDecoGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  className="animate-pulse-slow"
                />
                {/* Points décoratifs */}
                <circle cx="20" cy="16" r="2" fill="#5DAEFF" />
                <circle cx="40" cy="16" r="2.5" fill="#12B3B3" />
                <circle cx="60" cy="16" r="2" fill="#5DAEFF" />
              </svg>
            </div>
            
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              aria-label="Kazimo - Microfinance Augmentée"
            >
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/kazimo-logo.png.png"
                  alt="Logo Kazimo"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                  sizes="48px"
                />
              </div>
              <div className="leading-tight">
                <span className="block text-lg font-bold text-brand-navy uppercase tracking-[0.2em] group-hover:text-brand-ocean transition-colors">
                  Kazimo
                </span>
                <span className="block text-[11px] uppercase tracking-[0.5em] text-brand-ocean font-medium">
                  Microfinance Augmentée
                </span>
                <span className="block text-[9px] uppercase tracking-[0.3em] text-slate-500 font-normal mt-0.5">
                  la finance de A à Z
                </span>
              </div>
            </Link>
            
            {/* Séparateur incliné coloré */}
            <div className="hidden lg:block relative w-px h-12 mx-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-sky to-transparent transform rotate-12" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-mint to-transparent transform -rotate-12" />
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => {
                  if (hoverTimeout) {
                    clearTimeout(hoverTimeout);
                    setHoverTimeout(null);
                  }
                  setOpenDropdown(item.label);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setOpenDropdown(null);
                  }, 200); // Délai de 200ms avant fermeture
                  setHoverTimeout(timeout);
                }}
              >
                <a
                  href={item.href}
                  className="flex items-center space-x-1 px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-brand-ocean hover:bg-brand-ice/50 transition-all duration-200 group cursor-pointer"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                </a>

                {/* Menu déroulant */}
                {openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 pt-2 w-64 z-50"
                    onMouseEnter={() => {
                      if (hoverTimeout) {
                        clearTimeout(hoverTimeout);
                        setHoverTimeout(null);
                      }
                      setOpenDropdown(item.label);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setOpenDropdown(null);
                      }, 200);
                      setHoverTimeout(timeout);
                    }}
                  >
                    <div className="bg-white rounded-2xl shadow-soft-xl border border-slate-100 overflow-hidden animate-fadeIn">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-ice/30 to-white pointer-events-none" />
                      <div className="relative p-2">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm text-slate-700 hover:bg-gradient-to-r hover:from-brand-ocean/10 hover:to-brand-mint/10 hover:text-brand-ocean transition-all duration-200 group/item cursor-pointer"
                          >
                            <subItem.icon className="w-4 h-4 text-brand-ocean group-hover/item:scale-110 transition-transform" />
                            <span className="font-medium">{subItem.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {simpleLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-brand-ocean hover:bg-brand-ice/50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}

            {/* Séparateur incliné avant les actions */}
            <div className="relative w-px h-8 mx-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-sky to-transparent transform rotate-12" />
            </div>

            {/* Sélecteur de langue */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-brand-ocean hover:bg-brand-ice/50 transition-all duration-200">
                <Globe className="w-4 h-4" />
                <span className="text-lg">{languages.find(l => l.code === currentLang)?.flag}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-soft-xl border border-slate-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={`w-full flex items-center space-x-2 px-4 py-2 text-sm hover:bg-brand-ice transition-colors ${
                      currentLang === lang.code ? "bg-brand-ice text-brand-ocean font-semibold" : "text-slate-700"
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle Dark/Light Mode */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl text-slate-700 hover:text-brand-ocean hover:bg-brand-ice/50 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Bouton CTA */}
            <a
              href="#contact"
              className="ml-2 px-6 py-2 rounded-xl bg-gradient-to-r from-brand-ocean via-brand-sky to-brand-mint text-white font-semibold text-sm shadow-soft-lg hover:shadow-soft-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-mint via-brand-sky to-brand-ocean opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </nav>

          {/* Menu Mobile */}
          <button
            className="lg:hidden p-2 rounded-xl border border-slate-200 text-brand-navy hover:bg-brand-ice transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Déroulant */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl shadow-soft-xl">
          <div className="container py-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center">
                  <a
                    href={item.href}
                    className="flex-1 flex items-center space-x-2 px-4 py-3 rounded-xl bg-brand-ice text-brand-navy font-medium hover:bg-brand-ocean/10 transition-colors cursor-pointer"
                    onClick={() => setMobileOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </a>
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="px-3 py-3 rounded-xl bg-brand-ice text-brand-navy hover:bg-brand-ocean/10 transition-colors"
                    aria-label={`Ouvrir le menu ${item.label}`}
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                </div>
                {openDropdown === item.label && (
                  <div className="mt-2 ml-4 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 rounded-lg text-sm text-slate-600 hover:bg-brand-ocean/10 hover:text-brand-ocean transition-colors cursor-pointer"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {simpleLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2 rounded-xl bg-brand-ice text-brand-navy font-medium hover:bg-brand-ocean/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-slate-600" />
                <select
                  value={currentLang}
                  onChange={(e) => setCurrentLang(e.target.value)}
                  className="text-sm text-slate-700 bg-transparent border-none outline-none"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.label}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg text-slate-700 hover:bg-brand-ice transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2 rounded-xl bg-gradient-to-r from-brand-ocean to-brand-sky text-white text-center font-semibold mt-4"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
