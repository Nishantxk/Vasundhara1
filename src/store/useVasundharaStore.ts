import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  UserProfile,
  Product,
  ExchangeRates,
  WasteDonationRecord,
  TraineeApplication,
  OrderRecord,
  ActivePage,
} from '../types';

interface VasundharaState {
  // Navigation & Page State
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;

  // Database Models
  userProfile: UserProfile;
  productCatalog: Product[];
  exchangeRates: ExchangeRates;
  donations: WasteDonationRecord[];
  trainees: TraineeApplication[];
  orders: OrderRecord[];

  // Active UI Dialog States
  isProfileOpen: boolean;
  isFundingOpen: boolean;
  isAdminOpen: boolean;
  isDonationFormOpen: boolean;
  isTraineeFormOpen: boolean;
  selectedProductForCheckout: Product | null;

  // Actions
  setProfileOpen: (open: boolean) => void;
  setFundingOpen: (open: boolean) => void;
  setAdminOpen: (open: boolean) => void;
  setDonationFormOpen: (open: boolean) => void;
  setTraineeFormOpen: (open: boolean) => void;
  setSelectedProductForCheckout: (product: Product | null) => void;

  updateUserProfile: (profile: Partial<UserProfile>) => void;
  submitWasteDonation: (
    payload: Omit<WasteDonationRecord, 'id' | 'status' | 'submittedAt'>
  ) => WasteDonationRecord;
  approveDonation: (id: string) => void;
  rejectDonation: (id: string, reason?: string) => void;
  submitTraineeApplication: (
    payload: Omit<TraineeApplication, 'id' | 'status' | 'submittedAt'>
  ) => TraineeApplication;
  updateTraineeStatus: (id: string, status: TraineeApplication['status']) => void;
  createOrder: (
    payload: Omit<OrderRecord, 'id' | 'status' | 'createdAt'>
  ) => OrderRecord;
  updateExchangeRates: (rates: Partial<ExchangeRates>) => void;
  resetToDefaults: () => void;
}

const INITIAL_PROFILE: UserProfile = {
  name: 'Ananya Sharma',
  address: 'Flat 402, Green Meadows, Senapati Bapat Marg, Pune, Maharashtra 411016',
  phone: '+91 98230 44129',
  email: 'ananya.sharma@earthmail.in',
  pendingPoints: 40,
  approvedPoints: 120,
};

const INITIAL_RATES: ExchangeRates = {
  flowers: 20,
  saree: 40,
  plastic: 15,
};

const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-006',
    name: 'Ready Shopping Bag',
    price: 7,
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_12.17.12_PM_d22423a2.jpeg',
    description: 'Everyday washable shopping thaili bag stitched from upcycled floral fabric scraps.',
    category: 'Bags & Totes',
    wasteDivertedKg: 0.35,
    materialSource: 'Reclaimed Floral Print Heritage Fabric',
    artisanCluster: 'Pusad Rural Women Collective',
    inStock: true,
  },
  {
    id: 'prod-007',
    name: 'Customize My Bag',
    price: 99,
    imageUrl: '/assets/aistudio/image_b5f974f7.png',
    description: 'Multi-compartment handcrafted tote bag customizable with your preferred fabric pattern and custom layout.',
    category: 'Bags & Totes',
    wasteDivertedKg: 0.7,
    materialSource: 'Handloom Cotton, Patchwork & Zari Borders',
    artisanCluster: 'Baramati Weaver Collective',
    inStock: true,
  },
  {
    id: 'prod-002',
    name: 'Artisan Embroidered Handbag',
    price: 149,
    imageUrl: '/assets/aistudio/IMG-20261026-WA0055_bb0333a6.jpg',
    description: 'Handcrafted sling handbag with traditional mirror-work and mobile sleeve.',
    category: 'Bags & Totes',
    wasteDivertedKg: 0.65,
    materialSource: 'Handloom Cotton & Mirror-Work Scraps',
    artisanCluster: 'Baramati Weaver Collective',
    inStock: true,
  },
  {
    id: 'prod-003',
    name: 'Multi-Compartment Canvas Thaili',
    price: 99,
    imageUrl: '/assets/aistudio/IMG-20261026-WA0050_5fbfc015.jpg',
    description: 'Sturdy divided shopping thaili with internal organizer sections for vegetables.',
    category: 'Kitchen & Storage',
    wasteDivertedKg: 0.9,
    materialSource: 'Heavy Cotton Canvas Scraps',
    artisanCluster: 'Satara Rural Women Cooperative',
    inStock: true,
  },
  {
    id: 'prod-008',
    name: 'Fridge Storage Bags',
    price: 89,
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_9.49.24_PM_acd51d1b.jpeg',
    description: 'Breathable unbleached cotton drawstring pouches to keep vegetables fresh in the refrigerator, naturally extending shelf life without plastic wrap.',
    category: 'Kitchen & Storage',
    wasteDivertedKg: 0.8,
    materialSource: 'Upcycled Cotton Canvas & Breathable Muslin Scraps',
    artisanCluster: 'Satara Rural Women Cooperative',
    inStock: true,
  },
  {
    id: 'prod-004',
    name: 'Zari Embroidered Festive Potli Bag',
    price: 79,
    imageUrl: '/assets/aistudio/image_bcf20294.png',
    description: 'Drawstring festive potli with golden floral zari and pearl beaded handle.',
    category: 'Bags & Totes',
    wasteDivertedKg: 0.5,
    materialSource: 'Reclaimed Zari Festive Silk Scraps',
    artisanCluster: 'Solapur Traditional Handloom Guild',
    inStock: true,
  },
  {
    id: 'prod-005',
    name: 'Nirmalya Sacred Floral Dhoop',
    price: 49,
    imageUrl: '/assets/aistudio/image_35963c8c.png',
    description: 'Charcoal-free organic incense handcrafted from temple and festival flower garlands.',
    category: 'Home Decor',
    wasteDivertedKg: 1.2,
    materialSource: 'Puja Marigold & Rose Garlands',
    artisanCluster: 'Pusad Floral Processing Hub',
    inStock: true,
  },
  {
    id: 'prod-001',
    name: 'Circular Floral Clutch Purse',
    price: 89,
    imageUrl: '/assets/aistudio/IMG-20261026-WA0053_d5fe0b7d.jpg',
    description: 'Statement circular clutch purse with intricate floral motifs and shoulder strap.',
    category: 'Accessories',
    wasteDivertedKg: 0.4,
    materialSource: 'Upcycled Printed Heritage Fabric',
    artisanCluster: 'Kolhapur Eco-Fabrication Unit',
    inStock: true,
  },
];

