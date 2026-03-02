import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Secteurs', href: '/secteurs' },
    { name: 'Cas Clients', href: '/cas-clients' },
    { name: 'Innovation', href: '/innovation' },
    { name: 'Ressources', href: '/ressources' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold" style={{ color: '#0E1B2E' }}>
              ALTERIX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  location.pathname === item.href
                    ? 'text-white'
                    : 'hover:bg-muted'
                }`}
                style={
                  location.pathname === item.href
                    ? { backgroundColor: '#1F5EFF', color: 'white' }
                    : { color: '#0E1B2E' }
                }
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: '#0E1B2E' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base mb-1 ${
                  location.pathname === item.href
                    ? 'text-white'
                    : 'hover:bg-muted'
                }`}
                style={
                  location.pathname === item.href
                    ? { backgroundColor: '#1F5EFF', color: 'white' }
                    : { color: '#0E1B2E' }
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
