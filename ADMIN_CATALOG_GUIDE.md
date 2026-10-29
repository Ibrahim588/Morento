# دليل إدارة متجر مورينتو | Morento Boutique Catalog Guide

مرحباً بك في الدليل الإرشادي لإدارة محتوى وكتالوج متجر **مورينتو (Morento)** للشوكولاتة الفاخرة وتنسيقات الورد في جدة.

---

## 1. الهيكل الفني للمتجر

تم تصميم هذا المتجر بتقنية **Next.js (App Router)** و **TypeScript** و **Tailwind CSS**.
في هذه النسخة الأولى (MVP)، ولضمان أقصى درجات السرعة والأمان وعدم الحاجة لقواعد بيانات باهظة أو بوابات دفع معقدة، يتم حفظ المنتجات والإعدادات المركزية في ملفات برمجية منظمة وسهلة التعديل (`src/data/`).

تتم جميع الطلبات والاستفسارات عبر الربط الفوري بالواتساب الرسمي:
`+966 56 777 6011`

---

## 2. تعديل بيانات المتجر والتواصل المركزية

يتم تعديل أرقام الجوال، حساب الانستغرام، ورابط خرائط جوجل من ملف واحد مركزي:
📍 **المسار:** `src/data/businessInfo.ts`

```typescript
export const businessInfo: BusinessInfo = {
  brandNameAr: "مورينتو",
  brandNameEn: "Morento",
  phone: "+966567776011",
  displayPhone: "+966 56 777 6011",
  whatsappNumber: "966567776011", // رقم الواتساب بصيغة دولية بدون +
  locationAr: "حي الروضة، جدة، المملكة العربية السعودية",
  locationEn: "Al-Rawdah, Jeddah, Saudi Arabia",
  googleMapsUrl: "https://www.google.com/maps?cid=14933677861868525845",
  instagramUrl: "https://www.instagram.com/morento.sa/",
  instagramHandle: "@morento.sa",
  rating: 4.8,
  reviewCount: 190,
  currencyAr: "ر.س",
  currencyEn: "SAR"
};
```

---

## 3. كيفية إضافة وتعديل وحذف المنتجات

📍 **المسار:** `src/data/products.ts`

يحتوي هذا الملف على مصفوفة `productsData`. كل منتج يحتوي على الحقول التالية:

### حقول المنتج (`Product`):
- `id`: معرّف فريد لا يتكرر (مثال: `"mor-09"`).
- `slug`: الرابط الإنجليزي للمنتج في المتصفح (مثال: `"belgian-hazelnut-truffles"`).
- `nameAr`: اسم المنتج باللغة العربية.
- `nameEn`: اسم المنتج باللغة الإنجليزية.
- `category`: تصنيف المنتج، ويجب أن يكون واحداً من:
  - `"luxury-chocolates"` (شوكولاتة فاخرة)
  - `"chocolate-flowers"` (شوكولاتة مع الورد)
  - `"gift-boxes"` (بوكسات الهدايا)
  - `"floral-arrangements"` (تنسيقات الورد)
  - `"occasions"` (هدايا المناسبات)
- `price`: السعر بالريال السعودي (رقم مجرد، مثلاً: `350`).
- `priceConfirmed`: قم بوضع `true` إذا كان السعر نهائياً، أو `false` إذا كان استرشادياً.
- `descriptionAr`: الوصف بالعربية.
- `descriptionEn`: الوصف بالإنجليزية.
- `image`: رابط الصورة الرئيسية (يمكن وضع صورة من مجلد `public/images/` أو رابط ويب موثوق).
- `gallery`: مصفوفة صور إضافية لمعرض المنتج.
- `occasions`: مصفوفة المناسبات الملائمة (مثال: `["birthday", "vip"]`).
- `piecesCount`: عدد حبات الشوكولاتة إن وجدت (اختياري).
- `isFeatured`: `true` لظهوره في الصفحة الرئيسية.
- `isBestSeller`: `true` لتمييزه ببادج "الأكثر طلباً".
- `isAvailable`: `true` إذا كان متوفراً حالياً.
- `preparationTimeAr`: مدة التجهيز (مثال: `"خلال ساعتين"`).

### مثال عملي لإضافة منتج جديد:
قم بنسخ هذا القالب وإضافته داخل مصفوفة `productsData`:

```typescript
{
  id: "mor-09",
  slug: "velvet-heart-chocolates",
  nameAr: "صندوق الشوكولاتة المخملي بشكل قلب",
  nameEn: "Velvet Heart Chocolate Keepsake",
  category: "luxury-chocolates",
  categoryAr: "شوكولاتة فاخرة",
  categoryEn: "Luxury Chocolates",
  price: 290,
  priceConfirmed: true,
  descriptionAr: "شوكولاتة فاخرة بحشوة التوت البري والكراميل في صندوق أحمر مخملي.",
  descriptionEn: "Artisanal raspberry ganache and salted caramel truffles in a velvet keepsake heart.",
  image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80"
  ],
  occasions: ["anniversary", "birthday"],
  piecesCount: 20,
  isFeatured: true,
  isBestSeller: true,
  isAvailable: true,
  preparationTimeAr: "تجهيز فوري بنفس اليوم",
  preparationTimeEn: "Same-day instant dispatch",
  sampleNoticeAr: "",
  sampleNoticeEn: ""
}
```

---

## 4. إضافة صور المنتجات الحقيقية
لوضع الصور الفوتوغرافية الحقيقية لمتجر مورينتو:
1. انسخ الصور إلى مجلد `public/images/products/`.
2. استبدل رابط `image` في ملف `products.ts` بالمسار المحلي، مثل:
   `image: "/images/products/my-box.jpg"`

---

## 5. الجاهزية للتطوير المستقبلي
تم بناء البنية التحتية بنظام المكونات النظيفة المنفصلة (Clean Layered Architecture):
- عند الرغبة مستقبلاً في لوحة تحكم سحابية (مثل Sanity أو Strapi أو Supabase)، يمكن استبدال ملف `products.ts` بخطاف استدعاء API دون الحاجة لإعادة كتابة الواجهات والتصميم.

