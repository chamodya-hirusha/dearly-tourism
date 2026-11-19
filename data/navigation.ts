import { NavLink } from '@/types';

export const navigationLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Cooking Class', href: '/cooking-class' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Holiday Home', href: '/holiday-home' },
  { label: 'Safari', href: '/safari' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const languages = [
  { code: 'en', name: 'English', short: 'EN' },
  { code: 'de', name: 'Deutsch', short: 'DE' },
  { code: 'fr', name: 'Français', short: 'FR' },
  { code: 'es', name: 'Español', short: 'ES' },
];

export const contactDetails = {
  name: 'Dearly Cooking Class & Holiday Home',
  tagline: 'Authentic Sri Lankan culinary arts & serene boutique hospitality',
  phone: '+94 71 354 0764',
  phoneFormatted: '+94 71 354 0764',
  whatsappUrl: 'https://wa.me/94713540764?text=Hello%20Dearly%20Cooking%20Class!%20I%20would%20like%20to%20inquire%20about%20your%20experiences%20in%20Tissamaharama.',
  email: 'dearlyholidayhome@gmail.com',
  address: 'No. 14, Court Road, Akurugoda, Tissamaharama, Southern Province, Sri Lanka',
  landmark: 'Located 5 minutes from Tissa Wewa lake and 30 minutes to Yala National Park Katagamuwa/Palatupana gates.',
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tripadvisor: 'https://tripadvisor.com',
    googlemaps: 'https://maps.google.com',
  },
};
