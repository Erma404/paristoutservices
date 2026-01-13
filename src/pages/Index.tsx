import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Shield, 
  Clock, 
  Award, 
  BadgeCheck,
  Wrench,
  Flame,
  Wind,
  Droplets,
  Accessibility,
  MapPin,
  Building2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import heroImage from '@/assets/hero-plumber.jpg';

const reassuranceItems = [
  { icon: Award, label: "8 ans d'expérience", value: "2016" },
  { icon: Shield, label: "Certifié RGE & PG", value: "Qualité" },
  { icon: Clock, label: "Interventions sous 48h", value: "Rapide" },
  { icon: BadgeCheck, label: "Garantie décennale", value: "Sécurité" },
];

const services = [
  {
    icon: Droplets,
    title: "Installation plomberie grands bâtiments",
    description: "Pose et raccordement de canalisations pour immeubles, hôtels et établissements publics en Île-de-France.",
    href: "/services#plomberie"
  },
  {
    icon: Accessibility,
    title: "Rénovation salle de bain PMR",
    description: "Aménagement adapté aux personnes à mobilité réduite, conforme aux normes d'accessibilité en vigueur.",
    href: "/services#pmr"
  },
  {
    icon: Flame,
    title: "Installation gaz certifiée",
    description: "Installation et mise en conformité gaz par des techniciens certifiés PG pour votre sécurité.",
    href: "/services#gaz"
  },
  {
    icon: Wind,
    title: "Systèmes de ventilation",
    description: "Installation VMC simple et double flux, gaines et bouches d'extraction pour un air sain.",
    href: "/services#ventilation"
  },
  {
    icon: Wrench,
    title: "Remplacement chauffe-eau",
    description: "Installation et remplacement de ballons d'eau chaude et chauffe-eau thermodynamiques.",
    href: "/services#chauffe-eau"
  },
];

const partners = [
  { name: "GECop", logo: "GC" },
  { name: "Acorus", logo: "AC" },
  { name: "Groupe ERI", logo: "ERI" },
];

const departments = [
  { name: "Paris", code: "75" },
  { name: "Hauts-de-Seine", code: "92" },
  { name: "Seine-Saint-Denis", code: "93" },
  { name: "Val-de-Marne", code: "94" },
  { name: "Seine-et-Marne", code: "77" },
  { name: "Yvelines", code: "78" },
  { name: "Essonne", code: "91" },
  { name: "Val-d'Oise", code: "95" },
];

const Index = () => {
  return (
    <>
      <SEOHead 
        title="Plomberie & Gaz Professionnels Île-de-France | Paris Tout Services"
        description="Expert en plomberie, installation gaz et ventilation pour professionnels en Île-de-France depuis 2016. Certifié RGE, PG, Qualipac. Devis rapide."
        canonical="/"
      />
      <SchemaMarkup type="localBusiness" />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Expert plombier professionnel au travail en Île-de-France" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
          </div>

          <div className="container-custom relative z-10 pt-32 pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/90 text-sm font-medium">Interventions dans toute l'Île-de-France</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Expert en Plomberie et Installation Gaz pour{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                    Professionnels
                  </span>{' '}
                  en Île-de-France
                </h1>

                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                  Depuis 2016, Paris Tout Services accompagne promoteurs, chefs de travaux et gestionnaires d'habitat avec des solutions certifiées RGE, PG et Qualipac.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Link to="/contact">
                    <Button variant="hero" size="lg">
                      Demander un devis gratuit
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/realisations">
                    <Button variant="heroOutline" size="lg">
                      Nos réalisations
                    </Button>
                  </Link>
                </div>

                {/* Certification Badges */}
                <div className="flex flex-wrap gap-3">
                  {['RGE', 'PG', 'Qualipac'].map((cert) => (
                    <div 
                      key={cert}
                      className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm"
                    >
                      Certifié {cert}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:block"
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold text-white mb-2">8+</div>
                      <div className="text-white/70 text-sm">Années d'expérience</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold text-white mb-2">500+</div>
                      <div className="text-white/70 text-sm">Projets réalisés</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold text-white mb-2">9</div>
                      <div className="text-white/70 text-sm">Experts qualifiés</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold text-white mb-2">48h</div>
                      <div className="text-white/70 text-sm">Délai intervention</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
              <div className="w-1.5 h-3 rounded-full bg-white/50" />
            </div>
          </motion.div>
        </section>

        {/* Reassurance Bar */}
        <section className="bg-white border-b border-slate-100">
          <div className="container-custom py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {reassuranceItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{item.label}</div>
                    <div className="text-xs text-slate-500">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                Nos Expertises
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Nos Solutions Professionnelles en{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  Plomberie et Gaz
                </span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Des prestations adaptées aux besoins des promoteurs, chefs de travaux et gestionnaires d'habitat en Île-de-France.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard 
                  key={service.title} 
                  {...service} 
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4">
                Notre Différence
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Pourquoi les Professionnels nous font{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Confiance
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Building2,
                  title: "Expertise Technique",
                  description: "Une équipe de 9 professionnels qualifiés avec plus de 8 ans d'expérience dans les travaux de plomberie et gaz pour le secteur professionnel."
                },
                {
                  icon: Shield,
                  title: "Certifications Reconnues",
                  description: "Titulaires des certifications RGE, PG et Qualipac, garantissant des travaux conformes aux normes les plus exigeantes."
                },
                {
                  icon: Accessibility,
                  title: "Normes PMR & RT2012",
                  description: "Expertise spécifique dans l'adaptation des locaux aux normes d'accessibilité et de performance énergétique."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ils nous font Confiance
              </h2>
              <p className="text-white/70">Nos partenaires de longue date</p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-32 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                >
                  <span className="text-white font-bold text-xl">{partner.logo}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                <MapPin className="w-4 h-4 inline mr-1" />
                Zones d'Intervention
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Nous Intervenons dans toute l'{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  Île-de-France
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors text-center group"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1 group-hover:scale-110 transition-transform">
                    {dept.code}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">{dept.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Votre Projet Nécessite un Expert Qualifié ?"
          subtitle="Contactez-nous pour un devis gratuit et personnalisé sous 24h."
          ctaText="Contactez-nous"
          ctaLink="/contact"
          variant="dark"
        />
      </main>

      <Footer />
    </>
  );
};

export default Index;
