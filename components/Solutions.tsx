'use client'

import { motion } from 'framer-motion'
import { Building2, Users, TrendingUp, Settings, CheckCircle2, ArrowRight, Play } from 'lucide-react'

const solutions = [
  {
    id: "imf",
    icon: Building2,
    title: "Pour les Institutions de Microfinance (IMF)",
    subtitle: "Solutions complètes pour transformer votre institution",
    description: "Kazimo offre une plateforme complète adaptée aux besoins spécifiques des IMF. Automatisez vos opérations, gérez vos portefeuilles et développez votre réseau d'agents avec des outils professionnels.",
    features: [
      "Gestion automatisée des prêts et épargnes",
      "Suivi en temps réel des portefeuilles clients",
      "Réseau d'agents géolocalisés",
      "Rapports réglementaires COBAC automatisés",
      "Intégration Mobile Money native",
      "Tableaux de bord analytiques avancés"
    ],
    gradient: "from-brand-ocean via-brand-sky to-brand-mint",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    stats: [
      { value: "50+", label: "IMF accompagnées" },
      { value: "98%", label: "Satisfaction client" },
      { value: "24/7", label: "Support dédié" }
    ],
    color: "from-brand-ocean to-brand-sky"
  },
  {
    id: "cooperatives",
    icon: Users,
    title: "Pour les Coopératives",
    subtitle: "Renforcez la solidarité financière de vos membres",
    description: "Notre plateforme permet aux coopératives de gérer efficacement leurs membres, leurs épargnes collectives et leurs prêts mutuels. Une solution pensée pour la gouvernance participative.",
    features: [
      "Gestion des membres et adhésions",
      "Épargne collective et prêts mutuels",
      "Assemblées générales digitalisées",
      "Transparence totale des opérations",
      "Rapports de gouvernance automatisés",
      "Application mobile pour les membres"
    ],
    gradient: "from-brand-mint via-brand-ocean to-brand-sky",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    stats: [
      { value: "200+", label: "Coopératives actives" },
      { value: "500K+", label: "Membres connectés" },
      { value: "95%", label: "Taux d'adoption" }
    ],
    color: "from-brand-mint to-brand-ocean"
  },
  {
    id: "neobanks",
    icon: TrendingUp,
    title: "Pour les Néo-banques",
    subtitle: "L'infrastructure technique pour votre banque digitale",
    description: "Kazimo fournit l'infrastructure complète pour lancer et opérer une néo-banque en Afrique. De l'onboarding client à la gestion des comptes, tout est inclus.",
    features: [
      "Infrastructure bancaire complète",
      "Onboarding digital KYC intégré",
      "Comptes courants et épargnes",
      "Cartes bancaires virtuelles et physiques",
      "API ouvertes pour intégrations",
      "Scalabilité cloud-native"
    ],
    gradient: "from-brand-sky via-brand-mint to-brand-ocean",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    stats: [
      { value: "15+", label: "Néo-banques" },
      { value: "1M+", label: "Comptes créés" },
      { value: "99.9%", label: "Uptime" }
    ],
    color: "from-brand-sky to-brand-mint"
  },
  {
    id: "enterprise",
    icon: Settings,
    title: "Solutions Entreprise",
    subtitle: "Sur mesure pour les grandes institutions",
    description: "Pour les grandes institutions financières, nous proposons des solutions sur mesure avec déploiement dédié, support prioritaire et personnalisation complète.",
    features: [
      "Déploiement sur infrastructure dédiée",
      "Personnalisation complète de l'interface",
      "Support technique 24/7 prioritaire",
      "Formation complète des équipes",
      "Accès au code source",
      "SLA garantis avec pénalités"
    ],
    gradient: "from-brand-ocean via-brand-navy to-brand-sky",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    stats: [
      { value: "10+", label: "Grandes institutions" },
      { value: "5M+", label: "Transactions/jour" },
      { value: "100%", label: "Satisfaction" }
    ],
    color: "from-brand-ocean to-brand-navy"
  }
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-ice/30 to-white"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy mb-6">
            Solutions <span className="text-gradient">Sur Mesure</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Des solutions adaptées à chaque type d'institution financière en Afrique
          </p>
        </motion.div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              id={solution.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="scroll-mt-24"
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Contenu texte */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center space-x-2 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center shadow-soft-lg`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-brand-ocean uppercase tracking-wider">
                      {solution.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {solution.stats.map((stat, idx) => (
                      <div key={idx} className="text-center p-4 rounded-xl bg-brand-ice">
                        <div className="text-2xl font-bold text-brand-ocean">{stat.value}</div>
                        <div className="text-xs text-slate-600 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-ocean to-brand-sky text-white font-semibold hover:shadow-soft-lg transition-all duration-300 group"
                  >
                    <span>Découvrir cette solution</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Image et vidéo */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-3xl overflow-hidden shadow-soft-xl group">
                    <div className={`aspect-video relative bg-gradient-to-br ${solution.gradient} flex items-center justify-center`}>
                      {/* Motif décoratif */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
                      </div>
                      
                      {/* Icône de la solution */}
                      <div className="relative z-10">
                        <div className={`w-32 h-32 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-soft-xl border border-white/30`}>
                          <solution.icon className="w-16 h-16 text-white" />
                        </div>
                      </div>
                      
                      {/* Bouton play vidéo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-soft-xl hover:scale-110 transition-transform duration-300 group/play z-20">
                          <Play className="w-8 h-8 text-brand-ocean ml-1 group-hover/play:scale-110" fill="currentColor" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 glass-card p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-brand-navy mb-4">
            Trouvez la solution adaptée à votre institution
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est prête à vous accompagner dans le choix et l'implémentation de la solution idéale pour votre contexte.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-ocean via-brand-sky to-brand-mint text-white font-semibold text-lg hover:shadow-soft-xl transition-all duration-300"
          >
            <span>Demander une démonstration</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

