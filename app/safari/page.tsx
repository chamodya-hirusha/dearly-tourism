import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Compass,
  Clock,
  Users,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  AlertCircle,
  Camera,
  ArrowRight,
  Eye,
  Trees,
} from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { HeroSection } from '@/components/shared/HeroSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { DemoBadge } from '@/components/shared/DemoBadge';
import { safariOverview, safariPackagesData } from '@/data/safariPackages';
import { galleryItemsData } from '@/data/galleryImages';
import { contactDetails } from '@/data/navigation';

export default function SafariPage() {
  const safariPhotos = galleryItemsData.filter((i) => i.category === 'safari').slice(0, 4);

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <HeroSection
          breadcrumbs={[{ label: 'Yala Safari' }]}
          eyebrow="Wildlife Expeditions • Ruhuna National Park"
          title="Untamed Yala Safari Adventures"
          subtitle="Explore the home of the Sri Lankan leopard, roaming Asian elephant herds, and hundreds of bird species in customized open-top 4x4 safari jeeps."
          backgroundImage="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2000&q=85"
          primaryCtaText="Book a Safari Jeep"
          primaryCtaLink="/book?experience=yala-safari-expedition"
          secondaryCtaText="Ask Safari Details on WhatsApp"
          secondaryCtaLink={contactDetails.whatsappUrl}
        />

        {/* Ethical Wildlife Sightings Notice */}
        <section className="bg-[#702F42] text-white py-4 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#702F42] shrink-0" />
              <span>
                <strong>Ethical Safari Policy:</strong> We respect wildlife in their natural habitat. Sightings are wild and spontaneous, never staged or guaranteed.
              </span>
            </div>
            <DemoBadge label="Licensed DWC Park Drivers" />
          </div>
        </section>

        {/* Park Overview */}
        <section className="py-20 bg-white border-b border-[#E8DCD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#702F42]">
                  <span className="w-6 h-px bg-[#702F42]" />
                  <span>The Ruhuna Wilderness</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#30262A] leading-tight">
                  Where Ocean Dunes Meet Ancient Scrub Jungle.
                </h2>

                <p className="text-[#6A5D63] text-base leading-relaxed">
                  {safariOverview.description}
                </p>

                <p className="text-[#6A5D63] text-base leading-relaxed">
                  Departing early from Dearly Holiday Home allows us to join the first gate queue at Palatupana or Katagamuwa. Our custom modified high-clearance jeeps are fitted with comfortable forward-facing elevated seats, wide unobstructed sightlines for telephoto lenses, and USB charging points.
                </p>

                <div className="p-4 rounded-2xl bg-[#F8F3EF] border border-[#E8DCD2] text-xs text-[#30262A] space-y-2">
                  <div className="font-bold text-[#702F42] flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-[#702F42]" />
                    <span>Wildlife Conservation Notice</span>
                  </div>
                  <p className="text-[#6A5D63] leading-relaxed">
                    {safariOverview.ethicsNote}
                  </p>
                </div>
              </div>

              {/* Photo Box */}
              <div className="lg:col-span-5 relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-[#E8DCD2]">
                <Image
                  src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80"
                  alt="Sri Lankan Leopard on granite rock in Yala"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Wildlife Highlights */}
        <section className="py-20 lg:py-24 bg-[#F8F3EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Key Inhabitants"
              title="Wildlife of Yala National Park"
              subtitle="Sri Lanka is recognized as one of the world's 36 global biodiversity hotspots. Discover the species you may encounter."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safariOverview.keyWildlife.map((animal, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-[#E8DCD2] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#702F42]/10 text-[#702F42] mb-3">
                      {animal.status}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#30262A] mb-2">
                      {animal.name}
                    </h3>
                    <p className="text-xs text-[#6A5D63] leading-relaxed">
                      {animal.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safari Packages Showcase */}
        <section className="py-20 lg:py-24 bg-white border-y border-[#E8DCD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Tailored Expeditions"
              title="Curated Yala Safari Packages"
              subtitle="All safari packages include hotel door-to-door transfer in Tissamaharama, official park admission permits, tracking fees, and breakfast/snack boxes."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
              {safariPackagesData.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-[#F8F3EF] rounded-3xl p-8 border border-[#E8DCD2] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#E8DCD2]">
                      <div>
                        <span className="text-xs font-semibold text-[#702F42] uppercase tracking-wider">
                          {pkg.duration}
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-[#30262A] mt-1">
                          {pkg.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase text-[#6A5D63]">Demo Rate:</span>
                        <div className="font-serif text-2xl font-bold text-[#702F42]">
                          ${pkg.priceUSD}{' '}
                          <span className="text-xs font-sans text-[#6A5D63]">USD / person</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-4 text-xs text-[#6A5D63]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#702F42]" />
                        {pkg.timeWindow}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#702F42]" />
                        {pkg.groupType}
                      </span>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-[#6A5D63] leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-6 space-y-2">
                      <h4 className="text-xs font-bold text-[#702F42] uppercase tracking-wider">
                        Safari Highlights:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#6A5D63]">
                        {pkg.highlights.map((h, hi) => (
                          <li key={hi} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#702F42] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Inclusions */}
                    <div className="mt-6 pt-4 border-t border-[#E8DCD2]/60 space-y-2">
                      <h4 className="text-xs font-bold text-[#30262A] uppercase tracking-wider">
                        Inclusions:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.included.map((inc, ii) => (
                          <span
                            key={ii}
                            className="text-[11px] px-2.5 py-1 rounded-md bg-white border border-[#E8DCD2] text-[#6A5D63]"
                          >
                            ✓ {inc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#E8DCD2] flex items-center justify-between">
                    <span className="text-[11px] text-[#6A5D63]">
                      Pickup directly from Dearly Holiday Home
                    </span>

                    <Link
                      href={`/book?experience=yala-safari-expedition`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#702F42] hover:bg-[#592333] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Package</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wildlife Photos */}
        <section className="py-20 bg-[#F8F3EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Wildlife Moments"
              title="Captured on Safari"
              subtitle="Photos captured by our naturalist trackers and safari guests in Yala National Park."
            />

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {safariPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="relative aspect-4/3 rounded-2xl overflow-hidden bg-[#E8DCD2] shadow-xs"
                >
                  <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Embark on an Authentic Ruhuna Wilderness Tour"
          subtitle="Reserve your customized 4x4 safari jeep with an expert wildlife tracker. Free cancellation up to 24 hours prior."
          primaryButtonText="Reserve Safari Jeep"
          primaryButtonLink="/book?experience=yala-safari-expedition"
        />
      </main>

      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}
