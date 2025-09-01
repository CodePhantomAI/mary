import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '../components/home/HeroSection';
import { PackagesSection } from '../components/home/PackagesSection';
import { LocationsSection } from '../components/home/LocationsSection';
import { WhyUsSection } from '../components/home/WhyUsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FAQSection } from '../components/home/FAQSection';
import { ContactFormSection } from '../components/home/ContactFormSection';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>הצעת נישואין בירושלים — תכנון מלא וחבילות לוקיישן | EranFixer</title>
        <meta name="description" content="מפיקים הצעות נישואין מרגשות בירושלים: כותל, ימין משה, טיילת ארמון הנציב ועוד. חבילות צילום/פרחים/נגנים, תיאום מלא ולו״ז מדויק. שיחת ייעוץ חינם." />
        <meta name="keywords" content="הצעת נישואין בירושלים, הצעות נישואים בירושלים, מארגנת הצעת נישואין, תכנון הצעת נישואין, הצעת נישואין בכותל, הצעת נישואין בימין משה" />
        <link rel="canonical" href="https://jerusalemproposals.co.il/" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jerusalemproposals.co.il/" />
        <meta property="og:title" content="הצעת נישואין בירושלים — תכנון מלא וחבילות לוקיישן" />
        <meta property="og:description" content="מפיקים הצעות נישואין מרגשות בירושלים: כותל, ימין משה, טיילת ארמון הנציב ועוד. חבילות צילום/פרחים/נגנים, תיאום מלא ולו״ז מדויק." />
        <meta property="og:image" content="https://res.cloudinary.com/dydlp7k4x/image/upload/v1756754867/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp_2025-02-14_%D7%91%D7%A9%D7%A2%D7%94_15.34.18_d4475241_eupxhu.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "הצעות נישואים ירושלים",
            "url": "https://jerusalemproposals.co.il",
            "logo": "https://jerusalemproposals.co.il/heart.svg",
            "description": "תכנון והפקת הצעות נישואין מרגשות בירושלים",
            "telephone": "+972-50-935-1650",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "ירושלים",
              "addressCountry": "IL"
            },
            "areaServed": "ירושלים והסביבה",
            "serviceType": "תכנון הצעות נישואין",
            "sameAs": ["https://yaffakalevana.co.il"]
          })}
        </script>
      </Helmet>
      
      <HeroSection />
      <PackagesSection />
      <LocationsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactFormSection />
    </>
  );
}