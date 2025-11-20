'use client'

import { motion } from 'framer-motion'
import { Shield, FileCheck, Lock, Eye } from 'lucide-react'

export default function Compliance() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Conformité Réglementaire",
      items: [
        "Entièrement conforme aux exigences COBAC",
        "Rapports réglementaires automatisés",
        "Résidence des données en Afrique centrale"
      ]
    },
    {
      icon: FileCheck,
      title: "Sécurité Opérationnelle",
      items: [
        "Scans réguliers de vulnérabilités",
        "Tests d'intrusion périodiques",
        "Journaux d'audit obligatoires"
      ]
    },
    {
      icon: Lock,
      title: "Protection des Données",
      items: [
        "Chiffrement AES-256 pour données au repos",
        "Protocole TLS pour données en transit",
        "Authentification multifactorielle"
      ]
    },
    {
      icon: Eye,
      title: "Contrôle d'Accès",
      items: [
        "Contrôle d'accès basé sur les rôles (RBAC)",
        "Suivi rigoureux des accès sensibles",
        "Revue périodique des permissions"
      ]
    }
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
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
            Conformité & <span className="text-gradient">Sécurité</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Des standards de sécurité bancaire et une conformité totale avec les réglementations africaines
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:transform hover:scale-105 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl mb-6 flex items-center justify-center group-hover:from-orange-500 group-hover:to-green-500 transition-all duration-500">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-brand-navy mb-6">{feature.title}</h3>

              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-slate-600">
                    <div className="w-1.5 h-1.5 bg-brand-mint rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{item}</span>
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
          className="glass-card p-8 lg:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-brand-navy mb-8">Certifications et Standards</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "COBAC", description: "Conformité Totale" },
              { name: "AES-256", description: "Chiffrement" },
              { name: "TLS 1.3", description: "Transport Sécurisé" },
              { name: "RBAC", description: "Contrôle Accès" }
            ].map((cert) => (
              <div key={cert.name} className="bg-brand-ice rounded-xl p-4">
                <div className="text-brand-navy font-bold text-lg mb-2">{cert.name}</div>
                <div className="text-brand-mint text-sm">{cert.description}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

