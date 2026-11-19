'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, Tag, ChevronDown, ChevronUp } from 'lucide-react';
import { GalleryItem } from '@/types';
import { Lightbox } from './Lightbox';
import { DemoBadge } from '../shared/DemoBadge';

interface ImageGalleryProps {
  items: GalleryItem[];
}

const galleryCategories = [
  { key: 'all', label: 'All Photos' },
  { key: 'food', label: 'Sri Lankan Food' },
  { key: 'cooking', label: 'Cooking Experience' },
  { key: 'ingredients', label: 'Traditional Ingredients' },
  { key: 'stay', label: 'Holiday Home' },
  { key: 'safari', label: 'Safari & Nature' },
];

export function ImageGallery({ items }: ImageGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [showAllDesktop, setShowAllDesktop] = useState(false);

  const filtered =
    selectedCategory === 'all'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const handleCategoryChange = (key: string) => {
    setSelectedCategory(key);
    setShowAllMobile(false);
    setShowAllDesktop(false);
  };

  return (
    <div className="w-full">
      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
        {galleryCategories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => handleCategoryChange(cat.key)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
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

      {/* Counter bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#6A5D63] mb-6 px-1">
        <span>
          <span className="hidden sm:inline">
            Showing <strong>{!showAllDesktop && filtered.length > 12 ? 12 : filtered.length}</strong> of <strong>{filtered.length}</strong> photos
          </span>
          <span className="sm:hidden">
            Showing <strong>{!showAllMobile && filtered.length > 6 ? 6 : filtered.length}</strong> of <strong>{filtered.length}</strong> photos
          </span>
        </span>
        <span className="text-[11px] font-semibold text-[#702F42] bg-white px-2.5 py-1 rounded-full border border-[#E8DCD2]">
          Southern Ruhuna Photography
        </span>
      </div>

      {/* Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((item, index) => {
          const isHiddenOnMobile = index >= 6 && !showAllMobile;
          const isHiddenOnDesktop = index >= 12 && !showAllDesktop;

          let visibilityClass = 'block';
          if (isHiddenOnMobile && isHiddenOnDesktop) {
            visibilityClass = 'hidden';
          } else if (isHiddenOnMobile && !isHiddenOnDesktop) {
            visibilityClass = 'hidden sm:block';
          } else if (!isHiddenOnMobile && isHiddenOnDesktop) {
            visibilityClass = 'block sm:hidden';
          }

          return (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`group relative rounded-2xl overflow-hidden bg-[#E8DCD2] border border-[#E8DCD2] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer aspect-4/3 ${visibilityClass}`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
              />

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#30262A]/90 via-[#30262A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white shadow-xs">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#702F42] text-white mb-2 shadow-xs">
                    {item.categoryLabel}
                  </span>
                  <h4 className="font-serif text-base font-bold text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#E8DCD2]/80 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile View More Button */}
      {filtered.length > 6 && (
        <div className="mt-8 text-center sm:hidden">
          <button
            type="button"
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#702F42] text-white hover:bg-[#592333] shadow-xs transition-colors cursor-pointer"
          >
            {showAllMobile ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                <span>View More Photos ({filtered.length - 6})</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      )}

      {/* Desktop See More Text */}
      {filtered.length > 12 && (
        <div className="mt-10 text-center hidden sm:block">
          <button
            type="button"
            onClick={() => setShowAllDesktop(!showAllDesktop)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#702F42] hover:text-[#592333] hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            {showAllDesktop ? (
              <>
                <span>See Less Photos</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>See More ({filtered.length - 12} more photos)</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      <Lightbox
        item={activeItem}
        items={filtered}
        onClose={() => setActiveItem(null)}
        onNavigate={(newItem) => setActiveItem(newItem)}
      />
    </div>
  );
}
