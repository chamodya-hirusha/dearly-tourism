'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Calendar as CalendarIcon,
  Users,
  User,
  Mail,
  Phone,
  Globe,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  RefreshCw,
  MessageCircle,
} from 'lucide-react';
import { allExperiences } from '@/data/experiences';
import { contactDetails } from '@/data/navigation';
import { BookingSummary } from './BookingSummary';
import { DemoBadge } from '../shared/DemoBadge';

const bookingSchema = z.object({
  experienceId: z.string().min(1, 'Please select an experience'),
  preferredDate: z.string().min(1, 'Please select your preferred date'),
  preferredTimeSlot: z.string().optional(),
  guestsCount: z
    .number()
    .min(1, 'Minimum 1 guest')
    .max(20, 'For groups larger than 20, please contact us directly'),
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  whatsappNumber: z
    .string()
    .min(6, 'Please enter your WhatsApp phone number with country code'),
  country: z.string().min(2, 'Please enter your home country'),
  dietaryOrSpecialRequests: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  initialExperienceId?: string;
}

export function BookingForm({ initialExperienceId }: BookingFormProps) {
  // Local submitted state
  const [submittedBooking, setSubmittedBooking] = useState<{
    referenceId: string;
    data: BookingFormValues;
    submittedAt: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Tomorrow's date formatted as YYYY-MM-DD
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  const defaultExpId =
    initialExperienceId && allExperiences.some((e) => e.id === initialExperienceId)
      ? initialExperienceId
      : allExperiences[0].id;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      experienceId: defaultExpId,
      preferredDate: minDateString,
      preferredTimeSlot: 'Morning Session (10:00 AM)',
      guestsCount: 2,
      fullName: '',
      email: '',
      whatsappNumber: '',
      country: '',
      dietaryOrSpecialRequests: '',
    },
  });

  const selectedExpId = watch('experienceId');
  const watchedGuests = watch('guestsCount') || 2;
  const watchedDate = watch('preferredDate');
  const watchedTimeSlot = watch('preferredTimeSlot');

  const selectedExperience = allExperiences.find((e) => e.id === selectedExpId);

  const onSubmit = (data: BookingFormValues) => {
    setIsSubmitting(true);

    // Simulate realistic frontend processing delay
    setTimeout(() => {
      const generatedRef =
        'DRL-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedBooking({
        referenceId: generatedRef,
        data,
        submittedAt: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      });
      setIsSubmitting(false);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 600);
  };

  const handleBookAnother = () => {
    setSubmittedBooking(null);
    reset({
      experienceId: allExperiences[0].id,
      preferredDate: minDateString,
      preferredTimeSlot: 'Morning Session (10:00 AM)',
      guestsCount: 2,
      fullName: '',
      email: '',
      whatsappNumber: '',
      country: '',
      dietaryOrSpecialRequests: '',
    });
  };

  // If already submitted, show professional confirmation state
  if (submittedBooking) {
    const totalEst =
      (selectedExperience?.priceUSD || 0) * (submittedBooking.data.guestsCount || 1);

    return (
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DCD2] shadow-xl animate-in fade-in zoom-in-95 duration-300">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-[#702F42]/10 text-[#702F42] flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10 text-[#702F42]" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8DCD2] text-[#702F42] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#702F42]" />
            <span>Demo Booking Request Received</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#30262A]">
            Ayubowan, {submittedBooking.data.fullName}!
          </h2>
          <p className="mt-2 text-sm text-[#6A5D63] max-w-lg mx-auto">
            Thank you for your interest in visiting Dearly Cooking Class & Holiday Home in Tissamaharama.
          </p>
        </div>

        {/* Demo Notice Box */}
        <div className="mt-6 p-4 rounded-2xl bg-[#F8F3EF] border border-[#702F42]/30 text-xs text-[#30262A]">
          <div className="font-bold text-[#702F42] flex items-center gap-2 mb-1">
            <span>ℹ️ Demonstration Architecture Notice</span>
          </div>
          <p className="text-[#6A5D63] leading-relaxed">
            This booking was captured in <strong>local React state</strong>. In our active operational property, host Dearly coordinates timing directly with guests via WhatsApp to arrange dietary adjustments, transport, and custom safari jeep permits.
          </p>
        </div>

        {/* Reservation Breakdown Card */}
        <div className="mt-6 rounded-2xl bg-[#F8F3EF]/60 p-6 border border-[#E8DCD2] space-y-4 text-xs sm:text-sm">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DCD2]">
            <span className="text-[#6A5D63]">Reference Code:</span>
            <span className="font-mono font-bold text-[#702F42] text-base">
              {submittedBooking.referenceId}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <span className="text-[#6A5D63] block text-xs">Experience:</span>
              <strong className="text-[#30262A]">
                {selectedExperience?.title}
              </strong>
            </div>

            <div>
              <span className="text-[#6A5D63] block text-xs">Date & Time:</span>
              <strong className="text-[#30262A]">
                {new Date(submittedBooking.data.preferredDate).toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}{' '}
                ({submittedBooking.data.preferredTimeSlot})
              </strong>
            </div>

            <div>
              <span className="text-[#6A5D63] block text-xs">Guests Count:</span>
              <strong className="text-[#30262A]">
                {submittedBooking.data.guestsCount} {submittedBooking.data.guestsCount === 1 ? 'Guest' : 'Guests'}
              </strong>
            </div>

            <div>
              <span className="text-[#6A5D63] block text-xs">Estimated Cost:</span>
              <strong className="text-[#702F42] font-bold text-base">
                ${totalEst} USD (Pay on arrival)
              </strong>
            </div>

            <div>
              <span className="text-[#6A5D63] block text-xs">Contact Details:</span>
              <span className="text-[#30262A]">
                {submittedBooking.data.email} • {submittedBooking.data.whatsappNumber}
              </span>
            </div>

            <div>
              <span className="text-[#6A5D63] block text-xs">Guest Country:</span>
              <span className="text-[#30262A]">{submittedBooking.data.country}</span>
            </div>
          </div>

          {submittedBooking.data.dietaryOrSpecialRequests && (
            <div className="pt-2 border-t border-[#E8DCD2]">
              <span className="text-[#6A5D63] block text-xs">Special Requests / Dietary:</span>
              <p className="italic text-[#30262A]">
                "{submittedBooking.data.dietaryOrSpecialRequests}"
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={`https://wa.me/94713540764?text=${encodeURIComponent(
              `Hello Dearly! I submitted a booking request on your website (Ref: ${submittedBooking.referenceId}) for ${selectedExperience?.title} on ${submittedBooking.data.preferredDate}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-md transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Connect on WhatsApp Now</span>
          </a>

          <button
            onClick={handleBookAnother}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#F8F3EF] hover:bg-[#E8DCD2] text-[#702F42] font-semibold text-sm border border-[#E8DCD2] transition-colors cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Make Another Booking</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Main Interactive Form */}
      <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-[#E8DCD2] shadow-md">
        <div className="mb-6 pb-4 border-b border-[#E8DCD2]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8DCD2] text-[#702F42] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#702F42]" />
            <span>Instant Booking Request</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#30262A]">
            Reserve Your Experience
          </h2>
          <p className="text-xs sm:text-sm text-[#6A5D63] mt-1">
            Complete the form below. Zero deposit required. We will confirm via WhatsApp or email.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Experience Selection */}
          <div>
            <label className="block text-xs font-semibold text-[#30262A] uppercase tracking-wider mb-2">
              Select Experience *
            </label>
            <div className="grid grid-cols-1 gap-2.5">
              {allExperiences.map((exp) => {
                const isSelected = selectedExpId === exp.id;
                return (
                  <div
                    key={exp.id}
                    onClick={() => setValue('experienceId', exp.id, { shouldValidate: true })}
                    className={`cursor-pointer rounded-xl p-3.5 border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-[#702F42] bg-[#F8F3EF] ring-1 ring-[#702F42]'
                        : 'border-[#E8DCD2] hover:border-[#702F42]/40 hover:bg-[#F8F3EF]/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        value={exp.id}
                        {...register('experienceId')}
                        checked={isSelected}
                        className="text-[#702F42] focus:ring-[#702F42] h-4 w-4"
                        readOnly
                      />
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-[#30262A]">
                          {exp.title}
                        </div>
                        <div className="text-[11px] text-[#6A5D63]">
                          {exp.duration} • {exp.categoryLabel}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs sm:text-sm font-bold text-[#702F42]">
                        ${exp.priceUSD} USD
                      </span>
                      <span className="block text-[10px] text-[#6A5D63]">per person</span>
                    </div>
                  </div>
                );
              })}
            </div>
            {errors.experienceId && (
              <p className="mt-1 text-xs text-red-600">{errors.experienceId.message}</p>
            )}
          </div>

          {/* Date & Time Slot Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#30262A] uppercase tracking-wider mb-1.5">
                Preferred Date *
              </label>
              <div className="relative">
                <input
                  type="date"
                  min={minDateString}
                  {...register('preferredDate')}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DCD2] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#702F42] focus:border-transparent bg-white text-[#30262A]"
                />
              </div>
              {errors.preferredDate && (
                <p className="mt-1 text-xs text-red-600">{errors.preferredDate.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#30262A] uppercase tracking-wider mb-1.5">
                Preferred Time Slot
              </label>
              <select
                {...register('preferredTimeSlot')}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DCD2] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#702F42] focus:border-transparent bg-white text-[#30262A]"
              >
                <option value="Morning Session (10:00 AM – 1:30 PM)">
                  Morning Session (10:00 AM – 1:30 PM)
                </option>
                <option value="Evening Sunset Session (4:00 PM – 7:30 PM)">
                  Evening Sunset Session (4:00 PM – 7:30 PM)
                </option>
                <option value="Dawn Yala Safari (5:00 AM – 10:00 AM)">
                  Dawn Yala Safari (5:00 AM – 10:00 AM)
                </option>
                <option value="Afternoon Yala Safari (2:15 PM – 6:30 PM)">
                  Afternoon Yala Safari (2:15 PM – 6:30 PM)
                </option>
                <option value="Full Day Stay & Custom Time">
                  Full Day Stay & Custom Time
                </option>
              </select>
            </div>
          </div>

          {/* Number of Guests */}
          <div>
            <label className="block text-xs font-semibold text-[#30262A] uppercase tracking-wider mb-1.5">
              Number of Guests *
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min={1}
                max={20}
                {...register('guestsCount', { valueAsNumber: true })}
                className="w-28 px-3.5 py-2.5 rounded-xl border border-[#E8DCD2] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#702F42] focus:border-transparent bg-white text-[#30262A]"
              />
              <span className="text-xs text-[#6A5D63]">
                {watchedGuests === 1 ? 'Guest' : 'Guests'} (Includes adults & children)
              </span>
            </div>
            {errors.guestsCount && (
              <p className="mt-1 text-xs text-red-600">{errors.guestsCount.message}</p>
            )}
          </div>

          {/* Contact Information Fields */}
          <div className="pt-4 border-t border-[#E8DCD2] space-y-4">
            <h3 className="text-xs font-bold text-[#702F42] uppercase tracking-wider">
              Guest Contact Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#30262A] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#6A5D63] absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    {...register('fullName')}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#E8DCD2] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#702F42] focus:border-transparent bg-white text-[#30262A]"
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-[#30262A] mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#6A5D63] absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="sarah.jenkins@example.com"
                    {...register('email')}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#E8DCD2] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#702F42] focus:border-transparent bg-white text-[#30262A]"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#30262A] mb-1">
                  WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#6A5D63] absolute left-3 top-3" />
                  <input
                    type="tel"
                    placeholder="+44 7911 123456"
                    {...register('whatsappNumber')}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#E8DCD2] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#702F42] focus:border-transparent bg-white text-[#30262A]"
                  />
                </div>
                {errors.whatsappNumber && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.whatsappNumber.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-[#30262A] mb-1">
                  Country of Residence *
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-[#6A5D63] absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. United Kingdom, Germany, Australia"
                    {...register('country')}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#E8DCD2] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#702F42] focus:border-transparent bg-white text-[#30262A]"
                  />
                </div>
                {errors.country && (
                  <p className="mt-1 text-xs text-red-600">{errors.country.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#30262A] mb-1">
                Special Requests or Dietary Requirements (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g., Vegetarian / Vegan / Gluten-free, mild spice tolerance, or pickup assistance from hotel..."
                {...register('dietaryOrSpecialRequests')}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DCD2] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#702F42] focus:border-transparent bg-white text-[#30262A]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#702F42] hover:bg-[#592333] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Processing Demo Booking...</span>
                </>
              ) : (
                <>
                  <CalendarIcon className="w-5 h-5" />
                  <span>Submit Demo Reservation Request</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-[#6A5D63] mt-2.5">
              🔒 No credit card required. Confirmation and timing coordinated via WhatsApp.
            </p>
          </div>
        </form>
      </div>

      {/* Sticky Real-Time Summary Sidebar */}
      <div className="lg:col-span-5">
        <BookingSummary
          selectedExperience={selectedExperience}
          guestsCount={watchedGuests}
          date={watchedDate}
          timeSlot={watchedTimeSlot}
        />
      </div>
    </div>
  );
}
