'use client';

import React, { useState, useRef, useEffect } from 'react';
import { languages } from '@/data/navigation';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageSelectorProps {
  isScrolled?: boolean;
}

export function LanguageSelector({ isScrolled = false }: LanguageSelectorProps) {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left shrink-0" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
          isScrolled
            ? 'text-[#30262A] hover:text-[#702F42] bg-[#E8DCD2]/80 hover:bg-[#E8DCD2] border border-[#d6c5b6]'
            : 'text-white/90 hover:text-white bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md'
        }`}
        aria-label="Select website language"
        aria-expanded={isOpen}
      >
        <Globe className={`w-3.5 h-3.5 ${isScrolled ? 'text-[#702F42]' : 'text-white'}`} />
        <span className="font-sans tracking-wide">{selectedLang.short}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          } ${isScrolled ? 'text-[#6A5D63]' : 'text-white/70'}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-white shadow-xl border border-[#E8DCD2] py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="px-3.5 py-1 text-[10px] uppercase tracking-wider font-bold text-[#6A5D63] border-b border-[#E8DCD2]/60">
            Language
          </div>
          {languages.map((lang) => {
            const isCurrent = lang.code === selectedLang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setSelectedLang(lang);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2 text-xs transition-colors cursor-pointer ${
                  isCurrent
                    ? 'bg-[#F8F3EF] text-[#702F42] font-bold'
                    : 'text-[#30262A] hover:bg-[#F8F3EF]/70'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="font-semibold text-[11px] text-[#702F42]">{lang.short}</span>
                  <span>{lang.name}</span>
                </span>
                {isCurrent && <Check className="w-3.5 h-3.5 text-[#702F42]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
