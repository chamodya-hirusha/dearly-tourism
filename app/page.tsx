import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Flame,
  UtensilsCrossed,
  HeartHandshake,
  Compass,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  MapPin,
  Calendar,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { TestimonialSection } from '@/components/shared/TestimonialSection';
import { CTASection } from '@/components/shared/CTASection';
import { DemoBadge } from '@/components/shared/DemoBadge';
import { allExperiences } from '@/data/experiences';
import { galleryItemsData } from '@/data/galleryImages';
import { contactDetails } from '@/data/navigation';

export default function HomePage() {
  const featuredExperiences = allExperiences.filter((e) => e.featured);
  const foodGalleryPreview = galleryItemsData.filter((i) => i.category === 'food' || i.category === 'cooking').slice(0, 6);

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* 1. Cinematic Hero Section */}
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with layered editorial treatment */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gallery/garden-cooking-masterclass.jpg"
              alt="Authentic Sri Lankan Cooking Experience in Tissamaharama"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#30262A]/85 via-[#30262A]/45 to-[#30262A]/30" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32 text-center text-white flex flex-col items-center">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs uppercase tracking-widest font-semibold bg-white/15 backdrop-blur-md text-[#E8DCD2] border border-white/20 mb-5 sm:mb-6 shadow-xs animate-in fade-in slide-in-from-bottom-2 duration-500 max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#702F42] animate-pulse shrink-0" />
              <span className="truncate">Tissamaharama • Ruhuna Food Heritage • Near Yala</span>
            </div>

            {/* Exact Required Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] drop-shadow-sm animate-in fade-in slide-in-from-bottom-3 duration-700">
              Discover the Art of Authentic Sri Lankan Cooking.
            </h1>

            {/* Exact Required Supporting Text */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-[#E8DCD2]/95 max-w-2xl leading-relaxed font-sans font-normal animate-in fade-in slide-in-from-bottom-4 duration-800">
              Experience the rich flavours of Sri Lanka through traditional recipes, fresh local ingredients, and warm home-style hospitality in Tissamaharama.
            </p>

            {/* Exact Required CTAs */}
            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-5 duration-900">
              <Link
                href="/experiences"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-medium text-sm transition-all duration-200"
              >
                <span>Explore Experiences</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#702F42] hover:bg-[#592333] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Experience</span>
              </Link>
            </div>

            {/* Quick Trust Highlights */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#E8DCD2]/80 pt-6 max-w-3xl w-full">
              <div className="flex flex-col items-center">
                <span className="font-serif text-lg font-bold text-white">100%</span>
                <span>Authentic Clay Pots</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-serif text-lg font-bold text-white">Garden Fresh</span>
                <span>Spices & Coconuts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-serif text-lg font-bold text-white">30 Mins</span>
                <span>To Yala Safari Gates</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-serif text-lg font-bold text-white">5.0 ★</span>
                <span>Loved by Travelers</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Introduction Section about Dearly Cooking Class */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#F8F3EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Editorial Visual Collage */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-[#E8DCD2]">
                  <Image
                    src="/images/gallery/village-clay-kitchen-prep.jpg"
                    alt="Dearly authentic clay kitchen in Tissamaharama"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Overlapping secondary card */}
                <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white p-5 rounded-2xl shadow-xl border border-[#E8DCD2] max-w-xs hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#702F42]/10 text-[#702F42] flex items-center justify-center shrink-0">
                      <Flame className="w-6 h-6 text-[#702F42]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-[#6A5D63]">
                        Living Tradition
                      </div>
                      <div className="font-serif text-sm font-bold text-[#30262A]">
                        Firewood & Clay Pot Mastery
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#702F42]">
                  <span className="w-6 h-px bg-[#702F42]" />
                  <span>Welcome to Akurugoda</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#30262A] leading-tight">
                  A Taste of Home, Cooked with Three Generations of Love.
                </h2>

                <p className="text-[#6A5D63] text-base leading-relaxed font-sans">
                  Tucked away in the quiet village of Akurugoda just outside Tissamaharama, <strong>Dearly Cooking Class & Holiday Home</strong> was born from a simple passion: welcoming international travelers to experience genuine Sri Lankan hospitality not as tourists, but as invited friends at our family dining table.
                </p>

                <p className="text-[#6A5D63] text-base leading-relaxed font-sans">
                  Unlike commercial cooking academies, our sessions take place in an open-air garden kitchen surrounded by coconut palms and mango trees. You will grind fragrant whole spices on the traditional granite slab (Miris Gala), scrape coconuts with the wooden Hiramanaya, and learn how clay earthenware gently caramelizes coconut gravies into perfection.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#702F42] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-[#30262A]">Pure Homemade Spices</h3>
                      <p className="text-xs text-[#6A5D63]">Roasted in small batches with zero artificial additives.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#702F42] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-[#30262A]">All Palates Welcome</h3>
                      <p className="text-xs text-[#6A5D63]">Easily adapted for vegan, vegetarian, and mild spice preferences.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#702F42] hover:text-[#702F42] transition-colors"
                  >
                    <span>Read Our Family Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span>•</span>
                  <Link
                    href="/cooking-class"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#702F42] hover:underline"
                  >
                    <span>Explore Masterclass Details</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Featured Experiences Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-y border-[#E8DCD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Curated In Tissamaharama"
              title="Four Signature Ways to Experience Ruhuna"
              subtitle="From hands-on culinary masterclasses and garden lunches to thrilling Yala National Park leopard safaris and peaceful holiday home stays."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredExperiences.map((exp) => (
                <div
                  key={exp.id}
                  className="group bg-[#F8F3EF] rounded-2xl overflow-hidden border border-[#E8DCD2] hover:border-[#702F42]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-4/3 w-full overflow-hidden bg-[#E8DCD2]">
                      <Image
                        src={exp.image}
                        alt={exp.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#702F42] text-white">
                        {exp.categoryLabel}
                      </span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center justify-between text-xs text-[#6A5D63] mb-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#702F42]" />
                          {exp.duration}
                        </span>
                        <span className="font-bold text-[#702F42] text-sm">
                          ${exp.priceUSD} USD
                        </span>
                      </div>

                      <h3 className="font-serif text-base font-bold text-[#30262A] group-hover:text-[#702F42] transition-colors leading-snug">
                        {exp.title}
                      </h3>

                      <p className="mt-2 text-xs text-[#6A5D63] line-clamp-3 leading-relaxed">
                        {exp.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      href={
                        exp.slug === 'cooking-class'
                          ? '/cooking-class'
                          : exp.slug === 'holiday-home'
                          ? '/holiday-home'
                          : exp.slug === 'yala-safari'
                          ? '/safari'
                          : `/book?experience=${exp.id}`
                      }
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white hover:bg-[#702F42] hover:text-white text-[#702F42] text-xs font-semibold border border-[#E8DCD2] transition-colors"
                    >
                      <span>Explore Package</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#702F42] hover:bg-[#592333] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
              >
                <span>View All 6 Experiences & Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. How It Works Section */}
        <section className="py-20 lg:py-24 bg-[#F8F3EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Simple & Transparent"
              title="How It Works"
              subtitle="We believe in simple, friendly, stress-free travel arrangements. Here is how your experience unfolds from inquiry to your first bite."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Select & Inquire',
                  desc: 'Browse our cooking classes, safari packages, or garden rooms and submit a demo booking request or message host Dearly directly on WhatsApp.',
                },
                {
                  step: '02',
                  title: 'Custom Coordination',
                  desc: 'We coordinate your preferred time slot, dietary needs (vegetarian, vegan, gluten-free), and arrange hotel pickup in Tissamaharama if needed.',
                },
                {
                  step: '03',
                  title: 'Hands-On Immersion',
                  desc: 'Arrive at our breezy garden kitchen. Crack coconuts, toast spices, cook in clay pots, or jump aboard our custom 4x4 safari jeep for Yala.',
                },
                {
                  step: '04',
                  title: 'Feast & Take Memories',
                  desc: 'Savor a multi-dish lotus leaf banquet, take home our printed family recipe collection, and leave with memories that last a lifetime.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative bg-white rounded-2xl p-7 border border-[#E8DCD2] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="font-serif text-3xl font-bold text-[#D8BFA3] block mb-3">
                      {item.step}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#30262A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6A5D63] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-2 flex items-center text-[11px] text-[#702F42] font-semibold">
                    <span>Authentic Ruhuna Hospitality</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Food Photography Gallery Preview */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-y border-[#E8DCD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <SectionHeading
                alignment="left"
                eyebrow="The Visual Feast"
                title="A Glimpse into Our Kitchen"
                subtitle="From slow-cooked baby jackfruit to granite ground chili sambols, explore the vibrant colors of Sri Lankan village cooking."
              />
              <Link
                href="/gallery"
                className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#702F42] hover:text-[#592333]"
              >
                <span>View Full Photo Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {foodGalleryPreview.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-[#E8DCD2] shadow-xs"
                >
                  <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 16vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-[#30262A]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <p className="text-white text-[11px] font-medium leading-tight">
                      {photo.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Why Choose Dearly Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#702F42] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              theme="dark"
              eyebrow="Why Choose Us"
              title="A Genuine Connection, Not a Commercial Tour"
              subtitle="We offer the warmth of an intimate village home combined with professional cleanliness and attention to detail."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: UtensilsCrossed,
                  title: '100% Traditional Clay Pots',
                  desc: 'We never cook curries in stainless steel or aluminum. Unglazed earthenware clay pots breathe and retain the authentic deep earthy minerals of ancient Ruhuna cooking.',
                },
                {
                  icon: HeartHandshake,
                  title: 'Family-Run Intimacy',
                  desc: 'Small classes strictly capped at 2 to 8 guests. Everyone gets their own workspace, their own clay pot, and hands-on time scraping coconuts and tempering spices.',
                },
                {
                  icon: Compass,
                  title: 'Ethical Yala Wildlife Safaris',
                  desc: 'We prioritize animal welfare over aggressive chasing. Our experienced local naturalists follow respectful park etiquette while giving you superior photography angles.',
                },
              ].map((feature, i) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#702F42] text-white flex items-center justify-center mb-5 shadow-xs">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#E8DCD2]/80 leading-relaxed font-sans">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. Customer Testimonials */}
        <TestimonialSection limit={3} />

        {/* 8. Location Section Featuring Tissamaharama & Yala */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E8DCD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#702F42]">
                  <span className="w-6 h-px bg-[#702F42]" />
                  <span>The Southern Gateway</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#30262A] leading-tight">
                  Tissamaharama: Ancient Lakes, Sacred Temples & Wild Jungles
                </h2>

                <p className="text-[#6A5D63] text-sm sm:text-base leading-relaxed">
                  Founded in the 3rd century BC as the capital of the ancient Ruhuna Kingdom, Tissamaharama is the cultural and geographical heart of southern Sri Lanka. Surrounded by colossal ancient irrigation reservoirs (Tissa Wewa and Debarawewa) lined with water lilies and giant trees where thousands of fruit bats roost at dusk.
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-[#30262A]">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F3EF] border border-[#E8DCD2]">
                    <MapPin className="w-4 h-4 text-[#702F42] shrink-0" />
                    <span><strong>Dearly Holiday Home:</strong> No. 14, Court Road, Akurugoda</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F3EF] border border-[#E8DCD2]">
                    <Clock className="w-4 h-4 text-[#702F42] shrink-0" />
                    <span><strong>To Yala National Park:</strong> 30-minute drive to Palatupana & Katagamuwa gates</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F3EF] border border-[#E8DCD2]">
                    <Compass className="w-4 h-4 text-[#702F42] shrink-0" />
                    <span><strong>To Tissa Wewa Lake:</strong> 5-minute leisurely bicycle ride</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#702F42] hover:text-[#702F42]"
                  >
                    <span>View Map & Driving Directions</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Landscape photography of Tissa & Yala */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-[#E8DCD2]">
                  <Image
                    src="/images/gallery/tissa-lake-sunset-dining.jpg"
                    alt="Tissa Wewa lake sunset dining patio in Tissamaharama"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Final Booking CTA Section */}
        <CTASection
          title="Begin Your Authentic Sri Lankan Culinary Journey"
          subtitle="Whether you crave the scent of toasted cinnamon and curry leaves or the thrill of dawn in Yala, we would be honored to host you."
          primaryButtonText="Reserve Your Experience"
          primaryButtonLink="/book"
        />
      </main>

      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}
