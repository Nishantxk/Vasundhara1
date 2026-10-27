import React, { useState } from 'react';
import {
  Recycle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Scale,
  Calendar,
  Layers,
  Truck,
} from 'lucide-react';
import { useVasundharaStore } from '../store/useVasundharaStore';

export const DonatePage: React.FC = () => {
  const {
    exchangeRates,
    setDonationFormOpen,
    donations,
    userProfile,
    setActivePage,
  } = useVasundharaStore();

  // Interactive Live Points Simulator State
  const [simFlowersKg, setSimFlowersKg] = useState(5);
  const [simSarees, setSimSarees] = useState(2);
  const [simPlasticKg, setSimPlasticKg] = useState(5);

  const calculatedSimulatorPoints =
    simFlowersKg * exchangeRates.flowers +
    simSarees * exchangeRates.saree +
    simPlasticKg * exchangeRates.plastic;

  const hubs = [
    {
      city: 'Central Hub: Pusad, Maharashtra, India',
      address: 'Main Artisan Processing Complex, Pusad, Maharashtra 445204',
      contact: 'Central Operations Desk (+91 98220 89123)',
      hours: 'Mon - Sat: 08:30 AM to 06:00 PM',
      capacity: 'Central Intake & Upcycling Network Hub',
    },
    {
      city: 'Other Hub: Washim',
      address: 'MIDC Industrial Area, Washim, Maharashtra 444505',
      contact: 'Washim Aggregation Center (+91 94231 67210)',
      hours: 'Mon - Sat: 09:00 AM to 05:30 PM',
      capacity: 'Segregated Plastics & Pre-Loved Sarees',
    },
    {
      city: 'Other Hub: Umarkhed',
      address: 'Artisan Workshop Cluster, Umarkhed, Maharashtra 445206',
      contact: 'Umarkhed Coordinator (+91 97640 12890)',
      hours: 'Mon - Fri: 09:00 AM to 06:30 PM',
      capacity: 'Handloom & Footwear Remanufacturing',
    },
    {
      city: 'Other Hub: Nanded',
      address: 'Cooperative Textile Center, Nanded, Maharashtra 431601',
      contact: 'Nanded Desk (+91 98901 44567)',
      hours: 'Mon - Sat: 08:30 AM to 05:00 PM',
      capacity: 'Textiles & Rigid Polymer Aggregation',
    },
    {
      city: 'Other Hub: Yavatmal District',
      address: 'District Rural Collection Hub, Yavatmal, Maharashtra 445001',
      contact: 'District Operations (+91 98234 56789)',
      hours: 'Mon - Sat: 09:00 AM to 06:00 PM',
      capacity: 'District Mobilization & Doorstep Logistics',
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen pb-20">
      {/* Top Header */}
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
            <span className="text-[#D8F3DC] font-medium">Be a Part (Donation Hub)</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF8EE]/20 border border-[#74C69D]/40 text-[#D8F3DC] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-xs">
                <Recycle className="w-3.5 h-3.5 text-[#74C69D]" />
                <span>Section 2: Material Mobilization &amp; Upcycling</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
                Be a Part: Donate Domestic Scrap
              </h1>
              <p className="text-stone-200 text-sm sm:text-base max-w-2xl leading-relaxed">
                Turn your pre-loved sarees, clean household plastics, and worn footwear into vital raw materials
                that fuel rural women’s artisanal enterprises. Earn instant verified Green Reward Points for every pickup.
              </p>
            </div>

            <button
              onClick={() => setDonationFormOpen(true)}
              className="px-6 py-3.5 bg-[#DDA15E] hover:bg-[#BC6C25] text-[#1A201C] hover:text-white rounded-xl font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <Truck className="w-4 h-4 text-[#1A201C]" />
              <span>Schedule Free Doorstep Pickup</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Interactive Points Simulator Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6 sm:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-stone-200 gap-4">
            <div>
              <span className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider block mb-1">
                Interactive Reward Calculator
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                Estimate Your Green Points & Rupee Savings
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Move the sliders to see how much e-commerce store discount you will earn.
              </p>
            </div>

            <div className="bg-[#153426] text-white px-5 py-3.5 rounded-xl border border-[#2D6A4F] flex items-center gap-4 shrink-0 shadow-sm">
              <div className="text-right">
                <p className="text-[10px] text-stone-300 uppercase tracking-wider">Estimated Points</p>
                <p className="text-2xl font-extrabold text-[#74C69D] leading-tight">
                  {calculatedSimulatorPoints} pts
                </p>
              </div>
              <div className="h-8 w-px bg-[#2D6A4F]" />
              <div className="text-left">
                <p className="text-[10px] text-stone-300 uppercase tracking-wider">Store Discount</p>
                <p className="text-2xl font-extrabold text-amber-300 leading-tight">
                  ₹{calculatedSimulatorPoints} OFF
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* 1. Puja & Festival Garlands */}
            <div className="bg-emerald-50/50 p-4 sm:p-5 rounded-xl border border-emerald-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-bold text-stone-900">Puja &amp; Festival Garlands</span>
                <span className="text-[11px] font-bold text-[#1B4332] bg-emerald-100 px-2.5 py-0.5 rounded">
                  {exchangeRates.flowers} pts / kg
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                value={simFlowersKg}
                onChange={(e) => setSimFlowersKg(parseInt(e.target.value) || 0)}
                className="w-full accent-[#2D6A4F] cursor-pointer"
              />
              <div className="flex items-center justify-between text-xs text-stone-600 mt-2">
                <span>Selected: <strong className="text-stone-900">{simFlowersKg} kg</strong></span>
                <span className="font-mono font-semibold text-emerald-800">= {simFlowersKg * exchangeRates.flowers} pts</span>
              </div>
            </div>

            {/* 2. Old Clothes / Sarees */}
            <div className="bg-stone-50 p-4 sm:p-5 rounded-xl border border-stone-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-bold text-stone-800">Pre-Loved Sarees &amp; Clothes</span>
                <span className="text-[11px] font-bold text-[#2D6A4F] bg-emerald-100 px-2 py-0.5 rounded">
                  {exchangeRates.saree} pts / unit
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                value={simSarees}
                onChange={(e) => setSimSarees(parseInt(e.target.value) || 0)}
                className="w-full accent-[#2D6A4F] cursor-pointer"
              />
              <div className="flex items-center justify-between text-xs text-stone-500 mt-2">
                <span>Selected: <strong className="text-stone-900">{simSarees} units</strong></span>
                <span className="font-mono font-semibold text-emerald-800">= {simSarees * exchangeRates.saree} pts</span>
              </div>
            </div>

            {/* 3. Mixed Plastics */}
            <div className="bg-stone-50 p-4 sm:p-5 rounded-xl border border-stone-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-bold text-stone-800">Clean Household Plastics</span>
                <span className="text-[11px] font-bold text-[#2D6A4F] bg-emerald-100 px-2 py-0.5 rounded">
                  {exchangeRates.plastic} pts / kg
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                value={simPlasticKg}
                onChange={(e) => setSimPlasticKg(parseInt(e.target.value) || 0)}
                className="w-full accent-[#2D6A4F] cursor-pointer"
              />
              <div className="flex items-center justify-between text-xs text-stone-500 mt-2">
                <span>Selected: <strong className="text-stone-900">{simPlasticKg} kg</strong></span>
                <span className="font-mono font-semibold text-emerald-800">= {simPlasticKg * exchangeRates.plastic} pts</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-stone-500">
              1 Reward Point = 1 Rupee direct deduction on any eco-product in our catalog.
            </p>
            <button
              onClick={() => setDonationFormOpen(true)}
              className="px-5 py-2.5 bg-[#2D6A4F] hover:bg-[#1B4332] text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schedule Pickup for these Materials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 5-Step Visual Transformation Journey with Photography */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider block mb-1">
              Zero-Landfill Circular Chain
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              The Journey of Your Donated Materials
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              See exactly what happens after our electric vehicle collects your segregated scrap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Step 1 */}
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col">
              <div className="h-36 relative overflow-hidden bg-stone-100">
                <img
                  src="/assets/aistudio/image_80750044.png"
                  alt="Doorstep collection and weighing"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-[#153426] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  Step 1
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-xs sm:text-sm text-stone-900 mb-1">Doorstep Weighing</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed">
                  Collected at your convenience with digital scale verification and immediate point receipts.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col">
              <div className="h-36 relative overflow-hidden bg-stone-100">
                <img
                  src="/assets/aistudio/image_f29f67db.png"
                  alt="Hub steam sanitization and grading"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-[#153426] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  Step 2
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-xs sm:text-sm text-stone-900 mb-1">Hub Sanitization</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed">
                  Materials are steam-sanitized, sorted by polymer grades, and color-matched by trained SHG members.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col">
              <div className="h-36 relative overflow-hidden bg-stone-100">
                <img
                  src="/assets/aistudio/image_1396c589.png"
                  alt="Mechanical preparation and precision machining"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-[#153426] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  Step 3
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-xs sm:text-sm text-stone-900 mb-1">Mechanical Preparation</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed">
                  Plastics are granulated into uniform pellets; sarees are sliced into tensioned weaving cords.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col">
              <div className="h-36 relative overflow-hidden bg-stone-100">
                <img
                  src="/assets/aistudio/image_88c6e714.png"
                  alt="Rural artisanal fabrication and handcrafting"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-[#153426] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  Step 4
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-xs sm:text-sm text-stone-900 mb-1">Artisan Fabrication</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed">
                  Rural women collectives weave bags, thermo-compress planters, and assemble high-utility goods.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col">
              <div className="h-36 relative overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
                  alt="Finished product"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-[#153426] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  Step 5
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-xs sm:text-sm text-stone-900 mb-1">Sustainable Retail</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed">
                  Quality certified goods return to conscious consumers with direct points redemption discounts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Accept vs What We Cannot Accept */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Accept Checklist */}
          <div className="bg-emerald-50/70 rounded-2xl border border-emerald-200 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              <h3 className="text-lg font-bold text-emerald-950">
                Accepted Domestic Materials
              </h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-emerald-900">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                <span><strong>Pre-loved Sarees & Dupattas:</strong> Cotton, silk, georgette, and zari-bordered sarees (washed & dry).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                <span><strong>Rigid Plastic Containers:</strong> HDPE milk jugs, shampoo bottles, detergent cans (rinsed).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                <span><strong>Clean Polypropylene Containers:</strong> Food storage boxes, PP buckets, discarded plastic trays.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                <span><strong>Puja &amp; Festival Flower Garlands:</strong> Discarded marigolds, roses, and temple floral offerings (Nirmalya).</span>
              </li>
            </ul>
          </div>

          {/* Decline Checklist */}
          <div className="bg-rose-50/70 rounded-2xl border border-rose-200 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-rose-700" />
              <h3 className="text-lg font-bold text-rose-950">
                Materials We Cannot Accept
              </h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-rose-900">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                <span><strong>Wet or Food-Contaminated Waste:</strong> Organic vegetable peels, unwashed oily food boxes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                <span><strong>Hazardous & Medical Waste:</strong> Syringes, medicinal blister packs, pesticide bottles, batteries.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                <span><strong>Multilayered Metalized Laminates:</strong> Metallized foil chips packets and gutkha packaging.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                <span><strong>Heavily Soiled or Wet Textiles:</strong> Damp rags or oil-soaked garage wiping towels.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Aggregation Hub Directory */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 mb-12 shadow-xs">
          <div className="mb-6">
            <span className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider block mb-1">
              Direct Drop-Off Locations
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
              Regional Material Aggregation Hubs
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Prefer dropping off directly? Visit any of our certified collection points during working hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hubs.map((hub, idx) => (
              <div key={idx} className="bg-stone-50 p-4 sm:p-5 rounded-xl border border-stone-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <MapPin className="w-4 h-4 text-[#2D6A4F]" />
                    <h4 className="font-bold text-sm text-stone-900">{hub.city}</h4>
                  </div>
                  <p className="text-xs text-stone-600 mb-2">{hub.address}</p>
                  <p className="text-xs font-medium text-stone-700 mb-1">{hub.contact}</p>
                </div>
                <div className="pt-2 mt-2 border-t border-stone-200 text-[11px] text-stone-500 flex items-center justify-between">
                  <span>{hub.hours}</span>
                  <span className="text-emerald-700 font-semibold">{hub.capacity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
