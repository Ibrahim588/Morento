"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { productsData } from "@/data/products";
import { Sparkles, MessageCircle, Heart, Check, Feather } from "lucide-react";

export const GiftCustomizationPreview: React.FC = () => {
  const { t } = useLanguage();
  const { openCustomizerForProduct } = useCart();

  const [message, setMessage] = useState(
    "لأنك مميز دائماً، جعل الله أيامك كلها فرحاً وسروراً."
  );
  const [recipient, setRecipient] = useState("سارة الغامدي");
  const [ribbonColor, setRibbonColor] = useState<"gold" | "burgundy" | "blush">("gold");
  const [isSurprise, setIsSurprise] = useState(true);

  const ribbons = [
    { id: "gold", nameAr: "ذهبي شامباني", nameEn: "Champagne Gold", hex: "bg-[#C5A46D]" },
    { id: "burgundy", nameAr: "برغندي ملكي", nameEn: "Royal Burgundy", hex: "bg-[#762F3D]" },
    { id: "blush", nameAr: "وردي ناعم", nameEn: "Soft Blush", hex: "bg-[#EAD5D0]" },
  ] as const;

  const demoProduct = productsData[1]; // Signature Rose & Chocolate

  return (
    <section className="py-16 md:py-24 bg-white border-t border-chocolate-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-burgundy font-semibold">
            {t("لمستك الشخصية", "Your Personal Touch")}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-chocolate-950">
            {t("خصص بطاقة الإهداء والتغليف مباشرة", "Preview Your Custom Gift Card & Ribbon")}
          </h2>
          <p className="text-xs sm:text-sm text-chocolate-800/80 font-light">
            {t(
              "جرّب كتابة رسالتك الآن وشاهد كيف ستظهر على بطاقة الإهداء الفاخرة لمورينتو قبل إرسال طلبك عبر الواتساب",
              "Type your message to see how it renders on our embossed keepsake card before finalizing your WhatsApp inquiry"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          {/* Controls Form */}
          <div className="lg:col-span-6 bg-ivory-100 p-6 sm:p-8 rounded-3xl border border-chocolate-800/10 space-y-5 shadow-sm">
            <div>
              <label className="block text-xs font-semibold text-chocolate-900 mb-1.5">
                {t("اسم المستلم (المُهدى إليه)", "Recipient Name")}
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-chocolate-800/20 text-sm focus:outline-none focus:border-gold bg-white"
                placeholder={t("اكتب اسم الشخص...", "Enter recipient name...")}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-chocolate-900 mb-1.5">
                {t("نص بطاقة الإهداء", "Gift Card Message")}
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-chocolate-800/20 text-sm focus:outline-none focus:border-gold bg-white resize-none"
                placeholder={t("اكتب عباراتك القلبية...", "Write your heartwarming note...")}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-chocolate-900 mb-2">
                {t("لون شريط الساتان المفضل", "Preferred Satin Ribbon Color")}
              </label>
              <div className="flex gap-3">
                {ribbons.map((rib) => (
                  <button
                    key={rib.id}
                    onClick={() => setRibbonColor(rib.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs border transition-all ${
                      ribbonColor === rib.id
                        ? "border-chocolate-950 bg-white shadow-sm font-semibold"
                        : "border-chocolate-800/10 bg-ivory-50 text-chocolate-700"
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full ${rib.hex} shadow-inner`}></span>
                    <span>{t(rib.nameAr, rib.nameEn)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isSurprise}
                  onChange={(e) => setIsSurprise(e.target.checked)}
                  className="w-4 h-4 text-burgundy rounded border-chocolate-800/30 focus:ring-burgundy"
                />
                <span className="text-xs text-chocolate-900 font-medium">
                  {t(
                    "توصيل مفاجأة (لا نكشف للمستلم عن المحتوى قبل التسليم)",
                    "Surprise delivery (We will not disclose gift contents prior to arrival)"
                  )}
                </span>
              </label>
            </div>

            <button
              onClick={() => openCustomizerForProduct(demoProduct)}
              className="w-full flex items-center justify-center gap-2 bg-chocolate-900 hover:bg-burgundy text-ivory-50 py-3.5 rounded-2xl text-xs font-semibold transition-all shadow-luxury"
            >
              <MessageCircle className="w-4 h-4 text-gold" />
              <span>{t("طلب هذا التنسيق المخصص الآن", "Order This Custom Gift via WhatsApp")}</span>
            </button>
          </div>

          {/* Interactive Card Preview */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-sm bg-gradient-to-br from-ivory-50 to-ivory-200 border-2 border-gold/40 p-8 rounded-2xl shadow-luxury relative overflow-hidden">
              {/* Ribbon Accent */}
              <div
                className={`absolute top-0 right-8 w-8 h-14 ${
                  ribbonColor === "gold"
                    ? "bg-[#C5A46D]"
                    : ribbonColor === "burgundy"
                    ? "bg-[#762F3D]"
                    : "bg-[#EAD5D0]"
                } shadow-md flex items-end justify-center pb-1 text-white text-[9px]`}
              >
                ★
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-gold/30 pb-3">
                  <span className="font-serif tracking-widest text-sm text-chocolate-950 font-bold">
                    MORENTO
                  </span>
                  <Feather className="w-4 h-4 text-burgundy" />
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] text-burgundy font-semibold block">
                    {t("إلى العزيز/ة:", "To Beloved:")} {recipient || "..."}
                  </span>
                  <p className="font-arabic text-sm text-chocolate-900 leading-relaxed italic min-h-[70px]">
                    "{message || t("رسالتك ستكتب هنا بخط عربي أنيق...", "Your message will appear here...")}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gold/20 flex items-center justify-between text-[10px] text-chocolate-700">
                  <span>جدة • حي الروضة</span>
                  <span className="text-gold font-serif font-bold">Morento Boutique</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-chocolate-600 mt-4 text-center">
              {t(
                "تطبع البطاقة على ورق مقوّى فاخر وتوضع داخل ظرف مورينتو المغلق بشمع الختم الذهبي",
                "Printed on fine textured cardstock sealed in a Morento gold wax-embossed envelope"
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

