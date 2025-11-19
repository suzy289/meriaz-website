'use client'

import { motion } from 'framer-motion'
import { Brain, Shield, Globe } from 'lucide-react'

export default function Roadmap() {
  const upcomingFeatures = [
    {
      icon: Brain,
      title: "Jonnie - HRMS/DMS",
      description: "Système de gestion des ressources humaines et documentaire",
      features: ["Onboarding du personnel", "Gestion de paie", "Présence", "Gestion documentaire et pistes d'audit"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Assure - Microassurance",
      description: "Marketplace pour microassurance intégrée",
      features: ["Collecte de primes automatisée", "Gestion des réclamations", "Souscription digitale", "Paiements intégrés"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "IA - Intelligence Artificielle",
      description: "Solutions intelligentes pour l'éducation et le support",
      features: ["Éducation financière adaptative", "Support client intelligent 24/7", "Analyses prédictives", "Recommandations personnalisées"],
      color: "from-orange-500 to-red-500"
    }
  ]

  const expansion = [
    {
      title: "API Ouvertes",
      description: "Élargissement de l'accès au marché via des API ouvertes et sécurisées"
    },
    {
      title: "Paiements Transfrontaliers",
      description: "Facilitation du commerce régional avec des paiements transfrontaliers intégrés"
    },
    {
      title: "Intégration KYC",
      description: "Connexion avec les systèmes d'identification nationaux pour un onboarding simplifié"
    }
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 via-transparent to-purple-900/10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Innovation & <span className="text-gradient">Expansion</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des modules innovants et une vision régionale pour l'avenir de la microfinance en Afrique
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {upcomingFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:transform hover:scale-105 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>

              <ul className="space-y-3">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card p-8 lg:p-12"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Expansion Régionale</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {expansion.map((item, index) => (
              <div key={item.title} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">{index + 1}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

