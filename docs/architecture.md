# Frontend Architecture & Technical Specification

## Architectural Paradigm
The Vasundhara web application is built on a modern Single-Page Application (SPA) architecture utilizing React 19, TypeScript, Tailwind CSS, and Zustand. The system emphasizes high visual hierarchy, deterministic unidirectional state management, declarative component separation, and zero external runtime bloat.

---

## Technology Stack Breakdown

| Layer | Technology | Purpose & Selection Justification |
|---|---|---|
| Core Runtime | React 19 + TypeScript | Component-driven UI composition with strict static typing and clean lifecycle hooks. |
| Build Tooling | Vite 6 | Sub-millisecond HMR, optimized Rollup bundling, and tree-shaking. |
| Global State & Local DB | Zustand + LocalStorage | Lightweight, unopinionated reactive store with automatic browser storage serialization. |
| Styling & Design System | Tailwind CSS v4 | Utility-first CSS compiling via modern Vite engine, enforcing consistent earthy palettes. |
| Typography | Google Font 'Inter' | High-legibility grotesque sans-serif ensuring professional enterprise grade clarity. |
| Iconography | Lucide React | Consistent vector iconography with geometric stroke widths; zero emoji usage. |
| Motion & Transitions | Motion (Framer Motion) | Hardware-accelerated modal presentation and layout transitions. |

---

## Component Tree Hierarchy

```text
[App Root] (src/App.tsx)
  ├── GlobalHeader (src/components/common/GlobalHeader.tsx)
  │     ├── BrandIdentity (Logo, Title, Philosophy badge)
  │     ├── UserProfileBar (Name, Approved Green Points balance, Profile Drawer trigger)
  │     ├── AdminModeToggle (Interactive administrative operations toggle)
  │     └── GiveFundingButton (Philanthropic support trigger)
  │
  ├── ProfileDrawerModal (src/components/modals/ProfileDrawerModal.tsx)
  │     ├── User Information Editor (Name, Phone, Email, Delivery Address)
  │     └── Points Ledger Summary (Approved points, pending verifications, total earned)
  │
  ├── FundingModal (src/components/modals/FundingModal.tsx)
  │     ├── Mission Statement & Financial Transparency Pledge
  │     ├── Founder / Executive Contact Coordinates
  │     └── Direct UPI / Paytm Dynamic QR Code Scanner & Account Transfer Details
  │
  ├── AdminPanelModal (src/components/modals/AdminPanelModal.tsx)
  │     ├── Waste Verification Table (Approve/Reject pending donations, adjust points)
  │     ├── Trainee Application Registry (Review vocational cohort candidates)
  │     └── Enterprise Metrics (Total diverted waste weight, total distributed incentives)
  │
  ├── HeroSection (src/components/home/HeroSection.tsx)
  │     ├── Enterprise Headline: "Local Waste. Local Products. Local Employment."
  │     ├── Mission Subtext (Regenerative circular supply chain)
  │     └── Three-Card Primary Navigation Router:
  │           ├── Card 1: Upcycled Products Catalog (Section 1)
  │           ├── Card 2: Waste Material Mobilization (Section 2)
  │           └── Card 3: Rural Artisan Skilling & Hiring (Section 3)
  │
  ├── ImpactMetricsStrip (src/components/home/ImpactMetricsStrip.tsx)
  │     └── Key Metrics (Waste Diverted, Artisans Trained, Points Distributed, Communities)
  │
  ├── ProductsSection (src/components/products/ProductsSection.tsx)
  │     ├── Section Header & Sustainability Assurance Criteria
  │     ├── Product Catalog Grid (Handcrafted bags, recycled planters, upcycled rugs, acoustic decor)
  │     │     └── ProductCard (src/components/products/ProductCard.tsx)
  │     │           ├── High-Res Authentic Image
  │     │           ├── Product Specs & Upcycled Composition
  │     │           ├── Price in INR
  │     │           ├── [Buy Now] Trigger
  │     │           └── [Customize Your Product] Action (Bridges to Waste Section)
  │     └── CheckoutModal (src/components/modals/CheckoutModal.tsx)
  │           ├── Item Summary & Artisan Origin Attribution
  │           ├── Points Discount Slider / Checkbox (1 Point = 1 INR reduction)
  │           ├── Price Computation Engine (Total - Applied Points = Final Payable)
  │           └── Order Completion & Dispatch Tracker
  │
  ├── WasteDonationSection (src/components/waste/WasteDonationSection.tsx)
  │     ├── Contextual Imagery (Clean dry-waste sorting cluster)
  │     ├── Reward Rate Matrix (Saree: 40 pts, Rigid Plastic: 15 pts/kg, Footwear: 20 pts)
  │     ├── [Take a Step] Trigger
  │     └── WasteDonationModal / Smart Form (src/components/waste/WasteDonationForm.tsx)
  │           ├── Prefilled User Profile Coordinates
  │           ├── Waste Category Selection (Saree, Plastic Polymer, Slippers/Footwear)
  │           ├── Quantity / Weight Counter with Live Expected Points Calculation
  │           ├── Pickup Logistics Address & Preferred Window
  │           └── Submission Dispatcher (Mutates state to pendingPoints with confirmation)
  │
  ├── EmpowermentSection (src/components/empowerment/EmpowermentSection.tsx)
  │     ├── High-Res Visual Asset (Rural craftswomen in artisanal workshop)
  │     ├── Enterprise Skilling Model & Curriculum Pillars
  │     ├── [Register as Trainee] Trigger
  │     └── TraineeRegistrationModal (src/components/empowerment/TraineeRegistrationModal.tsx)
  │           ├── Personal & Demographic Information
  │           ├── Educational Background & Mechanical/Craft Affinity
  │           ├── Preferred Cluster Skill Track (Textile Weaving, Polymer Fabrication, Footwear Remanufacturing)
  │           └── Queued Submission to Admin Application Review Pool
  │
  └── GlobalFooter (src/components/common/GlobalFooter.tsx)
        ├── Vasundhara Enterprise Information & Compliance
        ├── Circular Value Chain Flowchart
        └── Contact & Cluster Center Locations
```

