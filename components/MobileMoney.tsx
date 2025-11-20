'use client'

import { motion } from 'framer-motion'
import { CreditCard, Smartphone, ArrowRightLeft, Shield, CheckCircle2, Zap, Globe, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: "Intégration Native",
    description: "Connexion directe avec MTN Mobile Money, Orange Money et autres opérateurs majeurs en Afrique centrale",
    color: "from-brand-ocean to-brand-sky"
  },
  {
    icon: ArrowRightLeft,
    title: "Transactions Bidirectionnelles",
    description: "Envoi et réception de fonds, dépôts et retraits via le réseau d'agents, tout en temps réel",
    color: "from-brand-mint to-brand-ocean"
  },
  {
    icon: Shield,
    title: "Sécurité Renforcée",
    description: "Chiffrement end-to-end, authentification à deux facteurs et validation des transactions",
    color: "from-brand-sky to-brand-mint"
  },
  {
    icon: Zap,
    title: "Temps Réel",
    description: "Traitement instantané des transactions avec notifications push et SMS de confirmation",
    color: "from-brand-ocean to-brand-navy"
  }
]

const operators = [
  { name: "MTN Mobile Money", country: "Cameroun, RDC, Côte d'Ivoire", color: "from-yellow-500 to-orange-500" },
  { name: "Orange Money", country: "Cameroun, Sénégal, Mali", color: "from-orange-500 to-red-500" },
  { name: "Moov Money", country: "Togo, Bénin, Côte d'Ivoire", color: "from-blue-500 to-purple-500" },
  { name: "Airtel Money", country: "RDC, Tchad, Niger", color: "from-red-500 to-pink-500" }
]

export default function MobileMoney() {
  return (
    <section id="mobile-money" className="py-20 lg:py-32 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-ice/30 to-white"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-ice text-brand-ocean text-sm mb-6 border border-brand-ocean/20">
            <CreditCard className="w-4 h-4" />
            <span>Service Mobile Money</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy mb-6">
            Paiements <span className="text-gradient">Mobile Money</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Intégration complète avec les principaux opérateurs de Mobile Money en Afrique pour faciliter l'inclusion financière
          </p>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "15+", label: "Opérateurs intégrés" },
            { value: "500K+", label: "Transactions/mois" },
            { value: "99.8%", label: "Taux de succès" },
            { value: "< 3s", label: "Temps de traitement" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-soft-lg">
              <div className="text-3xl font-bold text-brand-ocean mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Fonctionnalités */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Opérateurs intégrés */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card p-8 lg:p-12 mb-16"
        >
          <h3 className="text-3xl font-bold text-brand-navy text-center mb-12">
            Opérateurs Mobile Money Intégrés
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operators.map((operator, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-brand-ice hover:bg-white transition-colors">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${operator.color} flex items-center justify-center shadow-soft-lg`}>
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-bold text-brand-navy mb-2">{operator.name}</h4>
                <p className="text-sm text-slate-600">{operator.country}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Avantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold text-brand-navy mb-6">
              Pourquoi choisir notre intégration Mobile Money ?
            </h3>
            <ul className="space-y-4">
              {[
                "Réconciliation automatique des transactions",
                "Gestion centralisée de tous les opérateurs",
                "API unifiée pour simplifier les intégrations",
                "Support technique dédié 24/7",
                "Conformité avec les réglementations locales",
                "Rapports détaillés et analytics en temps réel"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-ocean to-brand-sky text-white font-semibold hover:shadow-soft-lg transition-all duration-300"
            >
              <span>Demander une démo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className={`aspect-video rounded-3xl bg-gradient-to-br from-brand-ocean via-brand-sky to-brand-mint flex items-center justify-center shadow-soft-xl`}>
            <div className="text-center text-white">
              <CreditCard className="w-24 h-24 mx-auto mb-4 opacity-80" />
              <p className="text-xl font-semibold">Intégration Simple & Rapide</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

