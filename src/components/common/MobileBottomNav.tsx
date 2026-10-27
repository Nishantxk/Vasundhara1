import React from 'react';
import { ShoppingBag, Recycle, Users, HeartHandshake, Home } from 'lucide-react';
import { useVasundharaStore } from '../../store/useVasundharaStore';
import { scrollToSection } from '../../utils/formatters';

export const MobileBottomNav: React.FC = () => {
  const { activePage, setActivePage, setFundingOpen } = useVasundharaStore();

  const handleNav = (targetPage: 'home' | 'products' | 'donate' | 'empowerment', sectionId?: string) => {
    if (targetPage === 'home') {
      setActivePage('home');
      if (sectionId) {
        setTimeout(() => scrollToSection(sectionId), 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      setActivePage(targetPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#153426]/95 backdrop-blur-md border-t border-[#2D6A4F] shadow-2xl px-2 py-1.5 safe-area-pb"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="grid grid-cols-5 items-center justify-around max-w-md mx-auto">
        {/* 1. Home Hub */}
        <button
          onClick={() => handleNav('home')}
          className={`flex flex-col items-center justify-center py-1 px-1 transition-all cursor-pointer min-h-[44px] ${
            activePage === 'home'
              ? 'text-white font-semibold'
              : 'text-stone-300 hover:text-white'
          }`}
        >
          <Home className={`w-5 h-5 mb-0.5 stroke-[2] ${activePage === 'home' ? 'text-[#74C69D]' : ''}`} />
          <span className="text-[10px] tracking-tight">Home</span>
        </button>

        {/* 2. Eco Products */}
        <button
          onClick={() => handleNav('products', 'products')}
          className={`flex flex-col items-center justify-center py-1 px-1 transition-all cursor-pointer min-h-[44px] ${
            activePage === 'products'
              ? 'text-white font-semibold'
              : 'text-stone-300 hover:text-white'
          }`}
        >
          <ShoppingBag className={`w-5 h-5 mb-0.5 stroke-[2] ${activePage === 'products' ? 'text-[#74C69D]' : ''}`} />
          <span className="text-[10px] tracking-tight">Products</span>
        </button>

        {/* 3. Be a Part / Donate */}
        <button
          onClick={() => handleNav('donate', 'be-a-part')}
          className={`flex flex-col items-center justify-center py-1 px-1 transition-all cursor-pointer min-h-[44px] ${
            activePage === 'donate'
              ? 'text-white font-semibold'
              : 'text-stone-300 hover:text-white'
          }`}
        >
          <Recycle className={`w-5 h-5 mb-0.5 stroke-[2] ${activePage === 'donate' ? 'text-[#74C69D]' : 'text-[#74C69D]'}`} />
          <span className="text-[10px] tracking-tight">Donate</span>
        </button>

        {/* 4. Empowerment */}
        <button
          onClick={() => handleNav('empowerment', 'empowerment')}
          className={`flex flex-col items-center justify-center py-1 px-1 transition-all cursor-pointer min-h-[44px] ${
            activePage === 'empowerment'
              ? 'text-white font-semibold'
              : 'text-stone-300 hover:text-white'
          }`}
        >
          <Users className={`w-5 h-5 mb-0.5 stroke-[2] ${activePage === 'empowerment' ? 'text-[#74C69D]' : ''}`} />
          <span className="text-[10px] tracking-tight">Empower</span>
        </button>

        {/* 5. Funding */}
        <button
          onClick={() => setFundingOpen(true)}
          className="flex flex-col items-center justify-center py-1 px-1 text-stone-300 hover:text-[#E9D8A6] active:scale-95 transition-all cursor-pointer min-h-[44px]"
        >
          <HeartHandshake className="w-5 h-5 mb-0.5 stroke-[2] text-[#DDA15E]" />
          <span className="text-[10px] font-medium tracking-tight text-[#E9D8A6]">Funding</span>
        </button>
      </div>
    </nav>
  );
};
