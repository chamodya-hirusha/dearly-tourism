import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  CheckCircle2,
  Users,
  Maximize2,
  Bed,
  MapPin,
  Calendar,
  Wifi,
  AirVent,
  Coffee,
  Bike,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  UtensilsCrossed,
} from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { HeroSection } from '@/components/shared/HeroSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { DemoBadge } from '@/components/shared/DemoBadge';
import { holidayHomeOverview, roomTypesData } from '@/data/accommodation';
import { galleryItemsData } from '@/data/galleryImages';
import { contactDetails } from '@/data/navigation';

export default function HolidayHomePage() {
  const stayPhotos = galleryItemsData.filter((i) => i.category === 'stay').slice(0, 4);

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <HeroSection
          breadcrumbs={[{ label: 'Holiday Home' }]}
          eyebrow="Boutique Garden Sanctuary"
          title="Peaceful Accommodation in Akurugoda, Tissamaharama"
          subtitle="Air-conditioned garden suites, handcrafted teak beds, open verandas, and waking up to peacock calls before your dawn safari."
          backgroundImage="/images/gallery/holiday-home-canopy-bed-suite.jpg"
          primaryCtaText="Book a Room"
          primaryCtaLink="/book?experience=holiday-home-stay"
          secondaryCtaText="Contact on WhatsApp"
          secondaryCtaLink={contactDetails.whatsappUrl}
        />

        {/* Property Overview */}
        <section className="py-20 bg-white border-b border-[#E8DCD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#702F42]">
                  <span className="w-6 h-px bg-[#702F42]" />
                  <span>Property Overview</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#30262A] leading-tight">
                  {holidayHomeOverview.tagline}
                </h2>

                <p className="text-[#6A5D63] text-base leading-relaxed">
                  {holidayHomeOverview.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8DCD2]">
                  <div>
                    <span className="text-xs text-[#6A5D63] block">Location</span>
                    <strong className="text-sm text-[#30262A]">Akurugoda, Tissa</strong>
                  </div>
                  <div>
                    <span className="text-xs text-[#6A5D63] block">Atmosphere</span>
                    <strong className="text-sm text-[#30262A]">Quiet Village Garden</strong>
                  </div>
                  <div>
                    <span className="text-xs text-[#6A5D63] block">To Yala Gate</span>
                    <strong className="text-sm text-[#702F42]">25–30 Minutes</strong>
                  </div>
                </div>
              </div>

              {/* Visual Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-[#E8DCD2]">
                  <Image
                    src="/images/gallery/holiday-home-canopy-bed-suite.jpg"
                    alt="Dearly Holiday Home Bedroom"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Room Types Showcase */}
        <section className="py-20 lg:py-24 bg-[#F8F3EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Guest Accommodations"
              title="Select Your Garden Suite"
              subtitle="All rooms feature modern inverter air conditioning, en-suite rain showers, fast Wi-Fi, and complimentary homemade Sri Lankan breakfast."
            />

            <div className="mt-14 space-y-12">
              {roomTypesData.map((room, idx) => (
                <div
                  key={room.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#E8DCD2] shadow-md hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12"
                >
                  {/* Photo Section */}
                  <div className="lg:col-span-5 relative aspect-16/10 lg:aspect-auto min-h-[280px] bg-[#E8DCD2]">
                    <Image
                      src={room.images[0]}
                      alt={room.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#702F42] text-white">
                        {room.features[0]}
                      </span>
                    </div>
                  </div>

                  {/* Room Details */}
                  <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="font-serif text-2xl font-bold text-[#30262A]">
                          {room.name}
                        </h3>
                        <div className="text-right">
                          <span className="text-xs text-[#6A5D63]">Demo Rate:</span>
                          <div className="font-serif text-2xl font-bold text-[#702F42]">
                            ${room.pricePerNightUSD}{' '}
                            <span className="text-xs font-sans text-[#6A5D63]">/ night</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-[#702F42] font-medium mb-4">
                        {room.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-[#6A5D63] leading-relaxed mb-6">
                        {room.description}
                      </p>

                      {/* Specs */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F8F3EF] text-xs text-[#30262A] mb-6">
                        <div className="flex items-center gap-2">
                          <Bed className="w-4 h-4 text-[#702F42]" />
                          <span>{room.bedType}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-[#702F42]" />
                          <span>Max {room.maxGuests} Guests</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Maximize2 className="w-4 h-4 text-[#702F42]" />
                          <span>{room.sizeSqM} m² Space</span>
                        </div>
                      </div>

                      {/* Amenities Pills */}
                      <div>
                        <h4 className="text-[11px] font-bold text-[#702F42] uppercase tracking-wider mb-2">
                          Room Highlights & Amenities:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {room.amenities.map((am, i) => (
                            <span
                              key={i}
                              className="text-[11px] px-2.5 py-1 rounded-lg bg-white border border-[#E8DCD2] text-[#6A5D63]"
                            >
                              ✓ {am}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#E8DCD2] flex flex-wrap items-center justify-between gap-4">
                      <div className="text-xs text-[#6A5D63]">
                        Includes hot homemade breakfast & bicycles
                      </div>

                      <Link
                        href={`/book?experience=holiday-home-stay`}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#702F42] hover:bg-[#592333] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Reserve {room.name.split(' ')[0]} Room</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities & Amenities */}
        <section className="py-20 bg-white border-y border-[#E8DCD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Guest Amenities"
              title="Thoughtful Touches for a Comfortable Stay"
              subtitle="Everything you need for restful sleep, easy connectivity, and stress-free safari expeditions."
            />

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {holidayHomeOverview.amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-[#F8F3EF] border border-[#E8DCD2] flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#30262A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6A5D63] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Neighborhood */}
        <section className="py-20 bg-[#F8F3EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#702F42]">
                  <span className="w-6 h-px bg-[#702F42]" />
                  <span>The Akurugoda Neighborhood</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#30262A] leading-tight">
                  Tranquil Village Life Close to Everything.
                </h2>

                <p className="text-[#6A5D63] text-sm sm:text-base leading-relaxed">
                  {holidayHomeOverview.locationDescription}
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-[#30262A]">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E8DCD2]">
                    <MapPin className="w-4 h-4 text-[#702F42] shrink-0" />
                    <span><strong>Address:</strong> {contactDetails.address}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E8DCD2]">
                    <Bike className="w-4 h-4 text-[#702F42] shrink-0" />
                    <span>Free guest bicycles for sunset lake tours & bird watching</span>
                  </div>
                </div>
              </div>

              {/* Photo */}
              <div className="lg:col-span-6 relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl border border-[#E8DCD2]">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                  alt="Dearly Holiday Home Garden Environment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Room Gallery */}
        <section className="py-20 bg-white border-y border-[#E8DCD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Photo Tour"
              title="Life at the Holiday Home"
              subtitle="Shaded garden courtyards, teak verandas, and peaceful tropical ambiance."
            />

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stayPhotos.map((photo) => (
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
          title="Plan Your Stay in Tissamaharama"
          subtitle="Wake up refreshed to hot coconut hoppers and fresh tropical fruits before heading into Yala National Park."
          primaryButtonText="Reserve Holiday Home Room"
          primaryButtonLink="/book?experience=holiday-home-stay"
        />
      </main>

      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}
