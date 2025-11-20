'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, FileCheck, Eye, CheckCircle2, Award, AlertTriangle, ArrowRight, CreditCard } from 'lucide-react'

const securityFeatures = [
  {
    id: "cobac",
    icon: Shield,
    title: "Conformité COBAC",
    subtitle: "Respect total des réglementations bancaires",
    description: "Kazimo est entièrement conforme aux exigences de la Commission Bancaire de l'Afrique Centrale (COBAC). Notre plateforme respecte toutes les normes réglementaires en vigueur pour les institutions de microfinance.",
    features: [
      "Conformité aux directives COBAC sur les IMF",
      "Rapports réglementaires automatisés (mensuels, trimestriels, annuels)",
      "Respect des ratios de solvabilité et de liquidité",
      "Gestion conforme des provisions pour créances douteuses",
      "Traçabilité complète de toutes les opérations",
      "Archivage sécurisé des documents réglementaires"
    ],
    gradient: "from-brand-ocean to-brand-sky",
    stats: [
      { value: "100%", label: "Conformité COBAC" },
      { value: "0", label: "Non-conformités détectées" },
      { value: "24/7", label: "Surveillance continue" }
    ]
  },
  {
    id: "encryption",
    icon: Lock,
    title: "Chiffrement AES-256",
    subtitle: "Protection maximale des données sensibles",
    description: "Toutes les données financières et personnelles sont protégées par un chiffrement AES-256, le standard de l'industrie bancaire. Les communications utilisent TLS 1.3 pour garantir la confidentialité en transit.",
    features: [
      "Chiffrement AES-256 pour données au repos",
      "Protocole TLS 1.3 pour données en transit",
      "Gestion sécurisée des clés de chiffrement",
      "Rotation automatique des certificats SSL",
      "Isolation des données par client",
      "Backup chiffré avec réplication géographique"
    ],
    gradient: "from-brand-mint to-brand-ocean",
    stats: [
      { value: "AES-256", label: "Standard bancaire" },
      { value: "TLS 1.3", label: "Protocole sécurisé" },
      { value: "100%", label: "Données chiffrées" }
    ]
  },
  {
    id: "audit",
    icon: FileCheck,
    title: "Audit & Certification",
    subtitle: "Certifications et audits réguliers",
    description: "Notre infrastructure fait l'objet d'audits de sécurité réguliers par des experts indépendants. Nous maintenons les certifications ISO 27001 et suivons les meilleures pratiques de sécurité de l'information.",
    features: [
      "Audits de sécurité trimestriels par des tiers",
      "Tests d'intrusion (penetration testing) annuels",
      "Certification ISO 27001 en cours",
      "Conformité PCI DSS pour les paiements",
      "Revue annuelle des contrôles de sécurité",
      "Rapports d'audit disponibles sur demande"
    ],
    gradient: "from-brand-sky to-brand-mint",
    stats: [
      { value: "ISO 27001", label: "En cours" },
      { value: "4x/an", label: "Audits sécurité" },
      { value: "A+", label: "Note SSL Labs" }
    ]
  }
]

const certifications = [
  { name: "COBAC", description: "Conformité totale", icon: Shield },
  { name: "AES-256", description: "Chiffrement bancaire", icon: Lock },
  { name: "TLS 1.3", description: "Transport sécurisé", icon: Lock },
  { name: "ISO 27001", description: "Sécurité de l'information", icon: Award },
  { name: "PCI DSS", description: "Paiements sécurisés", icon: CreditCard },
  { name: "RBAC", description: "Contrôle d'accès", icon: Eye }
]

export default function Securite() {
  return (
    <section id="securite" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-ice/50 via-white to-brand-ice/30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-ice text-brand-ocean text-sm mb-6 border border-brand-ocean/20">
            <Shield className="w-4 h-4" />
            <span>Sécurité & Conformité</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy mb-6">
            Sécurité <span className="text-gradient">Bancaire</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Des standards de sécurité de niveau entreprise et une conformité totale avec les réglementations africaines
          </p>
        </motion.div>

        {/* Sections de sécurité */}
        <div className="space-y-24 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              id={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="scroll-mt-24"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Contenu texte */}
                <div>
                  <div className="inline-flex items-center space-x-2 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-soft-lg`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-brand-ocean uppercase tracking-wider">
                      {feature.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {feature.stats.map((stat, idx) => (
                      <div key={idx} className="text-center p-4 rounded-xl bg-brand-ice">
                        <div className="text-2xl font-bold text-brand-ocean">{stat.value}</div>
                        <div className="text-xs text-slate-600 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div>
                  <div className={`aspect-video rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-soft-xl relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
                      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
                    </div>
                    <div className="relative z-10 text-center text-white">
                      <feature.icon className="w-24 h-24 mx-auto mb-4 opacity-90" />
                      <p className="text-xl font-semibold">{feature.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8 lg:p-12 mb-16"
        >
          <h3 className="text-3xl font-bold text-brand-navy text-center mb-12">
            Certifications & Standards
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-brand-ice hover:bg-white transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-brand-ocean to-brand-sky flex items-center justify-center shadow-soft-lg">
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-brand-navy mb-2">{cert.name}</div>
                <div className="text-sm text-slate-600">{cert.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-brand-navy mb-4">
            Votre sécurité est notre priorité absolue
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Découvrez comment nous protégeons vos données et celles de vos clients avec des standards bancaires de niveau entreprise.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-ocean via-brand-sky to-brand-mint text-white font-semibold text-lg hover:shadow-soft-xl transition-all duration-300"
          >
            <span>Demander un audit de sécurité</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

