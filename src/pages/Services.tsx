import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Flame, 
  Wind, 
  Accessibility, 
  Wrench,
  ChevronRight,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import SchemaMarkup from '@/components/SchemaMarkup';
import CTASection from '@/components/CTASection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    id: "plomberie",
    icon: Droplets,
    title: "Installation de Plomberie pour Grands Bâtiments",
    shortDesc: "Pose et raccordement de canalisations pour immeubles et établissements.",
    description: "Nous intervenons sur tous types de projets de plomberie pour les grands bâtiments : immeubles résidentiels, hôtels, établissements de santé, bâtiments tertiaires. Notre expertise couvre l'ensemble des travaux de canalisations, de l'alimentation en eau à l'évacuation.",
    benefits: [
      "Étude technique personnalisée",
      "Matériaux haute qualité (cuivre, PER, multicouche)",
      "Respect des normes DTU et RT2012",
      "Garantie décennale"
    ],
    process: [
      { step: "1", title: "Diagnostic", desc: "Analyse des besoins et étude technique" },
      { step: "2", title: "Proposition", desc: "Devis détaillé et planning d'intervention" },
      { step: "3", title: "Réalisation", desc: "Travaux par nos équipes certifiées" },
      { step: "4", title: "Livraison", desc: "Tests, mise en service et garantie" }
    ]
  },
  {
    id: "salle-de-bain",
    icon: Accessibility,
    title: "Rénovation Salle de Bain",
    shortDesc: "Rénovation complète de salles de bain aux normes PMR.",
    description: "Nous réalisons des rénovations complètes de salles de bain pour les professionnels. Nos installations peuvent être adaptées aux normes PMR d'accessibilité pour les personnes à mobilité réduite.",
    benefits: [
      "Rénovation complète clé en main",
      "Conformité aux normes PMR sur demande",
      "Large choix d'équipements et finitions",
      "Accompagnement dans les démarches d'aides"
    ],
    process: [
      { step: "1", title: "Évaluation", desc: "Analyse des besoins et contraintes" },
      { step: "2", title: "Conception", desc: "Plan d'aménagement sur mesure" },
      { step: "3", title: "Travaux", desc: "Rénovation complète de la salle de bain" },
      { step: "4", title: "Finitions", desc: "Installation des équipements et accessoires" }
    ]
  },
  {
    id: "gaz",
    icon: Flame,
    title: "Installation Gaz Certifiée PG",
    shortDesc: "Mise en conformité et installations gaz par techniciens certifiés.",
    description: "En tant que professionnels certifiés PG, nous assurons toutes les installations et mises en conformité gaz. Nos techniciens sont formés aux dernières normes de sécurité et utilisent du matériel agréé.",
    benefits: [
      "Certification PG garantie",
      "Conformité aux normes NF DTU 61.1",
      "Diagnostic de sécurité inclus",
      "Certificat de conformité délivré"
    ],
    process: [
      { step: "1", title: "Audit", desc: "Vérification de l'installation existante" },
      { step: "2", title: "Préconisation", desc: "Solutions de mise en conformité" },
      { step: "3", title: "Installation", desc: "Travaux par techniciens PG" },
      { step: "4", title: "Certification", desc: "Délivrance du certificat de conformité" }
    ]
  },
  {
    id: "ventilation",
    icon: Wind,
    title: "Systèmes de Ventilation",
    shortDesc: "VMC simple et double flux, gaines et extraction.",
    description: "L'installation d'une ventilation performante est essentielle pour la qualité de l'air intérieur. Nous proposons des solutions de VMC simple flux, double flux et systèmes d'extraction adaptés à tous types de bâtiments.",
    benefits: [
      "Amélioration de la qualité de l'air",
      "Économies d'énergie (double flux)",
      "Réduction de l'humidité",
      "Conformité aux réglementations thermiques"
    ],
    process: [
      { step: "1", title: "Étude", desc: "Dimensionnement et choix du système" },
      { step: "2", title: "Pose", desc: "Installation des gaines et bouches" },
      { step: "3", title: "Raccordement", desc: "Branchement de la centrale VMC" },
      { step: "4", title: "Réglages", desc: "Mise en service et équilibrage" }
    ]
  },
  {
    id: "chauffe-eau",
    icon: Wrench,
    title: "Remplacement Ballons et Chauffe-eau",
    shortDesc: "Installation et remplacement de systèmes de production d'eau chaude.",
    description: "Nous assurons le remplacement et l'installation de tous types de systèmes de production d'eau chaude : ballons électriques, chauffe-eau gaz, chauffe-eau thermodynamiques. Nos interventions sont rapides et garantissent une continuité de service.",
    benefits: [
      "Large gamme de marques disponibles",
      "Solutions économes en énergie",
      "Intervention rapide sous 48h",
      "Garantie constructeur et décennale"
    ],
    process: [
      { step: "1", title: "Diagnostic", desc: "Évaluation de vos besoins" },
      { step: "2", title: "Préconisation", desc: "Choix du système adapté" },
      { step: "3", title: "Installation", desc: "Pose et raccordement" },
      { step: "4", title: "Mise en service", desc: "Tests et réglages" }
    ]
  }
];

