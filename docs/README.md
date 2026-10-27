# VASUNDHARA - Smart Green Enterprise Model

## Executive Overview
Vasundhara is an integrated circular-economy enterprise platform designed to bridge urban resource recovery with rural livelihood generation. By transforming segregated domestic and post-consumer waste streams into high-value upcycled goods, the platform creates an accountable, regenerative socioeconomic loop:

1. **Upstream Waste Collection & Incentivization**: Citizens schedule and log targeted recyclable household waste (pre-loved sarees, clean post-consumer rigid/flexible plastics, discarded footwear/slippers). In return, they accumulate verified Green Reward Points.
2. **Rural Decentralized Manufacturing & Skilling**: Rural artisans, self-help groups (SHGs), and youth receive specialized upskilling in artisanal fabric weaving, polymer compression, and footwear remanufacturing, guaranteeing dignified livelihoods and fair living wages.
3. **Downstream Sustainable E-Commerce**: The finished upcycled articles (handwoven tote bags, recycled planter sets, acoustic panels, braided rugs) are retailed to conscious consumers. Accumulated Green Reward Points serve as direct checkout deductions, closing the circular loop.

---

## Key System Pillars
- **Local Waste Mobilization**: Diverts high-volume municipal dry waste away from saturated landfills into value-addition clusters.
- **Fair-Wage Rural Employment**: Establishes micro-production units in rural and semi-urban clusters, providing vocational training, safety equipment, and steady income.
- **Transparent Reward Ledger**: Tracks every kilogram and unit of waste from initial donor declaration to administrative validation and points redemption.
- **Enterprise Philanthropy**: Connects philanthropic micro-funders and grant-makers directly to local cluster initiatives through transparent funding channels.

---

## Local Setup & Development

### Prerequisites
- Node.js (version 18.0.0 or higher)
- npm (version 9.0.0 or higher) or compatible package manager

### Installation Steps
1. Clone the repository and navigate to the project root directory:
   ```bash
   cd vasundhara-green-enterprise
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

The application will be served locally at `http://localhost:3000`.

---

## Migration Blueprint: LocalStorage to Production Backend

While this prototype operates on a resilient, reactive client-side store backed by `zustand` with browser `localStorage` persistence, production enterprise deployment requires migration to a secure, distributed multi-tier architecture.

### Target Architecture Specification
- **API Runtime**: Node.js with Fastify or Express in TypeScript.
- **Relational Database**: PostgreSQL 16 with Row-Level Security (RLS) and connection pooling via PgBouncer.
- **ORM / Query Layer**: Drizzle ORM or Prisma for schema migrations and type safety.
- **Object Storage**: S3-compatible storage (e.g., Cloud Storage) with pre-signed upload URLs for waste audit photos and trainee identification documents.
- **Cache & Message Queue**: Redis / BullMQ for asynchronous logistics dispatch, pickup routing, and email/SMS triggers.

### Migration Roadmap

#### Phase 1: Entity Relationship and Schema Migration
1. Replicate the local TypeScript models (`UserProfile`, `ProductCatalog`, `ExchangeRate`, `WasteDonationRecord`, `TraineeApplication`, `OrderRecord`) into relational DDL migrations.
2. Introduce foreign key relationships:
   - `users.id` -> `waste_donations.user_id`
   - `users.id` -> `orders.user_id`
   - `orders.id` -> `order_items.product_id`
3. Enforce ledger-based accounting for reward points:
   - Instead of a mutable integer balance, maintain a ledger table `reward_points_ledger` with columns `(id, user_id, transaction_type, delta, balance_after, reference_type, reference_id, created_at)` to prevent balance tampering and guarantee financial-grade auditability.

#### Phase 2: RESTful API Endpoint Mapping
Replace client store actions with authenticated HTTPS REST/GraphQL mutations:

| LocalStore Action | Method | Production Route | Authorization Scope |
|---|---|---|---|
| `updateProfile(data)` | `PATCH` | `/api/v1/users/me` | Authenticated User |
| `submitDonation(data)` | `POST` | `/api/v1/donations` | Authenticated User |
| `approveDonation(id)` | `POST` | `/api/v1/admin/donations/:id/approve` | Role: Admin |
| `rejectDonation(id)` | `POST` | `/api/v1/admin/donations/:id/reject` | Role: Admin |
| `registerTrainee(data)`| `POST` | `/api/v1/trainees` | Public / Authenticated |
| `createOrder(orderData)`| `POST` | `/api/v1/orders` | Authenticated User |
| `fetchProducts()` | `GET` | `/api/v1/products` | Public |

#### Phase 3: Data Migration Scripting
For existing user records stored in browser storage, write a client-side sync hook:
1. Detect initial authenticated session via OAuth 2.0 / JWT.
2. Read legacy payload from `localStorage.getItem('vasundhara_storage')`.
3. Dispatch bulk migration payload to `/api/v1/sync/legacy-local-data`.
4. Validate server-side checksums, clear localStorage cache keys, and switch to React Query or SWR for remote state synchronization.

---

## License
Proprietary under Vasundhara Ecological Enterprises Initiative. Distributed under standard enterprise prototype evaluation terms.
