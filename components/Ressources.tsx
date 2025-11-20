'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  BookOpen, 
  HelpCircle, 
  Newspaper, 
  Download, 
  ExternalLink, 
  PlayCircle,
  Code,
  Shield,
  CheckCircle2,
  ArrowRight,
  Video,
  FileCode,
  BookMarked,
  MessageCircle,
  Rocket,
  Database,
  Users,
  Activity,
  TrendingUp
} from 'lucide-react'

const ressources = [
  {
    id: "docs",
    icon: FileText,
    title: "Documentation Technique",
    subtitle: "Référence complète de l'API et des modules",
    description: "Accédez à la documentation complète de notre plateforme : guides API, schémas de données, exemples de code et meilleures pratiques pour intégrer Kazimo à votre infrastructure.",
    color: "from-brand-ocean to-brand-sky",
    items: [
      {
        title: "Guide de démarrage rapide",
        description: "Installez et configurez Kazimo en 15 minutes",
        icon: Rocket,
        link: "#",
        type: "guide"
      },
      {
        title: "Référence API complète",
        description: "Tous les endpoints, paramètres et réponses",
        icon: Code,
        link: "#",
        type: "api",
        badge: "API"
      },
      {
        title: "SDK et bibliothèques",
        description: "Kits de développement pour JavaScript, Python, PHP",
        icon: FileCode,
        link: "#",
        type: "sdk"
      },
      {
        title: "Schémas de données",
        description: "Modèles de données et structures JSON",
        icon: Database,
        link: "#",
        type: "schema"
      }
    ],
    gradient: "from-brand-ocean via-brand-sky to-brand-mint"
  },
  {
    id: "guides",
    icon: BookOpen,
    title: "Guides & Tutoriels",
    subtitle: "Apprenez à utiliser Kazimo étape par étape",
    description: "Des tutoriels vidéo et guides écrits pour maîtriser tous les aspects de la plateforme, de la configuration initiale aux cas d'usage avancés.",
    color: "from-brand-mint to-brand-ocean",
    items: [
      {
        title: "Vidéo : Premiers pas avec Kazimo",
        description: "Découvrez l'interface et les fonctionnalités de base",
        icon: PlayCircle,
        link: "#",
        type: "video",
        duration: "12 min"
      },
      {
        title: "Guide : Configurer votre premier portefeuille",
        description: "Tutoriel complet avec captures d'écran",
        icon: BookMarked,
        link: "#",
        type: "tutorial"
      },
      {
        title: "Vidéo : Intégrer Mobile Money",
        description: "Connectez MTN et Orange Money en 5 minutes",
        icon: Video,
        link: "#",
        type: "video",
        duration: "8 min"
      },
      {
        title: "Guide : Gérer votre réseau d'agents",
        description: "Optimisez la distribution de vos services",
        icon: Users,
        link: "#",
        type: "guide"
      }
    ],
    gradient: "from-brand-mint via-brand-ocean to-brand-sky"
  },
  {
    id: "help",
    icon: HelpCircle,
    title: "Centre d'Aide",
    subtitle: "Support et assistance 24/7",
    description: "Trouvez rapidement des réponses à vos questions, contactez notre équipe de support ou consultez la base de connaissances enrichie quotidiennement.",
    color: "from-brand-sky to-brand-mint",
    items: [
      {
        title: "FAQ - Questions fréquentes",
        description: "Plus de 200 questions-réponses sur la plateforme",
        icon: MessageCircle,
        link: "#",
        type: "faq"
      },
      {
        title: "Chat en direct",
        description: "Discutez avec notre équipe en temps réel",
        icon: MessageCircle,
        link: "#",
        type: "chat",
        badge: "En ligne"
      },
      {
        title: "Créer un ticket support",
        description: "Soumettez une demande d'assistance technique",
        icon: FileText,
        link: "#",
        type: "ticket"
      },
      {
        title: "Statut des services",
        description: "Vérifiez l'état de tous nos services en temps réel",
        icon: Activity,
        link: "#",
        type: "status"
      }
    ],
    gradient: "from-brand-sky via-brand-mint to-brand-ocean"
  },
  {
    id: "blog",
    icon: Newspaper,
    title: "Blog & Actualités",
    subtitle: "Restez informé des dernières nouveautés",
    description: "Actualités de la microfinance, tendances technologiques, témoignages clients et analyses approfondies sur l'innovation financière en Afrique.",
    color: "from-brand-ocean to-brand-navy",
    items: [
      {
        title: "L'avenir de la microfinance digitale en Afrique",
        description: "Analyse des tendances et opportunités du marché",
        icon: TrendingUp,
        link: "#",
        type: "article",
        date: "15 Jan 2024"
      },
      {
        title: "Témoignage : Comment une IMF a doublé ses clients",
        description: "Retour d'expérience de la Coopérative Financière XYZ",
        icon: Users,
        link: "#",
        type: "case-study",
        date: "10 Jan 2024"
      },
      {
        title: "Nouvelle fonctionnalité : API GraphQL disponible",
        description: "Découvrez notre nouvelle API plus flexible et performante",
        icon: Code,
        link: "#",
        type: "announcement",
        date: "5 Jan 2024",
        badge: "Nouveau"
      },
      {
        title: "Webinaire : Sécurité des données financières",
        description: "Replay disponible - Best practices et conformité",
        icon: Shield,
        link: "#",
        type: "webinar",
        date: "1 Jan 2024"
      }
    ],
    gradient: "from-brand-ocean via-brand-navy to-brand-sky"
  }
]

