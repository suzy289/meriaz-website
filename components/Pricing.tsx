'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: "Faibles Frais Initiaux",
      price: "600 000 XAF",
      onboarding: "Frais d'onboarding: 600 000 XAF",
      description: "Idéal pour les startups et petites IMF",
      features: [
        "Partage revenus paiements: 50% Meriaz / 50% Partenaire",
        "Partage services bancaires: 30% Meriaz / 70% Partenaire",
        "Support technique inclus",
        "Formation initiale",
        "Mise en service sous 30 jours"
      ],
      highlighted: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Équilibre",
      price: "1 200 000 XAF",
      onboarding: "Frais d'onboarding: 1 200 000 XAF",
      description: "Solution équilibrée pour croissance modérée",
      features: [
        "Partage revenus paiements: 25% Meriaz / 75% Partenaire",
        "Partage services bancaires: 10% Meriaz / 90% Partenaire",
        "Support prioritaire",
        "Formation avancée",
        "Mise en service sous 21 jours",
        "Tableaux de bord personnalisés"
      ],
      highlighted: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Autonomie Totale",
      price: "5 000 000 XAF",
      onboarding: "Frais d'onboarding: 5 000 000 XAF",
      description: "Contrôle total pour les grandes institutions",
      features: [
        "Aucun partage de revenus",
        "Maintenance annuelle: 1 000 000 XAF",
        "Support dédié 24/7",
        "Formation complète équipe",
        "Mise en service sous 14 jours",
        "Tableaux de bord enterprise",
        "API personnalisées",
        "Accès code source"
      ],
      highlighted: false,
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="tarification" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-orange-900/10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Modèles de <span className="text-gradient">Tarification</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des options flexibles adaptées à chaque étape de croissance de votre institution
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-purple-600 to-orange-600 scale-105 shadow-2xl'
                  : 'glass-card'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold flex items-center space-x-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Plus Populaire</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                <div className="text-gray-200 text-sm mb-4">{plan.onboarding}</div>
                <p className="text-gray-200">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-200">
                    <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-white text-black hover:bg-gray-100 hover:scale-105'
                  : 'bg-orange-500 text-white hover:bg-orange-600 hover:scale-105'
              }`}>
                Choisir ce Plan
              </button>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg">
            🔒 Tous les plans incluent la sécurité bancaire, la conformité COBAC et les mises à jour logicielles
          </p>
        </motion.div>
      </div>
    </section>
  )
}

