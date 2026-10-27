# Developer Contribution & Engineering Standards Guide

## 1. Project Philosophy & Architectural Conventions
The Vasundhara codebase adheres to strict engineering discipline:
- **Zero Emojis**: Neither in UI labels, notification toasts, code comments, nor markdown documentation. Use Lucide React vector icons exclusively.
- **Tone & Typography**: Strict usage of the Google Font 'Inter' (`font-sans`). Typography must follow clear optical hierarchy: section headings (`text-2xl` to `text-4xl`, `font-bold`, tracking tight), card titles (`text-lg` or `text-xl`, `font-semibold`), and descriptive text (`text-sm` or `text-base`, `text-stone-600` or `text-slate-600`).
- **Color Discipline**: Earthy, refined palette reflecting environmental responsibility without visual kitsch:
  - Primary / Forest Green: `#1B4332`, `#2D6A4F`, Tailwind classes `bg-emerald-900`, `bg-emerald-800`, `text-emerald-900`, `border-emerald-700`
  - Accent / Warm Earth: Sand and Ochre tones, Tailwind `stone-100`, `amber-700`, `yellow-800`
  - Surface Background: Crisp off-white `#FBFBFA` / `bg-stone-50`
  - Neutral Slate / Charcoal: `text-stone-900`, `text-stone-700`
- **Zero-Pill Discipline**: Use structured geometrical buttons (`rounded-lg`, `rounded-md`). Avoid rounded-full pill buttons for primary actions.

---

## 2. Directory Structure

```text
/
├── docs/                     # Technical documentation suite
│   ├── README.md             # Overview and production backend migration
│   ├── architecture.md       # Frontend component tree and stack breakdown
│   ├── database_schema.md    # Local database models and state specifications
│   ├── user_workflow.md      # User manual for waste donation and shopping
│   ├── admin_workflow.md     # Admin panel verification and trainee review logic
│   └── developer_guide.md    # Coding standards and contribution rules
├── src/
│   ├── components/
│   │   ├── common/           # GlobalHeader, GlobalFooter, ModalWrapper, Badge
│   │   ├── home/             # HeroSection, ImpactMetricsStrip, VisionOverview
│   │   ├── products/         # ProductsSection, ProductCard, CheckoutModal
│   │   ├── waste/            # WasteDonationSection, WasteDonationForm, RateTable
│   │   ├── empowerment/      # EmpowermentSection, TraineeRegistrationModal
│   │   └── modals/           # FundingModal, ProfileDrawerModal, AdminPanelModal
│   ├── store/
│   │   └── useVasundharaStore.ts  # Zustand store with LocalStorage persistence
│   ├── types/
│   │   └── index.ts          # Central TypeScript interfaces and data contracts
│   ├── utils/
│   │   └── formatters.ts     # Currency (INR), date, and measurement formatters
│   ├── App.tsx               # Root application view composer
│   ├── main.tsx              # React DOM entry point
│   └── index.css             # Tailwind v4 configuration and global rules
├── index.html                # HTML document head, meta tags, and font imports
└── package.json              # Dependencies and scripts
```

---

## 3. State Management Conventions (Zustand + LocalStorage)

All shared application state lives in `src/store/useVasundharaStore.ts`. When creating new state properties or actions:
1. Declare the type signature in `src/types/index.ts`.
2. Implement pure, immutable state mutations inside the store definition.
3. Verify that new state values serialize cleanly into JSON (avoid circular references or non-serializable objects like DOM references or Map/Set).
4. Example action pattern:

```typescript
// Pattern for adding an action to useVasundharaStore
addDonation: (donationPayload) => {
  const newDonation: WasteDonationRecord = {
    ...donationPayload,
    id: `DON-${Date.now().toString().slice(-6)}`,
    status: 'PENDING_APPROVAL',
    submittedAt: new Date().toISOString(),
  };

  set((state) => ({
    donations: [newDonation, ...state.donations],
    userProfile: {
      ...state.userProfile,
      name: donationPayload.donorName || state.userProfile.name,
      address: donationPayload.pickupAddress || state.userProfile.address,
      phone: donationPayload.donorPhone || state.userProfile.phone,
      email: donationPayload.donorEmail || state.userProfile.email,
      pendingPoints: state.userProfile.pendingPoints + newDonation.calculatedPoints,
    },
  }));
},
```

---

## 4. Section Routing & Smooth Navigation
The application uses semantic section IDs for instant, smooth anchor scrolling:
- `#products` -> Section 1: Eco-Products E-Commerce Catalog
- `#be-a-part` -> Section 2: Waste Donation & Points Incentive Program
- `#empowerment` -> Section 3: Rural Artisan Skilling & Hiring

When adding deep links or internal triggers, use the unified helper `scrollToSection(id: string)`:
```typescript
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
```

---

## 5. Adding New Upcycled Products
To expand the product catalog:
1. Edit the initial state array in `src/store/useVasundharaStore.ts`.
2. Provide a verified, high-resolution Unsplash photo depicting genuine artisanal craftsmanship or recycled goods.
3. Include realistic ecological impact specs:
   - Price in INR (`price`)
   - Reclaimed materials (`wasteDivertedKg` or scrap equivalents)
   - Artisan cluster affiliation (`artisanCluster`)

---

## 6. Code Style & Quality Checklist
Before committing code:
- Confirm `compile_applet` succeeds without syntax or typing errors.
- Confirm `npm run lint` passes.
- Verify that every visual element renders smoothly on both desktop and mobile viewports.
- Confirm zero emoji symbols exist across all components, test files, and copy strings.
