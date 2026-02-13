import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import logoPts from '@/assets/logo-pts-new.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const departments = [
    'Paris (75)', 'Hauts-de-Seine (92)', 'Seine-Saint-Denis (93)', 
    'Val-de-Marne (94)', 'Seine-et-Marne (77)', 'Yvelines (78)', 
    'Essonne (91)', "Val-d'Oise (95)"
  ];

  const services = [
    { name: 'Plomberie bâtiments', href: '/services#plomberie' },
    { name: 'Rénovation salle de bain', href: '/services#salle-de-bain' },
    { name: 'Installation gaz', href: '/services#gaz' },
    { name: 'Ventilation', href: '/services#ventilation' },
    { name: 'Chauffe-eau', href: '/services#chauffe-eau' },
  ];

  const links = [
    { name: 'Accueil', href: '/' },
    { name: 'Qui sommes-nous', href: '/a-propos' },
    { name: 'Nos services', href: '/services' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-6">
              <img src={logoPts} alt="Paris Tout Services" className="h-20 w-auto" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Expert en plomberie et installation gaz pour professionnels en Île-de-France depuis 2016.
            </p>
            <div className="flex gap-3">
              <div className="px-3 py-1.5 rounded-full bg-white/10 text-xs font-medium">RGE</div>
              <div className="px-3 py-1.5 rounded-full bg-white/10 text-xs font-medium">PG</div>
              <div className="px-3 py-1.5 rounded-full bg-white/10 text-xs font-medium">Qualipac</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm group"
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Liens Rapides</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm group"
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+33601167240" className="flex items-start gap-3 text-white/60 hover:text-white transition-colors text-sm">
                  <Phone className="w-4 h-4 mt-0.5 text-orange-500" />
                  <span>06 01 16 72 40</span>
                </a>
              </li>
              <li>
                <a href="mailto:paristoutservices@gmail.com" className="flex items-start gap-3 text-white/60 hover:text-white transition-colors text-sm">
                  <Mail className="w-4 h-4 mt-0.5 text-orange-500" />
                  <span>paristoutservices@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-orange-500" />
                <span>25 Rue Henri Rouanet<br />93700 Drancy</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Clock className="w-4 h-4 mt-0.5 text-orange-500" />
                <span>Lun - Ven : 8h - 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Departments */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="font-semibold mb-4">Zones d'intervention en Île-de-France</h4>
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <span key={dept} className="px-3 py-1.5 rounded-full bg-white/5 text-white/50 text-xs">
                {dept}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {currentYear} Paris Tout Services. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
