import React, { useState } from 'react';
import {
  ShoppingBag,
  Sparkles,
  Search,
  Filter,
  ArrowUpDown,
  ShieldCheck,
  ArrowLeft,
  Leaf,
  Layers,
  Heart,
  Truck,
} from 'lucide-react';
import { useVasundharaStore } from '../store/useVasundharaStore';
import { ProductCard } from '../components/products/ProductCard';
import { ProductCategory } from '../types';

export const ProductsPage: React.FC = () => {
  const { productCatalog, userProfile, setActivePage, setSelectedProductForCheckout } =
    useVasundharaStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'waste-desc'>('featured');

  const categories: ProductCategory[] = [
    'All',
    'Bags & Totes',
    'Accessories',
    'Kitchen & Storage',
    'Home Decor',
  ];

  // Filtering
  const filteredProducts = productCatalog.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.materialSource.toLowerCase().includes(query) ||
      item.artisanCluster.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'waste-desc') return b.wasteDivertedKg - a.wasteDivertedKg;
    return 0; // featured default
  });

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen pb-20">
      {/* Top Breadcrumb & Hero Header */}
      <div className="bg-[#153426] text-white border-b border-[#2D6A4F] pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#D8F3DC]/70 mb-4">
            <button
              onClick={() => {
                setActivePage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
            <span>/</span>
            <span className="text-[#D8F3DC] font-medium">Eco Products Catalog</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF8EE]/20 border border-[#74C69D]/40 text-[#D8F3DC] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-xs">
                <ShoppingBag className="w-3.5 h-3.5 text-[#74C69D]" />
                <span>Verified Circular Economy Goods</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
                Ethical Upcycled Products
              </h1>
              <p className="text-stone-200 text-sm sm:text-base max-w-2xl leading-relaxed">
                Handcrafted from reclaimed household materials by rural artisan collectives. 100% recycled inputs with zero virgin plastic.
              </p>
            </div>

            {/* Points Redemption Badge */}
            <div className="bg-[#0D281E]/95 border border-[#74C69D]/40 rounded-xl p-4 sm:p-5 flex items-center gap-3.5 shadow-md w-full lg:max-w-sm shrink-0">
              <div className="w-11 h-11 rounded-lg bg-[#2D6A4F] border border-[#74C69D]/50 flex items-center justify-center text-[#E9D8A6] shrink-0">
                <Sparkles className="w-6 h-6 text-[#74C69D]" />
              </div>
              <div>
                <p className="text-xs text-[#D8F3DC]/80">Your Green Reward Balance</p>
                <p className="text-base sm:text-lg font-bold text-white">
                  {userProfile.approvedPoints} Points Available
                  <span className="text-xs font-semibold text-[#74C69D] ml-1.5">
                    (-₹{userProfile.approvedPoints} off)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Search, Filter & Sort Toolbar */}
        <div className="bg-white rounded-xl shadow-md border border-stone-200 p-4 sm:p-5 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search bags, storage, covers, planters, sarees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-6 flex items-center justify-end gap-2 text-xs sm:text-sm">
              <span className="text-stone-500 font-medium flex items-center gap-1 shrink-0">
                <ArrowUpDown className="w-3.5 h-3.5" /> Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-stone-50 border border-stone-300 text-stone-700 rounded-lg px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] cursor-pointer"
              >
                <option value="featured">Featured Collection</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="waste-desc">Most Waste Diverted (kg)</option>
              </select>
            </div>
          </div>

          {/* Category Chips Bar */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-3 mt-3 border-t border-stone-100 text-sm">
            <span className="text-stone-400 flex items-center gap-1 text-xs font-medium mr-1 shrink-0">
              <Filter className="w-3 h-3" /> Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0 min-h-[34px] ${
                  selectedCategory === cat
                    ? 'bg-[#1B4332] text-white shadow-xs ring-2 ring-[#74C69D]/40'
                    : 'bg-stone-100 text-stone-600 hover:bg-[#EBF8EE] hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 text-xs text-stone-500 gap-2">
          <p>
            Showing <strong className="text-stone-900">{sortedProducts.length}</strong> upcycled items
            {selectedCategory !== 'All' && <span> in <strong>{selectedCategory}</strong></span>}
          </p>
          <div className="flex items-center gap-1.5 text-stone-700 font-medium bg-[#F2FAF4] border border-[#B7E4C7] px-2.5 py-1 rounded-md">
            <Truck className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
            <span>Seamless doorstep shipping available for all products.</span>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center my-6">
            <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-stone-800 mb-1">No matching products found</h3>
            <p className="text-sm text-stone-500 mb-4">
              Try adjusting your search terms or filter selection.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 bg-[#2D6A4F] text-white text-xs font-semibold rounded-lg hover:bg-[#1B4332] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 mb-12">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Material Lifecycle & Quality Guarantee Banner */}
        <div className="bg-[#1B4332] text-white rounded-2xl p-6 sm:p-10 mb-12 overflow-hidden relative">
          <div className="relative z-10 max-w-3xl">
            <span className="text-[11px] font-bold text-[#74C69D] uppercase tracking-wider block mb-2">
              Our Circular Manufacturing Guarantee
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              100% Traceable Craftsmanship from Household Discard to Daily Luxury
            </h3>
            <p className="text-stone-200 text-xs sm:text-sm leading-relaxed mb-6">
              Every purchase directly supports rural artisan commissions and keeps clean post-consumer waste out of landfills.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="bg-[#153426]/80 p-4 rounded-xl border border-[#52B788]/30">
                <Leaf className="w-5 h-5 text-[#52B788] mb-2" />
                <h4 className="font-bold text-sm text-white">Zero Virgin Material</h4>
                <p className="text-[11px] text-stone-300 mt-1">
                  All structural fabrics, polymers, and linings are 100% repurposed.
                </p>
              </div>

              <div className="bg-[#153426]/80 p-4 rounded-xl border border-[#52B788]/30">
                <Heart className="w-5 h-5 text-[#DDA15E] mb-2" />
                <h4 className="font-bold text-sm text-white">Direct Artisan Fair Wage</h4>
                <p className="text-[11px] text-stone-300 mt-1">
                  70% of gross margin transfers to rural self-help group members.
                </p>
              </div>

              <div className="bg-[#153426]/80 p-4 rounded-xl border border-[#52B788]/30">
                <Layers className="w-5 h-5 text-[#74C69D] mb-2" />
                <h4 className="font-bold text-sm text-white">Double-Stitch Reinforced</h4>
                <p className="text-[11px] text-stone-300 mt-1">
                  Commercial grade heavy-duty stitching engineered for years of daily use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
