"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Gift, HeartHandshake, Sparkles, Feather } from "lucide-react";

export const ChocolateFlowersExperience: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Sparkles,
      titleAr: "شوكولاتة بلجيكية فاخرة",
      titleEn: "Artisanal Belgian Truffles",
      descAr: "حشوات استثنائية من البرالين الفاخر، الكراميل المملح، والمستكة والفستق الحلبي، مصنوعة بحرفية تليق بأذواقكم الرفيعة.",
      descEn: "Exquisite fillings of roasted praline, sea salt caramel, and pistachio mastic crafted to elevate gifting moments.",
    },
    {
      icon: Gift,
      titleAr: "ورود طبيعية نضرة",
      titleEn: "Fresh Natural Blooms",
      descAr: "ننتقي أجود أزهار الجوري والبيبي روز المستوردة يومياً، لنضمن بقاء رونقها ونضارتها في يد من تحبون.",
      descEn: "Hand-curated Dutch and Ecuadorian roses conditioned daily to retain their dew-fresh vibrancy and elegance.",
    },
    {
      icon: Feather,
      titleAr: "بطاقات إهداء مخصصة",
      titleEn: "Handwritten Calligraphy",
      descAr: "نخط كلماتك ومشاعركم الصادقة على بطاقات فاخرة مذهبة، لتصل الهدية ناطقة بكل مشاعر الود والتقدير.",
      descEn: "Your personal notes transcribed in refined Arabic or English calligraphy on heavy cardstock with embossed detailing.",
    },
    {
      icon: HeartHandshake,
      titleAr: "عناية متقنة بالتوصيل",
      titleEn: "White-Glove Delivery",
      descAr: "سيارات مجهزة وتوصيل مخصص يضمن وصول الهدية باردة ونضرة إلى باب المستلم أو مقر المناسبة في جدة.",
      descEn: "Temperature-regulated delivery ensuring your gift arrives in immaculate, ready-to-present condition across Jeddah.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase (Two images) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-chocolate-800/10">
                  <Image
                    src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80"
                    alt="Belgian chocolates"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>
                <div className="bg-ivory-200 p-4 rounded-2xl text-center space-y-1">
                  <span className="font-serif text-2xl font-bold text-chocolate-950">100%</span>
                  <p className="text-xs text-chocolate-800 font-medium">
                    {t("شوكولاتة منتقاة بعناية", "Finest Chocolate Blends")}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-blush/30 p-4 rounded-2xl text-center space-y-1">
                  <span className="font-serif text-2xl font-bold text-burgundy">جدة</span>
                  <p className="text-xs text-chocolate-800 font-medium">
                    {t("حي الروضة • توصيل متقن", "Al-Rawdah • Jeddah Delivery")}
                  </p>
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-chocolate-800/10">
                  <Image
                    src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80"
                    alt="Rose arrangement"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text & Pillars */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-burgundy font-semibold">
                {t("فلسفة مورينتو في الإهداء", "The Art of Morento Gifting")}
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-chocolate-950 leading-snug">
                {t(
                  "حين تمتزج حلاوة الشوكولاتة بنقاء الورد",
                  "When the Sweetness of Chocolate Meets the Grace of Roses"
                )}
              </h2>
              <p className="text-sm sm:text-base text-chocolate-800/80 font-light leading-relaxed">
                {t(
                  "في مورينتو، نؤمن بأن الهدية ليست مجرد منتج، بل تجربة حسية كاملة تنقل مشاعركم بأرقى طريقة ممكنة. نحرص على كل تفصيلة من تنسيق الورود، واختيار حبات الشوكولاتة، إلى شريطة الحرير وبطاقة الإهداء.",
                  "At Morento, a gift is never merely an item; it is a profound sensory statement. From hand-trimmed rose stems to bespoke silk ribboning and personalized cards, every gift is fashioned to leave an everlasting impression."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-ivory-200 flex items-center justify-center text-burgundy">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-serif font-semibold text-chocolate-950">
                      {t(item.titleAr, item.titleEn)}
                    </h3>
                    <p className="text-xs text-chocolate-800/70 leading-relaxed font-light">
                      {t(item.descAr, item.descEn)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

