import React from 'react';
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