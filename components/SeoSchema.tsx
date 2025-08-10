// components/SeoSchema.tsx
import React from "react";

export default function SeoSchema() {
  const faqs = [
    { question: "How quickly can you service my car?", answer: "We offer same-day service for most jobs." },
    { question: "Do you guarantee your work?", answer: "Yes, all work is guaranteed. Parts include manufacturer warranty." },
    { question: "Do you handle auto electrical faults?", answer: "Yes, diagnostics and repairs for batteries, alternators, wiring and sensors." },
  ];

  const business = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "AutomotiveBusiness", "LocalBusiness"],
    name: "Thornleigh Mechanic & Auto Electrician",
    address: "REPLACE_WITH_ADDRESS",
    telephone: "REPLACE_WITH_PHONE",
    areaServed: "Thornleigh, NSW",
    url: "https://REPLACE_LATER_DOMAIN/",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://REPLACE_LATER_DOMAIN/" },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://REPLACE_LATER_DOMAIN/",
    name: "Thornleigh Mechanic & Auto Electrician",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://REPLACE_LATER_DOMAIN/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const blocks = [business, faqSchema, breadcrumb, website];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blocks) }}
    />
  );
}
