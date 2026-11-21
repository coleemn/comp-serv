export type ProductCategory = 
  | 'all'
  | 'refurbished-laptops'
  | 'new-laptops'
  | 'gaming-laptops'
  | 'business-ultrabooks'
  | 'components-upgrades'
  | 'accessories';

export type ProductCondition = 'brand-new' | 'refurbished-grade-a' | 'refurbished-grade-a-plus';

export interface LaptopSpecs {
  processor: string;
  ram: string;
  storage: string;
  display: string;
  graphics: string;
  batteryHealth?: string;
  os: string;
  weight?: string;
  ports?: string[];
}

export interface Product {
  id: string;
  title: string;
  brand: string;
  category: ProductCategory;
  condition: ProductCondition;
  conditionLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount?: number;
  featured?: boolean;
  isHotDeal?: boolean;
  warranty: string;
  image: string;
  galleryImages: string[];
  description: string;
  specs: LaptopSpecs;
  keyFeatures: string[];
  refurbInspectionPoints?: string[];
}

export interface RepairService {
  id: string;
  title: string;
  category: 'hardware' | 'software' | 'networking' | 'maintenance';
  iconName: string;
  shortDesc: string;
  detailedDesc: string;
  turnaroundTime: string;
  startingPrice: string;
  warranty: string;
  commonSymptoms: string[];
  includedSteps: string[];
}

export interface ShopInfo {
  name: string;
  legalName: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappNumber: string; // for wa.me link
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    state: string;
    zip: string;
    landmarks: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}
