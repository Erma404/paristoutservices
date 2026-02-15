import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const PolitiqueConfidentialite = () => {
  return (
    <>
      <SEOHead
        title="Politique de confidentialité | Paris Tout Services"
        description="Politique de confidentialité du site paristoutservices.com"
        canonical="/politique-confidentialite"
      />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl font-bold mb-8 text-foreground">Politique de confidentialité</h1>

          <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
              <p>
                Paris Tout Services s'engage à protéger la vie privée des utilisateurs de son site{' '}
                <a href="https://paristoutservices.com" className="text-primary hover:underline">paristoutservices.com</a>.
                Cette politique de confidentialité décrit les informations que nous collectons et comment nous les utilisons.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Données collectées</h2>
              <p>Nous pouvons collecter les données suivantes :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse e-mail</li>
                <li>Numéro de téléphone</li>
                <li>Message envoyé via le formulaire de contact</li>
              </ul>
              <p>Ces données sont collectées uniquement lorsque vous les soumettez volontairement via notre formulaire de contact.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Utilisation des données</h2>
              <p>Les données collectées sont utilisées exclusivement pour :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Répondre à vos demandes de devis ou d'information</li>
                <li>Vous recontacter dans le cadre de votre projet</li>
              </ul>
              <p>Vos données ne sont ni vendues, ni cédées à des tiers.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Durée de conservation</h2>
              <p>
                Vos données personnelles sont conservées pendant une durée maximale de 3 ans à compter de votre dernier contact avec nous.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Vos droits</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Vous pouvez exercer ces droits en nous contactant à l'adresse : <strong>paristoutservices@gmail.com</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Cookies</h2>
              <p>
                Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de suivi n'est utilisé.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Hébergement</h2>
              <p>
                Ce site est hébergé par <strong>Hostinger</strong> (Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Chypre).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Conception du site</h2>
              <p>
                Ce site a été conçu et réalisé par{' '}
                <a href="https://ernestine.framer.website" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  Ernestine
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PolitiqueConfidentialite;
