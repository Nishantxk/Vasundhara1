import React, { useState } from 'react';
import {
  X,
  HeartHandshake,
  Mail,
  Instagram,
  Check,
  Send,
  Sparkles,
  MapPin,
  Building,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
import { useVasundharaStore } from '../../store/useVasundharaStore';

export const FundingModal: React.FC = () => {
  const { isFundingOpen, setFundingOpen } = useVasundharaStore();
  const [donorName, setDonorName] = useState('');
  const [donorOrg, setDonorOrg] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [fundingCategory, setFundingCategory] = useState('Equipment & Tools Sponsorship');
  const [pledgeAmount, setPledgeAmount] = useState('10000');
  const [message, setMessage] = useState('');
  const [submittedPledgeId, setSubmittedPledgeId] = useState<string | null>(null);

  if (!isFundingOpen) return null;

  const handleSubmitPledge = (e: React.FormEvent) => {
    e.preventDefault();
    const pledgeId = `PLEDGE-${Date.now().toString().slice(-6)}`;
    setSubmittedPledgeId(pledgeId);
  };

  const handleClose = () => {
    setFundingOpen(false);
    setSubmittedPledgeId(null);
  };

  const emailSubject = encodeURIComponent(`Funding & Support Inquiry - Vasundhara Enterprise [${submittedPledgeId || 'New'}]`);
  const emailBody = encodeURIComponent(
    `Hello Vasundhara Project Team,\n\nI would like to support your rural circular enterprise initiative.\n\nName: ${donorName}\nOrganization: ${donorOrg || 'Individual Supporter'}\nPhone: ${donorPhone}\nCategory: ${fundingCategory}\nProposed Amount / Contribution: ₹${pledgeAmount}\nNotes: ${message}\n\nPlease share official partnership and contribution processing details.\n\nThank you!`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-stone-900/65 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col my-auto sm:my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-[#1B4332] text-white shrink-0">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-[#E9D8A6] shrink-0" />
            <h3 className="text-base sm:text-lg font-bold">Support Rural Clusters &bull; Give Funding</h3>
          </div>
          <button
            onClick={handleClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-stone-300 hover:text-white hover:bg-[#2D6A4F] transition-colors cursor-pointer"
            aria-label="Close funding modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-8 space-y-4 sm:space-y-6 overflow-y-auto flex-1">
          {/* Mission & Purpose */}
          <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="w-4 h-4 text-[#2D6A4F]" />
              <span className="text-xs font-bold text-[#1B4332] uppercase tracking-wide">
                Direct Artisan Impact Model
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Vasundhara channels philanthropic contributions, CSR grants, and individual patron support directly into decentralized capital equipment—such as handlooms, fabric shredders, and non-toxic processing tools for rural women self-help cooperatives in Maharashtra.
            </p>
          </div>

          {submittedPledgeId ? (
            /* Post-Submission Confirmation View */
            <div className="text-center py-6 sm:py-8 px-2 space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-[#1B4332] mx-auto flex items-center justify-center">
                <Check className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-stone-900">Funding Inquiry Registered</h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{donorName}</strong>! Your intent to support rural artisans has been logged with reference code{' '}
                <span className="font-mono font-bold text-[#1B4332]">{submittedPledgeId}</span>.
              </p>

              <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-4 text-left max-w-md mx-auto text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-500">Intended Contribution:</span>
                  <span className="font-bold text-stone-900">₹{pledgeAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Cluster Allocation:</span>
                  <span className="font-semibold text-emerald-800">{fundingCategory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Contact:</span>
                  <span className="text-stone-800">{donorEmail || donorPhone}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
                <a
                  href={`mailto:vrcvasundhraproject2026@gmail.com?subject=${emailSubject}&body=${emailBody}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#2D6A4F] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs min-h-[44px]"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>Send Direct Email to Desk</span>
                </a>
                <button
                  onClick={handleClose}
                  className="px-5 py-3 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs sm:text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Inquiry & Pledge Form */
            <form onSubmit={handleSubmitPledge} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Name / Representative <span className="text-emerald-700">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Organization / Foundation (Optional)
                  </label>
                  <input
                    type="text"
                    value={donorOrg}
                    onChange={(e) => setDonorOrg(e.target.value)}
                    placeholder="e.g. CSR Trust, Individual Patron"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email Address <span className="text-emerald-700">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Phone / Mobile Number <span className="text-emerald-700">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    placeholder="+91 98200 00000"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Funding Target Area
                  </label>
                  <select
                    value={fundingCategory}
                    onChange={(e) => setFundingCategory(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900 bg-white cursor-pointer"
                  >
                    <option value="Equipment & Tools Sponsorship">Equipment & Tools Sponsorship (Handlooms/Machines)</option>
                    <option value="Artisan Vocational Training Stipends">Artisan Vocational Training Stipends</option>
                    <option value="Cluster Materials & Infrastructure">Cluster Materials & Infrastructure</option>
                    <option value="General Enterprise Expansion">General Enterprise Expansion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Intended Contribution (₹ INR)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min="500"
                      step="500"
                      required
                      value={pledgeAmount}
                      onChange={(e) => setPledgeAmount(e.target.value)}
                      placeholder="Amount in ₹"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900 font-mono"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Message / Cluster Preference (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details on your organization's CSR mandate, preferred district (Pusad, Washim, etc.), or questions..."
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900 resize-none"
                />
              </div>

              {/* Verified Official Project Channels Information */}
              <div className="bg-[#F2FAF4] border border-[#B7E4C7] rounded-xl p-3.5 sm:p-4 text-xs text-stone-700 space-y-2">
                <span className="font-bold text-[#1B4332] block uppercase tracking-wide text-[10px]">
                  Official Project Coordination Desk
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
                    <span className="font-mono text-[11px] truncate select-all">vrcvasundhraproject2026@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Instagram className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
                    <span className="text-[11px]">@vrcvasundhraproject2026</span>
                  </div>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex flex-col-reverse sm:flex-row items-center gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-1/3 py-2.5 sm:py-3 rounded-xl border border-stone-300 text-stone-700 text-xs sm:text-sm font-semibold hover:bg-stone-100 transition-colors cursor-pointer min-h-[44px]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-2/3 py-2.5 sm:py-3 rounded-xl bg-[#1B4332] hover:bg-[#2D6A4F] active:scale-[0.98] text-white text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>Submit Funding Inquiry &bull; ₹{pledgeAmount}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 pt-1 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Verified coordination directly handled through official Vasundhara project channels.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

