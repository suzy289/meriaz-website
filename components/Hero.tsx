"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-36 pb-24 hero-grid">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 text-orange-300 text-sm mb-6 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Plateforme digitale Meriaz</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            La solution complète pour la microfinance{" "}
            <span className="text-gradient">de nouvelle génération</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Un socle technologique modulaire pensé pour les IMF, coopératives et néo-banques
            africaines. Automatisez vos opérations, sécurisez les flux et accélérez votre
            croissance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#tarification"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold shadow-lg shadow-orange-500/30 text-center"
            >
              Voir les offres
            </a>
            <a
              href="#technologie"
              className="px-8 py-4 rounded-2xl border border-white/20 text-white font-semibold text-center hover:bg-white/10 transition-colors"
            >
              Explorer l'architecture
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 text-center sm:text-left">
            {[
              { value: "50+", label: "Institutions accompagnées" },
              { value: "98%", label: "Disponibilité mesurée" },
              { value: "24/7", label: "Support proactif" }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-orange-500/10 pointer-events-none" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm uppercase tracking-[0.3em] text-gray-400">Insights</span>
              <span className="text-xs text-gray-500">Temps réel</span>
            </div>
            <div className="grid gap-6">
              {[
                { label: "Transactions quotidiennes", value: "2 450", trend: "+18%" },
                { label: "Volume Mobile Money", value: "385 M XAF", trend: "+22%" },
                { label: "Agents actifs", value: "1 245", trend: "+9%" }
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <span className="text-emerald-400 text-xs font-semibold">{item.trend}</span>
                  </div>
                  <div className="text-2xl font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-gray-400 text-sm mb-2">Connectivité</p>
              <div className="w-full h-2 rounded-full bg-white/10">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-purple-500 to-orange-500" />
              </div>
              <p className="text-xs text-gray-500 mt-2">API Banking, Mobile Money, KYC</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

