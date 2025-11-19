'use client'

import { motion } from 'framer-motion'
import { Server, Smartphone, Shield, Cloud } from 'lucide-react'

export default function Architecture() {
  const layers = [
    {
      icon: Cloud,
      title: "Infrastructure Cloud",
      description: "Hébergement sécurisé sur AWS ou Azure",
      features: ["Évolutivité garantie", "Haute disponibilité", "Sauvegarde automatique"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Microservices & API",
      description: "Architecture modulaire avec API RESTful",
      features: ["Scalabilité horizontale", "Déploiement indépendant", "Résilience"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Couche Mobile",
      description: "Interfaces optimisées et support USSD",
      features: ["Android/iOS", "USSD inclusif", "Expérience intuitive"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Sécurité Données",
      description: "Protection bancaire de niveau enterprise",
      features: ["Chiffrement AES-256", "TLS 1.3", "Authentification MFA"],
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section id="technologie" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-blue-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Architecture <span className="text-gradient">Technique</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conception robuste et évolutive pour supporter la croissance de votre institution
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:transform hover:scale-105 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${layer.color} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <layer.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{layer.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{layer.description}</p>

              <ul className="space-y-2">
                {layer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                    {feature}
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
          <h3 className="text-3xl font-bold text-white text-center mb-12">Écosystème Technique Meriaz</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              {
                layer: "Application",
                components: ["Portefeuilles Numériques", "Gestion des Agents", "Analytics & Reporting"]
              },
              {
                layer: "Services",
                components: ["Middleware & APIs", "Microservices", "API Gateway RESTful"]
              },
              {
                layer: "Infrastructure",
                components: ["Base de Données", "Cache Redis", "Authentification & Sécurité"]
              },
              {
                layer: "Cloud",
                components: ["AWS/Azure", "Load Balancing", "Monitoring 24/7"]
              }
            ].map((stack) => (
              <div key={stack.layer} className="bg-white/5 rounded-2xl p-6">
                <h4 className="text-orange-400 font-bold text-lg mb-4">{stack.layer}</h4>
                <ul className="space-y-2">
                  {stack.components.map((component) => (
                    <li key={component} className="text-gray-300 text-sm">
                      {component}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

