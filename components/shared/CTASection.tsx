import React from 'react';
import Link from 'next/link';
import { Calendar, MessageCircle, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { contactDetails } from '@/data/navigation';
import { DemoBadge } from './DemoBadge';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  showWhatsApp?: boolean;
}

export function CTASection({
  title = 'Ready to Taste the True Heart of Sri Lanka?',
  subtitle = 'Join us in our garden kitchen in Tissamaharama or embark on a wild Yala safari. Reserve your personalized experience today.',
  primaryButtonText = 'Book Your Experience Now',
  primaryButtonLink = '/book',
  showWhatsApp = true,
}: CTASectionProps) {
  return (
    <section className="relative py-20 lg:py-24 bg-[#702F42] text-white overflow-hidden">
      {/* Decorative subtle texture & leaf accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#702F42]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8DCD2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#E8DCD2] text-xs font-semibold uppercase tracking-wider mb-6 border border-white/15">
          <Sparkles className="w-3.5 h-3.5 text-[#D8BFA3]" />
          <span>Warm Home Hospitality</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
          {title}
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-[#E8DCD2]/85 max-w-2xl mx-auto leading-relaxed font-sans">
          {subtitle}
        </p>

        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href={primaryButtonLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#702F42] hover:bg-[#F8F3EF] font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 active:scale-98"
          >
            <Calendar className="w-4 h-4" />
            <span>{primaryButtonText}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>

          {showWhatsApp && (
            <a
              href={contactDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/25 font-semibold text-sm sm:text-base transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
              <span>Ask on WhatsApp</span>
            </a>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#E8DCD2]/75 pt-4 border-t border-white/15">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D8BFA3]" />
            Akurugoda, Tissamaharama • 30 mins to Yala Gates
          </span>
          <span>•</span>
          <span>Flexible demo reservations with zero upfront charge</span>
          <span>•</span>
          <span>Instant WhatsApp & Email Confirmation</span>
        </div>
      </div>
    </section>
  );
}
