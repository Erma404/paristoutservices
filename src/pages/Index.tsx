import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  Building2,
  CheckCircle2,
  Users,
  TrendingUp,
  ThumbsUp,
  Zap,
  HardHat,
  FileCheck,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-plumber.jpg";

// Partner logos
import logoLNC from "@/assets/partners/lnc.png";
import logoBouygues from "@/assets/partners/bouygues.png";
import logoERI from "@/assets/partners/eri.png";
import logoAcorus from "@/assets/partners/acorus.png";
import logoGecop from "@/assets/partners/gecop.png";

// Realisations images
import realisationSalleDeBain from "@/assets/realisations/salle-de-bain-1.jpg";
import realisationPlomberie from "@/assets/realisations/plomberie-1.jpg";
import realisationGaz from "@/assets/realisations/gaz-1.jpg";
import realisationVentilation from "@/assets/realisations/ventilation-1.jpg";

const reassuranceItems = [
  { icon: Award, label: "+10 ans d'expérience", value: "Depuis 2016" },
  { icon: Shield, label: "Certifié RGE & PG", value: "Qualité" },
  { icon: Clock, label: "Interventions sous 48h", value: "Rapide" },
  { icon: BadgeCheck, label: "Garantie décennale", value: "Sécurité" },
];

const services = [
  {
    icon: Droplets,
    title: "Installation plomberie grands bâtiments",
    description:
      "Pose et raccordement de canalisations pour immeubles, hôtels et établissements publics en Île-de-France.",
    href: "/services#plomberie",
  },
  {
    icon: Accessibility,
    title: "Rénovation salle de bain",
    description: "Rénovation complète de salles de bain, conformes aux normes PMR et d'accessibilité en vigueur.",
    href: "/services#salle-de-bain",
  },
  {
    icon: Flame,
    title: "Installation gaz certifiée",
    description: "Installation et mise en conformité gaz par des techniciens certifiés PG pour votre sécurité.",
    href: "/services#gaz",
  },
  {
    icon: Wind,
    title: "Systèmes de ventilation",
    description: "Installation VMC simple et double flux, gaines et bouches d'extraction pour un air sain.",
    href: "/services#ventilation",
  },
  {
    icon: Wrench,
    title: "Remplacement chauffe-eau",
    description: "Installation et remplacement de ballons d'eau chaude et chauffe-eau thermodynamiques.",
    href: "/services#chauffe-eau",
  },
];

const partners = [
  { name: "Les Nouveaux Constructeurs", logo: logoLNC },
  { name: "Bouygues Immobilier", logo: logoBouygues },
  { name: "Groupe ERI", logo: logoERI },
  { name: "Acorus", logo: logoAcorus },
  { name: "Gecop", logo: logoGecop },
];