const INITIAL_DONATIONS: WasteDonationRecord[] = [
  {
    id: 'DON-2026-081',
    donorName: 'Ananya Sharma',
    donorAddress: 'Flat 402, Green Meadows, Pune, Maharashtra',
    donorPhone: '+91 98230 44129',
    donorEmail: 'ananya.sharma@earthmail.in',
    wasteType: 'flowers',
    collectionMethod: 'Request Home Pickup',
    quantity: 5,
    calculatedPoints: 100,
    pickupDate: '2026-10-26',
    pickupSlot: 'Morning (09:00 - 12:00)',
    notes: 'Clean discarded puja garlands and marigolds from Diwali festival.',
    status: 'PENDING_APPROVAL',
    submittedAt: '2026-10-24T14:30:00Z',
  },
  {
    id: 'DON-2026-074',
    donorName: 'Ananya Sharma',
    donorAddress: 'Flat 402, Green Meadows, Pune, Maharashtra',
    donorPhone: '+91 98230 44129',
    donorEmail: 'ananya.sharma@earthmail.in',
    wasteType: 'saree',
    collectionMethod: 'Drop-off at Vasundhara Center',
    quantity: 3,
    calculatedPoints: 120,
    pickupDate: '2026-10-18',
    pickupSlot: 'Afternoon (14:00 - 17:00)',
    notes: 'Pre-loved cotton sarees folded neatly.',
    status: 'VERIFIED_APPROVED',
    submittedAt: '2026-10-17T09:15:00Z',
    verifiedAt: '2026-10-19T11:00:00Z',
    adminRemarks: 'Verified 3 cotton sarees. Clean condition.',
  },
];

const INITIAL_TRAINEES: TraineeApplication[] = [
  {
    id: 'TRN-2026-014',
    fullName: 'Savita Bai Kamble',
    age: 34,
    gender: 'Female',
    villageDistrict: 'Khandala Taluka, Satara District',
    phone: '+91 94210 55192',
    craftExperience: '5 years experience with local hand-spinning and basic tailoring on sewing machines.',
    preferredTrack: 'Artisanal Weaving & Textile Upcycling',
    status: 'QUEUED_FOR_REVIEW',
    submittedAt: '2026-10-21T11:20:00Z',
  },
  {
    id: 'TRN-2026-011',
    fullName: 'Ramesh Vitthal Patil',
    age: 26,
    gender: 'Male',
    villageDistrict: 'Walwa Taluka, Sangli District',
    phone: '+91 97654 31289',
    craftExperience: 'Basic mechanic workshop helper, familiar with motor maintenance and hydraulic jacks.',
    preferredTrack: 'Polymer Compression & Tile Moulding',
    status: 'ACCEPTED',
    submittedAt: '2026-10-15T08:45:00Z',
  },
];

