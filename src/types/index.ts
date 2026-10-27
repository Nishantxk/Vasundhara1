/**
 * Vasundhara Enterprise Data Types & Schemas
 * Strictly zero emojis throughout types and UI.
 */

export interface UserProfile {
  name: string;
  address: string;
  phone: string;
  email: string;
  pendingPoints: number;
  approvedPoints: number;
}

export type ActivePage = 'home' | 'products' | 'donate' | 'empowerment';

export type ProductCategory =
  | 'All'
  | 'Bags & Totes'
  | 'Kitchen & Storage'
  | 'Accessories'
  | 'Textiles'
  | 'Planters'
  | 'Home Decor';

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category: 'Bags & Totes' | 'Kitchen & Storage' | 'Accessories' | 'Textiles' | 'Planters' | 'Home Decor';
  wasteDivertedKg: number;
  materialSource: string;
  artisanCluster: string;
  inStock: boolean;
}

export interface ExchangeRates {
  flowers: number;  // Points per kg (default 20)
  saree: number;    // Points per saree (default 40)
  plastic: number;  // Points per kg (default 15)
  slippers?: number; // Kept optional for backwards compatibility
}

export type WasteType = 'flowers' | 'saree' | 'plastic';

export interface WasteDonationRecord {
  id: string;
  donorName: string;
  donorAddress: string;
  donorPhone: string;
  donorEmail: string;
  wasteType: WasteType;
  collectionMethod: 'Drop-off at Vasundhara Center' | 'Request Home Pickup';
  quantity: number;
  calculatedPoints: number;
  pickupDate: string;
  pickupSlot: string;
  notes?: string;
  status: 'PENDING_APPROVAL' | 'VERIFIED_APPROVED' | 'REJECTED';
  submittedAt: string;
  verifiedAt?: string;
  adminRemarks?: string;
}

export interface TraineeApplication {
  id: string;
  fullName: string;
  age: number;
  gender: string;
  villageDistrict: string;
  phone: string;
  craftExperience: string;
  preferredTrack: string;
  status: 'QUEUED_FOR_REVIEW' | 'INVITED_FOR_INTERVIEW' | 'ACCEPTED';
  submittedAt: string;
}

export interface OrderRecord {
  id: string;
  productId: string;
  productName: string;
  basePrice: number;
  pointsApplied: number;
  finalPayable: number;
  customerName: string;
  shippingAddress: string;
  customerPhone: string;
  paymentMethod: string;
  createdAt: string;
  status: 'CONFIRMED' | 'PROCESSING' | 'SHIPPED';
}
