export interface Experience {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'cooking' | 'safari' | 'stay' | 'cultural';
  categoryLabel: string;
  duration: string;
  priceUSD: number;
  priceNote: string;
  groupSize: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  image: string;
  heroImage?: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  scheduleTime?: string;
}

export interface CookingClassDetail {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  demoPriceUSD: number;
  sessions: string[];
  host: {
    name: string;
    role: string;
    story: string;
    avatar: string;
  };
  sampleMenu: {
    course: string;
    dish: string;
    sinhalaName: string;
    description: string;
    isSpicy: 'Mild' | 'Medium' | 'Customizable';
    dietary: string[];
  }[];
  learningPoints: string[];
  traditionalIngredients: {
    name: string;
    sinhalaName: string;
    role: string;
    benefit: string;
  }[];
  included: string[];
  whatToBring: string[];
}

export interface RoomType {
  id: string;
  name: string;
  tagline: string;
  bedType: string;
  maxGuests: number;
  sizeSqM: number;
  pricePerNightUSD: number;
  images: string[];
  description: string;
  amenities: string[];
  features: string[];
}

export interface SafariPackage {
  id: string;
  title: string;
  duration: string;
  timeWindow: string;
  priceUSD: number;
  groupType: string;
  highlights: string[];
  included: string[];
  targetWildlife: string[];
  bestSeason: string;
  description: string;
}

export interface Testimonial {
  id: string;
  guestName: string;
  country: string;
  countryFlag: string;
  experienceTaken: string;
  date: string;
  rating: number;
  quote: string;
  avatar: string;
  verifiedDemoGuest: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'cooking' | 'ingredients' | 'stay' | 'safari';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  aspectRatio?: 'square' | 'wide' | 'tall';
}

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export interface BookingFormData {
  experienceId: string;
  preferredDate: string;
  preferredTimeSlot?: string;
  guestsCount: number;
  fullName: string;
  email: string;
  whatsappNumber: string;
  country: string;
  dietaryOrSpecialRequests?: string;
}
