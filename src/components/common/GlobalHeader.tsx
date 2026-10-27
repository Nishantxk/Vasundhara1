import React, { useState } from 'react';
import {
  User,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Menu,
  X,
  ShoppingBag,
  Recycle,
  Users,
  ChevronRight,
  Home,
  ExternalLink,
  Instagram,
  Mail,
} from 'lucide-react';
import { useVasundharaStore } from '../../store/useVasundharaStore';
import { scrollToSection } from '../../utils/formatters';

export const GlobalHeader: React.FC = () => {
  const {
    activePage,
    setActivePage,
    userProfile,
    setProfileOpen,
    setFundingOpen,
    setAdminOpen,
    setDonationFormOpen,
    setTraineeFormOpen,
  } = useVasundharaStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string, pageTarget?: 'products' | 'donate' | 'empowerment') => {
    setMobileMenuOpen(false);
    if (activePage !== 'home') {
      if (pageTarget) {
        setActivePage(pageTarget);
      } else {
        setActivePage('home');
        setTimeout(() => scrollToSection(sectionId), 100);
      }
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleSwitchPage = (page: 'home' | 'products' | 'donate' | 'empowerment') => {
    setMobileMenuOpen(false);
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAction = (action: () => void) => {
    setMobileMenuOpen(false);
    action();
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#112318]/95 backdrop-blur-md border-b border-stone-800/80 text-white shadow-xs w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[72px] sm:min-h-[82px] py-2 gap-3 sm:gap-6">
            {/* Zone 1: Brand Wordmark & Visible Prominent Logo */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleSwitchPage('home')}
                className="flex items-center gap-2.5 sm:gap-3.5 text-left group cursor-pointer focus:outline-none"
                aria-label="Vasundhara Enterprise Home"
              >
                <img
                  src="/assets/aistudio/IMG-20261022-WA0015-removebg-preview_cf3e70de.png"
                  alt="वसुंधरा - VASUNDHARA Logo"
                  className="h-14 sm:h-18 md:h-20 w-auto object-contain filter drop-shadow-md transition-transform group-hover:scale-105"
                />
                <div>
                  <span className="block text-lg sm:text-2xl font-black tracking-tight text-white uppercase font-sans">
                    VASUNDHARA
                  </span>
                  <span className="hidden sm:block text-[11px] sm:text-xs text-[#74C69D] font-bold tracking-wider uppercase">
                    Green Enterprise Model
                  </span>
                </div>
              </button>
            </div>

            {/* Zone 2: Clean 4-Link Navigation */}
            <nav className="hidden md:flex items-center gap-1 text-xs lg:text-sm font-medium text-stone-300">
              <button
                onClick={() => handleSwitchPage('home')}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  activePage === 'home'
                    ? 'text-white font-semibold bg-[#2D6A4F]/70 ring-1 ring-[#74C69D]/50 shadow-xs'
                    : 'hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleSwitchPage('products')}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  activePage === 'products'
                    ? 'text-white font-semibold bg-[#2D6A4F]/70 ring-1 ring-[#74C69D]/50 shadow-xs'
                    : 'hover:text-white hover:bg-white/5'
                }`}
              >
                Products
              </button>

              <button
                onClick={() => handleSwitchPage('donate')}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  activePage === 'donate'
                    ? 'text-white font-semibold bg-[#2D6A4F]/70 ring-1 ring-[#74C69D]/50 shadow-xs'
                    : 'hover:text-white hover:bg-white/5'
                }`}
              >
                Donate Scrap
              </button>

              <button
                onClick={() => handleSwitchPage('empowerment')}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  activePage === 'empowerment'
                    ? 'text-white font-semibold bg-[#2D6A4F]/70 ring-1 ring-[#74C69D]/50 shadow-xs'
                    : 'hover:text-white hover:bg-white/5'
                }`}
              >
                Artisan Skilling
              </button>
            </nav>

            {/* Zone 3: Profile Chip & Actions including Top Right Give Funding */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* User Points Chip with Luminous Light Green Accent */}
              <button
                onClick={() => setProfileOpen(true)}
                className="hidden sm:flex items-center gap-2 bg-[#EBF8EE]/10 hover:bg-[#EBF8EE]/20 border border-[#74C69D]/40 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer text-xs"
                title="View user profile and points balance"
              >
                <div className="w-5 h-5 rounded-full bg-[#2D6A4F] border border-[#74C69D]/50 flex items-center justify-center text-white text-[10px] font-semibold">
                  {userProfile.name.charAt(0)}
                </div>
                <div className="flex items-center gap-1 font-mono tabular-nums text-[#74C69D] font-bold text-xs">
                  <span>{userProfile.approvedPoints}</span>
                  <span className="text-[#D8F3DC]/75 font-sans font-normal text-[10px]">pts</span>
                </div>
              </button>

              {/* Admin Console Switcher */}
              <button
                onClick={() => setAdminOpen(true)}
                className="hidden lg:flex items-center gap-1.5 text-stone-300 hover:text-white text-xs font-medium px-2.5 py-1.5 rounded-md hover:bg-white/5 transition-colors cursor-pointer"
                title="Open Admin Operations Console"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-stone-400" />
                <span>Admin</span>
              </button>

              {/* Primary Action Button: Schedule Pickup */}
              <button
                onClick={() => setDonationFormOpen(true)}
                className="hidden xl:inline-flex items-center justify-center bg-[#EBF8EE]/15 hover:bg-[#EBF8EE]/25 border border-[#74C69D]/40 text-white px-3 py-1.5 rounded-lg font-semibold text-xs transition-all shadow-xs cursor-pointer min-h-[36px]"
              >
                Schedule Pickup
              </button>

              {/* Prominent Top Right Corner Give Funding Option */}
              <button
                onClick={() => setFundingOpen(true)}
                className="inline-flex items-center gap-1.5 bg-[#DDA15E] hover:bg-[#BC6C25] active:scale-[0.98] text-[#1A201C] hover:text-white px-3 sm:px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer min-h-[38px] shrink-0"
                title="Support rural artisan clusters with funding"
              >
                <HeartHandshake className="w-4 h-4 shrink-0 text-[#1A201C]" />
                <span>Give Funding</span>
              </button>

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex md:hidden items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 transition-colors cursor-pointer ml-1"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer / Slide-Down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#153426] border-b border-[#2D6A4F] shadow-2xl px-4 py-4 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Quick Profile Readout */}
            <div className="bg-[#0D281E] border border-[#2D6A4F]/70 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-[#2D6A4F] flex items-center justify-center text-white shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white truncate">{userProfile.name}</p>
                  <p className="text-[11px] text-stone-300 truncate max-w-[190px]">{userProfile.address}</p>
                </div>
              </div>
              <button
                onClick={() => handleOpenAction(() => setProfileOpen(true))}
                className="px-2.5 py-1 text-[11px] font-semibold bg-[#2D6A4F] text-[#D8F3DC] rounded-md hover:bg-[#40916C] transition-colors shrink-0"
              >
                Edit
              </button>
            </div>

            {/* Dedicated Pages Navigation */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider px-2">
                Enterprise Pages
              </span>

              <button
                onClick={() => handleSwitchPage('home')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activePage === 'home'
                    ? 'bg-[#2D6A4F] text-white font-semibold'
                    : 'text-stone-200 hover:text-white hover:bg-[#1B4332]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Home className="w-4 h-4 text-[#74C69D]" />
                  <span>Main Home Hub</span>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>

              <button
                onClick={() => handleSwitchPage('products')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activePage === 'products'
                    ? 'bg-[#2D6A4F] text-white font-semibold'
                    : 'text-stone-200 hover:text-white hover:bg-[#1B4332]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-4 h-4 text-[#74C69D]" />
                  <span>Dedicated Page: Eco Products</span>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400" />
              </button>

              <button
                onClick={() => handleSwitchPage('donate')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activePage === 'donate'
                    ? 'bg-[#2D6A4F] text-white font-semibold'
                    : 'text-stone-200 hover:text-white hover:bg-[#1B4332]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Recycle className="w-4 h-4 text-[#74C69D]" />
                  <span>Dedicated Page: Be a Part (Donation)</span>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400" />
              </button>

              <button
                onClick={() => handleSwitchPage('empowerment')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activePage === 'empowerment'
                    ? 'bg-[#2D6A4F] text-white font-semibold'
                    : 'text-stone-200 hover:text-white hover:bg-[#1B4332]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-[#74C69D]" />
                  <span>Dedicated Page: Empowering (Skilling)</span>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400" />
              </button>
            </div>

            {/* Direct Action Hub */}
            <div className="pt-2 border-t border-[#2D6A4F]/60 space-y-2">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider px-2">
                Quick Actions
              </span>

              <button
                onClick={() => handleOpenAction(() => setDonationFormOpen(true))}
                className="w-full flex items-center justify-center gap-2 bg-[#2D6A4F] hover:bg-[#40916C] text-white py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors"
              >
                <Recycle className="w-4 h-4" />
                <span>Take a Step: Schedule Scrap Pickup</span>
              </button>

              <button
                onClick={() => handleOpenAction(() => setTraineeFormOpen(true))}
                className="w-full flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#2D6A4F] border border-[#52B788]/30 text-[#D8F3DC] py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors"
              >
                <Users className="w-4 h-4" />
                <span>Register as Trainee Artisan</span>
              </button>

              <button
                onClick={() => handleOpenAction(() => setFundingOpen(true))}
                className="w-full flex items-center justify-center gap-2 bg-[#DDA15E] hover:bg-[#BC6C25] text-[#1A201C] py-2.5 px-3 rounded-lg text-xs font-bold transition-colors"
              >
                <HeartHandshake className="w-4 h-4 text-[#1A201C]" />
                <span>Give Philanthropic Funding</span>
              </button>

              <button
                onClick={() => handleOpenAction(() => setAdminOpen(true))}
                className="w-full flex items-center justify-center gap-2 bg-[#0D281E] border border-[#52B788]/40 hover:bg-[#1B4332] text-[#74C69D] py-2.5 px-3 rounded-lg text-xs font-bold transition-colors"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Open Admin Operations Console</span>
              </button>

              {/* Official Project Channels */}
              <div className="pt-2 border-t border-[#2D6A4F]/60 space-y-1.5">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider px-2">
                  Official Channels
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://www.instagram.com/vrcvasundhraproject2026/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#74C69D]/40 text-stone-200 hover:text-white text-[11px] font-medium transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#74C69D]" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="mailto:vrcvasundhraproject2026@gmail.com"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#74C69D]/40 text-stone-200 hover:text-white text-[11px] font-medium transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#74C69D]" />
                    <span>Gmail Desk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
