# Database Schema & State Management Specification

## Overview
Vasundhara simulates a distributed, relational enterprise store via an in-memory Zustand store backed by the browser's `localStorage` engine under key `vasundhara_green_store_v1`. This guarantees session persistence across page refreshes while providing clean, typed interfaces ready for direct migration to PostgreSQL or Cloud SQL.

---

## TypeScript Data Models

### 1. UserProfile Model
The primary consumer identity record holding contact information and the dual-state points ledger.

```typescript
export interface UserProfile {
  id: string;                      // Unique UUID or slug
  name: string;                    // Full legal name
  address: string;                 // Default street address and postal code
  phone: string;                   // Contact phone number with country code
  email: string;                   // Email address for notifications and invoices
  pendingPoints: number;           // Points from submitted waste donations awaiting admin verification
  approvedPoints: number;          // Verified points ready to be redeemed at product checkout
  createdAt: string;               // ISO 8601 timestamp
}
```

#### Field Specifications:
- `pendingPoints`: Increases immediately whenever a user submits a valid waste collection form through the "Be a Part" module. These points cannot be redeemed for purchases until validated.
- `approvedPoints`: Increases when an administrator reviews the waste batch and executes an approval. Decreases when applied as a discount during checkout (1 Point = 1 INR equivalent discount).

---

### 2. ProductCatalog Model
Represents upcycled commercial goods produced by rural enterprise clusters.

```typescript
export interface Product {
  id: string;                      // Unique product identifier (e.g., 'prod-001')
  name: string;                    // Commercial product title
  price: number;                   // Retail price in Indian National Rupees (INR)
  imageUrl: string;                // High-resolution realistic photography URL
  description: string;             // Detailed marketing copy and functionality
  category: 'Textiles' | 'Planters' | 'Accessories' | 'Home Decor';
  wasteDivertedKg: number;         // Estimated waste mass diverted per manufactured unit
  artisanCluster: string;          // Rural community origin (e.g., 'Baramati Women Weavers')
  inStock: boolean;                // Availability indicator
}
```

---

### 3. WasteExchangeRate Model
Defines the conversion coefficients between physical scrap categories and credit points.

```typescript
export interface WasteExchangeRate {
  saree: number;                   // 40 points per saree
  plastic: number;                 // 15 points per kilogram of rigid/flexible plastic
  slippers: number;                // 20 points per pair of discarded footwear
}
```

#### Rate Matrix Details:
- **Pre-Loved Traditional Sarees**: 40 Green Points / unit. Raw material for artisanal hand-braided rugs, quilt fillings, and high-tensile shopping bags.
- **Segregated Post-Consumer Plastic**: 15 Green Points / kg. Raw material for heat-compressed architectural tiles, planters, and structural sheets.
- **Worn Slippers & Footwear**: 20 Green Points / pair. Raw material for recycled EVA rubber outsoles, acoustic insulation panels, and playground sub-bases.

---

### 4. Supporting Operational Entities

#### A. WasteDonationRecord
```typescript
export interface WasteDonationRecord {
  id: string;                      // e.g. 'DON-2026-091'
  userId: string;
  donorName: string;
  donorPhone: string;
  donorEmail: string;
  pickupAddress: string;
  wasteType: 'saree' | 'plastic' | 'slippers';
  quantity: number;                // Count (sarees/slippers) or Weight in kg (plastics)
  calculatedPoints: number;        // Computed from WasteExchangeRate * quantity
  preferredDate: string;           // Scheduled pickup date
  pickupSlot: 'Morning (09:00 - 12:00)' | 'Afternoon (14:00 - 17:00)';
  notes?: string;
  status: 'PENDING_APPROVAL' | 'VERIFIED_APPROVED' | 'REJECTED';
  submittedAt: string;
  verifiedAt?: string;
  adminRemarks?: string;
}
```

#### B. TraineeApplication
```typescript
export interface TraineeApplication {
  id: string;                      // e.g. 'TRN-402'
  fullName: string;
  age: number;
  gender: 'Female' | 'Male' | 'Non-Binary' | 'Prefer not to say';
  villageDistrict: string;
  contactNumber: string;
  priorCraftExperience: string;    // Brief description of craft or manual skills
  preferredTrack: 'Artisanal Weaving' | 'Polymer Moulding' | 'Footwear Assembly';
  status: 'QUEUED_FOR_REVIEW' | 'INVITED_FOR_INTERVIEW' | 'ACCEPTED';
  appliedAt: string;
}
```

#### C. OrderRecord
```typescript
export interface OrderRecord {
  id: string;                      // e.g. 'ORD-8841'
  productId: string;
  productName: string;
  basePrice: number;
  pointsApplied: number;
  finalPayable: number;
  customerName: string;
  shippingAddress: string;
  customerPhone: string;
  paymentMethod: 'UPI' | 'Card' | 'Cash on Delivery';
  orderDate: string;
  status: 'CONFIRMED' | 'DISPATCHED' | 'DELIVERED';
}
```

---

## State Transition Diagrams

### 1. Points Ledger Flow
```text
[User Form Submission]
       │
       ▼
pendingPoints += computedPoints
(Donation Status: PENDING_APPROVAL)
       │
       ├─────────────────────────────────┐
       ▼ (Admin Approves)                ▼ (Admin Rejects)
pendingPoints -= computedPoints     pendingPoints -= computedPoints
approvedPoints += computedPoints    (Points discarded, status updated)
(Donation Status: VERIFIED_APPROVED)
       │
       ▼
[Product Checkout: Buy Now]
appliedPoints <= approvedPoints
finalPayable = basePrice - appliedPoints
approvedPoints -= appliedPoints
```

### 2. Persistence Contract
The store initializes with standard seeds if local storage is empty:
- Default user: "Ananya Sharma" with preloaded contact info and sample balances.
- Prepopulated catalog of 6 realistic upcycled items with verified Unsplash imagery.
- Default exchange rates: `{ saree: 40, plastic: 15, slippers: 20 }`.
- Historical donation log and trainee application queue for interactive verification.
