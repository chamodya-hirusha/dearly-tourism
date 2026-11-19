import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

const robotoHeading = Roboto({subsets:['latin'],variable:'--font-heading'});

const manrope = Manrope({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Dearly Cooking Class & Holiday Home | Authentic Sri Lankan Cooking in Tissamaharama",
  description:
    "Experience authentic Sri Lankan home-style cooking classes, traditional homemade rice & curry, comfortable holiday home accommodation, and ethical Yala Safari tours in Tissamaharama, Sri Lanka.",
  keywords: [
    "Sri Lankan cooking class",
    "Tissamaharama cooking experience",
    "Yala safari",
    "Sri Lankan holiday home",
    "authentic rice and curry",
    "traditional food tour Sri Lanka",
    "Dearly Holiday Home"
  ],
  openGraph: {
    title: "Dearly Cooking Class & Holiday Home | Tissamaharama, Sri Lanka",
    description: "Discover the art of traditional Sri Lankan cooking and boutique holiday home stays near Yala National Park.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", manrope.variable, robotoHeading.variable)}>
      <body className="min-h-screen flex flex-col bg-[#F8F3EF] text-[#30262A] antialiased selection:bg-[#702F42] selection:text-white">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
