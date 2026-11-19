import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
  theme?: 'dark' | 'light';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  alignment = 'center',
  theme = 'light',
  className = '',
}: SectionHeadingProps) {
  const isCenter = alignment === 'center';
  const isDark = theme === 'dark';

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 mb-3 text-xs tracking-widest uppercase font-semibold ${
            isDark ? 'text-[#D8BFA3]' : 'text-[#702F42]'
          }`}
        >
          <span className="w-6 h-px bg-current opacity-60" />
          <span>{eyebrow}</span>
          {isCenter && <span className="w-6 h-px bg-current opacity-60" />}
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] ${
          isDark ? 'text-white' : 'text-[#30262A]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-[#E8DCD2]/80' : 'text-[#6A5D63]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
