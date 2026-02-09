import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Award, Target, Heart, ChevronRight, Calendar, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import CertificationBadge from "@/components/CertificationBadge";
import CTASection from "@/components/CTASection";

const values = [
  {
    icon: Target,
    title: "Professionnalisme",
    description: "Chaque projet est traité avec rigueur et précision, du diagnostic initial à la livraison finale.",
  },
  {
    icon: Award,
    title: "Qualité",
    description: "Des matériaux de premier choix et des techniques éprouvées pour des installations durables.",
  },
  {
    icon: Heart,
    title: "Réactivité",
    description: "Intervention sous 48h et suivi personnalisé tout au long de votre projet.",
  },
];

const certifications = [
  {
    name: "RGE",
    description: "Reconnu Garant de l'Environnement - Qualification pour travaux d'efficacité énergétique",
  },
  {
    name: "PG",
    description: "Professionnel du Gaz - Certification pour l'installation et la maintenance gaz",
  },
  {
    name: "HandiBat",
    description: "Qualification pour l'installation de pompes à chaleur et systèmes aérothermiques",
  },
];

const timeline = [
  { year: "2016", event: "Création de Paris Tout Services" },
  { year: "2018", event: "Obtention des certifications RGE et PG" },
  { year: "2020", event: "Croissance et nouveaux partenariats" },
  { year: "2022", event: "Certification HandiBat" },
  { year: "2026", event: "Plus de 300 projets réalisés" },
];

const About = () => {
  const breadcrumbItems = [
    { name: "Accueil", url: "/" },
    { name: "Qui sommes-nous", url: "/a-propos" },
  ];

  return (
    <>
      <SEOHead
        title="Entreprise de Plomberie & Gaz Île-de-France | À Propos - Paris Tout Services"
        description="Paris Tout Services : plus de 10 ans d'expertise en plomberie et gaz pour professionnels. Équipe certifiée RGE, PG, HandiBat en Île-de-France."
        canonical="/a-propos"
      />
      <SchemaMarkup type="localBusiness" />
      <SchemaMarkup type="breadcrumb" breadcrumbItems={breadcrumbItems} />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-[#F8F7F4] animated-gradient-bg overflow-hidden">
          {/* Animated Blobs */}
          <div
            className="blob blob-blue w-[400px] h-[400px] -top-20 -right-20 opacity-50"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="blob blob-orange w-[300px] h-[300px] bottom-0 left-20 opacity-40"
            style={{ animationDelay: "-7s" }}
          />

          <div className="container-custom relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link to="/" className="hover:text-slate-900 transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900">Qui sommes-nous</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight mb-6">
                <span className="font-extralight">Paris Tout Services,</span>
                <br />
                <span className="font-extralight">votre partenaire</span>{" "}
                <span className="italic text-blue-600">plomberie</span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed">
                Une équipe de techniciens passionnés au service des promoteurs et gestionnaires d'habitat en
                Île-de-France.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
                  <Calendar className="w-4 h-4" />
                  Notre Histoire
                </div>
                <h2 className="text-3xl md:text-4xl text-slate-900 mb-6">
                  <span className="font-extralight">+10 années d'</span>
                  <span className="italic text-blue-600">expertise</span>
                </h2>
                <div className="space-y-4 text-slate-500 leading-relaxed">
                  <p>
                    Fondée en 2016, Paris Tout Services est née de la volonté de proposer aux professionnels du bâtiment
                    en Île-de-France un partenaire fiable et réactif pour tous leurs travaux de plomberie et
                    d'installation gaz.
                  </p>
                  <p>
                    Depuis notre création, nous avons développé une expertise reconnue auprès des promoteurs
                    immobiliers, des chefs de travaux et des gestionnaires d'habitat social.
                  </p>
                  <p>Nos certifications RGE, PG et HandiBat témoignent de notre engagement envers la qualité.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-[#F8F7F4] rounded-3xl p-8">
                  <h3 className="font-semibold text-slate-900 mb-6 flex items-center gap-2">
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
                        <div className="w-16 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
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
        <section className="section-padding bg-[#F8F7F4]">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Notre Équipe
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                <span className="font-extralight">Une équipe</span>{" "}
                <span className="italic text-blue-600">d'experts</span>
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Des techniciens expérimentés et certifiés, formés aux dernières normes.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { count: "4", role: "Chefs d'équipe", desc: "Coordination des chantiers" },
                { count: "4", role: "Techniciens polyvalents", desc: "Multi-compétences terrain" },
                { count: "8", role: "Techniciens plombiers", desc: "Installation et maintenance" },
                { count: "2", role: "Spécialistes gaz", desc: "Installations certifiées PG" },
              ].map((item, index) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 text-center border border-slate-100"
                >
                  <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto mb-6 text-white text-3xl font-semibold">
                    {item.count}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.role}</h3>
                  <p className="text-slate-500">{item.desc}</p>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                <span className="font-extralight">Nos</span> <span className="italic text-orange-500">valeurs</span>
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
                  className="text-center p-8 rounded-3xl bg-[#F8F7F4] border border-slate-100"
                >
                  <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section-padding bg-slate-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Nos Certifications
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 font-light">
                Des certifications qui garantissent la <span className="text-orange-500">qualité</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <CertificationBadge key={cert.name} {...cert} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Prêt à collaborer ?"
          subtitle="Discutons de votre projet et trouvons ensemble la meilleure solution."
          ctaText="Contactez-nous"
          ctaLink="/contact"
        />
      </main>

      <Footer />
    </>
  );
};

export default About;
