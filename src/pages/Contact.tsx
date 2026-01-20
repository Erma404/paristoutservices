import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import SchemaMarkup from '@/components/SchemaMarkup';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Demande envoyée !",
      description: "Nous vous recontacterons sous 24h.",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <SEOHead 
        title="Devis Gratuit Plomberie & Gaz IDF | Contact Paris Tout Services"
        description="Demandez votre devis gratuit pour vos travaux de plomberie, gaz ou ventilation en Île-de-France."
        canonical="/contact"
      />
      <SchemaMarkup type="localBusiness" />
      
      <Header />
      
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-[#F8F7F4] animated-gradient-bg overflow-hidden">
          {/* Animated Blobs */}
          <div className="blob blob-blue w-[350px] h-[350px] -top-20 right-10 opacity-50" style={{ animationDelay: '0s' }} />
          <div className="blob blob-cyan w-[280px] h-[280px] bottom-0 -left-10 opacity-40" style={{ animationDelay: '-6s' }} />
          
          <div className="container-custom relative z-10">
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
              <Link to="/" className="hover:text-slate-900 transition-colors">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900">Contact</span>
            </nav>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl text-slate-900"
            >
              <span className="font-extralight">Contactez</span>{' '}
              <span className="italic text-blue-600">Paris Tout Services</span>
            </motion.h1>
          </div>
        </section>

        {/* Form & Info */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-[#F8F7F4] rounded-3xl p-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-6">Demander un devis gratuit</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div><Label htmlFor="name">Nom / Prénom *</Label><Input id="name" required className="mt-2 bg-white" /></div>
                      <div><Label htmlFor="company">Entreprise *</Label><Input id="company" required className="mt-2 bg-white" /></div>
                      <div>
                        <Label>Fonction</Label>
                        <Select><SelectTrigger className="mt-2 bg-white"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="chef">Chef de travaux</SelectItem>
                            <SelectItem value="promoteur">Promoteur</SelectItem>
                            <SelectItem value="responsable">Responsable secteur</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div><Label htmlFor="email">Email *</Label><Input id="email" type="email" required className="mt-2 bg-white" /></div>
                      <div><Label htmlFor="phone">Téléphone *</Label><Input id="phone" type="tel" required className="mt-2 bg-white" /></div>
                      <div>
                        <Label>Type de projet *</Label>
                        <Select required><SelectTrigger className="mt-2 bg-white"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="plomberie">Plomberie</SelectItem>
                            <SelectItem value="gaz">Gaz</SelectItem>
                            <SelectItem value="ventilation">Ventilation</SelectItem>
                            <SelectItem value="salle-de-bain">Salle de bain</SelectItem>
                            <SelectItem value="chauffe-eau">Chauffe-eau</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div><Label htmlFor="message">Message *</Label><Textarea id="message" required rows={4} className="mt-2 bg-white" /></div>
                    <div className="flex items-start gap-3">
                      <Checkbox id="rgpd" required />
                      <Label htmlFor="rgpd" className="text-sm text-slate-500">J'accepte que mes données soient traitées conformément à la politique de confidentialité *</Label>
                    </div>
                    <Button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-6 text-sm font-medium" disabled={isSubmitting}>
                      {isSubmitting ? 'Envoi...' : 'Envoyer ma demande'}<Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-[#F8F7F4] rounded-3xl p-8">
                  <h3 className="font-semibold text-slate-900 text-xl mb-6">Nos Coordonnées</h3>
                  <div className="space-y-5">
                    <a href="tel:+33601167240" className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="pt-1">
                        <div className="text-sm text-slate-500">Téléphone</div>
                        <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">06 01 16 72 40</div>
                      </div>
                    </a>
                    <a href="mailto:contact@paristoutservices.fr" className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="pt-1">
                        <div className="text-sm text-slate-500">Email</div>
                        <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">contact@paristoutservices.fr</div>
                      </div>
                    </a>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="pt-1">
                        <div className="text-sm text-slate-500">Adresse</div>
                        <div className="font-semibold text-slate-900">25 Rue Henri Rouanet<br/>93700 Drancy</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="pt-1">
                        <div className="text-sm text-slate-500">Horaires</div>
                        <div className="font-semibold text-slate-900">Lun - Ven : 8h - 18h</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-600 rounded-3xl p-8 text-white">
                  <h3 className="font-semibold text-xl mb-2">Réponse sous 24h</h3>
                  <p className="text-white/80">Notre équipe s'engage à vous recontacter rapidement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="h-96 bg-slate-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.4388!3d48.8534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzEyLjIiTiAywrAyNicxOS43IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            title="Paris Tout Services - Localisation"
          />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
