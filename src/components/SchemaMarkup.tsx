const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Paris Tout Services",
  "@id": "https://paristoutservices.fr",
  "url": "https://paristoutservices.fr",
  "telephone": "+33-6-01-16-72-40",
  "email": "contact@paristoutservices.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "25 Rue Henri Rouanet",
    "addressLocality": "Drancy",
    "postalCode": "93700",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.9272,
    "longitude": 2.4519
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "€€",
  "image": "https://paristoutservices.fr/logo.png",
  "description": "Expert en plomberie et installation gaz pour professionnels en Île-de-France depuis 2016. Certifié RGE, PG, Qualipac.",
  "areaServed": [
    { "@type": "City", "name": "Paris" },
    { "@type": "AdministrativeArea", "name": "Hauts-de-Seine" },
    { "@type": "AdministrativeArea", "name": "Seine-Saint-Denis" },
    { "@type": "AdministrativeArea", "name": "Val-de-Marne" },
    { "@type": "AdministrativeArea", "name": "Seine-et-Marne" },
    { "@type": "AdministrativeArea", "name": "Yvelines" },
    { "@type": "AdministrativeArea", "name": "Essonne" },
    { "@type": "AdministrativeArea", "name": "Val-d'Oise" }
  ],
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "name": "Certification RGE" },
    { "@type": "EducationalOccupationalCredential", "name": "Certification PG" },
    { "@type": "EducationalOccupationalCredential", "name": "Certification Qualipac" }
  ],
  "sameAs": []
};

interface SchemaMarkupProps {
  type?: 'localBusiness' | 'breadcrumb';
  breadcrumbItems?: Array<{ name: string; url: string }>;
}

const SchemaMarkup = ({ type = 'localBusiness', breadcrumbItems }: SchemaMarkupProps) => {
  let schema = localBusinessSchema;

  if (type === 'breadcrumb' && breadcrumbItems) {
    schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://paristoutservices.fr${item.url}`
      }))
    } as any;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
