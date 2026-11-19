'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Calendar } from 'lucide-react';
import { navigationLinks } from '@/data/navigation';
import { LanguageSelector } from './LanguageSelector';
import { MobileNavigation } from './MobileNavigation';

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F3EF]/95 backdrop-blur-md shadow-xs py-3'
            : 'bg-gradient-to-b from-[#30262A]/80 via-[#30262A]/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center text-left focus:outline-hidden shrink-0"
          >
            <div className="shrink-0">
              <div className="flex items-center gap-2">
                <span
                  className={`font-serif text-2xl sm:text-3xl font-bold tracking-tight whitespace-nowrap transition-colors ${
                    isScrolled ? 'text-[#702F42]' : 'text-white'
                  }`}
                >
                  Dearly
                </span>
                <span
                  className={`hidden sm:inline-block text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded font-sans font-semibold whitespace-nowrap transition-colors ${
                    isScrolled
                      ? 'bg-[#E8DCD2] text-[#702F42]'
                      : 'bg-white/20 text-white backdrop-blur-xs'
                  }`}
                >
                  Sri Lanka
                </span>
              </div>
              <p
                className={`text-[10px] sm:text-[11px] tracking-wide whitespace-nowrap transition-colors ${
                  isScrolled ? 'text-[#6A5D63]' : 'text-white/80'
                }`}
              >
                Cooking Class & Holiday Home
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                    isScrolled
                      ? isActive
                        ? 'text-[#702F42] font-bold bg-[#E8DCD2]'
                        : 'text-[#30262A] hover:text-[#702F42] hover:bg-[#E8DCD2]/50'
                      : isActive
                      ? 'text-white font-bold bg-white/25 backdrop-blur-xs shadow-xs'
                      : 'text-white/90 hover:text-white hover:bg-white/15'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span
                      className={`text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap ${
                        isScrolled
                          ? 'bg-[#702F42] text-white shadow-xs'
                          : 'bg-[#702F42] text-white shadow-xs'
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <LanguageSelector isScrolled={isScrolled} />

            <Link
              href="/book"
              className="whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#702F42] hover:bg-[#592333] text-white shadow-xs hover:shadow-md transition-all duration-200 active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>Book<span className="hidden sm:inline"> Experience</span></span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileOpen(true)}
              type="button"
              className={`p-2 rounded-full lg:hidden transition-colors focus:outline-hidden cursor-pointer ${
                isScrolled
                  ? 'text-[#30262A] hover:bg-[#E8DCD2]'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
