export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "مؤسسة مؤنث سالم للتنمية",
    alternateName: "Mo3nth Salem for Development Foundation",
    url: "https://muanathsalem.org",
    foundingDate: "2024",
    description: "مؤسسة مدنية نسوية حقوقية تسعى لتحقيق المساواة من منظور النوع الاجتماعي",
    address: {
      "@type": "PostalAddress",
      streetAddress: "شارع الجامعة، الحيسين",
      addressLocality: "الجيزة",
      addressCountry: "EG",
    },
    sameAs: [
      "https://www.facebook.com/muanathsalem",
      "https://www.instagram.com/muanathsalem",
      "https://www.linkedin.com/company/muanathsalem",
    ],
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
    knowsAbout: [
      "حقوق المرأة",
      "مناهضة العنف",
      "التمكين الاقتصادي",
      "الأمان الرقمي",
      "الدعم النفسي",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
