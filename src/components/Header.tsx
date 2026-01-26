import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoPts from '@/assets/logo-pts.png';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Qui sommes-nous', href: '/a-propos' },
  { name: 'Nos services', href: '/services' },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img src={logoPts} alt="Paris Tout Services" className="h-12 w-auto" />
              <div className={`transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-slate-900'
              }`}>
                <div className="font-display text-xl font-normal tracking-tight">Paris Tout Services</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-600 hover:text-slate-900'
                  } ${location.pathname === item.href ? 'text-slate-900' : ''}`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-blue-600"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="tel:+33601167240"
                className="flex items-center gap-2 text-sm font-medium text-slate-600"
              >
                <Phone className="w-4 h-4" />
                06 01 16 72 40
              </a>
              <Link to="/contact">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 text-sm">
                  Devis gratuit
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                isScrolled ? 'text-navy hover:bg-muted' : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-0 z-40 pt-24 pb-6 px-4 bg-white shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-secondary/10 text-secondary'
                      : 'text-navy hover:bg-muted'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-muted">
                <a 
                  href="tel:+33601167240"
                  className="flex items-center gap-2 px-4 py-3 text-navy font-medium"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  06 01 16 72 40
                </a>
                <Link to="/contact" className="block mt-2">
                  <Button variant="hero" size="lg" className="w-full">
                    Devis gratuit
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