---

## State Flow & Data Reactivity Architecture
The client application leverages a unified store instance created with Zustand's `persist` middleware.

```text
+--------------------------------------------------------------------------+
|                              Zustand Store                               |
|                                                                          |
|  - userProfile (name, address, phone, email, pendingPoints, approvedPoints)|
|  - exchangeRates (saree: 40, plastic: 15, slippers: 20)                  |
|  - products (catalog items with descriptions, prices, materials)         |
|  - donations (list of historical & pending waste pickups)                |
|  - trainees (list of submitted training registrations)                   |
|  - orders (list of completed product checkouts)                          |
+--------------------------------------------------------------------------+
                                     |
              +----------------------+----------------------+
              |                                             |
              v                                             v
  [User Action Dispatch]                      [Local Storage Synchronization]
  - Submit Waste Donation                     - Key: `vasundhara_green_store`
    -> pendingPoints += expectedPoints        - Automatically hydrates on load
  - Admin Approval                            - Cross-tab reactive persistence
    -> pendingPoints -= points
    -> approvedPoints += points
  - Checkout Redemption
    -> approvedPoints -= appliedPoints
```

---

## Design Principles
1. **Zero-Pill Discipline**: High-order interactive elements feature structured, architectural geometry with balanced corner radii (`rounded-md`, `rounded-lg`) rather than oversized pill buttons.
2. **Contextual Color Harmony**: Deep Forest Green (`#1B4332`, `#2D6A4F`) anchors the trust and natural heritage; Sand and Warm Ochre (`#DDA15E`, `#F4EBD9`) convey artisanal craft; Off-white (`#FBFBFA`) maintains clean reading contrast; Charcoal Slate (`#1A201C`) provides solid typography.
3. **No-Emoji Strictness**: Universal SVG icons from Lucide provide precise semantic cues. No colloquial emojis are employed anywhere.
