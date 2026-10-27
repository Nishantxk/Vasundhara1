# Administrative Workflow & Operations Manual

## Executive Overview
The Vasundhara Administrative Interface serves as the central control plane for rural enterprise cluster managers, logistics coordinators, and administrative officers. It enforces material accountability, authenticates waste consignments, converts pending credits into liquid approved reward points, and manages candidate onboarding for vocational cohorts.

---

## Accessing the Administration Console
The prototype includes an administrative management panel accessible via the **[ Admin Console ]** button in the global navigation bar. Clicking this opens a full-featured management dashboard with real-time operational feeds.

---

## 1. Waste Intake Verification & Points Approval Logic

### 1.1 The Ingestion Queue
When donors submit waste collection requests through the "Be a Part" interface, a record is created with the status `PENDING_APPROVAL`, and the computed reward points are held in the user's `pendingPoints` balance.

### 1.2 Physical Verification Protocol
Before points are cleared, field collection agents or cluster reception managers verify:
1. **Material Segregation**: Ensuring textile lots are free of hazardous contaminants, polymers are washed and dried, and footwear is paired or sorted.
2. **Weight / Unit Reconciliation**: Cross-checking the declared quantity (e.g., 5 kg plastic) against electronic scale readings at the cluster hub.

### 1.3 State Mutation Rules

#### Action: Approve Donation
When an admin clicks **[ Approve ]** on a pending donation ticket:
1. The donation record status mutates to `VERIFIED_APPROVED`.
2. A verification timestamp is stamped.
3. The user's ledger recalculates:
   - `userProfile.pendingPoints = userProfile.pendingPoints - ticket.calculatedPoints`
   - `userProfile.approvedPoints = userProfile.approvedPoints + ticket.calculatedPoints`
4. The approved balance becomes immediately available in the user's e-commerce checkout interface.

```typescript
// Pseudocode of State Transition in Admin Controller
function approveDonation(donationId: string) {
  const donation = state.donations.find(d => d.id === donationId);
  if (!donation || donation.status !== 'PENDING_APPROVAL') return;

  donation.status = 'VERIFIED_APPROVED';
  donation.verifiedAt = new Date().toISOString();

  state.userProfile.pendingPoints = Math.max(0, state.userProfile.pendingPoints - donation.calculatedPoints);
  state.userProfile.approvedPoints += donation.calculatedPoints;
  
  persistToLocalStorage();
}
```

#### Action: Reject Donation
When an admin clicks **[ Reject ]** (e.g. fraudulent entry, unsegregated biological contamination, or failed collection):
1. The donation record status mutates to `REJECTED`.
2. The user's pending balance is decremented without credit to approved balance:
   - `userProfile.pendingPoints = Math.max(0, userProfile.pendingPoints - ticket.calculatedPoints)`
3. An administrative rationale (e.g., "Non-compliant soiled textiles") is recorded in the ticket history.

---

## 2. Trainee Application Management Logic

### 2.1 Candidate Intake Pool
Rural candidates apply via **Section 3: Empowering ("Register as Trainee")**. Applications populate the Admin Console under the **Trainee Candidates** tab.

### 2.2 Review & Induction Workflow
Each applicant profile captures:
- Full Legal Name and Age
- Village / Gram Panchayat District
- Phone Contact Coordinates
- Prior Craft Experience (e.g., handloom stitching, carpentry, basic mechanics)
- Preferred Vocational Track:
  - *Artisanal Weaving & Saree Upcycling*
  - *Polymer Compression & Tile Moulding*
  - *Footwear Remanufacturing & Assembly*

### 2.3 Administrative Actions for Candidates
1. **[ Invite for Interview / Skill Assessment ]**: Changes candidate status from `QUEUED_FOR_REVIEW` to `INVITED_FOR_INTERVIEW`, generating an automated SMS notification dispatch stub.
2. **[ Accept into Cohort ]**: Changes status to `ACCEPTED`, allocating the trainee to the upcoming 4-week paid stipend induction program at the designated district cluster center.
3. **[ Archive ]**: Closes duplicate or ineligible submissions.

---

## 3. Dynamic Waste Exchange Tariff Configuration
Administrators have access to adjust the live conversion tariffs to reflect seasonal market dynamics and cluster demand:
- Saree Tariff (default: 40 points / saree)
- Plastic Scrap Tariff (default: 15 points / kg)
- Discarded Slippers Tariff (default: 20 points / pair)

Modifications immediately reflect in the public "Reward Points Table" and dynamic smart form calculator.

---

## 4. Aggregate Impact Reporting Metrics
The console continuously tallies:
- Total Waste Diverted (sum of plastic mass + estimated kilograms from textiles and footwear)
- Total Green Points Disbursed (aggregate approved points)
- Rural Artisans In Training / Employed
- Circular Economy Gross Merchandise Value (GMV in INR)
