import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Compass,
  Heart,
  ExternalLink,
  MessageCircle,
  UtensilsCrossed,
  ShieldCheck,
} from 'lucide-react';
import { contactDetails, navigationLinks } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="bg-[#30262A] text-[#E8DCD2] pt-16 pb-12 border-t border-[#702F42]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: 2 columns on mobile, 12 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-4 space-y-4">
            <div>
              <h3 className="font-serif text-3xl font-bold text-white tracking-tight">
                Dearly
              </h3>
              <p className="text-xs text-[#E8DCD2]/70 uppercase tracking-widest mt-0.5">
                Cooking Class & Holiday Home • Tissamaharama
              </p>
            </div>

            <p className="text-sm text-[#E8DCD2]/80 leading-relaxed font-sans pt-1">
              Immerse yourself in authentic Southern Sri Lankan food culture, fragrant garden herbs, and handcrafted clay pot cooking. Your serene haven in Akurugoda, Tissamaharama, located just 30 minutes from the wild heart of Yala National Park.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[#702F42]/60 text-[#E8DCD2] border border-[#702F42]">
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#D8BFA3]" />
                Traditional Clay Pot Cooking
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[#702F42]/60 text-[#E8DCD2] border border-[#702F42]">
                <Compass className="w-3.5 h-3.5 text-[#D8BFA3]" />
                Yala Wildlife Tours
              </span>
            </div>
          </div>

          {/* Quick Links - Column 1 on mobile */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#E8DCD2]/80 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#702F42] text-white">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/book"
                  className="text-[#D8BFA3] hover:text-white font-semibold transition-colors flex items-center gap-1 pt-1"
                >
                  <span>Book Now →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Experiences Highlights - Column 2 on mobile */}
          <div className="col-span-1 lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide">
              Featured
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#E8DCD2]/80">
              <li>
                <Link href="/cooking-class" className="hover:text-white transition-colors block">
                  <span className="text-white font-medium block">Cooking Class</span>
                  <span className="text-[11px] sm:text-xs text-[#E8DCD2]/60 line-clamp-1">Clay pot curries</span>
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-white transition-colors block">
                  <span className="text-white font-medium block">Rice & Curry</span>
                  <span className="text-[11px] sm:text-xs text-[#E8DCD2]/60 line-clamp-1">Traditional feast</span>
                </Link>
              </li>
              <li>
                <Link href="/safari" className="hover:text-white transition-colors block">
                  <span className="text-white font-medium block">Yala Safari</span>
                  <span className="text-[11px] sm:text-xs text-[#E8DCD2]/60 line-clamp-1">4x4 wildlife tours</span>
                </Link>
              </li>
              <li>
                <Link href="/holiday-home" className="hover:text-white transition-colors block">
                  <span className="text-white font-medium block">Holiday Home</span>
                  <span className="text-[11px] sm:text-xs text-[#E8DCD2]/60 line-clamp-1">Garden suites</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-2 lg:col-span-3 space-y-3.5 pt-6 lg:pt-0 border-t border-white/10 lg:border-t-0">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#E8DCD2]/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D8BFA3] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {contactDetails.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D8BFA3] shrink-0" />
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="hover:text-white transition-colors text-xs sm:text-sm"
                >
                  {contactDetails.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D8BFA3] shrink-0" />
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="hover:text-white transition-colors text-xs sm:text-sm underline-offset-2 hover:underline whitespace-nowrap"
                >
                  {contactDetails.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={contactDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba59] transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </li>
            </ul>
          </div>
        </div>


        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8DCD2]/60 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Dearly Cooking Class & Holiday Home. Tissamaharama, Sri Lanka.
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-4">
            <span>Crafted with Authentic Ruhuna Warmth</span>
            <span>•</span>
            <Link href="/about" className="hover:text-white transition-colors">
              Our Story
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Find Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