const faqs = [
  {
    question: "Intervenez-vous sur des chantiers neufs ou uniquement en rénovation ?",
    answer: "Nous intervenons aussi bien sur des chantiers neufs que sur des projets de rénovation. Notre expérience avec les promoteurs et gestionnaires d'habitat nous permet de nous adapter à tous types de projets."
  },
  {
    question: "Quels sont vos délais d'intervention ?",
    answer: "Pour les urgences, nous intervenons sous 48h. Pour les projets planifiés, les délais sont définis lors de l'établissement du devis en fonction de l'ampleur des travaux."
  },
  {
    question: "Proposez-vous des contrats de maintenance ?",
    answer: "Oui, nous proposons des contrats de maintenance pour le suivi régulier de vos installations de plomberie, gaz et ventilation. Contactez-nous pour un devis personnalisé."
  },
  {
    question: "Travaillez-vous uniquement en sous-traitance ?",
    answer: "Nous travaillons principalement avec des professionnels (promoteurs, gestionnaires d'habitat) mais pouvons également intervenir en direct pour certains projets spécifiques."
  }
];

const Services = () => {
  const breadcrumbItems = [
    { name: 'Accueil', url: '/' },
    { name: 'Nos services', url: '/services' }
  ];

  return (
    <>
      <SEOHead 
        title="Services Plomberie, Gaz, Ventilation pour Pros | Paris Tout Services IDF"
        description="Installation plomberie, rénovation salle de bain, gaz, ventilation, chauffe-eau en Île-de-France. Sous-traitance pour promoteurs et gestionnaires d'habitat."
        canonical="/services"
      />
      <SchemaMarkup type="localBusiness" />
      <SchemaMarkup type="breadcrumb" breadcrumbItems={breadcrumbItems} />
      
      <Header />
      
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl" />
          </div>

          <div className="container-custom relative z-10">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Nos services</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Nos Services de{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                  Plomberie et Installation Gaz
                </span>{' '}
                en Île-de-France
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Des prestations complètes pour répondre à tous vos besoins en plomberie, gaz, ventilation et accessibilité.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services détaillés */}
        {services.map((service, index) => (
          <section 
            key={service.id} 
            id={service.id}
            className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button variant="hero" size="lg">
                      Demander un devis
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>

                {/* Process */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`bg-slate-100 rounded-3xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <h3 className="font-bold text-slate-900 text-xl mb-6">Notre Processus</h3>
                  <div className="space-y-6">
                    {service.process.map((step, stepIndex) => (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: stepIndex * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{step.title}</div>
                          <div className="text-slate-600 text-sm">{step.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Questions Fréquentes
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-slate-50 rounded-2xl border-none px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Un Projet en Vue ?"
          subtitle="Contactez-nous pour une étude personnalisée de vos besoins."
          ctaText="Obtenir un devis gratuit"
          ctaLink="/contact"
          variant="blue"
        />
      </main>

      <Footer />
    </>
  );
};

export default Services;
