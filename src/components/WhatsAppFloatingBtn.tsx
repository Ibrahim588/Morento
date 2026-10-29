"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { businessInfo } from "@/data/businessInfo";
import { buildDirectInquiryWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, X } from "lucide-react";

export const WhatsAppFloatingBtn: React.FC = () => {
  const { language, direction, t } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      className={`fixed bottom-6 ${
        direction === "rtl" ? "left-6" : "right-6"
      } z-40 flex items-center gap-3`}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-luxury border border-gold/40 text-xs font-medium text-chocolate-950 animate-bounce-subtle">
          <span>{t("تواصل معنا لتنسيق طلبك الفاخر", "Order your luxury gift directly")}</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-chocolate-400 hover:text-chocolate-900 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href={buildDirectInquiryWhatsAppUrl(language)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:scale-108 transition-all duration-300 relative group"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-burgundy rounded-full border-2 border-white"></span>
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};

