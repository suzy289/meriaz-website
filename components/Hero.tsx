"use client";

import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, Users, ArrowRight, Activity, CreditCard, Globe, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Formes décoratives en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cercles animés */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-brand-sky/30 to-brand-mint/30 blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-r from-brand-ocean/30 to-brand-sky/30 blur-3xl"
        />
        
        {/* Formes géométriques */}
        <div className="absolute top-40 left-10 w-32 h-32 border-4 border-brand-ocean/20 rounded-3xl transform rotate-12" />
        <div className="absolute bottom-40 right-10 w-24 h-24 border-4 border-brand-mint/20 rounded-full" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Contenu principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Badge animé */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-ocean/10 to-brand-sky/10 text-brand-ocean text-sm mb-6 border border-brand-ocean/20 shadow-soft-lg backdrop-blur-sm"
            >
              <Zap className="w-4 h-4 text-brand-ocean" />
              <span className="font-semibold">Plateforme digitale Kazimo</span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-brand-navy"
            >
              La plateforme pour le succès de votre{" "}
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-brand-ocean via-brand-sky to-brand-mint">
                microfinance en Afrique
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-600 text-xl mb-8 leading-relaxed"
            >
              Un socle technologique modulaire pensé pour les IMF, coopératives et néo-banques
              africaines. Automatisez vos opérations, sécurisez les flux et accélérez votre
              croissance.
            </motion.p>

            {/* Boutons CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#tarification"
                className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-ocean via-brand-sky to-brand-mint text-white font-semibold shadow-soft-xl hover:shadow-soft-2xl transition-all duration-300 text-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Voir les offres</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-mint via-brand-sky to-brand-ocean opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#technologie"
                className="px-8 py-4 rounded-2xl border-2 border-brand-ocean/30 text-brand-ocean font-semibold text-center hover:bg-brand-ocean/5 hover:border-brand-ocean transition-all duration-300 backdrop-blur-sm"
              >
                Explorer l'architecture
              </a>
            </motion.div>

            {/* Statistiques */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { icon: Building2, value: "25+", label: "Institutions", color: "from-brand-ocean to-brand-sky" },
                { icon: Shield, value: "98%", label: "Disponibilité", color: "from-brand-mint to-brand-ocean" },
                { icon: Activity, value: "24/7", label: "Support", color: "from-brand-sky to-brand-mint" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 hover:scale-105">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} mx-auto mb-3 flex items-center justify-center shadow-soft-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-brand-navy mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Colonne droite - Carte d'insights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 lg:p-10 relative overflow-hidden">
              {/* Formes décoratives dans la carte */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-sky/20 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-brand-mint/20 to-transparent rounded-tr-full" />

              <div className="relative z-10">
                {/* En-tête */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm uppercase tracking-[0.3em] text-slate-500 font-semibold">Insights</span>
                  </div>
                  <span className="text-xs text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Temps réel</span>
                </div>

                {/* Métriques */}
                <div className="grid gap-5 mb-6">
                  {[
                    { 
                      icon: Activity, 
                      label: "Transactions quotidiennes", 
                      value: "1 280", 
                      trend: "+18%",
                      color: "from-brand-ocean to-brand-sky"
                    },
                    { 
                      icon: CreditCard, 
                      label: "Volume Mobile Money", 
                      value: "125 000 000 XAF", 
                      trend: "+22%",
                      color: "from-brand-mint to-brand-ocean"
                    },
                    { 
                      icon: Users, 
                      label: "Clients utilisant notre solution", 
                      value: "450", 
                      trend: "+9%",
                      color: "from-brand-sky to-brand-mint"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="p-5 rounded-2xl bg-gradient-to-br from-white to-brand-ice/50 border border-slate-100 shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-soft-lg`}>
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <p className="text-slate-600 text-sm font-medium">{item.label}</p>
                        </div>
                        <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">{item.trend}</span>
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-brand-navy">{item.value}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Barre de connectivité */}
                <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-brand-ice to-white border border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-brand-ocean" />
                      <p className="text-slate-700 font-semibold text-sm">Connectivité</p>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">85%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-ocean via-brand-sky to-brand-mint shadow-soft-lg"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-3">API Banking • Mobile Money • KYC • Blockchain</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

