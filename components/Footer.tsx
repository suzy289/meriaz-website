export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <span className="text-white text-xl font-bold block">Meriaz</span>
                <span className="text-orange-400 text-sm font-medium block">La finance de A à Z</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Plateforme modulaire de finance numérique conçue pour le succès des IMF,
              coopératives et banques communautaires en Afrique.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook'].map((social) => (
                <div key={social} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-orange-500 transition-all duration-300">
                  <span className="text-white text-sm font-medium">{social.charAt(0)}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {['Accueil', 'Services', 'Technologie', 'Tarification', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div>+237 691 21 35 40</div>
              <div>Fondé le 10 Novembre 2017</div>
              <div>Afrique Centrale</div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Meriaz. Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-orange-400 transition-colors duration-300">Confidentialité</a>
            <a href="#" className="hover:text-orange-400 transition-colors duration-300">Conditions</a>
            <a href="#" className="hover:text-orange-400 transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

