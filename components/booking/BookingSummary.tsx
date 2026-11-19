import React from 'react';
import Image from 'next/image';
import { Calendar, Users, MapPin, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Experience } from '@/types';
import { DemoBadge } from '../shared/DemoBadge';

interface BookingSummaryProps {
  selectedExperience: Experience | undefined;
  guestsCount: number;
  date: string;
  timeSlot?: string;
}

export function BookingSummary({
  selectedExperience,
  guestsCount,
  date,
  timeSlot,
}: BookingSummaryProps) {
  const pricePerUnit = selectedExperience?.priceUSD || 0;
  const estimatedTotal = pricePerUnit * (guestsCount || 1);

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DCD2] shadow-md sticky top-28">
      <div className="flex items-center justify-between pb-4 border-b border-[#E8DCD2]">
        <h3 className="font-serif text-lg font-bold text-[#30262A]">
          Experience Summary
        </h3>
        <span className="text-[11px] font-semibold text-[#702F42] bg-[#F8F3EF] px-2.5 py-1 rounded-full border border-[#E8DCD2]">
          Best Rate Guaranteed
        </span>
      </div>

      {selectedExperience ? (
        <div className="mt-4 space-y-4">
          {/* Experience thumbnail and title */}
          <div className="flex gap-3.5">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#E8DCD2] shrink-0">
              <Image
                src={selectedExperience.image}
                alt={selectedExperience.title}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[#702F42]/10 text-[#702F42]">
                {selectedExperience.categoryLabel}
              </span>
              <h4 className="font-serif text-sm font-bold text-[#30262A] mt-1 leading-snug">
                {selectedExperience.title}
              </h4>
              <p className="text-xs text-[#6A5D63] mt-0.5">
                {selectedExperience.duration}
              </p>
            </div>
          </div>

          {/* Details breakdown */}
          <div className="bg-[#F8F3EF] rounded-xl p-3.5 space-y-2 text-xs text-[#30262A]">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[#6A5D63]">
                <Calendar className="w-3.5 h-3.5 text-[#702F42]" />
                Date:
              </span>
              <span className="font-semibold">
                {date ? new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Select Date'}
              </span>
            </div>

            {timeSlot && (
              <div className="flex items-center justify-between">
                <span className="text-[#6A5D63]">Session / Time:</span>
                <span className="font-semibold">{timeSlot}</span>
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[#6A5D63]">
                <Users className="w-3.5 h-3.5 text-[#702F42]" />
                Party Size:
              </span>
              <span className="font-semibold">
                {guestsCount} {guestsCount === 1 ? 'Guest' : 'Guests'}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#6A5D63]">Rate:</span>
              <span>
                ${pricePerUnit} USD{' '}
                <span className="text-[10px] text-[#6A5D63]">/ guest</span>
              </span>
            </div>
          </div>

          {/* Key inclusions checklist */}
          <div className="pt-2">
            <h5 className="text-xs font-semibold text-[#702F42] uppercase tracking-wider mb-2">
              Package Includes:
            </h5>
            <ul className="space-y-1.5 text-xs text-[#6A5D63]">
              {selectedExperience.inclusions.slice(0, 3).map((inc, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#702F42] shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Total calculation */}
          <div className="pt-4 border-t border-[#E8DCD2]">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-xs text-[#6A5D63]">Estimated Total:</div>
                <div className="text-[10px] text-[#6A5D63]">
                  (Pay in cash or card upon arrival)
                </div>
              </div>
              <div className="text-right">
                <div className="font-serif text-2xl font-bold text-[#702F42]">
                  ${estimatedTotal}{' '}
                  <span className="text-xs font-sans font-normal text-[#6A5D63]">USD</span>
                </div>
                <div className="text-[10px] text-[#6A5D63]">
                  ≈ LKR {(estimatedTotal * 310).toLocaleString()} (approx)
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee / trust banner */}
          <div className="rounded-xl p-3 bg-[#E8DCD2]/50 border border-[#E8DCD2] text-[11px] text-[#6A5D63] space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-[#702F42]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#702F42]" />
              <span>No Advance Payment Required</span>
            </div>
            <p>
              Free cancellation up to 24 hours prior. Host Dearly will message on WhatsApp to confirm details.
            </p>
          </div>
        </div>
      ) : (
        <div className="py-8 text-center text-xs text-[#6A5D63]">
          Please select an experience from the form to view pricing and inclusions.
        </div>
      )}
    </div>
  );
}
