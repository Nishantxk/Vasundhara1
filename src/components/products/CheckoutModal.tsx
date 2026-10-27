import React, { useState } from 'react';
import { X, Check, ShieldCheck, Sparkles, CreditCard, Truck } from 'lucide-react';
import { useVasundharaStore } from '../../store/useVasundharaStore';
import { formatINR } from '../../utils/formatters';

export const CheckoutModal: React.FC = () => {
  const {
    selectedProductForCheckout,
    setSelectedProductForCheckout,
    userProfile,
    createOrder,
  } = useVasundharaStore();

  const product = selectedProductForCheckout;

  // Maximum usable points cannot exceed product price or user's approved points
  const maxRedeemablePoints = product
    ? Math.min(userProfile.approvedPoints, product.price)
    : 0;

  const [pointsToApply, setPointsToApply] = useState<number>(maxRedeemablePoints);
  const [shippingAddress, setShippingAddress] = useState<string>(userProfile.address);
  const [customerPhone, setCustomerPhone] = useState<string>(userProfile.phone);
  const [paymentMethod, setPaymentMethod] = useState<string>('UPI');
  const [orderSuccessId, setOrderSuccessId] = useState<string | null>(null);

  if (!product) return null;

  const basePrice = product.price;
  const appliedDiscount = Math.min(pointsToApply, maxRedeemablePoints);
  const finalPayable = Math.max(0, basePrice - appliedDiscount);

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const order = createOrder({
      productId: product.id,
      productName: product.name,
      basePrice,
      pointsApplied: appliedDiscount,
      finalPayable,
      customerName: userProfile.name,
      shippingAddress,
      customerPhone,
      paymentMethod,
    });
    setOrderSuccessId(order.id);
  };

  const handleClose = () => {
    setSelectedProductForCheckout(null);
    setOrderSuccessId(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-stone-900/65 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col my-auto sm:my-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-[#1B4332] text-white shrink-0">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#74C69D] shrink-0" />
            <h3 className="text-base sm:text-lg font-bold">Sustainable Checkout</h3>
          </div>
          <button
            onClick={handleClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-stone-300 hover:text-white hover:bg-[#2D6A4F] transition-colors cursor-pointer"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {orderSuccessId ? (
          <div className="p-5 sm:p-8 text-center overflow-y-auto flex-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center mb-4">
              <Check className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">Order Confirmed</h4>
            <p className="text-xs sm:text-sm text-stone-600 mb-5 leading-relaxed">
              Thank you for supporting circular enterprise. Your order has been registered
              and queued for dispatch from {product.artisanCluster}.
            </p>
            <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-3.5 sm:p-4 text-left mb-6 space-y-2 text-xs text-stone-700">
              <div className="flex justify-between">
                <span className="text-stone-500">Order Reference:</span>
                <span className="font-mono font-bold text-stone-900">{orderSuccessId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Item:</span>
                <span className="font-medium truncate max-w-[200px]">{product.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Points Redeemed:</span>
                <span className="font-semibold text-emerald-800">
                  {appliedDiscount} Green Points (-{formatINR(appliedDiscount)})
                </span>
              </div>
              <div className="flex justify-between border-t border-stone-200 pt-2 font-bold text-sm text-stone-900">
                <span>Total Paid:</span>
                <span>{formatINR(finalPayable)}</span>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-full bg-[#1B4332] hover:bg-[#2D6A4F] text-white py-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer min-h-[44px]"
            >
              Back to Catalog
            </button>
          </div>
        ) : (
          <form onSubmit={handleCompleteOrder} className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto flex-1">
            {/* Selected Product Summary Card */}
            <div className="flex items-center gap-3 sm:gap-4 bg-stone-50 p-3 sm:p-4 rounded-xl border border-stone-200">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-stone-200 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-800 uppercase tracking-wide block truncate">
                  {product.category} &bull; {product.artisanCluster}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-stone-900 truncate">
                  {product.name}
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5 truncate">
                  Material: {product.materialSource}
                </p>
                <p className="text-xs sm:text-sm font-bold text-stone-900 mt-1">
                  Retail Price: {formatINR(product.price)}
                </p>
              </div>
            </div>

            {/* Reward Points Discount Section */}
            <div className="bg-[#FAF8F5] border border-stone-300 rounded-xl p-3.5 sm:p-4">
              <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-stone-900">
                    Apply Approved Green Points
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded shrink-0">
                  Balance: {userProfile.approvedPoints} pts
                </span>
              </div>

              {userProfile.approvedPoints > 0 ? (
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-600 mb-2">
                    <span>1 Point = ₹1 discount</span>
                    <span className="font-semibold text-stone-900">
                      Using {pointsToApply} pts (-{formatINR(pointsToApply)})
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={maxRedeemablePoints}
                    value={pointsToApply}
                    onChange={(e) => setPointsToApply(Number(e.target.value))}
                    className="w-full accent-[#2D6A4F] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-stone-500 mt-1">
                    <span>0 pts</span>
                    <span>Max {maxRedeemablePoints} pts</span>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-stone-500">
                  You have 0 approved points. Donate waste in Section 2 to earn points for future orders.
                </p>
              )}
            </div>

            {/* Shipping Coordinates */}
            <div className="space-y-3">
              <label className="block text-[11px] sm:text-xs font-semibold text-stone-700 uppercase tracking-wide">
                Delivery Coordinates
              </label>
              <div>
                <input
                  type="text"
                  required
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  placeholder="Complete Delivery Address & Pincode"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="Contact Mobile Number"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                />
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900 bg-white"
                >
                  <option value="UPI">UPI / Instant QR</option>
                  <option value="Card">Debit / Credit Card</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                </select>
              </div>
            </div>

            {/* Doorstep Shipping Assurance */}
            <div className="bg-[#F2FAF4] border border-[#B7E4C7] rounded-xl p-3 flex items-center gap-2.5 text-xs text-stone-800 font-medium">
              <div className="w-6 h-6 rounded-md bg-[#D8F3DC] border border-[#74C69D]/40 text-[#1B4332] flex items-center justify-center shrink-0">
                <Truck className="w-3.5 h-3.5" />
              </div>
              <span>Seamless doorstep shipping available for all products.</span>
            </div>

            {/* Price Breakdown Calculation */}
            <div className="border-t border-stone-200 pt-3.5 space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between text-stone-600">
                <span>Total Product Price</span>
                <span className="font-medium text-stone-900">{formatINR(basePrice)}</span>
              </div>
              <div className="flex justify-between text-emerald-800 font-medium">
                <span>Applied Approved Points ({pointsToApply} pts)</span>
                <span>-{formatINR(appliedDiscount)}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Eco-Courier Delivery</span>
                <span className="text-emerald-800 font-semibold">FREE</span>
              </div>
              <div className="flex justify-between items-baseline border-t border-stone-300 pt-2.5 text-base sm:text-lg font-bold text-stone-900">
                <span>Final Payable</span>
                <span className="text-lg sm:text-xl font-extrabold text-[#1B4332]">
                  {formatINR(finalPayable)}
                </span>
              </div>
            </div>

            {/* Form Actions - Responsive stacking on phone */}
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
                <CreditCard className="w-4 h-4 shrink-0" />
                <span>Confirm & Pay {formatINR(finalPayable)}</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 pt-1 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>Direct benefit transfer to rural artisan clusters guaranteed</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
