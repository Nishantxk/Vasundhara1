import React from 'react';
import { Recycle, ArrowRight, Sparkles, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
import { useVasundharaStore } from '../../store/useVasundharaStore';

export const WasteDonationSection: React.FC = () => {
  const {
    exchangeRates,
    setDonationFormOpen,
    donations,
    setAdminOpen,
  } = useVasundharaStore();

  return (
    <section id="be-a-part" className="py-12 sm:py-20 bg-[#FAF8F5] border-t border-stone-200 scroll-mt-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Mission */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-1.5">
            Material Mobilization &bull; Doorstep Pickup
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Be a Part: Turn Household Scrap into Green Points
          </h2>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm leading-relaxed">
            Donate puja flower garlands, pre-loved sarees, and domestic plastics. Earn verified Green Reward Points to redeem on handcrafted eco-products.
          </p>
        </div>

        {/* Clean 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-8 sm:mb-10">
          {/* Left: Wastage Flowers Image */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm min-h-[280px] sm:min-h-[360px] flex flex-col justify-end group">
            <img
              src="/assets/aistudio/image_0a05ebb4.png"
              alt="Puja and festival flower garland waste collection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="relative p-5 sm:p-7 text-white">
              <span className="text-[10px] font-semibold tracking-wider uppercase text-[#D8F3DC] bg-[#EBF8EE]/20 border border-[#74C69D]/40 px-2.5 py-0.5 rounded-full inline-block mb-1.5 backdrop-blur-xs">
                Sacred Upcycling &bull; Nirmalya
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-1.5">
                Saving Sacred Flowers from Water Bodies
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-lg">
                Discarded puja garlands and festive marigolds are collected and upcycled into organic dhoop, holy incense, and natural dyes by rural women.
              </p>
            </div>
          </div>

          {/* Right: Clean Tariff List & Action Button */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 p-5 sm:p-7 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-stone-100">
                <h3 className="text-sm sm:text-base font-bold text-stone-900">
                  Reward Points Tariff
                </h3>
                <span className="text-[11px] font-mono text-[#153426] bg-[#D8F3DC] border border-[#74C69D]/50 px-2.5 py-0.5 rounded-full font-semibold">
                  1 pt = ₹1
                </span>
              </div>

              {/* 3 Stream Tariff */}
              <div className="space-y-2.5 mb-6">
                {/* 1. Flowers & Garlands */}
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-emerald-200/80 hover:border-[#74C69D] transition-colors">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Puja & Festival Garlands</h4>
                    <p className="text-[11px] text-stone-500 truncate">Discarded marigolds & temple flower offerings</p>
                  </div>
                  <div className="text-right shrink-0 bg-[#EBF8EE] border border-[#B7E4C7] px-2.5 py-1 rounded-lg">
                    <span className="text-base sm:text-lg font-extrabold text-[#1B4332] block leading-tight">
                      {exchangeRates.flowers} pts
                    </span>
                    <span className="text-[10px] text-[#2D6A4F] block font-medium">per kg</span>
                  </div>
                </div>

                {/* 2. Sarees */}
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-stone-200 hover:border-[#74C69D] transition-colors">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Pre-Loved Sarees & Clothes</h4>
                    <p className="text-[11px] text-stone-500 truncate">Clean cotton or silk textiles for upcycled thailis</p>
                  </div>
                  <div className="text-right shrink-0 bg-[#EBF8EE] border border-[#B7E4C7] px-2.5 py-1 rounded-lg">
                    <span className="text-base sm:text-lg font-extrabold text-[#1B4332] block leading-tight">
                      {exchangeRates.saree} pts
                    </span>
                    <span className="text-[10px] text-[#2D6A4F] block font-medium">per unit</span>
                  </div>
                </div>

                {/* 3. Plastics */}
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-stone-200 hover:border-[#74C69D] transition-colors">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Clean Household Plastics</h4>
                    <p className="text-[11px] text-stone-500 truncate">Segregated containers, bottles & wrappers</p>
                  </div>
                  <div className="text-right shrink-0 bg-[#EBF8EE] border border-[#B7E4C7] px-2.5 py-1 rounded-lg">
                    <span className="text-base sm:text-lg font-extrabold text-[#1B4332] block leading-tight">
                      {exchangeRates.plastic} pts
                    </span>
                    <span className="text-[10px] text-[#2D6A4F] block font-medium">per kg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <button
                onClick={() => setDonationFormOpen(true)}
                className="w-full flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#2D6A4F] active:scale-[0.98] text-white py-3 px-4 rounded-xl font-bold text-sm transition-all shadow-sm cursor-pointer min-h-[44px]"
              >
                <span>Schedule Free Doorstep Pickup</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Live Donation Ledger & Status Verification */}
        <div className="bg-white rounded-xl border border-stone-200 p-4 sm:p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-stone-200">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-stone-900">
                Your Scheduled & Processed Donations
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-500">
                Track pending inspection tickets and points conversion status.
              </p>
            </div>
            <button
              onClick={() => setAdminOpen(true)}
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline flex items-center gap-1 cursor-pointer self-start sm:self-auto py-1"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Admin: Review & Approve Tickets</span>
            </button>
          </div>

          <div className="divide-y divide-stone-100">
            {donations.map((donation) => (
              <div key={donation.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    donation.status === 'VERIFIED_APPROVED'
                      ? 'bg-emerald-100 text-emerald-800'
                      : donation.status === 'PENDING_APPROVAL'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}>
                    {donation.status === 'VERIFIED_APPROVED' ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <Clock className="w-4 h-4" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-mono font-semibold text-stone-900">{donation.id}</span>
                      <span className="text-stone-400">&bull;</span>
                      <span className="font-medium text-stone-700 capitalize">
                        {donation.quantity} {donation.wasteType === 'plastic' ? 'kg' : 'units'} of {donation.wasteType}
                      </span>
                    </div>
                    <span className="text-stone-500 text-[11px] block truncate">
                      Scheduled: {donation.pickupDate} ({donation.pickupSlot})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 justify-between sm:justify-end shrink-0 pl-10 sm:pl-0">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-medium whitespace-nowrap ${
                    donation.status === 'VERIFIED_APPROVED'
                      ? 'bg-emerald-100 text-emerald-800'
                      : donation.status === 'PENDING_APPROVAL'
                      ? 'bg-amber-100 text-amber-900'
                      : 'bg-rose-100 text-rose-800'
                  }`}>
                    {donation.status === 'VERIFIED_APPROVED'
                      ? 'Verified & Approved'
                      : donation.status === 'PENDING_APPROVAL'
                      ? 'Pending Approval'
                      : 'Declined'}
                  </span>
                  <span className="font-bold text-stone-900 text-xs sm:text-sm">
                    +{donation.calculatedPoints} pts
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
