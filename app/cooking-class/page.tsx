import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Clock,
  Users,
  CheckCircle2,
  Calendar,
  Sparkles,
  Flame,
  UtensilsCrossed,
  ArrowRight,
  ShieldCheck,
  Award,
  BookOpen,
  MessageCircle,
} from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { HeroSection } from '@/components/shared/HeroSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { TestimonialSection } from '@/components/shared/TestimonialSection';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { DemoBadge } from '@/components/shared/DemoBadge';
import { cookingClassDetailData } from '@/data/cookingClasses';
import { galleryItemsData } from '@/data/galleryImages';
import { contactDetails } from '@/data/navigation';

export default function CookingClassPage() {
  const data = cookingClassDetailData;
  const cookingPhotos = galleryItemsData.filter((i) => i.category === 'cooking' || i.category === 'food').slice(0, 4);

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Cinematic Hero */}
        <HeroSection
          breadcrumbs={[{ label: 'Cooking Class' }]}
          eyebrow="Signature Culinary Masterclass"
          title="The Art of Authentic Sri Lankan Home Cooking"
          subtitle="From cracking fresh garden coconuts and roasting whole island spices to simmering hearty curries over firewood in unglazed clay pots."
          backgroundImage="/images/gallery/garden-cooking-masterclass.jpg"
          primaryCtaText="Book This Cooking Class"
          primaryCtaLink="/book?experience=cooking-masterclass"
          secondaryCtaText="WhatsApp Host Dearly"
          secondaryCtaLink={contactDetails.whatsappUrl}
        />

        {/* Experience Overview & Quick Stats Sticky Banner */}
        <section className="bg-white border-b border-[#E8DCD2] py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-6 text-xs sm:text-sm">
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#702F42]" />
                  <span><strong>Duration:</strong> {data.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#702F42]" />
                  <span><strong>Group Size:</strong> 2 to 8 guests (Intimate)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#702F42]" />
                  <span><strong>Skill Level:</strong> Beginner to Foodie</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-xs text-[#6A5D63]">Demo Rate:</span>
                  <div className="font-serif text-2xl font-bold text-[#702F42]">
                    ${data.demoPriceUSD}{' '}
                    <span className="text-xs font-sans text-[#6A5D63]">USD / guest</span>
                  </div>
                </div>

                <Link
                  href="/book?experience=cooking-masterclass"
                  className="px-6 py-2.5 rounded-full bg-[#702F42] hover:bg-[#592333] text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors"
                >
                  Reserve Spot
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction & Host Story */}
        <section className="py-20 bg-[#F8F3EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#702F42]">
                  <span className="w-6 h-px bg-[#702F42]" />
                  <span>Experience Introduction</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#30262A] leading-tight">
                  Step Into an Authentic Southern Village Kitchen.
                </h2>

                <p className="text-[#6A5D63] text-base leading-relaxed">
                  Sri Lankan cuisine is one of the world’s most intricate, spice-scented culinary traditions, refined by maritime spice trades and deep Ayurvedic wisdom. At Dearly Cooking Class, we strip away restaurant shortcuts. No packaged curry powders, no canned coconut cream, and no metal pressure cookers.
                </p>

                <p className="text-[#6A5D63] text-base leading-relaxed">
                  Instead, you are welcomed into our open breeze pavilion garden. Under the gentle guidance of Dearly and his family, you will touch, smell, and grind raw coriander, cumin, fennel, and Ceylon cinnamon. You will grate mature coconuts on the traditional wooden bench tool and cook each dish in porous terracotta clay pots that allow flavors to deepen naturally.
                </p>

                {/* Session timings */}
                <div className="p-4 rounded-2xl bg-white border border-[#E8DCD2] space-y-2">
                  <h4 className="text-xs font-bold text-[#702F42] uppercase tracking-wider">
                    Daily Masterclass Sessions:
                  </h4>
                  {data.sessions.map((sess, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#30262A]">
                      <Clock className="w-3.5 h-3.5 text-[#702F42]" />
                      <span>{sess}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Host Profile Box */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-[#E8DCD2] shadow-md">
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#E8DCD2] border-2 border-[#702F42]/20 shrink-0">
                    <Image
                      src={data.host.avatar}
                      alt={data.host.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#30262A]">
                      {data.host.name}
                    </h3>
                    <p className="text-xs text-[#702F42] font-semibold">
                      {data.host.role}
                    </p>
                    <p className="text-[11px] text-[#6A5D63]">
                      Tissamaharama, Southern Province
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#6A5D63] leading-relaxed italic border-t border-[#E8DCD2] pt-4">
                  "{data.host.story}"
                </p>

                <div className="mt-6 pt-4 border-t border-[#E8DCD2] flex items-center justify-between text-xs text-[#702F42] font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#702F42]" />
                    Family-run hospitality
                  </span>
                  <DemoBadge label="Host Profile" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Guests Will Learn */}
        <section className="py-20 bg-white border-y border-[#E8DCD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Hands-On Curriculum"
              title="What You Will Master in 3.5 Hours"
              subtitle="Practical, transferable culinary techniques that you can easily recreate in your own kitchen back home."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.learningPoints.map((point, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-6 bg-[#F8F3EF] border border-[#E8DCD2] hover:border-[#702F42]/40 transition-all flex items-start gap-4"
                >
                  <span className="w-8 h-8 rounded-full bg-[#702F42] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm text-[#30262A] leading-relaxed font-medium">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Traditional Sri Lankan Ingredients */}
        <section className="py-20 bg-[#F8F3EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="The Island Pantry"
              title="Traditional Sri Lankan Ingredients"
              subtitle="Every herb and spice carries centuries of folklore, Ayurvedic healing wisdom, and unforgettable aromatic personality."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.traditionalIngredients.map((ing, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-[#E8DCD2] shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8DCD2]">
                    <h3 className="font-serif text-lg font-bold text-[#30262A]">
                      {ing.name}
                    </h3>
                    <span className="text-xs text-[#702F42] font-medium font-sans">
                      {ing.sinhalaName}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-xs">
                    <div>
                      <span className="font-semibold text-[#702F42]">Culinary Role:</span>
                      <p className="text-[#6A5D63] mt-0.5 leading-relaxed">{ing.role}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#702F42]">Wellness Benefit:</span>
                      <p className="text-[#6A5D63] mt-0.5 leading-relaxed">{ing.benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Menu Section */}
        <section className="py-20 bg-white border-y border-[#E8DCD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="The Feast"
              title="Sample Masterclass Banquet Menu"
              subtitle="All dishes are cooked from scratch together during class, followed by a communal lotus leaf feast."
            />

            <div className="mt-14 max-w-4xl mx-auto space-y-4">
              {data.sampleMenu.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F3EF] rounded-2xl p-6 border border-[#E8DCD2] hover:border-[#702F42]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#702F42] text-white">
                        {item.course}
                      </span>
                      <span className="text-xs font-serif text-[#702F42] italic">
                        {item.sinhalaName}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#30262A]">
                      {item.dish}
                    </h3>

                    <p className="text-xs text-[#6A5D63] leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-2 shrink-0">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white border border-[#E8DCD2] text-[#702F42]">
                      Spice: {item.isSpicy}
                    </span>
                    <div className="flex gap-1">
                      {item.dietary.map((d, di) => (
                        <span key={di} className="text-[10px] text-[#6A5D63] bg-white/60 px-1.5 py-0.5 rounded border border-[#E8DCD2]/50">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-xs text-[#6A5D63]">
              🌿 <em>Customizable dietary options: 100% Vegan, Vegetarian, Halal, or Celiac friendly available upon advance note.</em>
            </div>
          </div>
        </section>

        {/* What's Included & What to Bring */}
        <section className="py-20 bg-[#F8F3EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Inclusions */}
              <div className="bg-white rounded-3xl p-8 border border-[#E8DCD2] shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#702F42]/10 text-[#702F42] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#702F42]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#30262A]">
                    Everything That Is Included
                  </h3>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-[#6A5D63]">
                  {data.included.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#702F42] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Bring */}
              <div className="bg-white rounded-3xl p-8 border border-[#E8DCD2] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#702F42]/10 text-[#702F42] flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-[#702F42]" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#30262A]">
                      What to Bring & Prepare
                    </h3>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-[#6A5D63]">
                    {data.whatToBring.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Sparkles className="w-4 h-4 text-[#702F42] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E8DCD2]">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <div className="text-xs text-[#6A5D63]">Experience Rate:</div>
                      <div className="font-serif text-2xl font-bold text-[#702F42]">
                        ${data.demoPriceUSD} USD <span className="text-xs font-normal text-[#6A5D63]">/ guest</span>
                      </div>
                    </div>

                    <Link
                      href="/book?experience=cooking-masterclass"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#702F42] hover:bg-[#592333] text-white font-semibold text-xs sm:text-sm shadow-md transition-colors w-full sm:w-auto"
                    >
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span>Book Class Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery Grid */}
        <section className="py-20 bg-white border-y border-[#E8DCD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Kitchen Moments"
              title="Class Gallery"
              subtitle="Real moments of laughing, grinding, and tasting in our garden kitchen."
            />

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {cookingPhotos.map((photo) => (
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

            <div className="mt-8 text-center">
              <Link
                href="/gallery"
                className="text-xs sm:text-sm font-semibold text-[#702F42] hover:underline"
              >
                Browse All Photography in Our Full Gallery →
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialSection
          title="What Previous Cooking Guests Said"
          subtitle="Read honest impressions from fellow international travelers who shared our cooking hearth."
          limit={3}
        />

        {/* Final CTA */}
        <CTASection
          title="Reserve Your Spot at the Cooking Hearth"
          subtitle="Classes are strictly limited to small intimate groups. Select your preferred morning or sunset session today."
          primaryButtonText="Book Cooking Class ($28 USD)"
          primaryButtonLink="/book?experience=cooking-masterclass"
        />
      </main>

      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}
