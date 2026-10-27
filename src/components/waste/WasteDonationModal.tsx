import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Recycle,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  AlertCircle,
  Truck,
  ShieldCheck,
} from 'lucide-react';
import { useVasundharaStore } from '../../store/useVasundharaStore';
import { WasteType } from '../../types';

export const WasteDonationModal: React.FC = () => {
  const {
    isDonationFormOpen,
    setDonationFormOpen,
    userProfile,
    exchangeRates,
    submitWasteDonation,
  } = useVasundharaStore();

  const [name, setName] = useState(userProfile.name);
  const [address, setAddress] = useState(userProfile.address);
  const [phone, setPhone] = useState(userProfile.phone);
  const [email, setEmail] = useState(userProfile.email);
  const [wasteType, setWasteType] = useState<WasteType>('flowers');
  const [collectionMethod, setCollectionMethod] = useState<
    'Drop-off at Vasundhara Center' | 'Request Home Pickup'
  >('Request Home Pickup');
  const [quantity, setQuantity] = useState<number>(3);
  const [pickupDate, setPickupDate] = useState<string>('2026-10-26');
  const [pickupSlot, setPickupSlot] = useState<string>('Morning (09:00 - 12:00)');
  const [notes, setNotes] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [lastSubmittedTicketId, setLastSubmittedTicketId] = useState<string>('');

  if (!isDonationFormOpen) return null;

  // Real-time calculated points based on waste type and rate
  const rateMultiplier =
    wasteType === 'flowers'
      ? exchangeRates.flowers
      : wasteType === 'saree'
      ? exchangeRates.saree
      : exchangeRates.plastic;

  const calculatedPoints = Math.max(0, quantity) * rateMultiplier;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const record = submitWasteDonation({
      donorName: name,
      donorAddress: address,
      donorPhone: phone,
      donorEmail: email,
      wasteType,
      collectionMethod,
      quantity,
      calculatedPoints,
      pickupDate,
      pickupSlot,
      notes,
    });
    setLastSubmittedTicketId(record.id);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setDonationFormOpen(false);
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-stone-900/65 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col my-auto sm:my-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-[#1B4332] text-white shrink-0">
          <div className="flex items-center gap-2">
            <Recycle className="w-5 h-5 text-[#74C69D] shrink-0" />
            <h3 className="text-base sm:text-lg font-bold">Smart Waste Donation Form</h3>
          </div>
          <button
            onClick={handleClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-stone-300 hover:text-white hover:bg-[#2D6A4F] transition-colors cursor-pointer"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-5 sm:p-8 text-center overflow-y-auto flex-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
            </div>

            <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-3.5 sm:p-4 mb-5 text-emerald-950 text-xs sm:text-sm font-semibold">
              Items in process. Points pending admin approval.
            </div>

            <p className="text-xs sm:text-sm text-stone-600 mb-5 leading-relaxed">
              Your request for <span className="font-semibold text-stone-900">{quantity} {wasteType === 'plastic' ? 'kg plastic' : wasteType}</span> has been scheduled. Once our local logistics team collects and verifies the consignment,{' '}
              <span className="font-semibold text-emerald-800">+{calculatedPoints} Green Points</span> will be activated in your approved balance.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 sm:p-4 text-left text-xs text-stone-600 space-y-2 mb-6">
              <div className="flex justify-between">
                <span>Tracking Ref:</span>
                <span className="font-mono font-bold text-stone-900">{lastSubmittedTicketId}</span>
              </div>
              <div className="flex justify-between">
                <span>Collection Method:</span>
                <span className="font-semibold text-emerald-800">{collectionMethod}</span>
              </div>
              <div className="flex justify-between">
                <span>Date & Slot:</span>
                <span className="font-medium text-stone-800">{pickupDate} &bull; {pickupSlot}</span>
              </div>
              <div className="flex justify-between">
                <span>Address:</span>
                <span className="font-medium text-stone-800 truncate max-w-[200px] sm:max-w-[280px]">{address}</span>
              </div>
              <div className="flex justify-between border-t border-stone-200 pt-2 font-semibold">
                <span>Reward Value:</span>
                <span className="text-amber-700 font-bold">+{calculatedPoints} Pending Points</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full bg-[#1B4332] hover:bg-[#2D6A4F] text-white py-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer min-h-[44px]"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto flex-1">
            <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-3 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
              <p className="text-xs text-stone-600 leading-relaxed">
                Your profile coordinates have been pre-filled below. You can customize the pickup location or date.
              </p>
            </div>

            {/* Donor Profile Coordinates */}
            <div className="space-y-3">
              <label className="block text-[11px] sm:text-xs font-semibold text-stone-700 uppercase tracking-wide">
                Donor Profile Coordinates
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                <div>
                  <label className="block text-[11px] text-stone-500 mb-1">Phone Number</label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-stone-500 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                />
              </div>

              <div>
                <label className="block text-[11px] text-stone-500 mb-1">Pickup Address</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full text-xs sm:text-sm pl-9 pr-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                  />
                  <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                </div>
              </div>
            </div>

            {/* Waste Selection & Quantity Calculation */}
            <div className="space-y-3 pt-1 border-t border-stone-200">
              <label className="block text-[11px] sm:text-xs font-semibold text-stone-700 uppercase tracking-wide">
                Waste Material Declaration
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Waste Selection Dropdown */}
                <div>
                  <label className="block text-[11px] text-stone-500 mb-1">Waste Stream Type</label>
                  <select
                    value={wasteType}
                    onChange={(e) => setWasteType(e.target.value as WasteType)}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900 bg-white"
                  >
                    <option value="flowers">Puja & Festival Garlands ({exchangeRates.flowers} pts / kg)</option>
                    <option value="saree">Pre-Loved Sarees & Clothes ({exchangeRates.saree} pts / unit)</option>
                    <option value="plastic">Clean Household Plastics ({exchangeRates.plastic} pts / kg)</option>
                  </select>
                </div>

                {/* Quantity or Weight input */}
                <div>
                  <label className="block text-[11px] text-stone-500 mb-1">
                    {wasteType === 'plastic' || wasteType === 'flowers'
                      ? 'Total Weight (Kilograms)'
                      : 'Quantity (Units / Pairs)'}
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    required
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                  />
                </div>
              </div>

              {/* Dynamic Live Expected Points Calculation */}
              <div className="bg-[#F2FAF4] border border-[#B7E4C7] rounded-lg p-3 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#2D6A4F] font-semibold block">Calculated Incentive</span>
                  <span className="text-xs text-stone-700 font-medium">
                    {quantity} &times; {rateMultiplier} pts per unit
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-base sm:text-lg font-bold text-[#1B4332]">
                    +{calculatedPoints} Points
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-amber-700 block font-medium">
                    (Queued as Pending)
                  </span>
                </div>
              </div>
            </div>

            {/* Collection Method Field (Radio/Card Options) */}
            <div className="space-y-1.5 pt-1 border-t border-stone-200">
              <label className="block text-[11px] sm:text-xs font-semibold text-stone-700 uppercase tracking-wide">
                Collection Method
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setCollectionMethod('Drop-off at Vasundhara Center')}
                  className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    collectionMethod === 'Drop-off at Vasundhara Center'
                      ? 'bg-[#EBF8EE] border-[#52B788] text-[#1B4332] ring-1 ring-[#52B788] shadow-2xs'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                  <span>Drop-off at Vasundhara Center</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCollectionMethod('Request Home Pickup')}
                  className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    collectionMethod === 'Request Home Pickup'
                      ? 'bg-[#EBF8EE] border-[#52B788] text-[#1B4332] ring-1 ring-[#52B788] shadow-2xs'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <Truck className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                  <span>Request Home Pickup</span>
                </button>
              </div>
            </div>

            {/* Logistics Schedule */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-stone-200">
              <div>
                <label className="block text-[11px] text-stone-500 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-stone-500" />
                  <span>Preferred Date</span>
                </label>
                <input
                  type="date"
                  required
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] text-stone-500 mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-stone-500" />
                  <span>Time Slot</span>
                </label>
                <select
                  value={pickupSlot}
                  onChange={(e) => setPickupSlot(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900 bg-white"
                >
                  <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                  <option value="Afternoon (14:00 - 17:00)">Afternoon (14:00 - 17:00)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-stone-500 mb-1">
                Special Packaging or Gate Instructions (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g., Gate code 402, bag kept at front porch."
                className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
              />
            </div>

            {/* Quality Control & Hygiene Trust Badge */}
            <div className="bg-[#F2FAF4] border border-[#B7E4C7] rounded-xl p-3 flex items-start gap-2.5 text-stone-700 text-[11px] sm:text-xs leading-relaxed">
              <div className="w-6 h-6 rounded-md bg-[#D8F3DC] border border-[#74C69D]/40 text-[#1B4332] flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <span>
                All donated materials undergo strict quality control, sorting, and sanitization by the Vasundhara internal team before processing.
              </span>
            </div>

            {/* Actions - Stacking on mobile */}
            <div className="flex flex-col-reverse sm:flex-row items-center gap-2.5 pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:w-1/3 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs sm:text-sm font-semibold hover:bg-stone-100 transition-colors cursor-pointer min-h-[44px]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-2/3 py-2.5 rounded-xl bg-[#1B4332] hover:bg-[#2D6A4F] active:scale-[0.98] text-white text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Recycle className="w-4 h-4 shrink-0" />
                <span>
                  {collectionMethod === 'Request Home Pickup'
                    ? 'Confirm & Schedule Pickup'
                    : 'Confirm & Register Drop-off'}
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
