import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const MentionsLegales = () => {
  return (
    <>
      <SEOHead
        title="Mentions légales | Paris Tout Services – Plombier Paris IDF"
        description="Mentions légales du site paristoutservices.fr. Informations sur l'éditeur, l'hébergement et la propriété intellectuelle."
        canonical="/mentions-legales"
      />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl font-bold mb-8 text-foreground">Mentions légales</h1>

          <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">Éditeur du site</h2>
              <p>
                <strong>Paris Tout Services</strong><br />
                E-mail : paristoutservices@gmail.com<br />
                Site web : <a href="https://paristoutservices.com" className="text-primary hover:underline">https://paristoutservices.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Conception et réalisation du site</h2>
              <p>
                Ce site a été conçu et réalisé par{' '}
                <a href="https://ernestine.framer.website" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  Ernestine
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Hébergement</h2>
              <p>
                Ce site est hébergé par <strong>Hostinger</strong>.<br />
                Hostinger International Ltd.<br />
                61 Lordou Vironos Street, 6023 Larnaca, Chypre<br />
                Site web : <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.hostinger.fr</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes) est protégé par le droit d'auteur. Toute reproduction, représentation ou diffusion, en tout ou partie, du contenu de ce site sans autorisation préalable est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Responsabilité</h2>
              <p>
                Paris Tout Services s'efforce de fournir des informations aussi précises que possible sur ce site. Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour des informations.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MentionsLegales;
