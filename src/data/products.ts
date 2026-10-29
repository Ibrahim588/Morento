export type ProductCategory =
  | "all"
  | "luxury-chocolates"
  | "chocolate-flowers"
  | "gift-boxes"
  | "floral-arrangements"
  | "occasions";

export type ProductOccasion =
  | "all"
  | "birthday"
  | "anniversary"
  | "graduation"
  | "congratulations"
  | "vip";

export interface ProductVariant {
  id: string;
  nameAr: string;
  nameEn: string;
  priceDelta?: number;
}

export interface Product {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  category: ProductCategory;
  categoryAr: string;
  categoryEn: string;
  price: number;
  priceConfirmed: boolean;
  descriptionAr: string;
  descriptionEn: string;
  storyAr?: string;
  storyEn?: string;
  image: string;
  gallery: string[];
  occasions: ProductOccasion[];
  variants?: ProductVariant[];
  piecesCount?: number;
  isFeatured: boolean;
  isBestSeller?: boolean;
  isAvailable: boolean;
  preparationTimeAr: string;
  preparationTimeEn: string;
  sampleNoticeAr: string;
  sampleNoticeEn: string;
}

export const categoriesList = [
  { id: "all", nameAr: "جميع التشكيلات", nameEn: "All Collections" },
  { id: "luxury-chocolates", nameAr: "شوكولاتة فاخرة", nameEn: "Luxury Chocolates" },
  { id: "chocolate-flowers", nameAr: "شوكولاتة مع الورد", nameEn: "Chocolates & Flowers" },
  { id: "gift-boxes", nameAr: "بوكسات الهدايا", nameEn: "Gift Boxes" },
  { id: "floral-arrangements", nameAr: "تنسيقات الورد", nameEn: "Floral Arrangements" },
  { id: "occasions", nameAr: "هدايا المناسبات", nameEn: "Occasion Gifts" },
] as const;

export const occasionsList = [
  { id: "all", nameAr: "جميع المناسبات", nameEn: "All Occasions" },
  { id: "anniversary", nameAr: "ذكرى زواج وحب", nameEn: "Anniversary & Love" },
  { id: "birthday", nameAr: "أعياد الميلاد", nameEn: "Birthdays" },
  { id: "graduation", nameAr: "تخرج ونجاح", nameEn: "Graduation & Success" },
  { id: "congratulations", nameAr: "تهنئة وترقية", nameEn: "Congratulations" },
  { id: "vip", nameAr: "ضيافة وهدايا VIP", nameEn: "VIP & Hospitality" },
] as const;

