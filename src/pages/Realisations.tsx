import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Calendar, Building } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import SchemaMarkup from '@/components/SchemaMarkup';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';

const categories = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'plomberie', label: 'Plomberie' },
  { id: 'gaz', label: 'Gaz' },
  { id: 'pmr', label: 'PMR' },
  { id: 'ventilation', label: 'Ventilation' },
];

const projects = [
  {
    id: 1,
    title: "Rénovation plomberie immeuble 45 logements",
    category: "plomberie",
    location: "Paris 12ème",
    client: "GECop",
    duration: "3 mois",
    description: "Remplacement complet des colonnes montantes et descentes d'eau usées."
  },
  {
    id: 2,
    title: "Installation gaz résidence neuve",
    category: "gaz",
    location: "Montreuil (93)",
    client: "Groupe ERI",
    duration: "2 mois",
    description: "Mise en place du réseau gaz pour 28 logements avec certification PG."
  },
  {
    id: 3,
    title: "Adaptation PMR - EHPAD",
    category: "pmr",
    location: "Créteil (94)",
    client: "Acorus",
    duration: "6 semaines",
    description: "Rénovation de 15 salles de bain adaptées aux personnes à mobilité réduite."
  },
  {
    id: 4,
    title: "VMC double flux - Bâtiment tertiaire",
    category: "ventilation",
    location: "La Défense (92)",
    client: "GECop",
    duration: "1 mois",
    description: "Installation système VMC double flux haute performance énergétique."
  },
  {
    id: 5,
    title: "Réhabilitation plomberie hôtel",
    category: "plomberie",
    location: "Paris 8ème",
    client: "Groupe ERI",
    duration: "4 mois",
    description: "Rénovation complète des réseaux d'eau pour un hôtel 4 étoiles."
  },
  {
    id: 6,
    title: "Mise en conformité gaz copropriété",
    category: "gaz",
    location: "Versailles (78)",
    client: "Acorus",
    duration: "2 mois",
    description: "Remplacement des colonnes gaz et mise en conformité de 32 logements."
  },
];

const testimonials = [
  {
    quote: "Paris Tout Services a su répondre à nos exigences de qualité et de délais. Leur équipe est professionnelle et réactive. Un partenaire de confiance pour nos projets.",
    author: "Jean-Marc Dupont",
    role: "Chef de travaux",
    company: "GECop"
  },
  {
    quote: "Nous travaillons avec PTS depuis 3 ans. Leur expertise en installation gaz et leur certification PG sont des atouts majeurs pour nos chantiers.",
    author: "Sophie Martin",
    role: "Responsable technique",
    company: "Groupe ERI"
  },
  {
    quote: "Les équipes de Paris Tout Services maîtrisent parfaitement les normes PMR. Leurs réalisations pour nos EHPAD sont toujours impeccables.",
    author: "Pierre Lefebvre",
    role: "Directeur de projets",
    company: "Acorus"
  }
];

const Realisations = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const breadcrumbItems = [
    { name: 'Accueil', url: '/' },
    { name: 'Réalisations', url: '/realisations' }
  ];

  return (
    <>
      <SEOHead 
        title="Réalisations Plomberie & Gaz Professionnels IDF | Paris Tout Services"
        description="Découvrez nos projets de plomberie, gaz et ventilation pour promoteurs et gestionnaires en Île-de-France. Références GECop, Acorus, Groupe ERI."
        canonical="/realisations"
      />
      <SchemaMarkup type="localBusiness" />
      <SchemaMarkup type="breadcrumb" breadcrumbItems={breadcrumbItems} />
      
      <Header />
      
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500 rounded-full blur-3xl" />
          </div>

          <div className="container-custom relative z-10">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Réalisations</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Nos Réalisations en{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                  Plomberie et Installation Gaz
                </span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Plus de 500 projets réalisés pour les professionnels du bâtiment en Île-de-France.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white border-b border-slate-100 sticky top-20 z-30">
          <div className="container-custom">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-card border border-slate-100 hover:shadow-card-hover transition-shadow"
                  >
                    {/* Image placeholder */}
                    <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/20 text-6xl font-bold">
                          {project.id}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-white text-xs font-medium capitalize">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-slate-900 text-lg mb-3">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4">
                        {project.description}
                      </p>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-slate-500">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                          <Building className="w-4 h-4" />
                          <span>{project.client}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                          <Calendar className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4">
                Témoignages
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Ils Recommandent{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  Paris Tout Services
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Un Projet Similaire ? Parlons-en"
          subtitle="Contactez-nous pour discuter de votre projet et obtenir un devis gratuit."
          ctaText="Demander un devis"
          ctaLink="/contact"
          variant="dark"
        />
      </main>

      <Footer />
    </>
  );
};

export default Realisations;
