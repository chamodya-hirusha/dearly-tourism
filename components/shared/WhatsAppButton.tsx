'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { contactDetails } from '@/data/navigation';

interface WhatsAppButtonProps {
  variant?: 'floating' | 'button' | 'pill';
  label?: string;
  className?: string;
}

export function WhatsAppButton({
  variant = 'floating',
  label = 'Chat on WhatsApp',
  className = '',
}: WhatsAppButtonProps) {
  if (variant === 'floating') {
    return (
      <a
        href={contactDetails.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp chat with Dearly Cooking Class & Holiday Home"
        className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group flex items-center gap-2 sm:gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
      >
        <MessageCircle className="w-5 h-5 fill-current transition-transform group-hover:rotate-12" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wide">
          Chat on WhatsApp
        </span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
      </a>
    );
  }

  if (variant === 'pill') {
    return (
      <a
        href={contactDetails.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-colors ${className}`}
      >
        <MessageCircle className="w-3.5 h-3.5 fill-current" />
        <span>{contactDetails.phoneFormatted}</span>
      </a>
    );
  }

  return (
    <a
      href={contactDetails.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xs hover:shadow-md transition-all duration-200 active:scale-98 ${className}`}
    >
      <MessageCircle className="w-4 h-4 fill-current" />
      <span>{label}</span>
    </a>
  );
}
