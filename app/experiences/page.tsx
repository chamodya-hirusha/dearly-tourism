import React from 'react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { HeroSection } from '@/components/shared/HeroSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { ExperienceGrid } from '@/components/experiences/ExperienceGrid';
import { allExperiences } from '@/data/experiences';

export default function ExperiencesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <HeroSection
          breadcrumbs={[{ label: 'Experiences' }]}
          eyebrow="Tissamaharama & Yala Adventures"
          title="Curated Island Journeys & Culinary Arts"
          subtitle="Explore hands-on traditional cooking masterclasses, wild Yala National Park leopard safaris, sunset catamaran birding, and boutique garden stays."
          backgroundImage="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=2000&q=85"
          primaryCtaText="Book Any Experience"
          primaryCtaLink="/book"
          secondaryCtaText="Explore Cooking Class"
          secondaryCtaLink="/cooking-class"
        />

        <section className="py-20 lg:py-24 bg-[#F8F3EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Explore Our Offerings"
              title="All Available Experiences & Packages"
              subtitle="Filter by category to find your perfect encounter with Southern Sri Lankan culture and nature."
            />

            <div className="mt-14">
              <ExperienceGrid experiences={allExperiences} />
            </div>
          </div>
        </section>

        <CTASection
          title="Looking for a Tailored Multi-Day Package?"
          subtitle="Combine a morning Yala safari with an evening cooking class and garden suite stay. We are happy to tailor your ideal Tissamaharama itinerary."
          primaryButtonText="Inquire on WhatsApp"
          primaryButtonLink="/contact"
        />
      </main>

      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}
