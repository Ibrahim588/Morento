"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  qAr: string;
  qEn: string;
  aAr: string;
  aEn: string;
}

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      qAr: "كيف تتم عملية الطلب عبر الواتساب؟",
      qEn: "How does ordering via WhatsApp work?",
      aAr: "بكل سهولة: اختر هديتك، وخصص رسالة الإهداء وتاريخ التوصيل المفضل عبر الموقع، ثم اضغط زر 'طلب عبر واتساب'. ستفتح لك محادثة مباشرة مع فريق مورينتو متضمنة كافة تفاصيل طلبك ليقوم الفريق بمراجعة التوفر وتأكيد الطلب معكم فوراً.",
      aEn: "Browse your desired gift, customize your card message and preferred delivery date, and click 'Order via WhatsApp'. This instantly launches a WhatsApp chat with Morento containing your exact order details for fast concierge confirmation.",
    },
    {
      qAr: "هل تغطون التوصيل في كافة أحياء جدة؟",
      qEn: "Do you deliver across all neighborhoods in Jeddah?",
      aAr: "نعم، نقوم بتوصيل الهدايا لكافة أحياء جدة (الروضة، الخالدية، الأندلس، الشاطئ، الحمراء، أبحر، وبقية الأحياء) بواسطة سيارات مجهزة لحفظ نضارة الورد وجودة الشوكولاتة.",
      aEn: "Yes, we serve all Jeddah districts (Al-Rawdah, Al-Khalidiyyah, Al-Shati, Obhur, etc.) using climate-conditioned delivery to maintain pristine flower freshness and chocolate texture.",
    },
    {
      qAr: "هل يتم سحب أي مبالغ مالية أو طلب بطاقات بنكية من خلال الموقع؟",
      qEn: "Are payments or credit card numbers collected on the website?",
      aAr: "لا، الموقع مخصص لاستعراض التشكيلات وتخصيص الهدايا وإرسال الاستفسارات والطلبات مباشرة إلى الواتساب الرسمي للبوتيك. تأكيد الدفع يتم بطرق الدفع المعتمدة لدى المحل بعد التحقق من توفر طلبكم.",
      aEn: "No, we do not collect payment card information on this site. The site functions as a digital showroom and personalization portal. Payment arrangements are verified directly with Morento's concierge on WhatsApp.",
    },
    {
      qAr: "هل يمكن إرسال الهدية كمفاجأة للمستلم دون معرفته؟",
      qEn: "Can I send the gift as a surprise to the recipient?",
      aAr: "بالتأكيد! يمكنك تفعيل خيار 'هدية مفاجأة'، وسيتواصل مندوبنا مع المستلم بلباقة فقط لتنسيق استلام الشحنة في جدة دون الإفصاح عن محتواها أو هوية المرسل حتى تصل إلى يده.",
      aEn: "Absolutely! Simply select 'Surprise Gift'. Our courier will coordinate delivery location with the recipient with utter discretion, keeping the contents and sender secret until unwrapped.",
    },
    {
      qAr: "ما هو الوقت المطلوب قبل موعد التوصيل؟",
      qEn: "How much advance notice is required for orders?",
      aAr: "تتوفر العديد من بوكسات الشوكولاتة للطلب الفوري بنفس اليوم. بالنسبة لتنسيقات الورد الطبيعي والصواني الضخمة، يُفضل التنسيق المسبق بساعتين إلى 24 ساعة لضمان انتقاء الورود الأحدث تجهيزاً.",
      aEn: "Signature chocolate boxes are often available for same-day dispatch. For custom floral arrangements and VIP hospitality trays, 2 to 24 hours advance notice is recommended to ensure fresh blooms.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-ivory-50 border-t border-chocolate-800/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest text-burgundy font-semibold">
            {t("الأسئلة الشائعة", "Frequently Asked Questions")}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-chocolate-950">
            {t("كل ما تحتاج معرفته عن إهداء مورينتو", "Everything You Need to Know")}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-chocolate-800/10 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-start gap-4 hover:bg-ivory-100/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-serif font-semibold text-chocolate-950">
                    {t(faq.qAr, faq.qEn)}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-chocolate-800/80 leading-relaxed border-t border-chocolate-800/5 font-light">
                    {t(faq.aAr, faq.aEn)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

