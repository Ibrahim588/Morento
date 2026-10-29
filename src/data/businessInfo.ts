export interface BusinessInfo {
  brandNameAr: string;
  brandNameEn: string;
  taglineAr: string;
  taglineEn: string;
  subTaglineAr: string;
  subTaglineEn: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  locationAr: string;
  locationEn: string;
  cityAr: string;
  cityEn: string;
  districtAr: string;
  districtEn: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  rating: number;
  reviewCount: number;
  currencyAr: string;
  currencyEn: string;
}

export const businessInfo: BusinessInfo = {
  brandNameAr: "مورينتو",
  brandNameEn: "Morento",
  taglineAr: "شوكولاتة فاخرة وتنسيقات أنيقة من الورد، صُممت لتجعل لحظاتك أجمل.",
  taglineEn: "Artisanal luxury chocolates paired with curated floral elegance.",
  subTaglineAr: "لأن أجمل المشاعر تستحق هدية استثنائية.",
  subTaglineEn: "Because the finest moments deserve an extraordinary gift.",
  phone: "+966567776011",
  displayPhone: "+966 56 777 6011",
  whatsappNumber: "966567776011",
  locationAr: "حي الروضة، جدة، المملكة العربية السعودية",
  locationEn: "Al-Rawdah, Jeddah, Saudi Arabia",
  cityAr: "جدة",
  cityEn: "Jeddah",
  districtAr: "حي الروضة",
  districtEn: "Al-Rawdah District",
  googleMapsUrl: "https://www.google.com/maps?cid=14933677861868525845",
  // Standard embeddable query fallback for Al-Rawdah Jeddah Morento
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Morento+%D9%85%D9%88%D8%B1%D9%8A%D9%86%D8%AA%D9%88+Al+Rawdah+Jeddah&t=&z=15&ie=UTF8&iwloc=&output=embed",
  instagramUrl: "https://www.instagram.com/morento.sa/",
  instagramHandle: "@morento.sa",
  rating: 4.8,
  reviewCount: 190,
  currencyAr: "ر.س",
  currencyEn: "SAR",
};

