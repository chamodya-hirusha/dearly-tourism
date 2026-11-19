'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Navigation,
  Compass,
  Sparkles,
} from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { HeroSection } from '@/components/shared/HeroSection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { DemoBadge } from '@/components/shared/DemoBadge';
import { contactDetails } from '@/data/navigation';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phoneOrWhatsApp: z.string().min(6, 'Please enter your WhatsApp or phone number'),
  subject: z.string().min(2, 'Please enter a message subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneOrWhatsApp: '',
      subject: 'Inquiry about Cooking Class & Yala Safari',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <HeroSection
          breadcrumbs={[{ label: 'Contact Us' }]}
          eyebrow="Connect with Dearly"
          title="We Are Always Happy to Hear from You"
          subtitle="Have questions about our cooking class timings, vegetarian menus, or Yala safari jeeps? Reach out anytime via WhatsApp, phone, or message."
          backgroundImage="/images/gallery/tissa-lake-sunset-dining.jpg"
          minHeight="min-h-[55vh]"
        />

        {/* Contact Information & Form Grid */}
        <section className="py-20 bg-[#F8F3EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Contact Details Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white rounded-3xl p-5 sm:p-8 border border-[#E8DCD2] shadow-md space-y-6">
                  <div>
                    <span className="text-xs font-semibold text-[#702F42] uppercase tracking-wider">
                      Direct Contact Details
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#30262A] mt-1">
                      Dearly Cooking Class & Holiday Home
                    </h3>
                    <p className="text-xs text-[#6A5D63] mt-1">
                      {contactDetails.landmark}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-[#E8DCD2] text-xs sm:text-sm">
                    {/* Address */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#F8F3EF] text-[#702F42] flex items-center justify-center shrink-0 border border-[#E8DCD2]">
                        <MapPin className="w-4 h-4 text-[#702F42]" />
                      </div>
                      <div>
                        <strong className="block text-[#30262A]">Address:</strong>
                        <span className="text-[#6A5D63] leading-relaxed">
                          {contactDetails.address}
                        </span>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#F8F3EF] text-[#702F42] flex items-center justify-center shrink-0 border border-[#E8DCD2]">
                        <Phone className="w-4 h-4 text-[#702F42]" />
                      </div>
                      <div>
                        <strong className="block text-[#30262A]">Phone / Mobile:</strong>
                        <a
                          href={`tel:${contactDetails.phone}`}
                          className="text-[#702F42] font-semibold hover:underline"
                        >
                          {contactDetails.phoneFormatted}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#F8F3EF] text-[#702F42] flex items-center justify-center shrink-0 border border-[#E8DCD2]">
                        <Mail className="w-4 h-4 text-[#702F42]" />
                      </div>
                      <div>
                        <strong className="block text-[#30262A]">Email Address:</strong>
                        <a
                          href={`mailto:${contactDetails.email}`}
                          className="text-[#702F42] font-semibold hover:underline"
                        >
                          {contactDetails.email}
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#F8F3EF] text-[#702F42] flex items-center justify-center shrink-0 border border-[#E8DCD2]">
                        <Clock className="w-4 h-4 text-[#702F42]" />
                      </div>
                      <div>
                        <strong className="block text-[#30262A]">Hospitality Hours:</strong>
                        <span className="text-[#6A5D63]">
                          Daily 7:00 AM – 9:30 PM (Sri Lanka Time, GMT+5:30)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Quick Connect Card */}
                  <div className="p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#128C7E]">
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Prefer Fast WhatsApp Chat?</span>
                    </div>
                    <p className="text-xs text-[#6A5D63] leading-relaxed">
                      Host Dearly responds promptly on WhatsApp with answers about daily menus, local pickup, and custom Yala permits.
                    </p>
                    <a
                      href={contactDetails.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Chat on WhatsApp ({contactDetails.phoneFormatted})</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Message Form */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-[#E8DCD2] shadow-md">
                <div className="mb-6 pb-4 border-b border-[#E8DCD2]">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8DCD2] text-[#702F42] uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#702F42]" />
                    <span>Send a Message</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#30262A]">
                    Inquire Online
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6A5D63] mt-1">
                    Fill out your inquiry below and we will get back to you promptly.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#702F42]/10 text-[#702F42] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-[#30262A]">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-[#6A5D63] max-w-md mx-auto">
                      Thank you for contacting Dearly Cooking Class & Holiday Home. In a live system, Dearly will reply to your email or WhatsApp number shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        reset();
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#702F42] text-white text-xs font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#30262A] mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Thomas Becker"
                          {...register('fullName')}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DCD2] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#702F42] bg-white text-[#30262A]"
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#30262A] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="thomas@example.com"
                          {...register('email')}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DCD2] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#702F42] bg-white text-[#30262A]"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#30262A] mb-1">
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          placeholder="+49 170 1234567"
                          {...register('phoneOrWhatsApp')}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DCD2] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#702F42] bg-white text-[#30262A]"
                        />
                        {errors.phoneOrWhatsApp && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.phoneOrWhatsApp.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#30262A] mb-1">
                          Subject *
                        </label>
                        <input
                          type="text"
                          {...register('subject')}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DCD2] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#702F42] bg-white text-[#30262A]"
                        />
                        {errors.subject && (
                          <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#30262A] mb-1">
                        Your Message *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your dates in Tissamaharama, group size, or questions about cooking classes and Yala tours..."
                        {...register('message')}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DCD2] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#702F42] bg-white text-[#30262A]"
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#702F42] hover:bg-[#592333] text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-98 disabled:opacity-60 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Location Section with Map Preview & Directions */}
        <section className="py-20 bg-white border-t border-[#E8DCD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Finding Us"
              title="Location & Getting to Tissamaharama"
              subtitle="Located in the scenic Southern Province, Tissamaharama is easily reached from Ella, Mirissa, Galle, or Colombo."
            />

            <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Map Placeholder / Visual */}
              <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E8DCD2] shadow-md bg-[#F8F3EF] relative min-h-[360px] flex flex-col justify-between p-5 sm:p-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#702F42] text-white text-xs font-semibold uppercase tracking-wider mb-4">
                    <Navigation className="w-3.5 h-3.5 text-[#D8BFA3]" />
                    <span>Akurugoda, Tissamaharama</span>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#30262A]">
                    Dearly Cooking Class & Holiday Home
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6A5D63] mt-1 max-w-md">
                    No. 14, Court Road, Akurugoda, Tissamaharama, Sri Lanka.
                  </p>
                </div>

                {/* Styled map graphic representation */}
                <div className="my-6 p-4 sm:p-6 rounded-2xl bg-white border border-[#E8DCD2] text-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E8DCD2]">
                    <span className="font-semibold text-[#702F42]">GPS Coordinates:</span>
                    <span className="font-mono text-[#6A5D63]">6.2784° N, 81.2882° E</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#E8DCD2]">
                    <span className="font-semibold text-[#702F42]">Distance to Yala Gates:</span>
                    <span className="text-[#6A5D63]">28 km (approx. 30 min drive)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#702F42]">Distance to Tissa Lake:</span>
                    <span className="text-[#6A5D63]">1.5 km (5 min cycle)</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="https://maps.google.com/?q=Tissamaharama+Sri+Lanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#702F42] text-white text-xs font-semibold hover:bg-[#592333] transition-colors w-full sm:w-auto"
                  >
                    <Compass className="w-4 h-4 shrink-0" />
                    <span>Open in Google Maps</span>
                  </a>
                  <DemoBadge label="Interactive Location Card" />
                </div>
              </div>

              {/* Transit times list */}
              <div className="lg:col-span-5 space-y-4">
                <h4 className="font-serif text-xl font-bold text-[#30262A]">
                  Approximate Travel Times:
                </h4>
                <div className="space-y-3 text-xs sm:text-sm">
                  {[
                    { from: 'From Ella', time: '2.5 Hours', mode: 'Scenic downhill drive via Wellawaya' },
                    { from: 'From Mirissa / Tangalle', time: '1.5 – 2 Hours', mode: 'Along the scenic southern coastal highway' },
                    { from: 'From Galle Fort', time: '2.5 Hours', mode: 'Via Southern Expressway (E01) to Mattala exit' },
                    { from: 'From Colombo Airport (CMB)', time: '3.5 – 4 Hours', mode: 'Direct expressway via Southern Highway' },
                  ].map((route, rIdx) => (
                    <div key={rIdx} className="p-4 rounded-2xl bg-[#F8F3EF] border border-[#E8DCD2]">
                      <div className="flex items-center justify-between">
                        <strong className="text-[#702F42]">{route.from}</strong>
                        <span className="font-bold text-[#702F42]">{route.time}</span>
                      </div>
                      <p className="text-[11px] text-[#6A5D63] mt-0.5">{route.mode}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}
