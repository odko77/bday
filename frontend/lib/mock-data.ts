// Mock data for the coupon application

export interface Coupon {
  id: string;
  title: string;
  description: string;
  code: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  minPurchase?: number;
  maxDiscount?: number;
  expirationDate: string;
  category: Category;
  business: Business;
  termsAndConditions: string[];
  isHotDeal: boolean;
  usageCount: number;
  totalCodes: number;
  createdAt: string;
}

export interface Business {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  email: string;
  phone: string;
  address: string;
  category: Category;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface UserCoupon {
  id: string;
  coupon: Coupon;
  status: "active" | "used" | "expired";
  savedAt: string;
  usedAt?: string;
}

// Categories
export const categories: Category[] = [
  { id: "food", name: "Food & Dining", icon: "utensils", color: "bg-orange-100 text-orange-600" },
  { id: "fashion", name: "Fashion", icon: "shirt", color: "bg-pink-100 text-pink-600" },
  { id: "travel", name: "Travel", icon: "plane", color: "bg-blue-100 text-blue-600" },
  { id: "services", name: "Services", icon: "wrench", color: "bg-green-100 text-green-600" },
  { id: "electronics", name: "Electronics", icon: "smartphone", color: "bg-purple-100 text-purple-600" },
  { id: "health", name: "Health & Beauty", icon: "heart", color: "bg-red-100 text-red-600" },
  { id: "entertainment", name: "Entertainment", icon: "film", color: "bg-yellow-100 text-yellow-600" },
  { id: "home", name: "Home & Garden", icon: "home", color: "bg-teal-100 text-teal-600" },
];

// Businesses
export const businesses: Business[] = [
  {
    id: "b1",
    name: "TasteBite Restaurant",
    logo: "/logos/tastebite.jpg",
    description: "Premium dining experience with cuisines from around the world. Our restaurant offers a unique blend of traditional and modern flavors that will delight your taste buds.",
    website: "https://tastebite.com",
    email: "contact@tastebite.com",
    phone: "+976 7777-1234",
    address: "Улаанбаатар, Сүхбаатар дүүрэг, 1-р хороо",
    category: categories[0],
  },
  {
    id: "b2",
    name: "StyleHub Fashion",
    logo: "/logos/stylehub.jpg",
    description: "Trendy fashion for the modern individual. From casual wear to formal attire, we have everything you need to express your unique style.",
    website: "https://stylehub.com",
    email: "hello@stylehub.com",
    phone: "+976 7777-2345",
    address: "Улаанбаатар, Баянзүрх дүүрэг, 3-р хороо",
    category: categories[1],
  },
  {
    id: "b3",
    name: "WanderWays Travel",
    logo: "/logos/wanderways.jpg",
    description: "Your gateway to unforgettable adventures. We specialize in curated travel experiences that create lasting memories.",
    website: "https://wanderways.com",
    email: "travel@wanderways.com",
    phone: "+976 7777-3456",
    address: "Улаанбаатар, Чингэлтэй дүүрэг, 2-р хороо",
    category: categories[2],
  },
  {
    id: "b4",
    name: "QuickFix Services",
    logo: "/logos/quickfix.jpg",
    description: "Professional services for all your needs. From home repairs to personal assistance, we deliver quality and reliability.",
    website: "https://quickfix.com",
    email: "support@quickfix.com",
    phone: "+976 7777-4567",
    address: "Улаанбаатар, Хан-Уул дүүрэг, 4-р хороо",
    category: categories[3],
  },
  {
    id: "b5",
    name: "TechZone Electronics",
    logo: "/logos/techzone.jpg",
    description: "The latest gadgets and electronics at unbeatable prices. From smartphones to smart homes, we have the tech you need.",
    website: "https://techzone.com",
    email: "sales@techzone.com",
    phone: "+976 7777-5678",
    address: "Улаанбаатар, Баянгол дүүрэг, 5-р хороо",
    category: categories[4],
  },
  {
    id: "b6",
    name: "GlowUp Beauty",
    logo: "/logos/glowup.jpg",
    description: "Premium beauty and skincare products that help you look and feel your best. Natural ingredients, amazing results.",
    website: "https://glowup.com",
    email: "care@glowup.com",
    phone: "+976 7777-6789",
    address: "Улаанбаатар, Сонгинохайрхан дүүрэг, 6-р хороо",
    category: categories[5],
  },
];

// Helper function to generate future dates
const getFutureDate = (days: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString();
};

const getPastDate = (days: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString();
};

// Coupons
export const coupons: Coupon[] = [
  {
    id: "c1",
    title: "50% Off Your First Order",
    description: "Get 50% off on your first order at TasteBite Restaurant. Valid for dine-in and takeaway orders.",
    code: "TASTE50",
    discountType: "percentage",
    discountValue: 50,
    minPurchase: 30,
    maxDiscount: 25,
    expirationDate: getFutureDate(7),
    category: categories[0],
    business: businesses[0],
    termsAndConditions: [
      "Valid for first-time customers only",
      "Minimum purchase of $30 required",
      "Maximum discount of $25",
      "Cannot be combined with other offers",
      "Valid for dine-in and takeaway orders",
    ],
    isHotDeal: true,
    usageCount: 1234,
    totalCodes: 2000,
    createdAt: getPastDate(5),
  },
  {
    id: "c2",
    title: "Summer Sale - 30% Off Everything",
    description: "Enjoy 30% off on all items during our summer sale. Refresh your wardrobe with StyleHub Fashion.",
    code: "SUMMER30",
    discountType: "percentage",
    discountValue: 30,
    expirationDate: getFutureDate(14),
    category: categories[1],
    business: businesses[1],
    termsAndConditions: [
      "Valid on all regular-priced items",
      "Cannot be combined with other promotions",
      "Online and in-store purchases",
      "While stocks last",
    ],
    isHotDeal: true,
    usageCount: 856,
    totalCodes: 1500,
    createdAt: getPastDate(3),
  },
  {
    id: "c3",
    title: "$100 Off Flight Bookings",
    description: "Save $100 on any flight booking over $500. Plan your next adventure with WanderWays Travel.",
    code: "FLY100",
    discountType: "fixed",
    discountValue: 100,
    minPurchase: 500,
    expirationDate: getFutureDate(30),
    category: categories[2],
    business: businesses[2],
    termsAndConditions: [
      "Minimum booking value of $500",
      "Valid for domestic and international flights",
      "Not valid for holiday periods",
      "One use per customer",
    ],
    isHotDeal: false,
    usageCount: 432,
    totalCodes: 1000,
    createdAt: getPastDate(10),
  },
  {
    id: "c4",
    title: "Free Service Call ($50 Value)",
    description: "Get a free service call for any home repair. Our experts will diagnose the problem at no cost.",
    code: "FREEFIX",
    discountType: "fixed",
    discountValue: 50,
    expirationDate: getFutureDate(21),
    category: categories[3],
    business: businesses[3],
    termsAndConditions: [
      "One free service call per household",
      "Valid for home repair services only",
      "Appointment required",
      "Parts and labor not included",
    ],
    isHotDeal: false,
    usageCount: 289,
    totalCodes: 500,
    createdAt: getPastDate(7),
  },
  {
    id: "c5",
    title: "20% Off All Electronics",
    description: "Save 20% on all electronics including the latest smartphones, laptops, and accessories.",
    code: "TECH20",
    discountType: "percentage",
    discountValue: 20,
    maxDiscount: 200,
    expirationDate: getFutureDate(10),
    category: categories[4],
    business: businesses[4],
    termsAndConditions: [
      "Valid on all electronics",
      "Maximum discount of $200",
      "Cannot be combined with bundle deals",
      "Online purchases only",
    ],
    isHotDeal: true,
    usageCount: 1567,
    totalCodes: 3000,
    createdAt: getPastDate(2),
  },
  {
    id: "c6",
    title: "Buy 2 Get 1 Free Skincare",
    description: "Purchase any 2 skincare products and get the 3rd one free. Treat yourself to glowing skin.",
    code: "GLOW321",
    discountType: "percentage",
    discountValue: 33,
    expirationDate: getFutureDate(5),
    category: categories[5],
    business: businesses[5],
    termsAndConditions: [
      "Free item must be of equal or lesser value",
      "Valid on skincare products only",
      "One use per customer",
      "While stocks last",
    ],
    isHotDeal: true,
    usageCount: 678,
    totalCodes: 800,
    createdAt: getPastDate(1),
  },
  {
    id: "c7",
    title: "15% Off Weekend Brunch",
    description: "Enjoy a delicious weekend brunch with 15% off. Perfect for family gatherings.",
    code: "BRUNCH15",
    discountType: "percentage",
    discountValue: 15,
    expirationDate: getFutureDate(45),
    category: categories[0],
    business: businesses[0],
    termsAndConditions: [
      "Valid on weekends only (Saturday & Sunday)",
      "Dine-in only",
      "Reservations recommended",
      "Cannot be combined with other offers",
    ],
    isHotDeal: false,
    usageCount: 345,
    totalCodes: 1000,
    createdAt: getPastDate(15),
  },
  {
    id: "c8",
    title: "Flash Sale - 40% Off Accessories",
    description: "Limited time flash sale! Get 40% off on all fashion accessories including bags, jewelry, and more.",
    code: "FLASH40",
    discountType: "percentage",
    discountValue: 40,
    expirationDate: getFutureDate(2),
    category: categories[1],
    business: businesses[1],
    termsAndConditions: [
      "Valid on accessories only",
      "Limited quantities available",
      "No rain checks",
      "Final sale items excluded",
    ],
    isHotDeal: true,
    usageCount: 923,
    totalCodes: 1000,
    createdAt: getPastDate(0),
  },
  {
    id: "c9",
    title: "Hotel Stay: 2 Nights for Price of 1",
    description: "Book 2 nights and pay for only 1. Perfect for a quick getaway.",
    code: "STAY2FOR1",
    discountType: "percentage",
    discountValue: 50,
    minPurchase: 150,
    expirationDate: getFutureDate(60),
    category: categories[2],
    business: businesses[2],
    termsAndConditions: [
      "Minimum 2-night stay required",
      "Subject to availability",
      "Blackout dates apply",
      "Advanced booking required",
    ],
    isHotDeal: false,
    usageCount: 198,
    totalCodes: 300,
    createdAt: getPastDate(20),
  },
  {
    id: "c10",
    title: "$25 Off Cleaning Service",
    description: "Get $25 off your first professional cleaning service. Sparkling clean home guaranteed.",
    code: "CLEAN25",
    discountType: "fixed",
    discountValue: 25,
    minPurchase: 75,
    expirationDate: getFutureDate(30),
    category: categories[3],
    business: businesses[3],
    termsAndConditions: [
      "First-time customers only",
      "Minimum service value of $75",
      "Residential cleaning only",
      "Must book in advance",
    ],
    isHotDeal: false,
    usageCount: 156,
    totalCodes: 400,
    createdAt: getPastDate(12),
  },
];

// User's saved coupons
export const userCoupons: UserCoupon[] = [
  {
    id: "uc1",
    coupon: coupons[0],
    status: "active",
    savedAt: getPastDate(2),
  },
  {
    id: "uc2",
    coupon: coupons[4],
    status: "active",
    savedAt: getPastDate(5),
  },
  {
    id: "uc3",
    coupon: { ...coupons[2], expirationDate: getPastDate(5) },
    status: "expired",
    savedAt: getPastDate(40),
  },
  {
    id: "uc4",
    coupon: coupons[6],
    status: "used",
    savedAt: getPastDate(10),
    usedAt: getPastDate(3),
  },
];

// Simulate loading delay
export const simulateLoading = (ms: number = 1000): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Filter functions
export const filterCoupons = (
  allCoupons: Coupon[],
  filters: {
    search?: string;
    category?: string;
    discountType?: "percentage" | "fixed";
    sortBy?: "newest" | "expiring" | "popular" | "discount";
  }
🙁 Coupon[] => {
  let filtered = [...allCoupons];

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      (c) =>
        c.title.toLowerCase().includes(searchLower) ||
        c.description.toLowerCase().includes(searchLower) ||
        c.business.name.toLowerCase().includes(searchLower)
    );
  }

  if (filters.category) {
    filtered = filtered.filter((c) => c.category.id === filters.category);
  }

  if (filters.discountType) {
    filtered = filtered.filter((c) => c.discountType === filters.discountType);
  }

  // Sort
  switch (filters.sortBy) {
    case "newest":
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      break;
    case "expiring":
      filtered.sort((a, b) => new Date(a.expirationDate).getTime() - new Date(b.expirationDate).getTime());
      break;
    case "popular":
      filtered.sort((a, b) => b.usageCount - a.usageCount);
      break;
    case "discount":
      filtered.sort((a, b) => b.discountValue - a.discountValue);
      break;
    default:
      break;
  }

  return filtered;
};

// Get coupons by business
export const getCouponsByBusiness = (businessId: string): Coupon[] => {
  return coupons.filter((c) => c.business.id === businessId);
};

// Get business by ID
export const getBusinessById = (businessId: string): Business | undefined => {
  return businesses.find((b) => b.id === businessId);
};

// Get coupon by ID
export const getCouponById = (couponId: string): Coupon | undefined => {
  return coupons.find((c) => c.id === couponId);
};
