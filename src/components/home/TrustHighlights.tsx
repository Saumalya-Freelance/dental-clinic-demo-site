import React from 'react';

const TrustHighlights = () => {
  return (
    <section className="relative z-30 -mt-12 md:-mt-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-gutter">
        {/* Highlight 1 */}
        <div className="bg-surface p-6 rounded-[16px] shadow-ambient border border-outline-variant/10 flex flex-col items-center text-center gap-4 hover:shadow-ambient-hover transition-shadow">
          <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">medical_services</span>
          </div>
          <span className="font-label-md text-on-surface">Comprehensive Care</span>
        </div>
        
        {/* Highlight 2 */}
        <div className="bg-surface p-6 rounded-[16px] shadow-ambient border border-outline-variant/10 flex flex-col items-center text-center gap-4 hover:shadow-ambient-hover transition-shadow">
          <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">verified_user</span>
          </div>
          <span className="font-label-md text-on-surface">Experienced Pros</span>
        </div>
        
        {/* Highlight 3 */}
        <div className="bg-surface p-6 rounded-[16px] shadow-ambient border border-outline-variant/10 flex flex-col items-center text-center gap-4 hover:shadow-ambient-hover transition-shadow">
          <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">business</span>
          </div>
          <span className="font-label-md text-on-surface">Modern Clinic</span>
        </div>
        
        {/* Highlight 4 */}
        <div className="bg-surface p-6 rounded-[16px] shadow-ambient border border-outline-variant/10 flex flex-col items-center text-center gap-4 hover:shadow-ambient-hover transition-shadow">
          <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">favorite</span>
          </div>
          <span className="font-label-md text-on-surface">Patient-Centred</span>
        </div>
      </div>
    </section>
  );
};

export default TrustHighlights;
