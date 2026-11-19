'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, Tag } from 'lucide-react';
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

  const filtered =
    selectedCategory === 'all'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {galleryCategories.map((cat) => {
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

      {/* Counter bar */}
      <div className="flex items-center justify-between text-xs text-[#6A5D63] mb-6 px-1">
        <span>
          Showing <strong>{filtered.length}</strong> photo
          {filtered.length === 1 ? '' : 's'}
        </span>
        <span className="text-[11px] font-semibold text-[#702F42] bg-white px-2.5 py-1 rounded-full border border-[#E8DCD2]">
          Southern Ruhuna Photography
        </span>
      </div>

      {/* Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#E8DCD2] border border-[#E8DCD2] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer aspect-4/3"
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
