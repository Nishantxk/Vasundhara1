import React, { useState } from 'react';
import { ShoppingBag, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import { useVasundharaStore } from '../../store/useVasundharaStore';
import { ProductCard } from './ProductCard';

export const ProductsSection: React.FC = () => {
  const { productCatalog, userProfile } = useVasundharaStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Bags & Totes',
    'Accessories',
    'Kitchen & Storage',
    'Home Decor',
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? productCatalog
      : productCatalog.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-12 sm:py-16 bg-[#FBFBFA] scroll-mt-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-1">
              Upcycled Craft Collection
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Artisan Eco-Products
            </h2>
            <p className="mt-1 text-stone-600 text-xs sm:text-sm">
              Handcrafted from segregated scrap and festive floral waste by rural women collectives.
            </p>
          </div>

          {/* User Points Redemption Callout */}
          <div className="bg-[#F2FAF4] border border-[#B7E4C7] px-3.5 py-2.5 rounded-xl flex items-center justify-between gap-3 shadow-2xs shrink-0">
            <div>
              <p className="text-[10px] font-semibold text-[#1B4332] uppercase tracking-wide">Points Discount</p>
              <p className="text-sm font-bold text-stone-900 font-mono tabular-nums">
                {userProfile.approvedPoints} <span className="text-xs font-sans text-[#2D6A4F] font-normal">pts available</span>
              </p>
            </div>
            <span className="text-xs font-mono text-[#153426] bg-[#D8F3DC] px-2 py-0.5 rounded border border-[#74C69D]/50 font-bold">
              -₹{userProfile.approvedPoints}
            </span>
          </div>
        </div>

        {/* Category Filters (Segmented Control style) */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1 bg-stone-100 rounded-xl mb-8 max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 min-h-[32px] ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-[#EBF8EE]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Standards & Transparency Bar */}
        <div className="mt-10 sm:mt-12 bg-white rounded-xl border border-stone-200 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md bg-[#EBF8EE] border border-[#B7E4C7] text-[#1B4332] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-stone-900">Traceable Origin</h4>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
                Identifies the exact rural cluster and diverted scrap inputs.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md bg-[#EBF8EE] border border-[#B7E4C7] text-[#1B4332] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-stone-900">100% Non-Toxic Finishing</h4>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
                Plant-based sealants and natural finishes ensure safe daily use.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md bg-[#EBF8EE] border border-[#B7E4C7] text-[#1B4332] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-stone-900">Product Commissions</h4>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
                Artisans earn direct commissions on every product created.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
