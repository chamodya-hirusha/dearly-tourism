import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Users, Star, ArrowRight, Calendar } from 'lucide-react';
import { Experience } from '@/types';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  // Determine link target: if slug matches cooking-class, holiday-home, yala-safari, link directly, else link with book query
  const detailsHref =
    experience.slug === 'cooking-class'
      ? '/cooking-class'
      : experience.slug === 'holiday-home'
      ? '/holiday-home'
      : experience.slug === 'yala-safari'
      ? '/safari'
      : `/book?experience=${experience.id}`;

  const bookHref = `/book?experience=${experience.id}`;

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-[#E8DCD2] hover:border-[#702F42]/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Image Container with Badge */}
        <div className="relative aspect-16/10 w-full overflow-hidden bg-[#E8DCD2]">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Category Pill */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#702F42]/90 text-white backdrop-blur-xs shadow-xs">
              {experience.categoryLabel}
            </span>
          </div>

          {/* Demo Price Badge */}
          <div className="absolute bottom-4 right-4 z-10 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-xs text-right">
            <div className="text-[10px] uppercase tracking-wider text-[#6A5D63] font-semibold">
              From
            </div>
            <div className="text-sm font-bold text-[#702F42]">
              ${experience.priceUSD}{' '}
              <span className="text-[10px] font-normal text-[#6A5D63]">USD</span>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          {/* Metadata Row */}
          <div className="flex items-center gap-4 text-xs text-[#6A5D63] mb-3">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#702F42]" />
              {experience.duration}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#702F42]" />
              {experience.groupSize.split('(')[0]}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-semibold text-[#30262A]">
              <Star className="w-3.5 h-3.5 fill-[#D8BFA3] text-[#D8BFA3]" />
              {experience.rating} ({experience.reviewCount})
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl font-bold text-[#30262A] group-hover:text-[#702F42] transition-colors leading-snug">
            <Link href={detailsHref}>{experience.title}</Link>
          </h3>

          {/* Subtitle */}
          <p className="text-xs text-[#702F42] font-medium mt-1">
            {experience.subtitle}
          </p>

          {/* Short Description */}
          <p className="mt-3 text-xs sm:text-sm text-[#6A5D63] line-clamp-2 leading-relaxed">
            {experience.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-6 pt-0 mt-2 flex items-center gap-2.5">
        <Link
          href={detailsHref}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#F8F3EF] hover:bg-[#E8DCD2] text-[#702F42] transition-colors border border-[#E8DCD2]"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <Link
          href={bookHref}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#702F42] hover:bg-[#592333] text-white shadow-xs transition-colors"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </Link>
      </div>
    </article>
  );
}