export const productsData: Product[] = [
  {
    id: "mor-01",
    slug: "royal-velvet-chocolate-box",
    nameAr: "صندوق الشوكولاتة المخملي الملكي",
    nameEn: "Royal Velvet Truffle Keepsake",
    category: "luxury-chocolates",
    categoryAr: "شوكولاتة فاخرة",
    categoryEn: "Luxury Chocolates",
    price: 320,
    priceConfirmed: false,
    descriptionAr: "تشكيلة مختارة بعناية فائقة من حبات الشوكولاتة البلجيكية الفاخرة المحشوة بالكراميل المملح، وبرالين البندق المحمص، والغاناش الداكن، داخل صندوق مخملي فاخر يحمل لمسات مورينتو الذهبية.",
    descriptionEn: "A masterfully curated assortment of artisanal Belgian truffles, salted caramel, roasted hazelnut praline, and dark ganache, presented in an embossed velvet keepsake box.",
    storyAr: "صُمم هذا الصندوق ليعكس رقي الضيافة وإهداء الأحبة بأعلى معايير الشوكولاتة العالمية.",
    storyEn: "Crafted to embody the pinnacle of celebratory gifting with world-class Belgian craftsmanship.",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=1000&q=85"
    ],
    occasions: ["vip", "anniversary", "congratulations"],
    piecesCount: 36,
    isFeatured: true,
    isBestSeller: true,
    isAvailable: true,
    preparationTimeAr: "تجهيز فوري أو خلال ساعتين",
    preparationTimeEn: "Same day preparation / within 2 hours",
    sampleNoticeAr: "نموذج استرشادي — يخضع السعر والتشكيلة للتأكيد النهائي عبر الواتساب.",
    sampleNoticeEn: "Sample catalog item — price and pieces subject to WhatsApp confirmation."
  },
  {
    id: "mor-02",
    slug: "signature-rose-and-chocolate-hamper",
    nameAr: "تناغم مورينتو | بوكس الشوكولاتة والورد الطبيعي",
    nameEn: "Morento Signature Rose & Chocolate Harmony",
    category: "chocolate-flowers",
    categoryAr: "شوكولاتة مع الورد",
    categoryEn: "Chocolates & Flowers",
    price: 490,
    priceConfirmed: false,
    descriptionAr: "الهدية الأيقونية الأكثر طلباً: ورود الجوري الطبيعية المختارة بعناية مع بوكس شوكولاتة مورينتو الخاصة وشريطة ساتان عريضة وبطاقة إهداء فاخرة مكتوبة بالخط المتقن.",
    descriptionEn: "The signature gift experience combining hand-picked Ecuadorian garden roses and Morento artisanal chocolates in an exquisite dual-tier gift presentation.",
    storyAr: "تجسيد حقيقي لعبارة 'شوكولاتة فاخرة وورد أنيق' لتخليد أروع الذكريات.",
    storyEn: "The quintessential expression of luxury gifting, creating memorable sensory impressions.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85"
    ],
    occasions: ["anniversary", "birthday", "vip"],
    piecesCount: 24,
    isFeatured: true,
    isBestSeller: true,
    isAvailable: true,
    preparationTimeAr: "يُفضل التنسيق المسبق بساعتين لضمان نضارة الورد",
    preparationTimeEn: "Pre-order 2 hours in advance to ensure flower freshness",
    sampleNoticeAr: "نموذج استرشادي — يخضع السعر والتشكيلة للتأكيد النهائي عبر الواتساب.",
    sampleNoticeEn: "Sample catalog item — price and pieces subject to WhatsApp confirmation."
  },
  {
    id: "mor-03",
    slug: "blush-elegance-rose-arrangement",
    nameAr: "فازة البلاش الأنيقة | تنسيق ورد فاخر",
    nameEn: "Blush Elegance Ceramic Floral Arrangement",
    category: "floral-arrangements",
    categoryAr: "تنسيقات الورد",
    categoryEn: "Floral Arrangements",
    price: 380,
    priceConfirmed: false,
    descriptionAr: "فازة سيراميك عاجية محشوة بورود البيبي روز الباستيل، الهيدرانجيا الفاخرة، وأوراق الكينا العطرة لتضفي سحراً ودفئاً استثنائياً على أي مكان.",
    descriptionEn: "An ivory ceramic centerpiece overflowing with delicate pastel baby roses, premium Dutch hydrangeas, and fragrant silver dollar eucalyptus.",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1000&q=85"
    ],
    occasions: ["birthday", "congratulations", "vip"],
    isFeatured: true,
    isBestSeller: false,
    isAvailable: true,
    preparationTimeAr: "تنسيق يدوي فريش حسب الطلب",
    preparationTimeEn: "Freshly arranged by floral stylists",
    sampleNoticeAr: "نموذج استرشادي — ألوان الورد تخضع لتوفر الموسم وتأكيد المحل.",
    sampleNoticeEn: "Sample catalog item — floral hues vary with seasonal blooms."
  },
  {
    id: "mor-04",
    slug: "celebration-chocolate-tower-box",
    nameAr: "صندوق الاحتفال والتهنئة الفاخر",
    nameEn: "Celebration Grand Gift Box",
    category: "gift-boxes",
    categoryAr: "بوكسات الهدايا",
    categoryEn: "Gift Boxes",
    price: 420,
    priceConfirmed: false,
    descriptionAr: "هدية متكاملة تضم طبقتين من شوكولاتة مورينتو المحشوة بنكهات المستكة والفستق والكراميل، مغلفة بشريطة مخملية بلون البرغندي الفاخر وبطاقة تهنئة خاصة.",
    descriptionEn: "A tiered luxury gift box containing artisanal chocolates infused with pistachio praline, mastic notes, and salted caramel, adorned with burgundy velvet ribbon.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85"
    ],
    occasions: ["graduation", "congratulations", "birthday"],
    piecesCount: 48,
    isFeatured: true,
    isBestSeller: true,
    isAvailable: true,
    preparationTimeAr: "متوفر للطلب الفوري في جدة",
    preparationTimeEn: "Available for immediate pickup/delivery in Jeddah",
    sampleNoticeAr: "نموذج استرشادي — تفاصيل الإهداء والشريط قابلة للتخصيص.",
    sampleNoticeEn: "Sample catalog item — customization available upon confirmation."
  },
  {
    id: "mor-05",
    slug: "prestige-chocolate-tray",
    nameAr: "صينية الضيافة المورينتو الملكية",
    nameEn: "Prestige Hospitality Chocolate Tray",
    category: "luxury-chocolates",
    categoryAr: "شوكولاتة فاخرة",
    categoryEn: "Luxury Chocolates",
    price: 650,
    priceConfirmed: false,
    descriptionAr: "صينية تقديم راقية من الزجاج والمعدن المذهب، تحتوي على تشكيلة ضخمة من الشوكولاتة المغلفة بألوان الهوية الفاخرة، مثالية لضيافة المناسبات وحفلات التخرج والأعراس.",
    descriptionEn: "A gold-trimmed mirrored hospitality tray brimming with individually wrapped luxury chocolates, ideal for VIP gatherings, weddings, and formal receptions.",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1000&q=85"
    ],
    occasions: ["vip", "congratulations", "graduation"],
    piecesCount: 75,
    isFeatured: false,
    isBestSeller: false,
    isAvailable: true,
    preparationTimeAr: "يلزم الطلب قبل 24 ساعة للتشكيلات الضخمة",
    preparationTimeEn: "24-hour advance notice recommended for large trays",
    sampleNoticeAr: "نموذج استرشادي — أحجام الصواني وأوزان الشوكولاتة تختلف حسب الرغبة.",
    sampleNoticeEn: "Sample item — tray sizes and weights are fully customizable."
  },
  {
    id: "mor-06",
    slug: "red-passion-rose-bouquet-box",
    nameAr: "بوكيه الجوري الأحمر الكلاسيكي مع الشوكولاتة",
    nameEn: "Classic Red Rose & Artisan Truffle Box",
    category: "chocolate-flowers",
    categoryAr: "شوكولاتة مع الورد",
    categoryEn: "Chocolates & Flowers",
    price: 395,
    priceConfirmed: false,
    descriptionAr: "باقة دائرية متناسقة من ورد الجوري الأحمر الفاخر بتغليف كريب عاجي فاخر، ترافقها علبة شوكولاتة صغيرة مميزة لشخصين.",
    descriptionEn: "A classic hand-tied bouquet of deep crimson roses in luxury textured ivory wrap, accompanied by a petite box of Morento signature chocolates.",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=85"
    ],
    occasions: ["anniversary", "birthday"],
    isFeatured: false,
    isBestSeller: true,
    isAvailable: true,
    preparationTimeAr: "يتم تجهيز الورد الطبيعي طازجاً",
    preparationTimeEn: "Hand-arranged with fresh blooms",
    sampleNoticeAr: "نموذج استرشادي — عدد الورود قابل للتعديل بناءً على طلبكم.",
    sampleNoticeEn: "Sample catalog item — rose stem count customizable."
  },
  {
    id: "mor-07",
    slug: "graduation-golden-trophy-gift",
    nameAr: "هدية التخرج الذهبية | تنسيق ورد وشوكولاتة",
    nameEn: "Graduation Splendor Gold Edition",
    category: "occasions",
    categoryAr: "هدايا المناسبات",
    categoryEn: "Occasion Gifts",
    price: 460,
    priceConfirmed: false,
    descriptionAr: "تنسيق خاص بمناسبات التخرج يجمع بين ألوان الشامبانيا والذهب والورود البيضاء والصفراء الراقية مع شوكولاتة مخصصة وعبارة مبروك التخرج.",
    descriptionEn: "A celebration arrangement featuring white and champagne blooms accented with gold elements, handcrafted chocolates, and an engraved congratulations keepsake.",
    image: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=1000&q=85"
    ],
    occasions: ["graduation", "congratulations"],
    isFeatured: false,
    isBestSeller: false,
    isAvailable: true,
    preparationTimeAr: "يمكن إضافة اسم الخريج على بطاقة الإهداء",
    preparationTimeEn: "Graduate name can be personalized on the card",
    sampleNoticeAr: "نموذج استرشادي — يتوفر شريط التخرج بألوان متعددة.",
    sampleNoticeEn: "Sample item — ribbon colors can be customized."
  },
  {
    id: "mor-08",
    slug: "petite-sweet-gratitude-box",
    nameAr: "صندوق الامتنان الرقيق | بيبي روز وشوكولاتة",
    nameEn: "Petite Sweet Gratitude Box",
    category: "gift-boxes",
    categoryAr: "بوكسات الهدايا",
    categoryEn: "Gift Boxes",
    price: 260,
    priceConfirmed: false,
    descriptionAr: "هدية لطيفة للتعبير عن الشكر والتقدير أو زيارة الأصدقاء، تحتوي على 12 حبة شوكولاتة فاخرة مع حبات ورد البيبي روز الأبيض في بوكس أسطواني أنيق.",
    descriptionEn: "A refined gesture of appreciation featuring 12 fine chocolates nestled alongside fresh white spray roses in a cylinder keepsake box.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=85"
    ],
    occasions: ["congratulations", "birthday", "vip"],
    piecesCount: 12,
    isFeatured: false,
    isBestSeller: false,
    isAvailable: true,
    preparationTimeAr: "جاهز خلال 60 دقيقة",
    preparationTimeEn: "Ready within 60 minutes",
    sampleNoticeAr: "نموذج استرشادي — السعر خاضع للتأكيد النهائي.",
    sampleNoticeEn: "Sample catalog item — final pricing verified on WhatsApp."
  }
];

