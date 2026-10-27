import React from 'react';
import { Scale, Users, Award, Sprout } from 'lucide-react';
import { useVasundharaStore } from '../../store/useVasundharaStore';

export const ImpactMetricsStrip: React.FC = () => {
  const { donations, trainees, userProfile } = useVasundharaStore();

  const totalDivertedKg = donations
    .filter((d) => d.status === 'VERIFIED_APPROVED')
    .reduce((acc, curr) => {
      if (curr.wasteType === 'plastic') return acc + curr.quantity;
      if (curr.wasteType === 'saree') return acc + curr.quantity * 0.45;
      if (curr.wasteType === 'flowers') return acc + curr.quantity;
      return acc;
    }, 1840);

  const activeTraineesCount = 148 + trainees.filter((t) => t.status === 'ACCEPTED').length;
  const totalPointsDistributed = 48500 + userProfile.approvedPoints;

  return (
    <div className="bg-white border-y border-stone-200/80 py-6 sm:py-8 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-stone-200">
          <div className="flex flex-col justify-center lg:pr-6">
            <div className="w-8 h-8 rounded-lg bg-[#EBF8EE] border border-[#B7E4C7] text-[#2D6A4F] flex items-center justify-center mb-2.5">
              <Scale className="w-4 h-4" />
            </div>
            <p className="text-[11px] font-semibold tracking-wider text-stone-500 uppercase mb-0.5">
              Waste Diverted
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-stone-900 font-mono tabular-nums tracking-tight">
              {Math.round(totalDivertedKg).toLocaleString('en-IN')} <span className="text-base font-sans font-medium text-stone-500">kg</span>
            </p>
            <p className="text-xs text-stone-500 mt-0.5">Post-consumer landfill offset</p>
          </div>

          <div className="flex flex-col justify-center lg:px-6">
            <div className="w-8 h-8 rounded-lg bg-[#EBF8EE] border border-[#B7E4C7] text-[#2D6A4F] flex items-center justify-center mb-2.5">
              <Users className="w-4 h-4" />
            </div>
            <p className="text-[11px] font-semibold tracking-wider text-stone-500 uppercase mb-0.5">
              Artisans Employed
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-stone-900 font-mono tabular-nums tracking-tight">
              {activeTraineesCount}
            </p>
            <p className="text-xs text-stone-500 mt-0.5">Rural women &amp; youth</p>
          </div>

          <div className="flex flex-col justify-center lg:px-6">
            <div className="w-8 h-8 rounded-lg bg-[#EBF8EE] border border-[#B7E4C7] text-[#2D6A4F] flex items-center justify-center mb-2.5">
              <Award className="w-4 h-4" />
            </div>
            <p className="text-[11px] font-semibold tracking-wider text-stone-500 uppercase mb-0.5">
              Reward Points Issued
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-stone-900 font-mono tabular-nums tracking-tight">
              {totalPointsDistributed.toLocaleString('en-IN')}
            </p>
            <p className="text-xs text-stone-500 mt-0.5">Redeemable in store catalog</p>
          </div>

          <div className="flex flex-col justify-center lg:pl-6">
            <div className="w-8 h-8 rounded-lg bg-[#EBF8EE] border border-[#B7E4C7] text-[#2D6A4F] flex items-center justify-center mb-2.5">
              <Sprout className="w-4 h-4" />
            </div>
            <p className="text-[11px] font-semibold tracking-wider text-stone-500 uppercase mb-0.5">
              Regional Operations
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-stone-900 font-mono tabular-nums tracking-tight">
              Pusad <span className="text-base font-sans font-medium text-stone-500">&amp; 4 Hubs</span>
            </p>
            <p className="text-xs text-stone-500 mt-0.5">Maharashtra rural network</p>
          </div>
        </div>
      </div>
    </div>
  );
};
