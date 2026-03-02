import { Link } from 'react-router';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0E1B2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ALTERIX</h3>
            <p className="text-gray-300 mb-4">
              Solutions digitales innovantes pour transformer votre entreprise
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-[#5FA8FF] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="hover:text-[#5FA8FF] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/solutions" className="hover:text-[#5FA8FF] transition-colors">
                  Nos Solutions
                </Link>
              </li>
              <li>
                <Link to="/secteurs" className="hover:text-[#5FA8FF] transition-colors">
                  Secteurs
                </Link>
              </li>
              <li>
                <Link to="/cas-clients" className="hover:text-[#5FA8FF] transition-colors">
                  Cas Clients
                </Link>
              </li>
              <li>
                <Link to="/innovation" className="hover:text-[#5FA8FF] transition-colors">
                  Innovation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/ressources" className="hover:text-[#5FA8FF] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/ressources" className="hover:text-[#5FA8FF] transition-colors">
                  Livres Blancs
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-[#5FA8FF] transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#5FA8FF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span>contact@alterix.fr</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 flex-shrink-0 mt-1" />
                <span>123 Avenue de l'Innovation<br />75001 Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2026 ALTERIX. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
