import React from 'react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { HeroSection } from '@/components/shared/HeroSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { ImageGallery } from '@/components/gallery/ImageGallery';
import { galleryItemsData } from '@/data/galleryImages';

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <HeroSection
          breadcrumbs={[{ label: 'Gallery' }]}
          eyebrow="Visual Journal"
          title="Moments of Food, Wilderness & Life"
          subtitle="Explore the rich colors of our garden hearth, traditional spices, comfortable holiday home retreat, and breathtaking wildlife encounters in Yala."
          backgroundImage="/images/gallery/banana-leaf-rice-and-curry-banquet.jpg"
          primaryCtaText="Book a Visit"
          primaryCtaLink="/book"
          secondaryCtaText="Explore Cooking Class"
          secondaryCtaLink="/cooking-class"
        />

        <section className="py-20 lg:py-24 bg-[#F8F3EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Curated Photography"
              title="Filter by Experience"
              subtitle="Click on any photograph to view in high definition with detailed cultural and culinary context."
            />

            <div className="mt-14">
              <ImageGallery items={galleryItemsData} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}
