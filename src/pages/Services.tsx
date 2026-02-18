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
    description: "Nous intervenons sur tous types de projets de plomberie pour les grands bâtiments : immeubles résidentiels, hôtels, établissements de santé, bâtiments tertiaires.",
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
    description: "Nous réalisons des rénovations complètes de salles de bain pour les professionnels. Nos installations peuvent être adaptées aux normes PMR.",
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
    description: "En tant que professionnels certifiés PG, nous assurons toutes les installations et mises en conformité gaz.",
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
    description: "L'installation d'une ventilation performante est essentielle pour la qualité de l'air intérieur.",
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
    description: "Nous assurons le remplacement et l'installation de tous types de systèmes de production d'eau chaude.",
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
    answer: "Nous intervenons aussi bien sur des chantiers neufs que sur des projets de rénovation."
  },
  {
    question: "Quels sont vos délais d'intervention ?",
    answer: "Pour les urgences, nous intervenons sous 48h. Pour les projets planifiés, les délais sont définis lors de l'établissement du devis."
  },
  {
    question: "Proposez-vous des contrats de maintenance ?",
    answer: "Oui, nous proposons des contrats de maintenance pour le suivi régulier de vos installations."
  },
  {
    question: "Travaillez-vous uniquement en sous-traitance ?",
    answer: "Nous travaillons principalement avec des professionnels mais pouvons également intervenir en direct pour certains projets."
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
        title="Plombier d'urgence Paris 24h/24 – Dépannage plomberie & gaz IDF"
        description="Services de plomberie, installation gaz certifiée PG, rénovation salle de bain PMR, ventilation VMC et chauffe-eau en Île-de-France. Intervention sous 48h. Devis gratuit."
        canonical="/services"
      />
      <SchemaMarkup type="localBusiness" />
      <SchemaMarkup type="breadcrumb" breadcrumbItems={breadcrumbItems} />
      
      <Header />
      
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-[#F8F7F4] animated-gradient-bg overflow-hidden">
          {/* Animated Blobs */}
          <div className="blob blob-blue w-[450px] h-[450px] -top-32 right-0 opacity-50" style={{ animationDelay: '0s' }} />
          <div className="blob blob-cyan w-[350px] h-[350px] bottom-0 -left-20 opacity-40" style={{ animationDelay: '-5s' }} />
          <div className="blob blob-orange w-[250px] h-[250px] top-20 left-1/4 opacity-30" style={{ animationDelay: '-10s' }} />
          
          <div className="container-custom relative z-10">
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link to="/" className="hover:text-slate-900 transition-colors">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900">Nos services</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight mb-6">
                <span className="font-extralight">Nos services de</span>
                <br />
                <span className="italic text-blue-600">plomberie</span>{' '}
                <span className="font-extralight">et</span>{' '}
                <span className="italic text-orange-500">gaz</span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed">
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
            className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F4]'}`}
          >
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl text-slate-900 mb-4 font-light">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-500 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-slate-600">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-6 text-sm font-medium">
                      Demander un devis
                      <ArrowRight className="w-4 h-4 ml-1" />
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
                  <h3 className="font-semibold text-slate-900 text-xl mb-6">Notre Processus</h3>
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
                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{step.title}</div>
                          <div className="text-slate-500 text-sm">{step.desc}</div>
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
              <h2 className="text-3xl md:text-4xl text-slate-900 mb-4">
                <span className="font-extralight">Questions</span>{' '}
                <span className="italic text-blue-600">fréquentes</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-[#F8F7F4] rounded-2xl border-none px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-500 pb-5">
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
          title="Un projet en vue ?"
          subtitle="Contactez-nous pour une étude personnalisée de vos besoins."
          ctaText="Obtenir un devis gratuit"
          ctaLink="/contact"
        />
      </main>

      <Footer />
    </>
  );
};

export default Services;
