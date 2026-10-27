import React from 'react';
import { Leaf, ShieldCheck, MapPin, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '../../utils/formatters';
import { useVasundharaStore } from '../../store/useVasundharaStore';

export const GlobalFooter: React.FC = () => {
  const { setFundingOpen, setAdminOpen, productCatalog } = useVasundharaStore();

  return (
    <footer className="bg-[#0F1E16] text-stone-300 border-t border-stone-800/80 pt-12 pb-24 sm:pt-16 sm:pb-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand & Purpose */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/IMG-20261022-WA0015-removebg-preview_cf3e70de.png"
                alt="वसुंधरा - VASUNDHARA"
                className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-sm"
              />
              <div>
                <span className="block text-xl font-black tracking-tight uppercase text-white font-sans">
                  VASUNDHARA
                </span>
                <span className="block text-[10px] text-[#74C69D] font-medium tracking-wide">
                  Green Enterprise Model
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Smart Green Enterprise Model. Transforming temple flower garlands, pre-loved textiles, and domestic plastics into sustainable everyday goods.
            </p>
            <div className="pt-1">
              <button
                onClick={() => setFundingOpen(true)}
                className="text-xs font-semibold text-[#DDA15E] hover:underline flex items-center gap-1 cursor-pointer py-1"
              >
                <span>Support Rural Clusters &bull; Give Funding</span>
              </button>
            </div>
          </div>

          {/* Official Channels & Inquiries */}
          <div className="space-y-3 text-xs">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">
              Official Channels
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.instagram.com/vrcvasundhraproject2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-300 hover:text-white group transition-colors py-0.5"
                >
                  <div className="w-6 h-6 rounded-md bg-[#EBF8EE]/10 border border-[#74C69D]/30 text-[#74C69D] flex items-center justify-center shrink-0 group-hover:bg-[#EBF8EE]/20 transition-colors">
                    <Instagram className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-medium text-stone-200 group-hover:text-white truncate">
                      @vrcvasundhraproject2026
                    </span>
                    <span className="text-[10px] text-stone-500 block">Instagram Official</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover:text-[#74C69D] shrink-0 ml-auto" />
                </a>
              </li>

              <li>
                <a
                  href="mailto:vrcvasundhraproject2026@gmail.com"
                  className="flex items-center gap-2 text-stone-300 hover:text-white group transition-colors py-0.5"
                >
                  <div className="w-6 h-6 rounded-md bg-[#EBF8EE]/10 border border-[#74C69D]/30 text-[#74C69D] flex items-center justify-center shrink-0 group-hover:bg-[#EBF8EE]/20 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-medium text-stone-200 group-hover:text-white truncate font-mono text-[11px]">
                      vrcvasundhraproject2026@gmail.com
                    </span>
                    <span className="text-[10px] text-stone-500 block">Direct Inquiries Desk</span>
                  </div>
                </a>
              </li>

              <li className="pt-1 border-t border-stone-800/80">
                <div className="flex items-start gap-2 text-stone-400 text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-[#52B788] shrink-0 mt-0.5" />
                  <span>Central Operations: Pusad, Maharashtra, India</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Direct Dedicated Pages & Routing */}
          <div className="space-y-2.5 sm:space-y-3 text-xs">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">
              Enterprise Modules
            </p>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    useVasundharaStore.getState().setActivePage('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer py-1 block text-left"
                >
                  Dedicated: Eco-Products Page ({productCatalog.length} Items)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    useVasundharaStore.getState().setActivePage('donate');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer py-1 block text-left"
                >
                  Dedicated: Be a Part (Donation Hub)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    useVasundharaStore.getState().setActivePage('empowerment');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer py-1 block text-left"
                >
                  Dedicated: Empowering (Rural Skilling)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setAdminOpen(true)}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer py-1 block text-left"
                >
                  Operations: Admin Console
                </button>
              </li>
            </ul>
          </div>

          {/* Regional Hubs & Standards */}
          <div className="space-y-3 text-xs">
            <div>
              <p className="font-bold text-white uppercase tracking-wider text-[11px] mb-1.5">
                Regional Hubs Network
              </p>
              <ul className="grid grid-cols-2 gap-1.5 text-stone-400 text-[11px]">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52B788] shrink-0" />
                  <span>Pusad</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52B788] shrink-0" />
                  <span>Washim</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52B788] shrink-0" />
                  <span>Umarkhed</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52B788] shrink-0" />
                  <span>Nanded</span>
                </li>
                <li className="flex items-center gap-1.5 col-span-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52B788] shrink-0" />
                  <span>Yavatmal district</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 border-t border-stone-800/80">
              <div className="flex items-center gap-2 text-stone-400 text-[11px]">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fair Living Wage Employer &bull; NITI Aayog MSME</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3 text-center sm:text-left">
          <p>
            &copy; 2026 Vasundhara Ecological Enterprises Initiative.
          </p>
          <p>
            Local Waste &bull; Local Products &bull; Local Employment
          </p>
        </div>
      </div>
    </footer>
  );
};
