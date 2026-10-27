import React from 'react';
import { ShoppingBag, Recycle, Users, ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { scrollToSection } from '../../utils/formatters';
import { useVasundharaStore } from '../../store/useVasundharaStore';

export const HeroSection: React.FC = () => {
  const { setActivePage, productCatalog } = useVasundharaStore();

  return (
    <section className="relative bg-[#153426] text-white overflow-hidden w-full">
      {/* Background Hero Image with softened green overlay so scenery is vividly visible */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2200&q=85"
          alt="Regenerative sustainable ecology landscape"
          className="w-full h-full object-cover object-center opacity-85 scale-100 transition-all duration-700"
        />
        {/* Softened green gradient scrim: less green opacity so background is clearly visible while text contrast is preserved */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#153426]/90 via-[#153426]/45 to-[#1B4332]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24">
        {/* Logo Directly Visible on Screen & Main Title */}
        <div className="max-w-4xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-white/95 p-2.5 sm:p-3 shadow-xl flex items-center justify-center shrink-0 border border-[#74C69D]/40 ring-2 ring-white/20">
              <img
                src="/assets/aistudio/IMG-20261022-WA0015-removebg-preview_cf3e70de.png"
                alt="वसुंधरा - VASUNDHARA Logo"
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-[#EBF8EE]/15 border border-[#74C69D]/40 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#D8F3DC] uppercase mb-2.5 backdrop-blur-xs">
                <span>वसुंधरा &bull; Smart Green Enterprise</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Local Waste. Sacred Crafts. Rural Livelihoods.
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base text-stone-200 font-normal leading-relaxed mb-6 max-w-2xl">
            Transforming temple flower garlands, pre-loved sarees, and domestic plastics into beautiful upcycled goods crafted by rural women artisans.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-14">
            <button
              onClick={() => scrollToSection('products')}
              className="bg-[#DDA15E] hover:bg-[#BC6C25] active:scale-[0.98] text-[#1A201C] hover:text-white px-5 sm:px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-sm cursor-pointer min-h-[44px]"
            >
              Explore Products
            </button>
            <button
              onClick={() => useVasundharaStore.getState().setDonationFormOpen(true)}
              className="bg-[#EBF8EE]/15 hover:bg-[#EBF8EE]/25 text-white border border-[#74C69D]/40 active:scale-[0.98] px-5 sm:px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer min-h-[44px]"
            >
              Schedule Scrap Pickup
            </button>
          </div>
        </div>

        {/* Three Distinct Prominent Navigation Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {/* Card 1: Upcycled Products */}
          <div className="bg-[#112318]/90 backdrop-blur-md border border-stone-800/80 hover:border-[#74C69D]/60 rounded-xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#EBF8EE]/15 text-[#74C69D] border border-[#74C69D]/30 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
                </div>
                <span className="text-[11px] font-mono font-medium text-[#D8F3DC] bg-[#EBF8EE]/10 border border-[#74C69D]/30 px-2 py-0.5 rounded">
                  {productCatalog.length} Products
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-[#D8F3DC] transition-colors">
                Upcycled Goods
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                Handcrafted bags, storage pouches, and planters made from domestic scrap.
              </p>
            </div>

            <button
              onClick={() => scrollToSection('products')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#74C69D] hover:text-[#D8F3DC] transition-colors cursor-pointer py-1"
            >
              <span>View Catalog</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Be a Part (Waste Donation) */}
          <div className="bg-[#112318]/90 backdrop-blur-md border border-stone-800/80 hover:border-[#74C69D]/60 rounded-xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#EBF8EE]/15 text-[#74C69D] border border-[#74C69D]/30 flex items-center justify-center">
                  <Recycle className="w-5 h-5 stroke-[1.75]" />
                </div>
                <span className="text-[11px] font-mono font-medium text-[#D8F3DC] bg-[#EBF8EE]/10 border border-[#74C69D]/30 px-2 py-0.5 rounded">
                  Live Tariff
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-[#D8F3DC] transition-colors">
                Material Mobilization
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                Schedule doorstep scrap pickups and earn verified Green Reward Points.
              </p>
            </div>

            <button
              onClick={() => scrollToSection('be-a-part')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#74C69D] hover:text-[#D8F3DC] transition-colors cursor-pointer py-1"
            >
              <span>Schedule Pickup</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Empowering (Skilling & Hiring) */}
          <div className="bg-[#112318]/90 backdrop-blur-md border border-stone-800/80 hover:border-[#74C69D]/60 rounded-xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#EBF8EE]/15 text-[#74C69D] border border-[#74C69D]/30 flex items-center justify-center">
                  <Users className="w-5 h-5 stroke-[1.75]" />
                </div>
                <span className="text-[11px] font-mono font-medium text-[#D8F3DC] bg-[#EBF8EE]/10 border border-[#74C69D]/30 px-2 py-0.5 rounded">
                  100% Free
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-[#D8F3DC] transition-colors">
                Artisan Empowerment
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                100% Free training. Learn skills, join the network, and earn commissions.
              </p>
            </div>

            <button
              onClick={() => scrollToSection('empowerment')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#74C69D] hover:text-[#D8F3DC] transition-colors cursor-pointer py-1"
            >
              <span>Learn More</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
