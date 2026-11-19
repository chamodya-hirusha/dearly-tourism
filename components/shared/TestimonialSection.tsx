import React from 'react';
import Image from 'next/image';
import { Star, Quote, ShieldAlert } from 'lucide-react';
import { demoTestimonials } from '@/data/testimonials';
import { SectionHeading } from './SectionHeading';
import { DemoBadge } from './DemoBadge';

interface TestimonialSectionProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  limit?: number;
  className?: string;
}

export function TestimonialSection({
  title = 'Stories from Fellow Travelers',
  subtitle = 'Discover how travelers from around the world enjoyed our home cooking classes, quiet garden rooms, and thrilling Yala wildlife safaris.',
  eyebrow = 'Guest Feedback',
  limit,
  className = '',
}: TestimonialSectionProps) {
  const reviews = limit ? demoTestimonials.slice(0, limit) : demoTestimonials;

  return (
    <section className={`py-20 bg-[#F8F3EF] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} className="mb-12" />

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 shadow-xs border border-[#E8DCD2] hover:border-[#702F42]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#D8BFA3]">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E8DCD2]" />
                </div>

                {/* Experience taken tag */}
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#F8F3EF] text-[#702F42] border border-[#E8DCD2]">
                    {t.experienceTaken}
                  </span>
                </div>

                {/* Quote text */}
                <p className="text-sm text-[#30262A]/90 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Guest Profile Footer */}
              <div className="pt-6 mt-6 border-t border-[#E8DCD2] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#E8DCD2] border border-[#702F42]/20">
                    <Image
                      src={t.avatar}
                      alt={t.guestName}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#30262A]">
                      {t.guestName}
                    </h4>
                    <p className="text-[11px] text-[#6A5D63] flex items-center gap-1">
                      <span>{t.countryFlag}</span>
                      <span>{t.country}</span>
                      <span>•</span>
                      <span>{t.date}</span>
                    </p>
                  </div>
                </div>

                <span className="text-[10px] text-[#702F42] font-medium bg-[#F8F3EF] px-2 py-0.5 rounded border border-[#E8DCD2]">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
