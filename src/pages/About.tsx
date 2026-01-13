import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Target, 
  Heart,
  ChevronRight,
  Calendar,
  Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import SchemaMarkup from '@/components/SchemaMarkup';
import CertificationBadge from '@/components/CertificationBadge';
import CTASection from '@/components/CTASection';

const values = [
  {
    icon: Target,
    title: "Professionnalisme",
    description: "Chaque projet est traité avec rigueur et précision, du diagnostic initial à la livraison finale."
  },
  {
    icon: Award,
    title: "Qualité",
    description: "Des matériaux de premier choix et des techniques éprouvées pour des installations durables."
  },
  {
    icon: Heart,
    title: "Réactivité",
    description: "Intervention sous 48h et suivi personnalisé tout au long de votre projet."
  }
];

const certifications = [
  {
    name: "RGE",
    description: "Reconnu Garant de l'Environnement - Qualification pour travaux d'efficacité énergétique"
  },
  {
    name: "PG",
    description: "Professionnel du Gaz - Certification pour l'installation et la maintenance gaz"
  },
  {
    name: "Qualipac",
    description: "Qualification pour l'installation de pompes à chaleur et systèmes aérothermiques"
  }
];

const timeline = [
  { year: "2016", event: "Création de Paris Tout Services" },
  { year: "2018", event: "Obtention des certifications RGE et PG" },
  { year: "2020", event: "Expansion de l'équipe à 6 personnes" },
  { year: "2022", event: "Certification Qualipac" },
  { year: "2024", event: "9 collaborateurs et 500+ projets réalisés" }
];

const About = () => {
  const breadcrumbItems = [
    { name: 'Accueil', url: '/' },
    { name: 'Qui sommes-nous', url: '/a-propos' }
  ];

  return (
    <>
      <SEOHead 
        title="Entreprise de Plomberie & Gaz Île-de-France | À Propos - Paris Tout Services"
        description="Paris Tout Services : 8 ans d'expertise en plomberie et gaz pour professionnels. Équipe de 9 personnes certifiées RGE, PG, Qualipac en Île-de-France."
        canonical="/a-propos"
      />
      <SchemaMarkup type="localBusiness" />
      <SchemaMarkup type="breadcrumb" breadcrumbItems={breadcrumbItems} />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500 rounded-full blur-3xl" />
          </div>

          <div className="container-custom relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Qui sommes-nous</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Paris Tout Services, Votre Partenaire{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                  Plomberie et Gaz
                </span>{' '}
                depuis 2016
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Une équipe de 9 professionnels passionnés au service des promoteurs et gestionnaires d'habitat en Île-de-France.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Notre Histoire
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  8 Années d'Expertise au Service des Professionnels
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Fondée en 2016, Paris Tout Services est née de la volonté de proposer aux professionnels du bâtiment en Île-de-France un partenaire fiable et réactif pour tous leurs travaux de plomberie et d'installation gaz.
                  </p>
                  <p>
                    Depuis notre création, nous avons développé une expertise reconnue auprès des promoteurs immobiliers, des chefs de travaux et des gestionnaires d'habitat social. Notre croissance constante nous a permis de constituer une équipe de 9 techniciens qualifiés.
                  </p>
                  <p>
                    Nos certifications RGE, PG et Qualipac témoignent de notre engagement envers la qualité et le respect des normes les plus exigeantes du secteur.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-slate-50 rounded-3xl p-8">
                  <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Building className="w-5 h-5 text-blue-600" />
                    Notre Parcours
                  </h3>
                  <div className="space-y-6">
                    {timeline.map((item, index) => (
                      <motion.div
                        key={item.year}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="w-16 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {item.year}
                        </div>
                        <p className="text-slate-600 pt-1">{item.event}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Notre Équipe */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4">
                <Users className="w-4 h-4 inline mr-1" />
                Notre Équipe
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Une Équipe de{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  9 Professionnels Qualifiés
                </span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Des techniciens expérimentés et certifiés, formés aux dernières normes et techniques du secteur.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { count: "3", role: "Chefs d'équipe", desc: "Coordination des chantiers" },
                { count: "4", role: "Techniciens plombiers", desc: "Installation et maintenance" },
                { count: "2", role: "Spécialistes gaz", desc: "Installations certifiées PG" }
              ].map((item, index) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 text-center shadow-card border border-slate-100"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                    {item.count}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.role}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Nos Valeurs
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-4">
                <Award className="w-4 h-4 inline mr-1" />
                Nos Certifications
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Des Certifications qui Garantissent la{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                  Qualité
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <CertificationBadge 
                  key={cert.name} 
                  {...cert} 
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Prêt à Collaborer avec des Experts ?"
          subtitle="Discutons de votre projet et trouvons ensemble la meilleure solution."
          ctaText="Contactez-nous"
          ctaLink="/contact"
          variant="orange"
        />
      </main>

      <Footer />
    </>
  );
};

export default About;
