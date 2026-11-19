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
  MessageCircle,
} from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { HeroSection } from '@/components/shared/HeroSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';

import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { DemoBadge } from '@/components/shared/DemoBadge';
import { cookingClassDetailData } from '@/data/cookingClasses';
import { contactDetails } from '@/data/navigation';

export default function CookingClassPage() {
  const data = cookingClassDetailData;

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
        <section className="bg-white border-b border-[#E8DCD2] py-4 sm:py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm">
              <div className="grid grid-cols-2 sm:flex sm:items-center gap-3 sm:gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#702F42] shrink-0" />
                  <span><strong>Duration:</strong> {data.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#702F42] shrink-0" />
                  <span><strong>Group Size:</strong> 2 to 8 guests</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <Award className="w-4 h-4 text-[#702F42] shrink-0" />
                  <span><strong>Skill Level:</strong> Beginner to Foodie</span>
                </div>
              </div>

              <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-4 pt-3 sm:pt-0 border-t border-[#E8DCD2] sm:border-t-0">
                <div className="text-left sm:text-right">
                  <span className="text-[11px] sm:text-xs text-[#6A5D63] block">Demo Rate:</span>
                  <div className="font-serif text-xl sm:text-2xl font-bold text-[#702F42] leading-tight">
                    ${data.demoPriceUSD}{' '}
                    <span className="text-xs font-sans text-[#6A5D63]">USD / guest</span>
                  </div>
                </div>

                <Link
                  href="/book?experience=cooking-masterclass"
                  className="px-5 sm:px-6 py-2.5 rounded-full bg-[#702F42] hover:bg-[#592333] text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors whitespace-nowrap"
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

        {/* What's Included */}
        <section className="py-20 bg-[#F8F3EF]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Inclusions */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DCD2] shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#702F42]/10 text-[#702F42] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#702F42]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#30262A]">
                  Everything That Is Included
                </h3>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-[#6A5D63]">
                {data.included.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#702F42] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>


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
