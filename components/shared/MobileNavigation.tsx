'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Phone, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { navigationLinks, contactDetails } from '@/data/navigation';
import { LanguageSelector } from './LanguageSelector';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#30262A]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#F8F3EF] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E8DCD2]">
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#702F42]">
                Dearly
              </span>
              <p className="text-[10px] text-[#6A5D63] tracking-wider uppercase">
                Tissamaharama, Sri Lanka
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#30262A] hover:bg-[#E8DCD2] transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Language selector in mobile */}
          <div className="py-4 border-b border-[#E8DCD2] flex items-center justify-between">
            <span className="text-xs font-medium text-[#6A5D63]">Language</span>
            <LanguageSelector />
          </div>

          {/* Links */}
          <nav className="py-6 flex flex-col space-y-1">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#702F42] text-white shadow-xs'
                      : 'text-[#30262A] hover:bg-[#E8DCD2]/80 hover:text-[#702F42]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold ${
                      isActive ? 'bg-[#702F42] text-white' : 'bg-[#702F42]/15 text-[#702F42]'
                    }`}>
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-[#E8DCD2] space-y-3">
          <Link
            href="/book"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#702F42] hover:bg-[#592333] text-white text-sm font-semibold shadow-xs transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Experience</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>

          <a
            href={contactDetails.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] text-white text-xs font-semibold shadow-xs hover:bg-[#20ba59] transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp: {contactDetails.phoneFormatted}</span>
          </a>

          <div className="text-center text-[11px] text-[#6A5D63] pt-2">
            Akurugoda, Tissamaharama • Near Yala
          </div>
        </div>
      </div>
    </div>
  );
}
