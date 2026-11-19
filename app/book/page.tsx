'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { HeroSection } from '@/components/shared/HeroSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { BookingForm } from '@/components/booking/BookingForm';
import { DemoBadge } from '@/components/shared/DemoBadge';
import { ShieldCheck, CalendarCheck, HelpCircle } from 'lucide-react';

function BookingContent() {
  const searchParams = useSearchParams();
  const experienceIdParam = searchParams.get('experience') || undefined;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Top Advisory Banner */}
      <div className="mb-10 p-4 rounded-2xl bg-[#E8DCD2]/70 border border-[#702F42]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[#702F42] shrink-0" />
          <p className="text-xs sm:text-sm text-[#30262A] leading-relaxed">
            <strong>Direct Host Reservation:</strong> Zero upfront payment required today. Host Dearly will confirm timing, dietary preferences, and complimentary local pickup via WhatsApp or email.
          </p>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#702F42] text-white shrink-0">
          Instant Confirmation
        </span>
      </div>

      {/* Main Interactive Form + Summary Component */}
      <BookingForm initialExperienceId={experienceIdParam} />
    </div>
  );
}

export default function BookPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8F3EF]">
        <HeroSection
          breadcrumbs={[{ label: 'Book Experience' }]}
          eyebrow="Instant Reservation Request"
          title="Book Your Authentic Sri Lankan Experience"
          subtitle="Select your preferred cooking masterclass, Yala wildlife safari, or garden room stay. Zero payment required today."
          backgroundImage="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=2000&q=85"
          minHeight="min-h-[50vh]"
        />

        <Suspense
          fallback={
            <div className="py-24 text-center text-xs text-[#6A5D63]">
              Loading interactive booking form...
            </div>
          }
        >
          <BookingContent />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}
