import React, { useState } from 'react';
import {
  Instagram,
  Mail,
  ExternalLink,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';

export const SocialConnectSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'vrcvasundhraproject2026@gmail.com';
  const instagramHandle = '@vrcvasundhraproject2026';
  const instagramUrl = 'https://www.instagram.com/vrcvasundhraproject2026/';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section id="connect" className="py-12 sm:py-20 bg-[#FAF9F6] border-t border-stone-200 scroll-mt-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF8EE] border border-[#B7E4C7] text-[#1B4332] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
            <span>Official Communications Desk</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight break-words">
            Connect with Vasundhara Project
          </h2>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm leading-relaxed">
            Reach our central coordination team for partnerships, waste collection drives, and bulk orders, or follow our daily artisan stories on Instagram.
          </p>
        </div>

        {/* Two Primary Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Card 1: Official Instagram Channel */}
          <div className="bg-white rounded-2xl border border-stone-200/90 hover:border-[#74C69D]/70 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#EBF8EE] border border-[#B7E4C7] text-[#1B4332] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Instagram className="w-6 h-6 stroke-[1.8]" />
                </div>
                <span className="text-[11px] font-mono font-semibold text-[#153426] bg-[#D8F3DC] border border-[#74C69D]/40 px-2.5 py-1 rounded-full">
                  Official Handle
                </span>
              </div>

              <span className="text-[11px] font-semibold text-[#2D6A4F] uppercase tracking-wider block mb-1">
                Visual Stories &bull; Workshop Updates
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                Instagram Community
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                Follow our rural clusters in Pusad and across Maharashtra. Watch live upcycling cycles, meet our craftswomen, and discover newly released product batches.
              </p>

              {/* Instagram Profile Badge Callout */}
              <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-3.5 flex items-center justify-between gap-3 mb-6">
                <div className="min-w-0">
                  <p className="text-[10px] text-stone-500 uppercase tracking-wide font-semibold">Username</p>
                  <p className="text-xs sm:text-sm font-bold text-[#1B4332] font-mono truncate">
                    {instagramHandle}
                  </p>
                </div>
                <span className="text-[11px] text-[#2D6A4F] font-semibold shrink-0">
                  @vrcvasundhraproject2026
                </span>
              </div>
            </div>

            <div>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#2D6A4F] active:scale-[0.98] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer min-h-[44px]"
              >
                <Instagram className="w-4 h-4 shrink-0" />
                <span>Visit @vrcvasundhraproject2026 on Instagram</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 opacity-75" />
              </a>
              <p className="text-center text-[11px] text-stone-500 mt-2">
                Opens our official profile in a new tab.
              </p>
            </div>
          </div>

          {/* Card 2: Official Gmail Desk */}
          <div className="bg-white rounded-2xl border border-stone-200/90 hover:border-[#74C69D]/70 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#EBF8EE] border border-[#B7E4C7] text-[#1B4332] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 stroke-[1.8]" />
                </div>
                <span className="text-[11px] font-mono font-semibold text-[#153426] bg-[#D8F3DC] border border-[#74C69D]/40 px-2.5 py-1 rounded-full">
                  Official Email
                </span>
              </div>

              <span className="text-[11px] font-semibold text-[#2D6A4F] uppercase tracking-wider block mb-1">
                Direct Inquiries &bull; Institutional Tie-Ups
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                Central Gmail Desk
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                Have questions regarding institutional scrap collection, CSR grants, retail distribution, or bulk custom orders? Send our coordination office a direct email.
              </p>

              {/* Email Address Readout & Copy Button */}
              <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-2 mb-6">
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] text-stone-500 uppercase tracking-wide font-semibold">Direct Email Address</p>
                  <p className="text-xs sm:text-sm font-bold text-[#1B4332] font-mono truncate select-all">
                    {emailAddress}
                  </p>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="text-emerald-700 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center justify-center gap-2 bg-[#DDA15E] hover:bg-[#BC6C25] active:scale-[0.98] text-[#1A201C] hover:text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer min-h-[44px]"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>Compose Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 bg-[#F2FAF4] hover:bg-[#EBF8EE] border border-[#B7E4C7] active:scale-[0.98] text-[#1B4332] py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer min-h-[44px]"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4 text-[#2D6A4F]" />}
                <span>{copied ? 'Address Copied' : 'Copy Email'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Central Operations Coordinate Strip */}
        <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-xs text-stone-600">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#EBF8EE] border border-[#B7E4C7] text-[#1B4332] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-stone-900 text-xs sm:text-sm">Central Coordination Office</p>
              <p className="text-[11px] text-stone-500 mt-0.5">
                Main Artisan Processing Complex, Pusad, Maharashtra 445204
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#EBF8EE] border border-[#B7E4C7] text-[#1B4332] flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-stone-900 text-xs sm:text-sm">Response Time</p>
              <p className="text-[11px] text-stone-500 mt-0.5">
                All email inquiries answered within 24 business hours.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#EBF8EE] border border-[#B7E4C7] text-[#1B4332] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-stone-900 text-xs sm:text-sm">Verified Credentials</p>
              <p className="text-[11px] text-stone-500 mt-0.5">
                Official Vasundhara Project accounts verified for secure communications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
