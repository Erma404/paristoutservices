import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Building, Eye } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import SchemaMarkup from '@/components/SchemaMarkup';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import ProjectDetailModal, { Project } from '@/components/ProjectDetailModal';

const categories = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'plomberie', label: 'Plomberie' },
  { id: 'gaz', label: 'Gaz' },
  { id: 'salle-de-bain', label: 'Salle de bain' },
  { id: 'ventilation', label: 'Ventilation' },
];

const projects: Project[] = [
  {
    id: 1,
    title: "Rénovation plomberie immeuble 45 logements",
    category: "plomberie",
    location: "Paris 12ème",
    client: "GECop",
    duration: "3 mois",
    description: "Remplacement complet des colonnes montantes et descentes d'eau usées.",
    fullDescription: "Ce projet d'envergure consistait à rénover l'ensemble du réseau de plomberie d'un immeuble haussmannien de 45 logements.",
    challenges: [
      "Intervention en site occupé avec maintien du service d'eau",
      "Contraintes architecturales liées au bâtiment ancien",
      "Coordination avec les autres corps de métier"
    ],
    solutions: [
      "Mise en place d'un planning d'intervention par colonne avec coupures programmées",
      "Utilisation de techniques de rénovation adaptées au bâti ancien",
      "Installation de colonnes en cuivre et PER multicouche haute qualité"
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&auto=format&fit=crop", caption: "Vue d'ensemble des colonnes montantes rénovées" },
      { url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop", caption: "Détail des raccordements en cuivre" },
      { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop", caption: "Installation des vannes d'arrêt" }
    ]
  },
  {
    id: 2,
    title: "Installation gaz résidence neuve",
    category: "gaz",
    location: "Drancy (93)",
    client: "Groupe ERI",
    duration: "2 mois",
    description: "Mise en place du réseau gaz pour 28 logements avec certification PG.",
    fullDescription: "Installation complète du réseau de distribution gaz pour une résidence neuve de 28 logements.",
    challenges: [
      "Respect des normes strictes de sécurité gaz",
      "Coordination avec le planning général du chantier neuf",
      "Obtention des certifications dans les délais"
    ],
    solutions: [
      "Équipe dédiée composée de techniciens certifiés PG",
      "Contrôles qualité à chaque étape de l'installation",
      "Livraison avec certificat de conformité gaz"
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&auto=format&fit=crop", caption: "Installation des colonnes gaz" },
      { url: "https://images.unsplash.com/photo-1631545806609-35d4ae440431?w=800&auto=format&fit=crop", caption: "Compteurs gaz individuels" },
      { url: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=800&auto=format&fit=crop", caption: "Raccordement aux équipements" }
    ]
  },
  {
    id: 3,
    title: "Rénovation salles de bain - EHPAD",
    category: "salle-de-bain",
    location: "Créteil (94)",
    client: "Acorus",
    duration: "6 semaines",
    description: "Rénovation de 15 salles de bain adaptées aux personnes à mobilité réduite.",
    fullDescription: "Rénovation complète de 15 salles de bain dans un EHPAD, avec adaptation aux normes d'accessibilité PMR.",
    challenges: [
      "Intervention sans perturber le quotidien des résidents",
      "Respect strict des normes PMR d'accessibilité",
      "Délais serrés pour limiter la durée des travaux"
    ],
    solutions: [
      "Travaux réalisés salle par salle avec relogement temporaire",
      "Installation de douches à l'italienne avec sièges rabattables",
      "Pose de barres d'appui et équipements anti-glisse"
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&auto=format&fit=crop", caption: "Salle de bain PMR terminée" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop", caption: "Douche à l'italienne accessible" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&auto=format&fit=crop", caption: "Équipements de sécurité installés" }
    ]
  },
  {
    id: 4,
    title: "VMC double flux - Bâtiment tertiaire",
    category: "ventilation",
    location: "La Défense (92)",
    client: "GECop",
    duration: "1 mois",
    description: "Installation système VMC double flux haute performance énergétique.",
    fullDescription: "Installation d'un système de ventilation mécanique contrôlée double flux dans un bâtiment de bureaux de 2000m².",
    challenges: [
      "Installation dans un espace technique contraint",
      "Performance énergétique exigée par la RT2012",
      "Équilibrage précis des débits d'air"
    ],
    solutions: [
      "Centrale VMC haute performance avec récupérateur thermique",
      "Réseau de gaines isolées pour limiter les déperditions",
      "Mesures aérauliques et réglages fins pour un confort optimal"
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop", caption: "Centrale VMC double flux installée" },
      { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop", caption: "Réseau de gaines en toiture technique" },
      { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop", caption: "Bouches de soufflage dans les bureaux" }
    ]
  },
  {
    id: 5,
    title: "Réhabilitation plomberie hôtel",
    category: "plomberie",
    location: "Paris 8ème",
    client: "Groupe ERI",
    duration: "4 mois",
    description: "Rénovation complète des réseaux d'eau pour un hôtel 4 étoiles.",
    fullDescription: "Réhabilitation totale des réseaux d'eau chaude et froide d'un hôtel 4 étoiles de 80 chambres.",
    challenges: [
      "Maintien partiel de l'activité hôtelière pendant les travaux",
      "Exigences de qualité élevées pour un établissement 4 étoiles",
      "Délais stricts pour la réouverture complète"
    ],
    solutions: [
      "Phasage des travaux par étage avec planning rotatif",
      "Sélection de matériaux et équipements premium",
      "Équipe dédiée travaillant en horaires décalés"
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop", caption: "Salle de bain rénovée d'une suite" },
      { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop", caption: "Robinetterie haut de gamme installée" },
      { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop", caption: "Local technique rénové" }
    ]
  },
  {
    id: 6,
    title: "Mise en conformité gaz copropriété",
    category: "gaz",
    location: "Versailles (78)",
    client: "Acorus",
    duration: "2 mois",
    description: "Remplacement des colonnes gaz et mise en conformité de 32 logements.",
    fullDescription: "Suite à un diagnostic de sécurité, cette copropriété de 32 logements nécessitait une mise en conformité urgente.",
    challenges: [
      "Urgence de la mise en conformité pour la sécurité des résidents",
      "Coordination avec GRDF pour les coupures de gaz",
      "Interventions dans les parties privatives"
    ],
    solutions: [
      "Planning d'intervention optimisé pour réduire les coupures",
      "Remplacement intégral des colonnes en acier galvanisé",
      "Délivrance des certificats de conformité pour chaque logement"
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop", caption: "Immeuble après mise en conformité" },
      { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop", caption: "Détail des raccordements conformes" },
      { url: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=800&auto=format&fit=crop", caption: "Compteur gaz après intervention" }
    ]
  },
];

const testimonials = [
  {
    quote: "Paris Tout Services a su répondre à nos exigences de qualité et de délais. Leur équipe est professionnelle et réactive.",
    author: "Jean-Marc Dupont",
    role: "Chef de travaux",
    company: "GECop"
  },
  {
    quote: "Nous travaillons avec PTS depuis 3 ans. Leur expertise en installation gaz et leur certification PG sont des atouts majeurs.",
    author: "Sophie Martin",
    role: "Responsable technique",
    company: "Groupe ERI"
  },
  {
    quote: "Les équipes de Paris Tout Services maîtrisent parfaitement les rénovations de salles de bain aux normes PMR.",
    author: "Pierre Lefebvre",
    role: "Directeur de projets",
    company: "Acorus"
  }
];

const Realisations = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const breadcrumbItems = [
    { name: 'Accueil', url: '/' },
    { name: 'Réalisations', url: '/realisations' }
  ];

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      'plomberie': 'Plomberie',
      'gaz': 'Gaz',
      'salle-de-bain': 'Salle de bain',
      'ventilation': 'Ventilation',
    };
    return labels[category] || category;
  };

  return (
    <>
      <SEOHead 
        title="Réalisations Plomberie & Gaz Professionnels IDF | Paris Tout Services"
        description="Découvrez nos projets de plomberie, gaz et ventilation pour promoteurs et gestionnaires en Île-de-France."
        canonical="/realisations"
      />
      <SchemaMarkup type="localBusiness" />
      <SchemaMarkup type="breadcrumb" breadcrumbItems={breadcrumbItems} />
      
      <Header />
      
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-[#F8F7F4] animated-gradient-bg overflow-hidden">
          {/* Animated Blobs */}
          <div className="blob blob-blue w-[400px] h-[400px] top-0 -right-20 opacity-50" style={{ animationDelay: '0s' }} />
          <div className="blob blob-orange w-[300px] h-[300px] -bottom-20 left-10 opacity-40" style={{ animationDelay: '-8s' }} />
          
          <div className="container-custom relative z-10">
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link to="/" className="hover:text-slate-900 transition-colors">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900">Réalisations</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight mb-6">
                <span className="font-extralight">Nos</span>{' '}
                <span className="italic text-blue-600">réalisations</span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed">
                Plus de 300 projets réalisés pour les professionnels du bâtiment en Île-de-France.
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
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-blue-600 text-white'
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
        <section className="section-padding bg-[#F8F7F4]">
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
                    onClick={() => setSelectedProject(project)}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all cursor-pointer group"
                  >
                    {/* Image */}
                    <div className="h-48 relative overflow-hidden">
                      {project.images && project.images.length > 0 ? (
                        <img 
                          src={project.images[0].url} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                          <span className="text-white/20 text-6xl font-bold">{project.id}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                            <Eye className="w-5 h-5 text-slate-700" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium">
                          {getCategoryLabel(project.category)}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-semibold text-slate-900 text-lg mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <Building className="w-4 h-4" />
                          <span>{project.client}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <span className="text-sm font-medium text-blue-600 group-hover:underline">
                          Voir les détails →
                        </span>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
                Témoignages
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                <span className="font-extralight">Ce que disent</span>{' '}
                <span className="italic text-blue-600">nos clients</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={testimonial.author} 
                  {...testimonial} 
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Un projet similaire ?"
          subtitle="Discutons de vos besoins et trouvons la meilleure solution."
          ctaText="Demander un devis"
          ctaLink="/contact"
        />
      </main>

      <Footer />

      {/* Project Detail Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
};

export default Realisations;
