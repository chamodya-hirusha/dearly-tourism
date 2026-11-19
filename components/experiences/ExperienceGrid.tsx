'use client';

import React, { useState } from 'react';
import { Experience } from '@/types';
import { ExperienceCard } from './ExperienceCard';
import { Utensils, Compass, Home, CompassIcon } from 'lucide-react';
import { DemoBadge } from '../shared/DemoBadge';

interface ExperienceGridProps {
  experiences: Experience[];
  initialCategory?: string;
}

const filterCategories = [
  { key: 'all', label: 'All Experiences' },
  { key: 'cooking', label: 'Cooking & Dining' },
  { key: 'safari', label: 'Wildlife & Safari' },
  { key: 'stay', label: 'Holiday Home' },
  { key: 'cultural', label: 'Cultural & Nature' },
];

export function ExperienceGrid({
  experiences,
  initialCategory = 'all',
}: ExperienceGridProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filtered =
    selectedCategory === 'all'
      ? experiences
      : experiences.filter((exp) => exp.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Category Filter Controls */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {filterCategories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#702F42] text-white shadow-xs'
                  : 'bg-white text-[#30262A] hover:bg-[#E8DCD2] border border-[#E8DCD2]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid count and demo notice */}
      <div className="flex items-center justify-between text-xs text-[#6A5D63] mb-6 px-1">
        <span>
          Showing <strong>{filtered.length}</strong> available experience
          {filtered.length === 1 ? '' : 's'}
        </span>
        <span className="text-[11px] font-semibold text-[#702F42] bg-white px-2.5 py-1 rounded-full border border-[#E8DCD2]">
          Official Experiences
        </span>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-[#E8DCD2] p-8">
          <p className="text-[#6A5D63] text-sm">
            No experiences found in this category.
          </p>
          <button
            onClick={() => setSelectedCategory('all')}
            className="mt-4 px-4 py-2 rounded-full text-xs font-semibold bg-[#702F42] text-white"
          >
            Show All Experiences
          </button>
        </div>
      )}
    </div>
  );
}
