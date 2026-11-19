import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { demoTestimonials } from '@/data/testimonials';
import { Testimonial } from '@/types';
import { SectionHeading } from './SectionHeading';

interface TestimonialSectionProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  limit?: number;
  className?: string;
}

function FeedbackCard({ t, isCompact = false }: { t: Testimonial; isCompact?: boolean }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-xs border border-[#E8DCD2] hover:border-[#702F42]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
        isCompact ? 'w-[290px] shrink-0 p-5 select-none' : 'p-7'
      }`}
    >
      <div>
        {/* Rating & Quote Icon */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 text-[#D8BFA3]">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <Quote className={`text-[#E8DCD2] ${isCompact ? 'w-5 h-5' : 'w-6 h-6'}`} />
        </div>

        {/* Experience taken tag */}
        <div className="mb-2.5">
          <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-[#F8F3EF] text-[#702F42] border border-[#E8DCD2]">
            {t.experienceTaken}
          </span>
        </div>

        {/* Quote text */}
        <p className={`text-[#30262A]/90 leading-relaxed italic ${isCompact ? 'text-xs line-clamp-3' : 'text-sm'}`}>
          "{t.quote}"
        </p>
      </div>

      {/* Guest Profile Footer */}
      <div className={`border-t border-[#E8DCD2] flex items-center justify-between ${isCompact ? 'pt-4 mt-4' : 'pt-6 mt-6'}`}>
        <div className="flex items-center gap-2.5">
          <div className="relative w-9 h-9 rounded-full overflow-hidden bg-[#E8DCD2] border border-[#702F42]/20 shrink-0">
            <Image
              src={t.avatar}
              alt={t.guestName}
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-[#30262A] truncate">
              {t.guestName}
            </h4>
            <p className="text-[10px] sm:text-[11px] text-[#6A5D63] flex items-center gap-1 truncate">
              <span>{t.countryFlag}</span>
              <span>{t.country}</span>
              <span>•</span>
              <span>{t.date}</span>
            </p>
          </div>
        </div>

        <span className="text-[10px] text-[#702F42] font-medium bg-[#F8F3EF] px-2 py-0.5 rounded border border-[#E8DCD2] shrink-0">
          Verified
        </span>
      </div>
    </div>
  );
}

export function TestimonialSection({
  title = 'Stories from Fellow Travelers',
  subtitle = 'Discover how travelers from around the world enjoyed our home cooking classes, quiet garden rooms, and thrilling Yala wildlife safaris.',
  eyebrow = 'Guest Feedback',
  limit,
  className = '',
}: TestimonialSectionProps) {
  const reviews = limit ? demoTestimonials.slice(0, limit) : demoTestimonials;

  // Split all 6 testimonials into 2 rows for mobile auto-scroll marquee
  const row1 = demoTestimonials.slice(0, 3);
  const row2 = demoTestimonials.slice(3, 6);
  // Duplicate each row to ensure an uninterrupted, seamless infinite loop
  const row1Items = [...row1, ...row1];
  const row2Items = [...row2, ...row2];

  return (
    <section className={`py-16 sm:py-20 bg-[#F8F3EF] overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} className="mb-8 sm:mb-12" />

        {/* Desktop & Tablet: Standard Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((t) => (
            <FeedbackCard key={t.id} t={t} isCompact={false} />
          ))}
        </div>
      </div>

      {/* Mobile: 2-Row Auto-scrolling Infinite Marquee (No Buttons) */}
      <div className="block md:hidden relative w-full overflow-hidden">
        {/* Soft Left & Right Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F8F3EF] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#F8F3EF] to-transparent z-10" />

        {/* Row 1 - Auto-scrolls Left */}
        <div className="animate-marquee-left gap-4 pr-4">
          {row1Items.map((t, idx) => (
            <FeedbackCard key={`row1-${t.id}-${idx}`} t={t} isCompact={true} />
          ))}
        </div>

        {/* Row 2 - Auto-scrolls Right */}
        <div className="animate-marquee-right gap-4 pr-4 mt-4">
          {row2Items.map((t, idx) => (
            <FeedbackCard key={`row2-${t.id}-${idx}`} t={t} isCompact={true} />
          ))}
        </div>
      </div>
    </section>
  );
}
