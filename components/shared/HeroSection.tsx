import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { DemoBadge } from './DemoBadge';

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  breadcrumbs?: { label: string; href?: string }[];
  showDemoBadge?: boolean;
  minHeight?: string;
}

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
  primaryCtaText,
  primaryCtaLink = '/book',
  secondaryCtaText,
  secondaryCtaLink = '/experiences',
  breadcrumbs,
  showDemoBadge = false,
  minHeight = 'min-h-[75vh]',
}: HeroSectionProps) {
  return (
    <section className={`relative w-full ${minHeight} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with Cinematic Editorial Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-102 transition-transform duration-1000 ease-out"
        />
        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#30262A] via-[#30262A]/60 to-[#30262A]/40" />
        <div className="absolute inset-0 bg-[#702F42]/20 mix-blend-multiply" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32 text-center text-white flex flex-col items-center">
        {/* Breadcrumbs if provided */}
        {breadcrumbs && (
          <nav className="flex flex-wrap justify-center items-center gap-1.5 text-xs text-white/70 mb-5 sm:mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-white/50 shrink-0" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#D8BFA3]">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs uppercase tracking-widest font-semibold bg-white/15 backdrop-blur-md text-[#E8DCD2] border border-white/20 mb-5 sm:mb-6 shadow-xs max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#D8BFA3] shrink-0" />
            <span className="truncate">{eyebrow}</span>
          </div>
        )}

        {/* Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.12] drop-shadow-sm">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-[#E8DCD2]/90 max-w-2xl leading-relaxed font-sans font-normal">
          {subtitle}
        </p>

        {/* CTAs */}
        {(primaryCtaText || secondaryCtaText) && (
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5 w-full sm:w-auto">
            {primaryCtaText && (
              <Link
                href={primaryCtaLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#702F42] hover:bg-[#592333] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-98"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}

            {secondaryCtaText && (
              <Link
                href={secondaryCtaLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-medium text-sm transition-all duration-200"
              >
                <span>{secondaryCtaText}</span>
              </Link>
            )}
          </div>
        )}

        {showDemoBadge && (
          <div className="mt-8">
            <DemoBadge label="Interactive Demo Experience" />
          </div>
        )}
      </div>
    </section>
  );
}
