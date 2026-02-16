import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Building, Eye } from 'lucide-react';
import parisHaussmann from '@/assets/realisations/paris-13-haussmann.jpg';
import plomberieParis11 from '@/assets/realisations/plomberie-paris-11.jpg';
import plomberieParis18 from '@/assets/realisations/plomberie-paris-18.jpg';
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
    title: "Plomberie, chauffage & ventilation – Logements collectifs Paris 13e",
    category: "plomberie",
    location: "1 rue Jules Romains, Paris 13e",
    client: "CDC Habitat",
    duration: "Plusieurs mois",
    description: "Travaux de plomberie, chauffage et ventilation : neutralisation, dépose et dévoiement des réseaux EF/ECS, EU/EV, mise en œuvre de canalisations PVC et installation VMC.",
    fullDescription: "Paris Tout Services est intervenu sur un chantier d'envergure situé 1 rue Jules Romains à Paris 13e pour le compte de CDC Habitat. Les travaux ont porté sur la plomberie sanitaire, le chauffage et la ventilation de logements collectifs. Le projet comprenait la neutralisation, la dépose et le dévoiement des réseaux d'eau froide (EF), d'eau chaude sanitaire (ECS), ainsi que des eaux usées (EU) et eaux vannes (EV). L'ensemble des appareils sanitaires existants a été déposé et évacué. De nouvelles canalisations en tube PVC ont été mises en œuvre, accompagnées de la réfection complète des réseaux en pièces humides. Enfin, l'installation de caissons VMC dans les logements a permis d'assurer une ventilation mécanique contrôlée conforme aux normes en vigueur.",
    challenges: [
      "Neutralisation et dévoiement des réseaux existants EF/ECS et EU/EV",
      "Dépose et évacuation de l'ensemble des appareils sanitaires",
      "Intervention en site occupé avec coordination rigoureuse",
      "Respect des normes de ventilation et de plomberie sanitaire"
    ],
    solutions: [
      "Mise en œuvre de canalisations et tubes PVC conformes aux DTU",
      "Réfection intégrale des réseaux en pièces humides",
      "Installation de caissons VMC pour une ventilation mécanique contrôlée optimale",
      "Expertise en réhabilitation de logements collectifs pour bailleurs sociaux"
    ],
    images: [
      { url: parisHaussmann, caption: "Appartement haussmannien Paris 13e" },
      { url: "https://images.unsplash.com/photo-1585128903994-9788298932a4?w=800&auto=format&fit=crop", caption: "Installation réseau plomberie sanitaire" },
      { url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop", caption: "Mise en œuvre canalisations PVC" }
    ]
  },
  {
    id: 2,
    title: "Réhabilitation plomberie, chauffage gaz & faïence – Paris 11e",
    category: "gaz",
    location: "111 rue d'Oberkampf, Paris 11e",
    client: "GECop",
    duration: "Plusieurs mois",
    description: "Travaux de réhabilitation de plomberie, chauffage gaz, faïence et revêtement de sol dans un immeuble collectif à Paris 11e.",
    fullDescription: "Paris Tout Services a réalisé des travaux de réhabilitation complète au 111 rue d'Oberkampf à Paris 11e, pour le compte de GECop. Le chantier comprenait la rénovation intégrale des installations de plomberie sanitaire, la mise en conformité du chauffage gaz, ainsi que la pose de faïence et de revêtements de sol dans les pièces humides. Ces travaux de réhabilitation thermique et sanitaire s'inscrivent dans une démarche d'amélioration du confort et de la performance énergétique des logements collectifs parisiens.",
    challenges: [
      "Réhabilitation complète en immeuble parisien ancien",
      "Mise en conformité du chauffage gaz selon les normes en vigueur",
      "Coordination des corps de métier : plomberie, carrelage, revêtement",
      "Intervention en site occupé avec maintien du confort des résidents"
    ],
    solutions: [
      "Rénovation intégrale des réseaux de plomberie sanitaire",
      "Installation et mise en conformité du chauffage gaz",
      "Pose de faïence et revêtement de sol dans les pièces humides",
      "Gestion de chantier optimisée pour limiter les nuisances"
    ],
    images: [
      { url: plomberieParis11, caption: "Réhabilitation plomberie Paris 11e" },
      { url: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=800&auto=format&fit=crop", caption: "Installation chauffage gaz" },
      { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop", caption: "Immeuble rue d'Oberkampf" }
    ]
  },
  {
    id: 3,
    title: "Réhabilitation plomberie & chauffage gaz – Paris 18e",
    category: "gaz",
    location: "121 bis rue de Clignancourt, Paris 18e",
    client: "GECop",
    duration: "Plusieurs mois",
    description: "Réhabilitation de plomberie, chauffage gaz, faïence et revêtement de sol dans un immeuble collectif à Paris 18e.",
    fullDescription: "Paris Tout Services est intervenu au 121 bis rue de Clignancourt à Paris 18e, pour le compte de GECop, dans le cadre de travaux de réhabilitation de grande envergure. Le chantier portait sur la rénovation complète des installations de plomberie sanitaire et de chauffage gaz, ainsi que sur la pose de faïence murale et de revêtements de sol. Ce projet de réhabilitation thermique visait à moderniser les équipements existants tout en garantissant la conformité aux normes de sécurité gaz et aux réglementations en vigueur.",
    challenges: [
      "Réhabilitation dans un immeuble ancien du 18e arrondissement",
      "Remplacement complet des réseaux de plomberie vétustes",
      "Mise aux normes du chauffage gaz pour la sécurité des occupants",
      "Travaux de finition : faïence et revêtement de sol"
    ],
    solutions: [
      "Dépose et remplacement des canalisations en plomberie sanitaire",
      "Mise en conformité et sécurisation du chauffage gaz",
      "Pose soignée de faïence et revêtements de sol adaptés",
      "Respect des délais et coordination efficace sur chantier"
    ],
    images: [
      { url: plomberieParis18, caption: "Installation chauffage gaz Paris 18e" },
      { url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&auto=format&fit=crop", caption: "Travaux de réhabilitation plomberie" },
      { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop", caption: "Rénovation chauffage gaz" }
    ]
  },
  {
    id: 4,
    title: "Rénovation salles de bain PMR – Paris 14e",
    category: "salle-de-bain",
    location: "Paris 14e",
    client: "Acorus",
    duration: "Plusieurs semaines",
    description: "Campagne de rénovation de salles de bain adaptées aux personnes à mobilité réduite (PMR) dans le cadre d'un programme de mise en accessibilité.",
    fullDescription: "Dans le cadre d'une campagne de rénovation menée pour le compte d'Acorus, Paris Tout Services a réalisé la rénovation complète de salles de bain aux normes PMR (Personnes à Mobilité Réduite) dans des logements situés dans le 14e arrondissement de Paris. Les travaux ont inclus la dépose des installations existantes, la création de douches à l'italienne accessibles, l'installation de barres d'appui et d'équipements anti-glisse, ainsi que la mise en conformité de l'ensemble des réseaux de plomberie sanitaire. Chaque salle de bain a été repensée pour garantir accessibilité, sécurité et confort au quotidien.",
    challenges: [
      "Adaptation stricte aux normes d'accessibilité PMR",
      "Rénovation en logements occupés avec relogement temporaire",
      "Création de douches à l'italienne dans des espaces contraints",
      "Conformité des réseaux de plomberie sanitaire et évacuation"
    ],
    solutions: [
      "Installation de douches à l'italienne avec sièges rabattables et siphons de sol",
      "Pose de barres d'appui, revêtements anti-glisse et équipements PMR certifiés",
      "Réfection complète des réseaux d'eau froide, eau chaude et évacuation",
      "Travaux réalisés salle par salle pour limiter l'impact sur les résidents"
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&auto=format&fit=crop", caption: "Salle de bain PMR rénovée" },
      { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop", caption: "Douche à l'italienne accessible" },
      { url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&auto=format&fit=crop", caption: "Équipements PMR installés" }
    ]
  },
  {
    id: 5,
    title: "Réhabilitation énergétique – Ventilation & chauffe-eau",
    category: "ventilation",
    location: "Aubergenville (78)",
    client: "GECop",
    duration: "Plusieurs mois",
    description: "Remplacement des chauffe-eau et mise à niveau de la ventilation dans un ensemble immobilier collectif à Aubergenville.",
    fullDescription: "Dans le cadre d'un programme de réhabilitation énergétique et thermique, Paris Tout Services est intervenu sur un ensemble immobilier collectif situé 1 à 23 place Jacques Brel à Aubergenville (Yvelines). Le projet visait à améliorer les performances énergétiques du bâtiment tout en garantissant le confort des occupants. Les travaux ont porté sur le remplacement des chauffe-eau à ballon d'eau chaude, la mise à niveau des installations de ventilation, ainsi que des travaux de plomberie dans les salles de bain.",
    challenges: [
      "Intervention dans un immeuble collectif occupé",
      "Respect des délais imposés par le programme de réhabilitation",
      "Coordination avec les autres corps de métier",
      "Fiabilité des installations sur le long terme"
    ],
    solutions: [
      "Expertise en réhabilitation énergétique de logements collectifs",
      "Capacité à intervenir sur des projets techniques à forts enjeux",
      "Solutions durables, conformes aux normes en vigueur",
      "Chantier maîtrisé, avec un impact limité pour les occupants"
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop", caption: "Lotissement résidentiel à Aubergenville" },
      { url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&auto=format&fit=crop", caption: "Ensemble immobilier collectif" },
      { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop", caption: "Réhabilitation énergétique des logements" }
    ]
  },
  {
    id: 6,
    title: "Plomberie, chauffage & tuyauterie – Le Blanc-Mesnil (93)",
    category: "plomberie",
    location: "Le Blanc-Mesnil (93)",
    client: "GECop",
    duration: "Plusieurs mois",
    description: "Création complète des réseaux de plomberie, tuyauterie et chauffage pour un immeuble de logements neufs issu de la transformation de 4 pavillons.",
    fullDescription: "Paris Tout Services est intervenu sur un projet immobilier porté par Immobilière 3F, dans un immeuble HLM situé au 23 avenue du Gouverneur Félix Eboué au Blanc-Mesnil (Seine-Saint-Denis). Le chantier concernait la transformation d'un lotissement de 4 pavillons en un immeuble de logements neufs avec création complète des réseaux de plomberie, tuyauterie et chauffage.",
    challenges: [
      "Projet de restructuration lourde",
      "Transformation d'un bâti existant en immeuble collectif",
      "Exigences élevées liées au logement social",
      "Respect strict des normes techniques et de sécurité"
    ],
    solutions: [
      "Maîtrise des projets de logement social et immobilier collectif",
      "Savoir-faire en plomberie, chauffage et réseaux",
      "Capacité à intervenir sur des projets complexes de transformation",
      "Partenaire fiable pour les bailleurs et promoteurs"
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop", caption: "Immeuble de logements neufs" },
      { url: "https://images.unsplash.com/photo-1585128903994-9788298932a4?w=800&auto=format&fit=crop", caption: "Installation du système de chauffage" },
      { url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop", caption: "Pose de radiateurs collectifs" }
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
        <section className="py-8 bg-white border-b border-slate-100">
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
