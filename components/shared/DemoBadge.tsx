import React from 'react';

interface DemoBadgeProps {
  label?: string;
  className?: string;
}

export function DemoBadge({ label = 'Sample Demo Data', className = '' }: DemoBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium tracking-wide uppercase bg-[#E8DCD2] text-[#702F42] border border-[#702F42]/20 ${className}`}
      title="This is realistic sample demonstration data for Dearly Cooking Class & Holiday Home."
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#702F42] animate-pulse" />
      {label}
    </span>
  );
}