export const useVasundharaStore = create<VasundharaState>()(
  persist(
    (set, get) => ({
      activePage: 'home',
      setActivePage: (page) => set({ activePage: page }),

      userProfile: INITIAL_PROFILE,
      productCatalog: INITIAL_PRODUCTS,
      exchangeRates: INITIAL_RATES,
      donations: INITIAL_DONATIONS,
      trainees: INITIAL_TRAINEES,
      orders: [],

      isProfileOpen: false,
      isFundingOpen: false,
      isAdminOpen: false,
      isDonationFormOpen: false,
      isTraineeFormOpen: false,
      selectedProductForCheckout: null,

      setProfileOpen: (open) => set({ isProfileOpen: open }),
      setFundingOpen: (open) => set({ isFundingOpen: open }),
      setAdminOpen: (open) => set({ isAdminOpen: open }),
      setDonationFormOpen: (open) => set({ isDonationFormOpen: open }),
      setTraineeFormOpen: (open) => set({ isTraineeFormOpen: open }),
      setSelectedProductForCheckout: (product) => set({ selectedProductForCheckout: product }),

      updateUserProfile: (profileUpdate) =>
        set((state) => ({
          userProfile: { ...state.userProfile, ...profileUpdate },
        })),

      submitWasteDonation: (payload) => {
        const id = `DON-${Date.now().toString().slice(-6)}`;
        const newRecord: WasteDonationRecord = {
          ...payload,
          id,
          status: 'PENDING_APPROVAL',
          submittedAt: new Date().toISOString(),
        };

        set((state) => ({
          donations: [newRecord, ...state.donations],
          userProfile: {
            ...state.userProfile,
            name: payload.donorName || state.userProfile.name,
            address: payload.donorAddress || state.userProfile.address,
            phone: payload.donorPhone || state.userProfile.phone,
            email: payload.donorEmail || state.userProfile.email,
            pendingPoints: state.userProfile.pendingPoints + payload.calculatedPoints,
          },
        }));

        return newRecord;
      },

      approveDonation: (id) => {
        set((state) => {
          const target = state.donations.find((d) => d.id === id);
          if (!target || target.status !== 'PENDING_APPROVAL') {
            return state;
          }

          const updatedDonations = state.donations.map((d) =>
            d.id === id
              ? {
                  ...d,
                  status: 'VERIFIED_APPROVED' as const,
                  verifiedAt: new Date().toISOString(),
                  adminRemarks: 'Verified and approved at local aggregation center.',
                }
              : d
          );

          return {
            donations: updatedDonations,
            userProfile: {
              ...state.userProfile,
              pendingPoints: Math.max(0, state.userProfile.pendingPoints - target.calculatedPoints),
              approvedPoints: state.userProfile.approvedPoints + target.calculatedPoints,
            },
          };
        });
      },

      rejectDonation: (id, reason = 'Material did not meet segregation criteria.') => {
        set((state) => {
          const target = state.donations.find((d) => d.id === id);
          if (!target || target.status !== 'PENDING_APPROVAL') {
            return state;
          }

          const updatedDonations = state.donations.map((d) =>
            d.id === id
              ? {
                  ...d,
                  status: 'REJECTED' as const,
                  verifiedAt: new Date().toISOString(),
                  adminRemarks: reason,
                }
              : d
          );

          return {
            donations: updatedDonations,
            userProfile: {
              ...state.userProfile,
              pendingPoints: Math.max(0, state.userProfile.pendingPoints - target.calculatedPoints),
            },
          };
        });
      },

      submitTraineeApplication: (payload) => {
        const id = `TRN-${Date.now().toString().slice(-6)}`;
        const newRecord: TraineeApplication = {
          ...payload,
          id,
          status: 'QUEUED_FOR_REVIEW',
          submittedAt: new Date().toISOString(),
        };

        set((state) => ({
          trainees: [newRecord, ...state.trainees],
        }));

        return newRecord;
      },

      updateTraineeStatus: (id, status) => {
        set((state) => ({
          trainees: state.trainees.map((t) => (t.id === id ? { ...t, status } : t)),
        }));
      },

      createOrder: (payload) => {
        const id = `ORD-${Date.now().toString().slice(-6)}`;
        const newOrder: OrderRecord = {
          ...payload,
          id,
          status: 'CONFIRMED',
          createdAt: new Date().toISOString(),
        };

        set((state) => ({
          orders: [newOrder, ...state.orders],
          userProfile: {
            ...state.userProfile,
            approvedPoints: Math.max(0, state.userProfile.approvedPoints - payload.pointsApplied),
          },
        }));

        return newOrder;
      },

      updateExchangeRates: (ratesUpdate) => {
        set((state) => ({
          exchangeRates: { ...state.exchangeRates, ...ratesUpdate },
        }));
      },

      resetToDefaults: () => {
        set({
          activePage: 'home',
          userProfile: INITIAL_PROFILE,
          productCatalog: INITIAL_PRODUCTS,
          exchangeRates: INITIAL_RATES,
          donations: INITIAL_DONATIONS,
          trainees: INITIAL_TRAINEES,
          orders: [],
        });
      },
    }),
    {
      name: 'vasundhara_green_store_v10',
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Keep current updated catalog prices in sync across sessions
          state.productCatalog = INITIAL_PRODUCTS;
        }
      },
      partialize: (state) => ({
        userProfile: state.userProfile,
        productCatalog: state.productCatalog,
        exchangeRates: state.exchangeRates,
        donations: state.donations,
        trainees: state.trainees,
        orders: state.orders,
      }),
    }
  )
);