const realisations = [
  {
    id: 1,
    title: "Rénovation salle de bain PMR",
    category: "Salle de bain",
    location: "Paris 15e",
    image: realisationSalleDeBain,
  },
  {
    id: 2,
    title: "Installation plomberie immeuble",
    category: "Plomberie",
    location: "Boulogne-Billancourt",
    image: realisationPlomberie,
  },
  {
    id: 3,
    title: "Mise en conformité gaz",
    category: "Gaz",
    location: "Neuilly-sur-Seine",
    image: realisationGaz,
  },
  {
    id: 4,
    title: "Installation VMC double flux",
    category: "Ventilation",
    location: "Saint-Denis",
    image: realisationVentilation,
  },
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
          <div
            className="blob blob-blue w-[500px] h-[500px] top-20 -left-40 opacity-60"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="blob blob-orange w-[400px] h-[400px] top-40 right-10 opacity-50"
            style={{ animationDelay: "-5s" }}
          />
          <div
            className="blob blob-cyan w-[300px] h-[300px] bottom-20 left-1/3 opacity-40"
            style={{ animationDelay: "-10s" }}
          />

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
                  <span className="font-extralight">L'expertise</span>{" "}
                  <span className="font-normal italic text-blue-600">plomberie</span>
                  <br />
                  <span className="font-extralight">à chaque</span> <span className="font-normal">intervention</span>
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
                    <Button
                      variant="outline"
                      className="rounded-full px-8 py-6 text-sm font-medium border-slate-300 hover:bg-slate-100"
                    >
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
                    <span className="text-2xl font-semibold text-slate-900">300+</span>
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
                <span className="font-extralight">améliorer votre</span>{" "}
                <span className="italic text-blue-600">confort</span>
              </h2>
              <p className="text-lg text-slate-500 max-w-xl mx-auto mt-6">
                Des prestations certifiées adaptées aux professionnels du bâtiment.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={service.title} {...service} delay={index * 0.1} />
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
                <span className="font-extralight">nous font</span>{" "}
                <span className="italic text-orange-500">confiance</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Building2,
                  title: "Expertise Technique",
                  description: "Une équipe de techniciens qualifiés avec plus de 10 ans d'expérience.",
                },
                {
                  icon: Shield,
                  title: "Certifications Reconnues",
                  description: "Certifications RGE, PG et Qualipac garantissant des travaux conformes.",
                },
                {
                  icon: Accessibility,
                  title: "Normes PMR & RT2012",
                  description: "Expertise en accessibilité et performance énergétique.",
                },
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
              <h2 className="text-2xl md:text-3xl font-light text-white mb-2">Ils nous font confiance</h2>
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
                  <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
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
                <span className="font-extralight">Nous intervenons dans</span>{" "}
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

        {/* Réalisations Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm font-medium">Portfolio</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                <span className="font-extralight">Nos dernières</span>{" "}
                <span className="italic text-blue-600">réalisations</span>
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-6">
                Découvrez quelques-uns de nos projets récents en Île-de-France
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {realisations.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden bg-slate-100 cursor-pointer"
                >
                  <div className="aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-white font-semibold text-lg mb-1">{project.title}</h3>
                    <div className="flex items-center gap-1 text-white/70 text-sm">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <Link to="/realisations">
                <Button variant="outline" className="rounded-full px-8 py-6 text-sm font-medium border-slate-300 hover:bg-slate-100">
                  Voir toutes nos réalisations
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Expertise Section - SEO Rich Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                <span className="font-extralight">Plomberie professionnelle</span>{" "}
                <span className="italic text-blue-600">Île-de-France</span>
              </h2>
              <p className="text-lg text-slate-500 max-w-3xl mx-auto mt-6">
                Spécialistes en installation plomberie, gaz et ventilation pour le secteur du bâtiment : 
                promoteurs immobiliers, bailleurs sociaux, gestionnaires de patrimoine et entreprises générales.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-slate-900">
                  Un partenaire de confiance pour vos chantiers
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Depuis 2016, Paris Tout Services accompagne les professionnels du bâtiment dans leurs projets 
                  de plomberie sanitaire, d'installation gaz et de systèmes de ventilation. Notre expertise 
                  s'étend de la conception technique à la mise en service, en passant par le respect des délais 
                  et des normes en vigueur.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Nous intervenons sur tous types de chantiers en Île-de-France : immeubles résidentiels, 
                  hôtels, bureaux, établissements recevant du public (ERP), et logements sociaux. 
                  Nos équipes certifiées garantissent des installations conformes RT2012/RE2020 et accessibles PMR.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: CheckCircle2, text: "Devis gratuit sous 24h" },
                    { icon: FileCheck, text: "Travaux garantis 10 ans" },
                    { icon: HardHat, text: "Équipes certifiées" },
                    { icon: Zap, text: "Intervention rapide" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#F8F7F4] rounded-3xl p-8"
              >
                <h4 className="text-xl font-semibold text-slate-900 mb-6">Nos domaines d'intervention</h4>
                <ul className="space-y-4">
                  {[
                    "Installation et rénovation de réseaux de plomberie sanitaire",
                    "Pose et raccordement de colonnes montantes et descendantes",
                    "Installation gaz certifiée PG pour logements et locaux professionnels",
                    "Systèmes de ventilation VMC simple et double flux",
                    "Remplacement de chauffe-eau et ballons thermodynamiques",
                    "Rénovation de salles de bain accessibles PMR",
                    "Mise en conformité des installations existantes",
                    "Maintenance préventive et curative",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-blue-600 animated-gradient-dark overflow-hidden relative">
          <div className="blob blob-cyan w-[400px] h-[400px] -top-20 -left-20 opacity-30" style={{ animationDelay: "-3s" }} />
          <div className="blob blob-blue w-[300px] h-[300px] bottom-0 right-0 opacity-20" style={{ animationDelay: "-8s" }} />
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-light text-white mb-2">
                Paris Tout Services en chiffres
              </h2>
              <p className="text-white/70">Des résultats qui témoignent de notre engagement</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "+500", label: "Projets réalisés", icon: TrendingUp },
                { value: "+10", label: "Années d'expertise", icon: Award },
                { value: "48h", label: "Délai d'intervention", icon: Clock },
                { value: "98%", label: "Clients satisfaits", icon: ThumbsUp },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-semibold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-sm font-medium">Notre processus</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                <span className="font-extralight">Comment</span>{" "}
                <span className="italic text-orange-500">travailler ensemble</span>
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-6">
                Un processus simple et transparent pour garantir la réussite de votre projet
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Prise de contact",
                  description: "Appelez-nous ou remplissez le formulaire. Nous vous recontactons sous 24h pour comprendre votre besoin.",
                },
                {
                  step: "02",
                  title: "Visite technique",
                  description: "Un technicien qualifié se déplace sur site pour évaluer les travaux et établir un devis détaillé gratuit.",
                },
                {
                  step: "03",
                  title: "Réalisation",
                  description: "Nos équipes interviennent selon le planning convenu, dans le respect des normes et des délais.",
                },
                {
                  step: "04",
                  title: "Réception",
                  description: "Contrôle qualité, mise en service et remise des documents de conformité. Garantie décennale incluse.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-[#F8F7F4] rounded-3xl p-6 border border-slate-100 h-full hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center font-semibold mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ChevronRight className="w-6 h-6 text-orange-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section for SEO */}
        <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm font-medium">FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
                <span className="font-extralight">Questions</span>{" "}
                <span className="italic text-blue-600">fréquentes</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "Dans quels départements intervenez-vous ?",
                  answer: "Nous intervenons dans toute l'Île-de-France : Paris (75), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Seine-et-Marne (77), Yvelines (78), Essonne (91) et Val-d'Oise (95)."
                },
                {
                  question: "Quels types de clients accompagnez-vous ?",
                  answer: "Nous travaillons exclusivement avec des professionnels : promoteurs immobiliers, bailleurs sociaux, syndics de copropriété, entreprises générales du bâtiment, gestionnaires de patrimoine et hôteliers."
                },
                {
                  question: "Vos travaux sont-ils garantis ?",
                  answer: "Oui, tous nos travaux bénéficient de la garantie décennale. Nous fournissons également les certificats de conformité gaz (CCGP) et les attestations de fin de travaux."
                },
                {
                  question: "Quel est le délai pour obtenir un devis ?",
                  answer: "Nous nous engageons à vous recontacter sous 24h pour une première évaluation. Le devis détaillé est fourni après visite technique, généralement sous 48 à 72h."
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-500 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <Link to="/services">
                <Button variant="outline" className="rounded-full px-8 py-6 text-sm font-medium border-slate-300 hover:bg-white">
                  Voir tous nos services
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </motion.div>
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
