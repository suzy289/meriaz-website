'use client'

import { motion } from 'framer-motion'
import { Wallet, Users, Network } from 'lucide-react'

export default function Modules() {
  const modules = [
    {
      id: "pay",
      icon: Wallet,
      title: "Pay: Portefeuilles Numériques",
      features: [
        "Gestion complète des portefeuilles clients",
        "Application mobile Android/iOS intuitive",
        "Accès aux services bancaires à distance",
        "Envoi/réception via Mobile Money",
        "Dépôt/retrait via réseau d'agents",
        "Mini-relevés et notifications en temps réel"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "connect",
      icon: Users,
      title: "Connect: Gestion des Agents",
      features: [
        "Inscription et gestion des profils d'agents",
        "Autorisation sécurisée des opérations d'entrée/sortie",
        "Surveillance en temps réel des performances",
        "Calcul et paiement automatisés des commissions"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      id: "api",
      icon: Network,
      title: "API et Intégrations",
      features: [
        "Architecture API RESTful modulaire",
        "Intégration Mobile Money (MTN, Orange)",
        "Connexion avec assureurs et outils d'analyse",
        "Environnement de test sécurisé pour partenaires"
      ],
      color: "from-emerald-500 to-green-600"
    }
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" id="services">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-ice via-transparent to-white"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy mb-6">
            Modules <span className="text-gradient">Complémentaires</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Des solutions spécialisées pour étendre les capacités de votre plateforme financière
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              id={module.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:transform hover:scale-105 transition-all duration-500 h-full scroll-mt-24"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${module.color} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <module.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-brand-navy mb-6">{module.title}</h3>

              <ul className="space-y-4">
                {module.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-slate-600">
                    <div className="w-2 h-2 bg-brand-ocean rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 py-3 bg-brand-ice hover:bg-white text-brand-ocean rounded-lg font-semibold transition-all duration-300 border border-brand-ocean/20">
                En savoir plus
              </button>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 glass-card p-8 lg:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-brand-navy mb-8">Partenariats Stratégiques</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              { name: "MTN MoMo", color: "from-yellow-500 to-orange-500" },
              { name: "Orange Money", color: "from-orange-500 to-red-500" },
              { name: "Smobilpay", color: "from-blue-500 to-purple-500" }
            ].map((partner) => (
              <div key={partner.name} className="text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${partner.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{partner.name.split(' ')[0].charAt(0)}</span>
                </div>
                <div className="text-brand-navy font-semibold">{partner.name}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-lg">
            Transactions fluides entre systèmes bancaires et portefeuilles mobiles
          </p>
        </motion.div>
      </div>
    </section>
  )
}