export default function Ressources() {
  return (
    <section id="ressources" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-ice/50 via-white to-brand-ice/30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy mb-6">
            Ressources & <span className="text-gradient">Documentation</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tout ce dont vous avez besoin pour réussir avec Kazimo
          </p>
        </motion.div>

        <div className="space-y-24">
          {ressources.map((ressource, index) => (
            <motion.div
              key={ressource.id}
              id={ressource.id}
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
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${ressource.color} flex items-center justify-center shadow-soft-lg`}>
                      <ressource.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-brand-ocean uppercase tracking-wider">
                      {ressource.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
                    {ressource.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {ressource.description}
                  </p>

                  {/* Liste des ressources */}
                  <div className="space-y-3">
                    {ressource.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="group block p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-ocean/50 hover:shadow-soft-lg transition-all duration-300"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3 flex-1">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${ressource.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                              <item.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <h4 className="font-semibold text-brand-navy group-hover:text-brand-ocean transition-colors">
                                  {item.title}
                                </h4>
                                {item.badge && (
                                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-slate-600 mb-1">{item.description}</p>
                              {item.date && (
                                <span className="text-xs text-slate-400">{item.date}</span>
                              )}
                              {item.duration && (
                                <span className="text-xs text-slate-400">Durée : {item.duration}</span>
                              )}
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-brand-ocean group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div>
                  <div className="relative rounded-3xl overflow-hidden shadow-soft-xl">
                    <div className={`aspect-video relative bg-gradient-to-br ${ressource.gradient} flex items-center justify-center`}>
                      {/* Motif décoratif */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
                      </div>
                      
                      {/* Icône de la ressource */}
                      <div className="relative z-10">
                        <div className={`w-32 h-32 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-soft-xl border border-white/30`}>
                          <ressource.icon className="w-16 h-16 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section API avec icône verte */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 glass-card p-12"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-soft-lg">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy">API Kazimo</h3>
                  <p className="text-slate-600">Documentation technique complète</p>
                </div>
              </div>
            </div>
            <a
              href="#docs"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold hover:shadow-soft-lg transition-all duration-300 flex items-center space-x-2"
            >
              <span>Accéder à l'API</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Endpoints", value: "150+", icon: Code },
              { label: "Taux de disponibilité", value: "99.9%", icon: Shield },
              { label: "Temps de réponse", value: "< 200ms", icon: Activity }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-brand-ice">
                <stat.icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-brand-navy mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

