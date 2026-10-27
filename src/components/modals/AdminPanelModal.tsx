import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Clock,
  Users,
  Recycle,
  Sliders,
  Sparkles,
} from 'lucide-react';
import { useVasundharaStore } from '../../store/useVasundharaStore';

export const AdminPanelModal: React.FC = () => {
  const {
    isAdminOpen,
    setAdminOpen,
    donations,
    approveDonation,
    rejectDonation,
    trainees,
    updateTraineeStatus,
    exchangeRates,
    updateExchangeRates,
    userProfile,
  } = useVasundharaStore();

  const [activeTab, setActiveTab] = useState<'donations' | 'trainees' | 'rates'>('donations');
  const [flowersRate, setFlowersRate] = useState(exchangeRates.flowers);
  const [sareeRate, setSareeRate] = useState(exchangeRates.saree);
  const [plasticRate, setPlasticRate] = useState(exchangeRates.plastic);
  const [ratesToast, setRatesToast] = useState(false);

  if (!isAdminOpen) return null;

  const pendingDonations = donations.filter((d) => d.status === 'PENDING_APPROVAL');
  const verifiedDonations = donations.filter((d) => d.status === 'VERIFIED_APPROVED');

  const handleSaveRates = (e: React.FormEvent) => {
    e.preventDefault();
    updateExchangeRates({
      flowers: Number(flowersRate),
      saree: Number(sareeRate),
      plastic: Number(plasticRate),
    });
    setRatesToast(true);
    setTimeout(() => setRatesToast(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-stone-900/65 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col my-auto sm:my-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-[#1B4332] text-white shrink-0">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <ShieldCheck className="w-5 h-5 text-[#74C69D] shrink-0" />
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold truncate">Admin Operations Console</h3>
              <p className="text-[11px] sm:text-xs text-stone-300 truncate">
                Points approval, trainee review & tariff controls
              </p>
            </div>
          </div>
          <button
            onClick={() => setAdminOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-stone-300 hover:text-white hover:bg-[#2D6A4F] transition-colors cursor-pointer shrink-0"
            aria-label="Close admin modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs - Horizontally scrollable without breaking width */}
        <div className="flex items-center border-b border-stone-200 bg-stone-50 px-3 sm:px-6 gap-2 pt-2 shrink-0 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('donations')}
            className={`px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-colors border-b-2 cursor-pointer whitespace-nowrap shrink-0 min-h-[40px] flex items-center gap-1.5 ${
              activeTab === 'donations'
                ? 'border-[#1B4332] text-[#1B4332] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Recycle className="w-4 h-4 shrink-0" />
            <span>Donations ({pendingDonations.length} Pending)</span>
          </button>
          <button
            onClick={() => setActiveTab('trainees')}
            className={`px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-colors border-b-2 cursor-pointer whitespace-nowrap shrink-0 min-h-[40px] flex items-center gap-1.5 ${
              activeTab === 'trainees'
                ? 'border-[#1B4332] text-[#1B4332] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Users className="w-4 h-4 shrink-0" />
            <span>Trainees ({trainees.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('rates')}
            className={`px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-colors border-b-2 cursor-pointer whitespace-nowrap shrink-0 min-h-[40px] flex items-center gap-1.5 ${
              activeTab === 'rates'
                ? 'border-[#1B4332] text-[#1B4332] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sliders className="w-4 h-4 shrink-0" />
            <span>Tariff Rates</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 sm:space-y-6">
          {/* TAB 1: Waste Donations */}
          {activeTab === 'donations' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-3 sm:p-4 text-xs">
                <div>
                  <span className="font-semibold text-stone-800">Current User Ledger:</span>
                  <span className="text-stone-600 ml-2">
                    {userProfile.name} &bull; Approved: <strong className="text-emerald-800">{userProfile.approvedPoints} pts</strong> &bull; Pending: <strong className="text-amber-800">{userProfile.pendingPoints} pts</strong>
                  </span>
                </div>
              </div>

              {/* Pending Queue */}
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Pending Verification Queue ({pendingDonations.length})</span>
                </h4>

                {pendingDonations.length === 0 ? (
                  <div className="p-6 sm:p-8 text-center bg-stone-50 rounded-xl border border-stone-200 text-stone-500 text-xs">
                    No pending donation batches in queue. Submit a new collection request in Section 2 (Be a Part) to test approval logic.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {pendingDonations.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white border border-stone-300 rounded-xl p-3.5 sm:p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3.5"
                      >
                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono text-xs font-bold text-stone-900 bg-stone-100 px-2 py-0.5 rounded">
                              {item.id}
                            </span>
                            <span className="text-xs font-semibold text-stone-800">
                              {item.donorName}
                            </span>
                            <span className="text-xs text-stone-500">&bull; {item.donorPhone}</span>
                          </div>
                          <p className="text-xs text-stone-700">
                            <strong>Item:</strong> {item.quantity} {item.wasteType === 'plastic' ? 'kg' : 'units'} of {item.wasteType}
                            &nbsp;&bull;&nbsp;
                            <strong>Reward:</strong>{' '}
                            <span className="font-bold text-emerald-800">
                              +{item.calculatedPoints} Points
                            </span>
                          </p>
                          <p className="text-[11px] text-stone-500 truncate">
                            Pickup: {item.donorAddress} &bull; {item.pickupDate} ({item.pickupSlot})
                          </p>
                          {item.notes && (
                            <p className="text-[11px] text-stone-500 italic truncate">
                              Notes: &ldquo;{item.notes}&rdquo;
                            </p>
                          )}
                        </div>

                        {/* Verification Actions - Responsive full-width on mobile */}
                        <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                          <button
                            onClick={() => approveDonation(item.id)}
                            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#1B4332] hover:bg-[#2D6A4F] text-white px-3.5 py-2.5 rounded-lg text-xs font-bold transition-colors cursor-pointer min-h-[40px]"
                            title="Verify weight & credit approved points"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#74C69D]" />
                            <span>Approve Points</span>
                          </button>
                          <button
                            onClick={() => rejectDonation(item.id)}
                            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-stone-100 hover:bg-rose-50 text-stone-700 hover:text-rose-700 border border-stone-300 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors cursor-pointer min-h-[40px]"
                            title="Reject due to contamination or weight mismatch"
                          >
                            <XCircle className="w-3.5 h-3.5" />
                            <span>Reject</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Previously Verified Tickets */}
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Recently Verified Records ({verifiedDonations.length})</span>
                </h4>
                <div className="space-y-2">
                  {verifiedDonations.map((item) => (
                    <div
                      key={item.id}
                      className="bg-stone-50 border border-stone-200 rounded-lg p-3 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-stone-600"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="font-mono font-semibold text-stone-800">{item.id}</span>
                        <span className="mx-1.5">&bull;</span>
                        <span>{item.donorName}</span>
                        <span className="mx-1.5">&bull;</span>
                        <span className="capitalize">{item.quantity} {item.wasteType === 'plastic' ? 'kg' : 'units'} {item.wasteType}</span>
                        {item.adminRemarks && (
                          <span className="text-stone-500 block text-[11px] mt-0.5 truncate">
                            Audit: {item.adminRemarks}
                          </span>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-emerald-800 font-bold block">+{item.calculatedPoints} pts</span>
                        <span className="text-[10px] text-stone-400">Verified</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Trainee Registrations */}
          {activeTab === 'trainees' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-xs sm:text-sm font-bold text-stone-900">
                  Rural Cohort Candidates ({trainees.length})
                </h4>
                <span className="text-[11px] text-stone-500">
                  Applications from Section 3: Empowering
                </span>
              </div>

              <div className="space-y-3">
                {trainees.map((t) => (
                  <div
                    key={t.id}
                    className="bg-white border border-stone-300 rounded-xl p-3.5 sm:p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3.5"
                  >
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xs font-bold text-stone-900 bg-stone-100 px-2 py-0.5 rounded">
                          {t.id}
                        </span>
                        <span className="text-xs font-bold text-stone-900">{t.fullName}</span>
                        <span className="text-xs text-stone-500">({t.age} yrs, {t.gender})</span>
                      </div>
                      <p className="text-xs text-stone-700">
                        <strong>Track:</strong> <span className="text-emerald-900 font-semibold">{t.preferredTrack}</span>
                      </p>
                      <p className="text-[11px] sm:text-xs text-stone-600 truncate">
                        <strong>Location:</strong> {t.villageDistrict} &bull; <strong>Contact:</strong> {t.phone}
                      </p>
                      {t.craftExperience && (
                        <p className="text-[11px] text-stone-500 italic truncate">
                          Background: &ldquo;{t.craftExperience}&rdquo;
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0 pt-1 sm:pt-0">
                      <span className={`text-[10px] sm:text-[11px] font-semibold px-2 py-1 rounded whitespace-nowrap ${
                        t.status === 'ACCEPTED'
                          ? 'bg-emerald-100 text-emerald-800'
                          : t.status === 'INVITED_FOR_INTERVIEW'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {t.status.replace(/_/g, ' ')}
                      </span>

                      {t.status !== 'ACCEPTED' && (
                        <button
                          onClick={() => updateTraineeStatus(t.id, 'ACCEPTED')}
                          className="px-3 py-1.5 rounded-lg bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-xs font-semibold cursor-pointer min-h-[36px]"
                        >
                          Accept
                        </button>
                      )}
                      {t.status === 'QUEUED_FOR_REVIEW' && (
                        <button
                          onClick={() => updateTraineeStatus(t.id, 'INVITED_FOR_INTERVIEW')}
                          className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 text-xs font-semibold cursor-pointer min-h-[36px]"
                        >
                          Invite
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Exchange Rates Configuration */}
          {activeTab === 'rates' && (
            <form onSubmit={handleSaveRates} className="max-w-lg space-y-4">
              <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-3.5 text-xs text-stone-600">
                Adjust points awarded per unit or kilogram of domestic scrap. Changes
                immediately update the live Reward Points Table and Smart Form calculation logic.
              </div>

              {ratesToast && (
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs px-3.5 py-2.5 rounded-lg">
                  Exchange tariffs updated successfully.
                </div>
              )}

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Puja &amp; Festival Flower Garlands (Points per kilogram)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    required
                    value={flowersRate}
                    onChange={(e) => setFlowersRate(Number(e.target.value))}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                  />
                  <span className="text-[11px] text-stone-500">Default: 20 points per kilogram</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Pre-Loved Sarees (Points per unit)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    required
                    value={sareeRate}
                    onChange={(e) => setSareeRate(Number(e.target.value))}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                  />
                  <span className="text-[11px] text-stone-500">Default: 40 points per saree</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Segregated Plastic (Points per kilogram)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    required
                    value={plasticRate}
                    onChange={(e) => setPlasticRate(Number(e.target.value))}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                  />
                  <span className="text-[11px] text-stone-500">Default: 15 points per kilogram</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto py-2.5 px-6 rounded-xl bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer min-h-[44px]"
              >
                Update Exchange Tariffs
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
