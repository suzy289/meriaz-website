'use client'

import { useState, useEffect } from 'react'
import { Mail, Facebook, Linkedin, Instagram, MessageCircle, Music, Phone, MapPin } from 'lucide-react'

const contactItems = [
  {
    icon: Mail,
    label: 'infos@kazimo.africa',
    href: 'mailto:infos@kazimo.africa',
    color: 'hover:text-brand-ocean'
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com',
    color: 'hover:text-blue-600'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    color: 'hover:text-blue-700'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com',
    color: 'hover:text-pink-600'
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://whatsapp.com',
    color: 'hover:text-green-600'
  },
  {
    icon: Music,
    label: 'TikTok',
    href: 'https://www.tiktok.com',
    color: 'hover:text-black'
  },
  {
    icon: Phone,
    label: '+237 691 21 35 40',
    href: 'tel:+237691213540',
    color: 'hover:text-brand-ocean'
  },
  {
    icon: MapPin,
    label: 'Capitol, Yaoundé, Cameroun',
    href: '#',
    color: 'hover:text-brand-ocean'
  }
]

export default function TopBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      let newVisibility = isVisible
      
      // Afficher si on est en haut, cacher si on scroll vers le bas
      if (currentScrollY < 50) {
        newVisibility = true
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        newVisibility = false
      } else if (currentScrollY < lastScrollY) {
        newVisibility = true
      }
      
      if (newVisibility !== isVisible) {
        setIsVisible(newVisibility)
        // Émettre un événement personnalisé pour synchroniser avec le Navbar
        window.dispatchEvent(new CustomEvent('topbar-visibility', { 
          detail: { visible: newVisibility } 
        }))
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isVisible])

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[60] bg-gradient-to-r from-brand-navy via-brand-ocean to-brand-navy border-b border-brand-sky/20 transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-2.5 text-sm">
          {/* Contact info à gauche */}
          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            {contactItems.slice(0, 2).map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex items-center space-x-2 text-white/90 ${item.color} transition-colors duration-200 group`}
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Réseaux sociaux et contact au centre/droite */}
          <div className="flex flex-wrap items-center gap-3 lg:gap-5">
            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3 border-r border-white/20 pr-3 lg:pr-5">
              {contactItems.slice(2, 6).map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white/80 ${item.color} transition-all duration-200 group`}
                  aria-label={item.label}
                >
                  <item.icon className="w-4 h-4 group-hover:scale-125 transition-transform" />
                </a>
              ))}
            </div>

            {/* Téléphone et adresse */}
            <div className="flex items-center gap-4">
              {contactItems.slice(6).map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`flex items-center space-x-2 text-white/90 ${item.color} transition-colors duration-200 group`}
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="hidden md:inline text-xs lg:text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation de lumière qui scrolle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-brand-sky/20 to-transparent animate-shimmer" />
        </div>
      </div>

    </div>
  )
}

