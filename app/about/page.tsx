import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Heart,
  Flame,
  UtensilsCrossed,
  Sprout,
  Users,
  Compass,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { HeroSection } from '@/components/shared/HeroSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { DemoBadge } from '@/components/shared/DemoBadge';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <HeroSection
          breadcrumbs={[{ label: 'About Us' }]}
          eyebrow="Our Roots & Heritage"
          title="The Story of Dearly Cooking Class"
          subtitle="How a family passion for firewood clay pot cooking and Ruhuna hospitality grew into a welcoming sanctuary for international travelers in Tissamaharama."
          backgroundImage="/images/gallery/cooking-lesson-clay-pot.jpg"
          primaryCtaText="Join Our Cooking Class"
          primaryCtaLink="/cooking-class"
          secondaryCtaText="Explore Holiday Home"
          secondaryCtaLink="/holiday-home"
        />

        {/* Origin Story Section */}
        <section className="py-20 lg:py-28 bg-[#F8F3EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#702F42]">
                  <span className="w-6 h-px bg-[#702F42]" />
                  <span>Generations of Southern Warmth</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#30262A] leading-tight">
                  Where Every Guest is Welcomed as Family.
                </h2>

                <p className="text-[#6A5D63] text-base leading-relaxed font-sans">
                  In Southern Sri Lanka, food has never been merely about nourishment—it is a sacred language of welcome. For generations in the ancient kingdom of Ruhuna, family gatherings, temple almsgivings, and festive harvest celebrations revolved around the rhythmic scraping of coconuts and the irresistible sizzle of freshly tempered mustard seeds in hot coconut oil.
                </p>

                <p className="text-[#6A5D63] text-base leading-relaxed font-sans">
                  Host <strong>Dearly</strong> and his wife Sunethra grew up in Tissamaharama watching their mothers and grandmothers craft complex curries without measuring spoons, relying solely on touch, fragrance, and the wisdom of natural spices. When travelers exploring Yala National Park began asking how authentic Sri Lankan food could be experienced beyond hotel buffets, Dearly opened the doors of their Akurugoda home garden.
                </p>

                <p className="text-[#6A5D63] text-base leading-relaxed font-sans">
                  Today, <strong>Dearly Cooking Class & Holiday Home</strong> provides travelers with a rare, unhurried glimpse into genuine village life: learning how whole spices heal the body, savoring communal meals served on fresh banana leaves, and resting peacefully in quiet garden rooms surrounded by birdsong.
                </p>
              </div>

              {/* Story Visual Collage */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-[#E8DCD2]">
                  <Image
                    src="/images/gallery/village-clay-kitchen-prep.jpg"
                    alt="Dearly and family hosting guests in authentic village kitchen"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E8DCD2] shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-[#702F42] shrink-0" />
                    <span className="text-xs text-[#30262A] font-semibold">
                      Authentic Home-Style Cooking & Warm Hospitality
                    </span>
                  </div>
                  <DemoBadge label="Akurugoda, Tissamaharama" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Four Guiding Pillars */}
        <section className="py-20 lg:py-24 bg-white border-y border-[#E8DCD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Guiding Values"
              title="The Pillars of the Dearly Experience"
              subtitle="Every experience we offer is rooted in authenticity, environmental care, and deep respect for our guests and local culture."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Flame,
                  title: 'Firewood & Earthen Pots',
                  desc: 'We preserve ancient clay pot cooking. Unglazed earthenware breathes, retains vital minerals, and imparts a smoky, caramelized depth that metal pans simply cannot replicate.',
                },
                {
                  icon: Sprout,
                  title: 'Pure Local Ingredients',
                  desc: 'Every coconut is cracked fresh from our garden trees. Our vegetables come from neighborhood farmer markets, and spices are sun-dried and hand-roasted without commercial fillers.',
                },
                {
                  icon: Users,
                  title: 'Cultural Exchange',
                  desc: 'We keep our masterclasses small and intimate (2 to 8 guests). It is not a demonstration behind glass, but a warm conversation where stories, laughter, and recipes are shared.',
                },
                {
                  icon: Compass,
                  title: 'Respectful Nature Care',
                  desc: 'We love Yala’s wildlife. Our safari drivers follow strict non-intrusive park ethics, keeping safe distances and turning off engines so animals remain wild and undisturbed.',
                },
              ].map((pillar, i) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-8 rounded-3xl bg-[#F8F3EF] border border-[#E8DCD2] flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#702F42] text-white flex items-center justify-center mb-5 shadow-xs">
                        <IconComponent className="w-6 h-6 text-[#E8DCD2]" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-[#30262A] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6A5D63] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Southern Sri Lankan Food Culture */}
        <section className="py-20 bg-[#702F42] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/gallery/banana-leaf-rice-and-curry-banquet.jpg"
                  alt="Traditional Sri Lankan curries spread on fresh banana leaf"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D8BFA3]">
                  <span className="w-6 h-px bg-[#D8BFA3]" />
                  <span>The Ruhuna Gastronomic Legacy</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  Why Ruhuna Cuisine is Special.
                </h2>

                <p className="text-sm sm:text-base text-[#E8DCD2]/85 leading-relaxed font-sans">
                  Unlike Western or Northern Sri Lankan styles, Southern food has distinct culinary signatures: the extensive use of slow sun-dried <em>goraka</em> (garcinia) for natural souring, heavily roasted dark coriander and cumin seeds, freshly pounded Maldive fish, and the rich richness of fresh buffalo curd served with wild palm treacle.
                </p>

                <p className="text-sm sm:text-base text-[#E8DCD2]/85 leading-relaxed font-sans">
                  When you cook with us, we don’t just teach recipes—we teach you the philosophy of balancing flavors so every meal feels satisfying, wholesome, and deeply nourishing.
                </p>

                <div className="pt-2">
                  <Link
                    href="/cooking-class"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#702F42] hover:bg-[#592333] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                  >
                    <span>Read About the Cooking Masterclass</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}
