'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Target, Award, TrendingUp, Globe, Building2, Heart } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Sécurité & Conformité',
    description: 'Conformité totale avec les réglementations COBAC et standards bancaires internationaux',
    color: 'from-brand-ocean to-brand-sky'
  },
  {
    icon: Users,
    title: 'Inclusion Financière',
    description: 'Faciliter l\'accès aux services financiers pour tous, particulièrement les populations non bancarisées',
    color: 'from-brand-mint to-brand-ocean'
  },
  {
    icon: Target,
    title: 'Innovation Continue',
    description: 'Technologies de pointe et solutions modulaires adaptées aux besoins spécifiques de l\'Afrique',
    color: 'from-brand-sky to-brand-mint'
  },
  {
    icon: Heart,
    title: 'Impact Social',
    description: 'Contribuer au développement économique et social des communautés africaines',
    color: 'from-brand-ocean to-brand-navy'
  }
]

const stats = [
  { value: '2017', label: 'Année de création', icon: Award, color: 'from-brand-ocean to-brand-sky' },
  { value: '500M', label: 'FCFA de capital', icon: TrendingUp, color: 'from-brand-mint to-brand-ocean' },
  { value: 'EMF II', label: 'Catégorie', icon: Building2, color: 'from-brand-sky to-brand-mint' },
  { value: 'Afrique Centrale', label: 'Zone de couverture', icon: Globe, color: 'from-brand-ocean to-brand-navy' }
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-ice via-white to-brand-ice/50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-ice text-brand-ocean text-sm mb-6 border border-brand-ocean/20">
            <Award className="w-4 h-4" />
            <span>À propos de Kazimo</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy mb-6">
            Notre <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Kazimo est un établissement de microfinance de catégorie II, agréé par la COBAC, 
            dédié à la digitalisation de la finance inclusive en Afrique.
          </p>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform shadow-soft-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-brand-ocean mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Notre histoire */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6">
              Notre Histoire
            </h3>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Fondé le <strong>10 Novembre 2017</strong>, Kazimo est né de la volonté de révolutionner 
                l'accès aux services financiers en Afrique centrale. Notre mission est de démocratiser 
                la finance en proposant des solutions technologiques innovantes et accessibles.
              </p>
              <p>
                Avec un capital entièrement souscrit et libéré de <strong>500 millions de FCFA</strong>, 
                nous avons obtenu l'agrément de la Commission Bancaire de l'Afrique Centrale (COBAC) 
                en tant qu'établissement de microfinance de catégorie II.
              </p>
              <p>
                Aujourd'hui, Kazimo propose une plateforme modulaire complète qui permet aux IMF, 
                coopératives et néo-banques d'automatiser leurs opérations, de sécuriser leurs flux 
                et d'accélérer leur croissance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-ocean via-brand-sky to-brand-mint flex items-center justify-center shadow-soft-xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10 text-center text-white p-8">
                <Building2 className="w-24 h-24 mx-auto mb-4 opacity-90" />
                <p className="text-2xl font-semibold mb-2">Kazimo</p>
                <p className="text-lg opacity-90">Microfinance Augmentée</p>
                <p className="text-sm mt-4 opacity-80">La finance de A à Z</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Nos valeurs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-brand-navy text-center mb-12">
            Nos Valeurs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform shadow-soft-lg`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-brand-navy mb-3">{value.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 glass-card p-8 lg:p-12 text-center"
        >
          <Target className="w-16 h-16 mx-auto mb-6 text-brand-ocean" />
          <h3 className="text-3xl font-bold text-brand-navy mb-4">Notre Vision</h3>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Devenir le leader de la finance digitale inclusive en Afrique, en offrant des solutions 
            technologiques innovantes qui transforment la façon dont les populations accèdent aux 
            services financiers et contribuent au développement économique durable du continent.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

