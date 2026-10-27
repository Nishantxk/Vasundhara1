import React from 'react';
import { ShoppingCart, SlidersHorizontal, Sparkles, MapPin, Tag, Truck } from 'lucide-react';
import { Product } from '../../types';
import { formatINR, scrollToSection } from '../../utils/formatters';
import { useVasundharaStore } from '../../store/useVasundharaStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { setSelectedProductForCheckout } = useVasundharaStore();

  const handleCustomize = () => {
    // If not on home, route to dedicated donate page, else scroll to be-a-part section
    const currentActive = useVasundharaStore.getState().activePage;
    if (currentActive !== 'home') {
      useVasundharaStore.getState().setActivePage('donate');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToSection('be-a-part');
    }
  };

  return (
    <div className="bg-white rounded-xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-[#74C69D]/60 transition-all flex flex-col group w-full">
      {/* Product Image Frame */}
      <div className="relative aspect-square w-full overflow-hidden bg-stone-50 flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded tracking-wide">
          {product.category}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1.5 font-medium">
            <span className="truncate">{product.artisanCluster}</span>
            <span className="bg-[#EBF8EE] text-[#1B4332] border border-[#B7E4C7] px-2 py-0.5 rounded-full font-semibold shrink-0 ml-2 text-[10px]">
              {product.wasteDivertedKg} kg diverted
            </span>
          </div>

          <h3 className="text-sm sm:text-base font-semibold text-stone-900 group-hover:text-[#1B4332] transition-colors leading-snug mb-1 line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-stone-500 line-clamp-1 mb-4 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div>
          <div className="pt-3 border-t border-stone-100 mb-3.5 flex items-baseline justify-between">
            <span className="text-xs text-stone-500">Price</span>
            <span className="text-lg font-bold text-stone-900 font-mono tabular-nums">
              {formatINR(product.price)}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setSelectedProductForCheckout(product)}
              className="min-h-[38px] flex items-center justify-center gap-1.5 bg-[#1B4332] hover:bg-[#2D6A4F] active:scale-[0.98] text-white py-2 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              <ShoppingCart className="w-3.5 h-3.5 shrink-0" />
              <span>Buy Now</span>
            </button>

            <button
              onClick={handleCustomize}
              className="min-h-[38px] flex items-center justify-center gap-1.5 bg-[#FAF8F5] hover:bg-[#EBF8EE] active:scale-[0.98] text-stone-700 border border-stone-200 hover:border-[#B7E4C7] py-2 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              title="Supply your own household scrap for custom crafting"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-stone-500 shrink-0" />
              <span>Customize</span>
            </button>
          </div>

          {/* Shipping Logistics with Light Green Card Banner */}
          <div className="mt-2.5 bg-[#F2FAF4] border border-[#D8F3DC] text-stone-700 py-1.5 px-2 rounded-lg text-[11px] flex items-center justify-center gap-1.5 text-center">
            <Truck className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
            <span>Seamless doorstep shipping available for all products.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
