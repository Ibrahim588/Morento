import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrderDrawer } from "@/components/OrderDrawer";
import { GiftCustomizerModal } from "@/components/GiftCustomizerModal";
import { WhatsAppFloatingBtn } from "@/components/WhatsAppFloatingBtn";
import { businessInfo } from "@/data/businessInfo";

export const metadata: Metadata = {
  title: "مورينتو | شوكولاتة فاخرة وهدايا مع الورد في جدة — Morento",
  description:
    "بوتيك مورينتو في حي الروضة بجدة. تشكيلات فاخرة من الشوكولاتة البلجيكية وتنسيقات الورد الطبيعي وبوكسات الهدايا الخاصة لكافة المناسبات. اطلب هديتك الآن عبر الواتساب.",
  keywords: [
    "مورينتو",
    "Morento",
    "شوكولاتة جدة",
    "ورد جدة",
    "هدايا الروضة جدة",
    "شوكولاتة مع ورد",
    "تنسيق هدايا جدة",
    "بوكسات تخرج جدة",
    "شوكولاتة بلجيكية فاخرة",
  ],
  openGraph: {
    title: "مورينتو | شوكولاتة فاخرة وهدايا مع الورد في جدة — Morento",
    description:
      "شوكولاتة بلجيكية فاخرة وتنسيقات أنيقة من الورد في جدة، حي الروضة. صُممت لتجعل لحظاتك أجمل.",
    url: "https://morento.sa",
    siteName: "Morento Boutique | مورينتو",
    images: [
      {
        url: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Morento Luxury Chocolates & Flowers Jeddah",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Verified Schema.org LocalBusiness structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Florist",
    "name": "Morento | مورينتو",
    "image": "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=85",
    "telephone": businessInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jeddah",
      "addressRegion": "Makkah Province",
      "streetAddress": "Al-Rawdah District",
      "addressCountry": "SA",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.565,
      "longitude": 39.155,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": businessInfo.rating,
      "reviewCount": businessInfo.reviewCount,
    },
    "sameAs": [
      businessInfo.instagramUrl,
      businessInfo.googleMapsUrl,
    ],
    "priceRange": "$$",
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory-100 text-chocolate-900 selection:bg-gold/30 selection:text-chocolate-950">
        <LanguageProvider>
          <CartProvider>
            <AnnouncementBar />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <OrderDrawer />
            <GiftCustomizerModal />
            <WhatsAppFloatingBtn />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

