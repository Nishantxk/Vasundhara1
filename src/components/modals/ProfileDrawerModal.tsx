import React, { useState } from 'react';
import { X, User, Sparkles, MapPin, Phone, Mail, Clock, Check, RotateCcw } from 'lucide-react';
import { useVasundharaStore } from '../../store/useVasundharaStore';
import { formatINR, formatDate } from '../../utils/formatters';

export const ProfileDrawerModal: React.FC = () => {
  const {
    isProfileOpen,
    setProfileOpen,
    userProfile,
    updateUserProfile,
    orders,
    resetToDefaults,
  } = useVasundharaStore();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(userProfile.name);
  const [address, setAddress] = useState(userProfile.address);
  const [phone, setPhone] = useState(userProfile.phone);
  const [email, setEmail] = useState(userProfile.email);
  const [saveToast, setSaveToast] = useState(false);

  if (!isProfileOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({ name, address, phone, email });
    setIsEditing(false);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-stone-900/65 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col my-auto sm:my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-[#1B4332] text-white shrink-0">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#74C69D] shrink-0" />
            <h3 className="text-base sm:text-lg font-bold">User Profile & Rewards Ledger</h3>
          </div>
          <button
            onClick={() => setProfileOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-stone-300 hover:text-white hover:bg-[#2D6A4F] transition-colors cursor-pointer"
            aria-label="Close profile drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto flex-1">
          {/* Save notification */}
          {saveToast && (
            <div className="bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs px-3.5 py-2.5 rounded-lg flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Profile details updated and synchronized.</span>
            </div>
          )}

          {/* Points Dual-Ledger Summary */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            <div className="bg-[#FAF8F5] border border-stone-300 rounded-xl p-3 sm:p-4 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs text-stone-600 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="text-[11px] sm:text-xs">Approved Points</span>
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#1B4332]">
                {userProfile.approvedPoints}
              </p>
              <span className="text-[10px] sm:text-[11px] text-stone-500 block mt-0.5 truncate">
                Usable: ₹{userProfile.approvedPoints}
              </span>
            </div>

            <div className="bg-[#FAF8F5] border border-stone-300 rounded-xl p-3 sm:p-4 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs text-stone-600 mb-1">
                <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span className="text-[11px] sm:text-xs">Pending Points</span>
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-800">
                {userProfile.pendingPoints}
              </p>
              <span className="text-[10px] sm:text-[11px] text-stone-500 block mt-0.5 truncate">
                Awaiting verification
              </span>
            </div>
          </div>

          {/* Profile Coordinates Form / Display */}
          {isEditing ? (
            <form onSubmit={handleSave} className="space-y-3.5 border-t border-stone-200 pt-4">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                  Edit Personal Details
                </h4>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="text-xs text-stone-500 hover:text-stone-800 underline cursor-pointer"
                >
                  Cancel
                </button>
              </div>

              <div>
                <label className="block text-[11px] text-stone-500 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-stone-500 mb-1">Phone</label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-stone-500 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-stone-500 mb-1">Primary Address</label>
                <textarea
                  rows={2}
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 rounded-xl bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer min-h-[44px]"
              >
                Save Profile Changes
              </button>
            </form>
          ) : (
            <div className="space-y-3 border-t border-stone-200 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                  Account Details
                </span>
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="text-xs font-semibold text-[#1B4332] hover:underline cursor-pointer py-1"
                >
                  Edit Profile
                </button>
              </div>

              <div className="bg-stone-50 rounded-xl p-3.5 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-stone-800">
                  <User className="w-4 h-4 text-stone-400 shrink-0" />
                  <span className="font-semibold">{userProfile.name}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-600">
                  <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>{userProfile.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-600">
                  <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                  <span className="truncate">{userProfile.email}</span>
                </div>
                <div className="flex items-start gap-2 text-stone-600 pt-1">
                  <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{userProfile.address}</span>
                </div>
              </div>
            </div>
          )}

          {/* Recent Orders List if any */}
          {orders.length > 0 && (
            <div className="border-t border-stone-200 pt-4">
              <span className="text-xs font-bold text-stone-800 uppercase tracking-wide block mb-2">
                Recent Orders
              </span>
              <div className="space-y-2 max-h-36 overflow-y-auto">
                {orders.map((order) => (
                  <div key={order.id} className="p-2.5 rounded-lg border border-stone-200 bg-stone-50 flex items-center justify-between text-xs">
                    <div className="min-w-0 flex-1 mr-2">
                      <p className="font-semibold text-stone-900 truncate">{order.productName}</p>
                      <span className="text-stone-500 text-[11px] block truncate">{order.id} &bull; {formatDate(order.createdAt)}</span>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-stone-900">{formatINR(order.finalPayable)}</p>
                      <span className="text-emerald-800 text-[10px] font-medium block">-{order.pointsApplied} pts</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reset Demo Data Action */}
          <div className="border-t border-stone-200 pt-3.5 flex items-center justify-between gap-2">
            <span className="text-[11px] text-stone-500 truncate">
              Reset browser prototype data
            </span>
            <button
              onClick={() => {
                resetToDefaults();
                setName('Ananya Sharma');
                setAddress('Flat 402, Green Meadows, Senapati Bapat Marg, Pune, Maharashtra 411016');
                setPhone('+91 98230 44129');
                setEmail('ananya.sharma@earthmail.in');
                setProfileOpen(false);
              }}
              className="flex items-center gap-1.5 text-xs text-stone-600 hover:text-red-700 cursor-pointer shrink-0 py-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset State</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
