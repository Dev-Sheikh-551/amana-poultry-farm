import { Link } from 'react-router-dom'
import { Leaf, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-forest-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center mb-4">
            <div className="w-24 h-24 flex items-center justify-center">
              <img src="/images/amana-logo.png" alt="Amana Poultry logo" className="w-24 h-24 object-contain" />
            </div>
            <div className="leading-tight">
            <span className="font-display font-bold text-white text-lg block leading-none">
              Amana Poultry
            </span>
            <span className="text-[10px] font-body font-500 text-forest-500 tracking-widest uppercase">
              Farm
            </span>
          </div>
          </div>
          <p className="text-forest-400 text-sm leading-relaxed font-body">
            Premium quail eggs, raised with care and delivered fresh to your door. Serving households
            and businesses across The Gambia.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-white font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm font-body">
            {[['/', 'Home'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-forest-400 hover:text-gold-400 transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-white font-semibold text-lg mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm font-body">
            <li className="flex items-start gap-2 text-forest-400">
              <MapPin size={15} className="mt-0.5 text-gold-400 flex-shrink-0" />
              Bakoteh, Banjul, The Gambia
            </li>
            <li className="flex items-center gap-2 text-forest-400">
              <Phone size={15} className="text-gold-400 flex-shrink-0" />
              <a href="tel:+2205938105" className="hover:text-gold-400 transition-colors">
                +220 5938105
              </a>
            </li>
            <li className="flex items-center gap-2 text-forest-400">
              <Mail size={15} className="text-gold-400 flex-shrink-0" />
              <a href="mailto:sheikhtijantouray551@gmail.com" className="hover:text-gold-400 transition-colors">
                sheikhtijantouray551@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-800 px-4 sm:px-6 py-5">
        <p className="text-center text-forest-500 text-xs font-body">
          © {new Date().getFullYear()} Amana Poultry Farm. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
