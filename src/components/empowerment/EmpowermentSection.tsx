import React from 'react';
import { Users, GraduationCap, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { useVasundharaStore } from '../../store/useVasundharaStore';

export const EmpowermentSection: React.FC = () => {
  const { setTraineeFormOpen } = useVasundharaStore();

  return (
    <section id="empowerment" className="py-12 sm:py-20 bg-white border-t border-stone-200 scroll-mt-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <p className="text-xs font-semibold tracking-wider text-emerald-800 uppercase mb-2">
            Artisan Livelihoods &bull; 100% Free Vocational Training
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight break-words">
            Empowering Rural Communities Through Skilled Micro-Enterprises
          </h2>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm leading-relaxed">
            Training is 100% Free. Learn the skill, join the Vasundhara manufacturing network, and earn commissions on every product created.
          </p>
        </div>

        {/* Top: Hero image of rural workers */}
        <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-xs mb-8 sm:mb-12">
          <div className="aspect-4/3 sm:aspect-21/9 w-full relative bg-stone-900">
            <img
              src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=1600&q=80"
              alt="Rural Indian handloom craftswoman weaving upcycled textiles"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 text-white max-w-3xl">
              <span className="text-[10px] font-semibold tracking-wider uppercase text-[#D8F3DC] bg-[#EBF8EE]/20 border border-[#74C69D]/40 px-2.5 py-0.5 rounded-full inline-block mb-1.5 backdrop-blur-xs">
                Decentralized Cluster Vision
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                From Informal Waste Picking to Certified Green Artisanship
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                Training is 100% Free. Learn the skill, join the Vasundhara manufacturing network, and earn commissions on every product created.
              </p>
            </div>
          </div>
        </div>

        {/* Content: Vision Model Explaining Skill Upgrading */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-[#FAF8F5] p-5 sm:p-6 rounded-xl border border-stone-200 hover:border-[#74C69D]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#EBF8EE] border border-[#B7E4C7] text-[#1B4332] flex items-center justify-center mb-3 sm:mb-4 shadow-2xs">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-stone-900 mb-1.5 sm:mb-2">
                100% Free Vocational Training
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Zero training fees. Learn the skill, join the Vasundhara manufacturing network, and earn commissions on every product created.
              </p>
            </div>
            <div className="mt-4 pt-3 sm:pt-4 border-t border-stone-200 text-[11px] sm:text-xs text-[#2D6A4F] font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
              <span>100% Free &bull; No tuition or hidden fees</span>
            </div>
          </div>

          <div className="bg-[#FAF8F5] p-5 sm:p-6 rounded-xl border border-stone-200 hover:border-[#74C69D]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#EBF8EE] border border-[#B7E4C7] text-[#1B4332] flex items-center justify-center mb-3 sm:mb-4 shadow-2xs">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-stone-900 mb-1.5 sm:mb-2">
                Safe &amp; Ergonomic Workshops
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Workshops are equipped with modern air scrubbers, protective gear, and ergonomic seating for safe artisan working conditions.
              </p>
            </div>
            <div className="mt-4 pt-3 sm:pt-4 border-t border-stone-200 text-[11px] sm:text-xs text-[#2D6A4F] font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
              <span>Zero toxic emission standards</span>
            </div>
          </div>

          <div className="bg-[#FAF8F5] p-5 sm:p-6 rounded-xl border border-stone-200 hover:border-[#74C69D]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#EBF8EE] border border-[#B7E4C7] text-[#1B4332] flex items-center justify-center mb-3 sm:mb-4 shadow-2xs">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-stone-900 mb-1.5 sm:mb-2">
                Revenue &amp; Payout Structure
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                1. Complete free training. 2. Manufacture products. 3. Submit finished goods to Vasundhara. 4. Earn a direct commission per product completed, tracked seamlessly via your dashboard.
              </p>
            </div>
            <div className="mt-4 pt-3 sm:pt-4 border-t border-stone-200 text-[11px] sm:text-xs text-[#2D6A4F] font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
              <span>Direct monthly bank transfers &bull; Dashboard tracked</span>
            </div>
          </div>
        </div>

        {/* 4-Step Revenue & Payout Workflow Strip */}
        <div className="bg-[#FAF8F5] rounded-xl border border-stone-200 p-5 sm:p-6 mb-8 sm:mb-12">
          <div className="mb-4">
            <span className="text-[11px] font-bold text-[#1B4332] uppercase tracking-wider block mb-0.5">
              Business Model &amp; Revenue Workflow
            </span>
            <h3 className="text-base sm:text-lg font-bold text-stone-900">
              Four-Step Artisan Compensation Cycle
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="bg-white p-3.5 rounded-lg border border-stone-200/90 hover:border-[#74C69D]/60 hover:shadow-xs transition-all shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-[#1B4332] bg-[#EBF8EE] border border-[#B7E4C7] px-2 py-0.5 rounded-full inline-block mb-1.5">
                Step 1
              </span>
              <p className="font-semibold text-stone-900 mb-0.5">Complete Free Training</p>
              <p className="text-stone-500 text-[11px] leading-relaxed">100% free vocational training in local clusters.</p>
            </div>
            <div className="bg-white p-3.5 rounded-lg border border-stone-200/90 hover:border-[#74C69D]/60 hover:shadow-xs transition-all shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-[#1B4332] bg-[#EBF8EE] border border-[#B7E4C7] px-2 py-0.5 rounded-full inline-block mb-1.5">
                Step 2
              </span>
              <p className="font-semibold text-stone-900 mb-0.5">Manufacture Products</p>
              <p className="text-stone-500 text-[11px] leading-relaxed">Craft quality upcycled goods with provided materials.</p>
            </div>
            <div className="bg-white p-3.5 rounded-lg border border-stone-200/90 hover:border-[#74C69D]/60 hover:shadow-xs transition-all shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-[#1B4332] bg-[#EBF8EE] border border-[#B7E4C7] px-2 py-0.5 rounded-full inline-block mb-1.5">
                Step 3
              </span>
              <p className="font-semibold text-stone-900 mb-0.5">Submit Finished Goods</p>
              <p className="text-stone-500 text-[11px] leading-relaxed">Submit goods to Vasundhara for QC and listing.</p>
            </div>
            <div className="bg-white p-3.5 rounded-lg border border-stone-200/90 hover:border-[#74C69D]/60 hover:shadow-xs transition-all shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-[#1B4332] bg-[#EBF8EE] border border-[#B7E4C7] px-2 py-0.5 rounded-full inline-block mb-1.5">
                Step 4
              </span>
              <p className="font-semibold text-stone-900 mb-0.5">Direct Commission</p>
              <p className="text-stone-500 text-[11px] leading-relaxed">Earn a direct commission per product completed, tracked seamlessly via your dashboard.</p>
            </div>
          </div>
        </div>

        {/* Action: [ Register as Trainee ] Call to Action Banner */}
        <div className="bg-[#1B4332] text-white rounded-2xl p-6 sm:p-12 border border-[#40916C]/40 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-md">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-[10px] sm:text-xs font-semibold text-[#D8F3DC] bg-[#EBF8EE]/20 border border-[#74C69D]/40 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2 backdrop-blur-xs">
              100% Free Vocational Enrollment
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold mb-2 sm:mb-3">
              Join the Next Skilling Cohort in Your District
            </h3>
            <p className="text-xs sm:text-base text-stone-200 leading-relaxed">
              Training is 100% Free. Learn the skill, join the Vasundhara manufacturing network, and earn commissions on every product created.
            </p>
          </div>

          <button
            onClick={() => setTraineeFormOpen(true)}
            className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 bg-[#DDA15E] hover:bg-[#BC6C25] active:scale-[0.98] text-[#1A201C] hover:text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all shadow-md cursor-pointer focus:ring-2 focus:ring-[#74C69D] min-h-[48px]"
          >
            <span>Register as Trainee</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
};
