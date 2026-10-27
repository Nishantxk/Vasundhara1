import React, { useState } from 'react';
import { X, CheckCircle2, Users, GraduationCap, MapPin, Phone, Sparkles } from 'lucide-react';
import { useVasundharaStore } from '../../store/useVasundharaStore';

export const TraineeRegistrationModal: React.FC = () => {
  const {
    isTraineeFormOpen,
    setTraineeFormOpen,
    submitTraineeApplication,
  } = useVasundharaStore();

  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState<number>(24);
  const [gender, setGender] = useState('Female');
  const [villageDistrict, setVillageDistrict] = useState('');
  const [phone, setPhone] = useState('');
  const [craftExperience, setCraftExperience] = useState('');
  const [preferredTrack, setPreferredTrack] = useState('Artisanal Weaving & Saree Upcycling');
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedId, setSubmittedId] = useState('');

  if (!isTraineeFormOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const app = submitTraineeApplication({
      fullName,
      age,
      gender,
      villageDistrict,
      phone,
      craftExperience,
      preferredTrack,
    });
    setSubmittedId(app.id);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setTraineeFormOpen(false);
    setIsSuccess(false);
    setFullName('');
    setVillageDistrict('');
    setPhone('');
    setCraftExperience('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-stone-900/65 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col my-auto sm:my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-[#1B4332] text-white shrink-0">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#74C69D] shrink-0" />
            <h3 className="text-base sm:text-lg font-bold">Artisan Trainee Registration</h3>
          </div>
          <button
            onClick={handleClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-stone-300 hover:text-white hover:bg-[#2D6A4F] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-5 sm:p-8 text-center overflow-y-auto flex-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              Application Queued for Review
            </h4>

            <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-3.5 sm:p-4 mb-5 text-emerald-950 text-xs sm:text-sm font-semibold">
              Registration submitted successfully. Application is queued for Admin review and cohort selection.
            </div>

            <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
              Your application for the <span className="font-semibold text-stone-900">{preferredTrack}</span> track
              has been assigned reference ID <span className="font-mono font-bold text-stone-900">{submittedId}</span>.
              Our district cluster coordinator will contact <span className="font-semibold text-stone-900">{phone}</span> within
              3 working days for verification.
            </p>

            <button
              onClick={handleClose}
              className="w-full bg-[#1B4332] hover:bg-[#2D6A4F] text-white py-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer min-h-[44px]"
            >
              Return to Platform
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3.5 sm:space-y-4 overflow-y-auto flex-1">
            <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-3 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
              <p className="text-xs text-stone-600 leading-relaxed">
                Training is <strong>100% Free</strong>. Learn the skill, join the Vasundhara manufacturing network, and earn commissions on every product created.
              </p>
            </div>

            {/* Candidate Identity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-stone-500 mb-1">Full Candidate Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Sunita Narayan More"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                />
              </div>

              <div>
                <label className="block text-[11px] text-stone-500 mb-1">Phone Number</label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs sm:text-sm pl-8 pr-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                  />
                  <Phone className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-stone-500 mb-1">Age (Years)</label>
                <input
                  type="number"
                  min="18"
                  max="65"
                  required
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value) || 18)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                />
              </div>

              <div>
                <label className="block text-[11px] text-stone-500 mb-1">Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900 bg-white"
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Non-Binary">Non-Binary</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-stone-500 mb-1">
                Village / Gram Panchayat & District
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g., Kavathe Ekand Village, Sangli"
                  value={villageDistrict}
                  onChange={(e) => setVillageDistrict(e.target.value)}
                  className="w-full text-xs sm:text-sm pl-8 pr-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
                />
                <MapPin className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-stone-500 mb-1">
                Preferred Vocational Skilling Track
              </label>
              <select
                value={preferredTrack}
                onChange={(e) => setPreferredTrack(e.target.value)}
                className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900 bg-white"
              >
                <option value="Artisanal Weaving & Saree Upcycling">
                  Artisanal Weaving & Saree Upcycling (Handloom & Pit-loom)
                </option>
                <option value="Polymer Compression & Tile Moulding">
                  Polymer Compression & Tile Moulding (Extrusion & Heat Press)
                </option>
                <option value="Footwear Remanufacturing & Assembly">
                  Footwear Remanufacturing & Assembly (EVA Rubber)
                </option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] text-stone-500 mb-1">
                Prior Craft / Work Experience (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Mention stitching, carpentry, farming, or previous SHG participation."
                value={craftExperience}
                onChange={(e) => setCraftExperience(e.target.value)}
                className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] text-stone-900"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse sm:flex-row items-center gap-2.5 pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:w-1/3 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs sm:text-sm font-semibold hover:bg-stone-100 transition-colors cursor-pointer min-h-[44px]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-2/3 py-2.5 rounded-xl bg-[#1B4332] hover:bg-[#2D6A4F] active:scale-[0.98] text-white text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Users className="w-4 h-4 shrink-0" />
                <span>Submit Trainee Application</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
