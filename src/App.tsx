import React from 'react';
import { GlobalHeader } from './components/common/GlobalHeader';
import { HeroSection } from './components/home/HeroSection';
import { ImpactMetricsStrip } from './components/home/ImpactMetricsStrip';
import { ProductsSection } from './components/products/ProductsSection';
import { WasteDonationSection } from './components/waste/WasteDonationSection';
import { EmpowermentSection } from './components/empowerment/EmpowermentSection';
import { SocialConnectSection } from './components/home/SocialConnectSection';
import { GlobalFooter } from './components/common/GlobalFooter';
import { MobileBottomNav } from './components/common/MobileBottomNav';

import { ProductsPage } from './pages/ProductsPage';
import { DonatePage } from './pages/DonatePage';
import { EmpowermentPage } from './pages/EmpowermentPage';

import { CheckoutModal } from './components/products/CheckoutModal';
import { WasteDonationModal } from './components/waste/WasteDonationModal';
import { TraineeRegistrationModal } from './components/empowerment/TraineeRegistrationModal';
import { FundingModal } from './components/modals/FundingModal';
import { ProfileDrawerModal } from './components/modals/ProfileDrawerModal';
import { AdminPanelModal } from './components/modals/AdminPanelModal';
import { useVasundharaStore } from './store/useVasundharaStore';

export default function App() {
  const { activePage } = useVasundharaStore();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-stone-900 font-sans selection:bg-[#1B4332] selection:text-white w-full max-w-full overflow-x-hidden pb-16 md:pb-0">
      {/* 1. Global Fixed/Sticky Header with Uploaded Logo */}
      <GlobalHeader />

      {/* Main Content Router */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {activePage === 'home' && (
          <>
            {/* 2. Hero Section (Top banner with softened green overlay & vivid background) */}
            <HeroSection />

            {/* Impact Live Metrics Bar */}
            <ImpactMetricsStrip />

            {/* 3. Section 1: Products (E-Commerce Catalog) */}
            <ProductsSection />

            {/* 4. Section 2: Be a Part (Waste Donation & Reward Points) */}
            <WasteDonationSection />

            {/* 5. Section 3: Empowering (Skilling & Hiring) */}
            <EmpowermentSection />

            {/* 6. Section 4: Connect & Official Channels (Instagram & Gmail) */}
            <SocialConnectSection />
          </>
        )}

        {activePage === 'products' && <ProductsPage />}
        {activePage === 'donate' && <DonatePage />}
        {activePage === 'empowerment' && <EmpowermentPage />}
      </main>

      {/* 6. Global Enterprise Footer */}
      <GlobalFooter />

      {/* 7. Mobile Bottom Navigation (Persistent thumb zone on phones) */}
      <MobileBottomNav />

      {/* Modal Dialogs (State Controlled) */}
      <CheckoutModal />
      <WasteDonationModal />
      <TraineeRegistrationModal />
      <FundingModal />
      <ProfileDrawerModal />
      <AdminPanelModal />
    </div>
  );
}
