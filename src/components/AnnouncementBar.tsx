"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, MapPin, Phone } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";

export const AnnouncementBar: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-chocolate-950 text-ivory-100 text-xs py-2 px-4 border-b border-gold/20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-start">
        <div className="flex items-center gap-2 justify-center">
          <Sparkles className="w-3.5 h-3.5 text-gold shrink-0 animate-pulse" />
          <span>
            {language === "ar"
              ? "مورينتو | تجربة إهداء فاخرة تجمع بين الشوكولاتة والورد في جدة - حي الروضة"
              : "Morento | Luxury chocolate & curated floral gifting in Jeddah - Al Rawdah"}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-ivory-200/80">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-gold" />
            {language === "ar" ? businessInfo.locationAr : businessInfo.locationEn}
          </span>
          <span className="text-gold/40">•</span>
          <a
            href={`tel:${businessInfo.phone}`}
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Phone className="w-3 h-3 text-gold" />
            <span dir="ltr">{businessInfo.displayPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

