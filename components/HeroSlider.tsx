'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: '/1.jpg',
    title: 'Portefeuilles Numériques',
    subtitle: 'Kazimo Pay',
    description: 'Gestion complète des portefeuilles clients avec application mobile intuitive. Accès aux services bancaires à distance, envoi/réception via Mobile Money.',
    link: '#pay',
    color: 'from-brand-ocean to-brand-sky'
  },
  {
    id: 2,
    image: '/bacentreprise.jpeg',
    title: 'Solutions Entreprises',
    subtitle: 'Financement Agile',
    description: 'Financement des TPE/PME, lignes de crédit agricoles et solutions API Banking. Programme Kazimo Impact pour les ONG et coopératives.',
    link: '#solutions',
    color: 'from-brand-mint to-brand-ocean'
  },
  {
    id: 3,
    image: '/bacg.jpg',
    title: 'Gestion des Agents',
    subtitle: 'Kazimo Connect',
    description: 'Inscription et gestion des profils d\'agents, autorisation sécurisée des opérations, surveillance en temps réel et calcul automatisé des commissions.',
    link: '#connect',
    color: 'from-brand-sky to-brand-mint'
  },
  {
    id: 4,
    image: '/bacgroung.png',
    title: 'API & Intégrations',
    subtitle: 'Architecture Modulaire',
    description: 'Architecture API RESTful modulaire, intégration Mobile Money (MTN, Orange), connexion avec assureurs et outils d\'analyse.',
    link: '#api',
    color: 'from-brand-ocean to-brand-navy'
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change toutes les 5 secondes

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Reprend après 10s
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Images de fond avec transition douce */}
      <AnimatePresence initial={false}>
        {slides.map((slide, index) => {
          const isActive = index === currentSlide
          const isNext = index === (currentSlide + 1) % slides.length
          const isPrev = index === (currentSlide - 1 + slides.length) % slides.length
          
          return (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: isActive ? 1 : (isNext || isPrev ? 0.3 : 0),
                scale: isActive ? 1 : 1.05
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1.5, 
                ease: [0.4, 0, 0.2, 1] // Courbe d'accélération douce
              }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
                {/* Overlay avec gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} ${isActive ? 'opacity-80' : 'opacity-60'}`} />
                {/* Overlay sombre pour transition */}
                <motion.div 
                  className="absolute inset-0 bg-black"
                  animate={{ 
                    opacity: isActive ? 0.4 : (isNext || isPrev ? 0.6 : 0.8)
                  }}
                  transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>

      {/* Contenu texte avec animation douce */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={`content-${slide.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.4,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="absolute inset-0 flex items-center justify-center z-10"
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.6,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="max-w-4xl mx-auto"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.7,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-lg text-white text-sm mb-6 border border-white/30"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
                    <span>{slide.subtitle}</span>
                  </motion.div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.8,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
                  >
                    {slide.title}
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: 1,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-lg"
                  >
                    {slide.description}
                  </motion.p>
                  
                  <motion.a
                    href={slide.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: 1.2,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-white text-brand-ocean font-semibold text-lg shadow-soft-xl hover:shadow-soft-2xl transition-all duration-300 group"
                  >
                    <span>Découvrir</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Boutons de navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-white hover:bg-white/30 transition-all duration-300 flex items-center justify-center group"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-white hover:bg-white/30 transition-all duration-300 flex items-center justify-center group"
        aria-label="Slide suivant"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Bullets/Indicateurs */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Aller au slide ${index + 1}`}
          >
            <div className={`w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-16' 
                : 'bg-white/40 hover:bg-white/60'
            }`} />
            {index === currentSlide && (
              <motion.div
                layoutId="activeBullet"
                className="absolute inset-0 bg-white rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

    </section>
  )
}

