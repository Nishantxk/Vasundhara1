import React from 'react';
import {
  Users,
  GraduationCap,
  Award,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  DollarSign,
  Heart,
  Sparkles,
  MapPin,
  Clock,
  Briefcase,
} from 'lucide-react';
import { useVasundharaStore } from '../store/useVasundharaStore';

export const EmpowermentPage: React.FC = () => {
  const { setTraineeFormOpen, setActivePage, setFundingOpen } = useVasundharaStore();

  const curriculum = [
    {
      week: 'Week 1',
      title: 'Material Science & Scrap Grading',
      description:
        'Trainees learn systematic polymer identification (HDPE, PP, PET), fabric GSM tensile testing, and chemical-free bio-washing and sanitization procedures.',
      hours: '30 Practical Workshop Hours',
      badge: 'Foundation',
    },
    {
      week: 'Week 2',
      title: 'Low-Heat Moulding & Upcycled Weaving',
      description:
        'Hands-on operation of low-temperature thermo-compression machinery for planters and multi-harness traditional pit-loom weaving for saree tote bags and runners.',
      hours: '36 Machine Hours',
      badge: 'Core Skill',
    },
    {
      week: 'Week 3',
      title: 'Commercial Quality Control & Finishing',
      description:
        'Reinforced double-stitch techniques, brass hardware assembly for sling bags and purses, water-resistance coatings, and strict zero-defect tolerance inspection.',
      hours: '32 Production Hours',
      badge: 'Standardization',
    },
    {
      week: 'Week 4',
      title: 'Digital Payments & SHG Cooperative Governance',
      description:
        'Opening direct Jan Dhan bank accounts, digital payments training, cooperative dividend tracking, workplace safety protocols, and micro-enterprise leadership.',
      hours: '24 Applied Hours',
      badge: 'Independence',
    },
  ];

  const artisans = [
    {
      name: 'Savita Bai Kamble',
      role: 'Master Weaver & Cluster Leader',
      location: 'Baramati Weaver Collective, Maharashtra',
      story:
        'Joined in 2024 after struggling with irregular seasonal agricultural wages. Today leads a team of 18 women converting over 600 sarees monthly into high-value carry-all totes.',
      wageGrowth: 'From ₹120/day farm labor to steady ₹550/day living wage + cooperative dividend.',
      image:
        'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Ramesh Vitthal Patil',
      role: 'Hydraulic Press & Moulding Specialist',
      location: 'Nashik Polymer Micro-Enterprise',
      story:
        'Formerly an underemployed workshop mechanic. Completed the 4-week mechanical polymer track and now oversees thermo-compression of recycled planters with zero landfill discard.',
      wageGrowth: 'Steady ₹600/day skilled technical wage with workplace safety certification.',
      image:
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Sunita Laxman Shinde',
      role: 'Handloom & Kantha Artisan',
      location: 'Satara Rural Women Cooperative',
      story:
        'Revived traditional quilting and kantha stitching on upcycled denim and saree fabrics. Her quilted handbags and section grocery totes are top sellers across metropolitan stores.',
      wageGrowth: 'Earns independent income financing her two daughters’ engineering and nursing degrees.',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen pb-20">
      {/* Top Hero Banner */}
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
            <span className="text-[#D8F3DC] font-medium">Empowering (Rural Skilling & Livelihood)</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF8EE]/20 border border-[#74C69D]/40 text-[#D8F3DC] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-xs">
                <Users className="w-3.5 h-3.5 text-[#74C69D]" />
                <span>Section 3: Rural Dignity &amp; Skilling Hub</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
                Empowering Rural Artisans
              </h1>
              <p className="text-stone-200 text-sm sm:text-base max-w-2xl leading-relaxed">
                Training is 100% Free. Learn the skill, join the Vasundhara manufacturing network, and earn commissions on every product created.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={() => setTraineeFormOpen(true)}
                className="px-6 py-3.5 bg-[#2D6A4F] hover:bg-[#40916C] text-white rounded-xl font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Apply for 4-Week Trainee Track</span>
              </button>
              <button
                onClick={() => setFundingOpen(true)}
                className="px-5 py-3.5 bg-[#DDA15E] hover:bg-[#BC6C25] text-[#1A201C] hover:text-white rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 text-[#1A201C]" />
                <span>Sponsor a Cluster</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Core Wage & Transparency Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
              Training Fee Structure
            </span>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#2D6A4F]">100% Free</p>
            <p className="text-xs text-stone-500 mt-1">Zero tuition or material costs for trainees.</p>
          </div>

          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
              Revenue & Payout Model
            </span>
            <p className="text-xl sm:text-2xl font-extrabold text-[#1B4332]">Direct Commission</p>
            <p className="text-xs text-stone-500 mt-1">Earn a direct commission per product completed, tracked seamlessly via your dashboard.</p>
          </div>

          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
              Gross Margin Redistribution
            </span>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#DDA15E]">70%</p>
            <p className="text-xs text-stone-500 mt-1">Of catalog sale margin transfers to artisan collectives.</p>
          </div>

          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
              Women Cooperative Ratio
            </span>
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-700">82%</p>
            <p className="text-xs text-stone-500 mt-1">Of active artisanal workforce are rural women leaders.</p>
          </div>
        </div>

        {/* 4-Step Revenue & Payout Workflow Banner */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 mb-12 shadow-sm">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider block mb-1">
              Revenue & Payout Structure
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              Clear Four-Step Earning Pathway
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              1. Complete free training. 2. Manufacture products. 3. Submit finished goods to Vasundhara. 4. Earn a direct commission per product completed, tracked seamlessly via your dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Step 1</span>
              <h4 className="font-bold text-sm text-stone-900 mt-2 mb-1">Complete Free Training</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Enroll in our 100% free practical upcycling tracks with zero tuition fees.</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Step 2</span>
              <h4 className="font-bold text-sm text-stone-900 mt-2 mb-1">Manufacture Products</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Produce high-quality catalog goods with materials delivered to your cluster.</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Step 3</span>
              <h4 className="font-bold text-sm text-stone-900 mt-2 mb-1">Submit Finished Goods</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Submit completed units to Vasundhara for sanitization and marketplace distribution.</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Step 4</span>
              <h4 className="font-bold text-sm text-stone-900 mt-2 mb-1">Earn Direct Commission</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Earn a direct commission per product completed, tracked seamlessly via your dashboard.</p>
            </div>
          </div>
        </div>

        {/* 4-Week Vocational Curriculum Section */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 mb-14 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider block mb-1">
              Certified Practical Education
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              The 4-Week Artisanal Upcycling Curriculum
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Every trainee receives personal mentoring from master weavers and mechanical engineers.
              No prior educational diploma is required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {curriculum.map((item, idx) => (
              <div key={idx} className="bg-stone-50 rounded-xl p-5 border border-stone-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#2D6A4F] bg-emerald-100 px-2 py-0.5 rounded">
                      {item.week}
                    </span>
                    <span className="text-[10px] font-semibold text-stone-400 uppercase">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-2">{item.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="pt-3 border-t border-stone-200 text-[11px] text-stone-500 flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  <span>{item.hours}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-stone-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Includes ISO-compliant occupational safety gear and health insurance coverage.</span>
            </div>
            <button
              onClick={() => setTraineeFormOpen(true)}
              className="px-5 py-2.5 bg-[#1B4332] hover:bg-[#2D6A4F] text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Submit Trainee Application Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Real Life Artisan Spotlights (Text-Only Profiles) */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider block mb-1">
              Voices from the Clusters
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Real Lives, Real Livelihoods
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Behind every product is an artisan whose family’s economic security is permanently transformed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artisans.map((artisan, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 hover:border-[#74C69D]/70 shadow-xs hover:shadow-md transition-all p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-stone-900 leading-tight">
                        {artisan.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#2D6A4F] mt-0.5">
                        {artisan.role}
                      </p>
                    </div>
                    <span className="w-9 h-9 rounded-full bg-[#EBF8EE] border border-[#B7E4C7] text-[#1B4332] flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                      {artisan.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-4 pb-3 border-b border-stone-100">
                    <MapPin className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
                    <span className="truncate">{artisan.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 italic">
                    &ldquo;{artisan.story}&rdquo;
                  </p>
                </div>

                <div className="pt-3.5 border-t border-stone-100 bg-[#FAF8F5] -mx-6 -mb-6 p-4 rounded-b-2xl text-[11px] text-emerald-900 font-semibold flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{artisan.wageGrowth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Occupational Safety & Health Guarantee */}
        <div className="bg-[#153426] text-white rounded-2xl p-6 sm:p-10 mb-12">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold text-[#52B788] uppercase tracking-wider block mb-2">
              Human-First Industrial Standards
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Zero-Toxicity, Ergonomic Rural Workshops
            </h3>
            <p className="text-stone-200 text-xs sm:text-sm leading-relaxed mb-6">
              Our micro-enterprises operate strictly below chemical emission safety limits. Low-temperature
              extrusion prevents harmful dioxin or chlorine release. Handlooms are ergonomically designed to
              prevent lumbar strain.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="bg-[#0D281E] p-4 rounded-xl border border-[#2D6A4F]">
                <ShieldCheck className="w-5 h-5 text-[#74C69D] mb-2" />
                <h4 className="font-bold text-sm text-white">Fume Extraction</h4>
                <p className="text-[11px] text-stone-300 mt-1">
                  HEPA & activated carbon filters maintain clean ambient air in all moulding bays.
                </p>
              </div>

              <div className="bg-[#0D281E] p-4 rounded-xl border border-[#2D6A4F]">
                <ShieldCheck className="w-5 h-5 text-[#74C69D] mb-2" />
                <h4 className="font-bold text-sm text-white">Ergonomic Seating</h4>
                <p className="text-[11px] text-stone-300 mt-1">
                  Custom adjustable seating reduces posture fatigue on 6-hour work shifts.
                </p>
              </div>

              <div className="bg-[#0D281E] p-4 rounded-xl border border-[#2D6A4F]">
                <ShieldCheck className="w-5 h-5 text-[#74C69D] mb-2" />
                <h4 className="font-bold text-sm text-white">Child Care & ESI</h4>
                <p className="text-[11px] text-stone-300 mt-1">
                  On-site crèches and comprehensive family healthcare coverage for all artisans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
