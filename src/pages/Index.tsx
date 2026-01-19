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

// Partner logos
import logoLNC from '@/assets/partners/lnc.png';
import logoBouygues from '@/assets/partners/bouygues.png';
import logoERI from '@/assets/partners/eri.png';
import logoAcorus from '@/assets/partners/acorus.png';
import logoGecop from '@/assets/partners/gecop.png';

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
    title: "Rénovation salle de bain",
    description: "Rénovation complète de salles de bain, conformes aux normes PMR et d'accessibilité en vigueur.",
    href: "/services#salle-de-bain"
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
  { name: "Les Nouveaux Constructeurs", logo: logoLNC },
  { name: "Bouygues Immobilier", logo: logoBouygues },
  { name: "Groupe ERI", logo: logoERI },
  { name: "Acorus", logo: logoAcorus },
  { name: "Gecop", logo: logoGecop },
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
        {/* Hero Section - Editorial Design */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F8F7F4] animated-gradient-bg">
          {/* Animated Blobs */}
          <div className="blob blob-blue w-[500px] h-[500px] top-20 -left-40 opacity-60" style={{ animationDelay: '0s' }} />
          <div className="blob blob-orange w-[400px] h-[400px] top-40 right-10 opacity-50" style={{ animationDelay: '-5s' }} />
          <div className="blob blob-cyan w-[300px] h-[300px] bottom-20 left-1/3 opacity-40" style={{ animationDelay: '-10s' }} />
          
          <div className="container-custom relative z-10 pt-32 pb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-xl"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-8">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium">Île-de-France</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-6 text-slate-900">
                  <span className="font-extralight">L'expertise</span>{' '}
                  <span className="font-normal italic text-blue-600">plomberie</span>
                  <br />
                  <span className="font-extralight">à chaque</span>{' '}
                  <span className="font-normal">intervention</span>
                </h1>

                <p className="text-lg text-slate-500 leading-relaxed mb-10 font-body">
                  Solutions certifiées RGE pour les professionnels du bâtiment.
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                  <Link to="/contact">
                    <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-6 text-sm font-medium">
                      Devis gratuit
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                  <Link to="/realisations">
                    <Button variant="outline" className="rounded-full px-8 py-6 text-sm font-medium border-slate-300 hover:bg-slate-100">
                      Nos réalisations
                    </Button>
                  </Link>
                </div>

                {/* Stats inline */}
                <div className="flex items-center gap-8">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white" />
                    ))}
                  </div>
                  <div>
                    <span className="text-2xl font-semibold text-slate-900">500+</span>
                    <span className="text-slate-500 ml-2 text-sm">projets réalisés</span>
                  </div>
                </div>
              </motion.div>

              {/* Right - Image Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                  <img 
                    src={heroImage} 
                    alt="Expert plombier professionnel" 
                    className="w-full h-[500px] lg:h-[600px] object-cover"
                  />
                  
                  {/* Floating Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Intervention sous</div>
                        <div className="font-semibold text-slate-900">48 heures</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Certification Tag */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="absolute top-6 left-6 bg-blue-600 rounded-full px-4 py-2"
                  >
                    <span className="text-sm font-medium text-white">Certifié RGE</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reassurance Bar */}
        <section className="bg-white border-b border-slate-100">
          <div className="container-custom py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {reassuranceItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
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
        <section className="section-padding bg-[#F8F7F4]">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                <span className="font-extralight">Gamme complète de solutions pour</span>
                <br />
                <span className="font-extralight">améliorer votre</span>{' '}
                <span className="italic text-blue-600">confort</span>
              </h2>
              <p className="text-lg text-slate-500 max-w-xl mx-auto mt-6">
                Des prestations certifiées adaptées aux professionnels du bâtiment.
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                <span className="font-extralight">Pourquoi les professionnels</span>
                <br />
                <span className="font-extralight">nous font</span>{' '}
                <span className="italic text-orange-500">confiance</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Building2,
                  title: "Expertise Technique",
                  description: "Une équipe de techniciens qualifiés avec plus de 8 ans d'expérience."
                },
                {
                  icon: Shield,
                  title: "Certifications Reconnues",
                  description: "Certifications RGE, PG et Qualipac garantissant des travaux conformes."
                },
                {
                  icon: Accessibility,
                  title: "Normes PMR & RT2012",
                  description: "Expertise en accessibilité et performance énergétique."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="p-8 rounded-3xl bg-[#F8F7F4] border border-slate-100"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners - Infinite Scroll */}
        <section className="py-16 bg-slate-900 overflow-hidden">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-2">
                Ils nous font confiance
              </h2>
              <p className="text-white/50 text-sm">Nos partenaires de longue date</p>
            </motion.div>
          </div>

          {/* Infinite scroll container */}
          <div className="relative">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 mx-8 w-40 h-24 rounded-2xl bg-white flex items-center justify-center p-4"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="section-padding bg-[#F8F7F4]">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                <span className="font-extralight">Nous intervenons dans</span>{' '}
                <span className="italic text-blue-600">toute l'Île-de-France</span>
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
                  className="p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors text-center group"
                >
                  <div className="text-2xl font-semibold text-blue-600 mb-1 group-hover:scale-110 transition-transform">
                    {dept.code}
                  </div>
                  <div className="text-sm text-slate-600">{dept.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Un projet en tête ?"
          subtitle="Devis gratuit et personnalisé sous 24h."
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
