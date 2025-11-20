'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Calendar, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulaire soumis:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
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
            Contactez-<span className="text-gradient">Nous</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Prêt à transformer votre institution financière ? Parlons-en dès aujourd'hui !
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Prenez Rendez-Vous</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Contactez nos experts qualifiés pour discuter de solutions sur mesure adaptées
                aux besoins spécifiques de votre entreprise. Nous vous accompagnons dans la
                transformation de vos processus métier.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 glass-card rounded-2xl">
                <div className="w-12 h-12 bg-brand-ocean rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-500">Téléphone</p>
                  <p className="text-brand-navy font-semibold text-lg">+237 691 21 35 40</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 glass-card rounded-2xl">
                <div className="w-12 h-12 bg-brand-mint rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-500">Fondation</p>
                  <p className="text-brand-navy font-semibold text-lg">10 Novembre 2017</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 glass-card rounded-2xl">
                <div className="w-12 h-12 bg-brand-sunrise rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-500">Zone d'Intervention</p>
                  <p className="text-brand-navy font-semibold text-lg">Afrique Centrale et Australe</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-brand-navy font-bold mb-4 text-lg">Démarrez Votre Projet Aujourd'hui</h4>
              <p className="text-slate-600">
                Un simple appel suffit pour lancer votre transformation digitale !
                Notre équipe est disponible pour vous guider à chaque étape.
              </p>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 glass-card p-8 rounded-3xl"
          >
            <div>
              <label htmlFor="name" className="block text-brand-navy mb-2 font-semibold">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-brand-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-ocean focus:border-transparent transition-all duration-300"
                placeholder="Votre nom complet"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-brand-navy mb-2 font-semibold">Email professionnel</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-brand-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-ocean focus:border-transparent transition-all duration-300"
                placeholder="votre@institution.com"
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-brand-navy mb-2 font-semibold">Institution</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-brand-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-ocean focus:border-transparent transition-all duration-300"
                placeholder="Nom de votre institution financière"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-brand-navy mb-2 font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-brand-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-ocean focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Décrivez vos besoins et objectifs..."
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-brand-ocean to-brand-sky hover:shadow-soft-lg text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Envoyer la Demande
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

