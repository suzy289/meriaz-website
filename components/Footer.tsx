'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, Globe, Shield, Building2, Landmark } from 'lucide-react'

const offresParticuliers = [
  "Portefeuilles digitaux Kazimo Pay",
  "Livret d'épargne solidaire diaspora",
  "Microcrédit scolaire & santé",
  "Assurance inclusive communautaire"
]

const offresEntreprises = [
  "Financement agile des TPE/PME",
  "Lignes de crédit agricoles",
  "Solutions API Banking & Cash Management",
  "Programme Kazimo Impact (ONG/coopératives)"
]

const contactItems = [
  { icon: MapPin, label: "Siège social", value: "Avenue Kennedy – Yaoundé, Cameroun" },
  { icon: Phone, label: "Support clients", value: "+237 691 21 35 40" },
  { icon: Mail, label: "Email", value: "contact@kazimo.africa" },
  { icon: Globe, label: "Portail partenaires", value: "partners.kazimo.africa" }
]

const highlights = [
  { label: "Agrément COBAC", value: "Décision D-2022/161" },
  { label: "Capital social", value: "500 M FCFA" },
  { label: "Catégorie", value: "EMF II" },
  { label: "Couverture", value: "Afrique Centrale & Australe" }
]

export default function Footer() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = ['/bacg.jpg', '/bacgroung.png']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <footer className="relative overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ filter: 'brightness(0.85) saturate(1.15)' }}
          />
        ))}
      </div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/90 via-black/85 to-black/95"></div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-brand-ocean/40 via-transparent to-brand-mint/20 mix-blend-screen"></div>
      
      {/* Animation de lumière qui scrolle - Multiples couches pour effet brillant (réduit) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {/* Couche principale - lumière bleue large (intensité réduite) */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-brand-sky/20 to-transparent animate-shimmer-footer" />
        </div>
        {/* Couche secondaire - lumière menthe (intensité réduite) */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-brand-mint/25 to-transparent animate-shimmer-footer-bright" />
        </div>
        {/* Couche accent - lumière blanche (intensité réduite) */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-1/5 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-footer-delay-1" />
        </div>
        {/* Ligne de lumière fine en haut (intensité réduite) */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-sky/30 to-transparent animate-shimmer-footer-delay-03" />
        {/* Ligne de lumière fine en bas (intensité réduite) */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-mint/25 to-transparent animate-shimmer-footer" />
      </div>

      <div className="relative z-[2] container mx-auto px-6 lg:px-14 py-16 text-white space-y-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.35em] text-brand-ice mb-2">{item.label}</p>
              <p className="text-lg font-semibold">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/kazimo-logo.png.png"
                  alt="Logo Kazimo"
                  fill
                  className="object-contain transition-transform duration-300"
                  priority
                  sizes="48px"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-brand-ice">Kazimo</p>
                <h3 className="text-2xl font-semibold">Microfinance Augmentée</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-normal mt-1">
                  la finance de A à Z
                </p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Établissement de microfinance de catégorie II, Kazimo digitalise la finance inclusive via des solutions
              modulaires, un réseau d'agences et des APIs bancaires sécurisées.
            </p>
            <div className="space-y-2 text-sm text-white/85">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-brand-mint" />
                <span>Conformité COBAC • PCI DSS • ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-brand-mint" />
                <span>Agences Kazimo Express & Mobile Money</span>
              </div>
              <div className="flex items-center space-x-2">
                <Landmark className="w-4 h-4 text-brand-mint" />
                <span>Partenariats bancaires & fintech régionales</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-ice">Solutions Particuliers</h4>
            <ul className="space-y-3 text-sm text-white/85">
              {offresParticuliers.map((offer) => (
                <li key={offer} className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-brand-mint"></span>
                  <span>{offer}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-ice">Solutions Entreprises</h4>
            <ul className="space-y-3 text-sm text-white/85">
              {offresEntreprises.map((offer) => (
                <li key={offer} className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-brand-mint"></span>
                  <span>{offer}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-ice">Coordonnées & Réseau</h4>
            <div className="space-y-4 text-sm text-white/85">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-brand-mint">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:px-8 mt-10 flex flex-col lg:flex-row items-center justify-between gap-6 backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-brand-ice mb-2">Programme Kazimo Impact</p>
            <h5 className="text-xl font-semibold">Rejoignez notre réseau d'agences et partenaires digitaux</h5>
            <p className="text-white/70 text-sm mt-2">
              Renforcez vos opérations, sécurisez vos flux et accélérez votre inclusion financière.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-mint to-brand-ocean text-white font-semibold shadow-soft-lg"
            >
              Contacter Kazimo
            </a>
            <a
              href="#solutions"
              className="px-6 py-3 rounded-xl border border-white/30 text-white/90 hover:bg-white/10 transition-colors"
            >
              Télécharger la brochure
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <div className="mb-4 md:mb-0">© {new Date().getFullYear()} Kazimo Microfinance. Tous droits réservés.</div>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white">Confidentialité</a>
            <a href="#" className="hover:text-white">Conditions</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <a href="#" className="hover:text-white">Plan du site</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

