import React from 'react';

import heroImg from '../../../public/assets/sitting_at_operation_chair_with_doctor.png';

const WhyChooseUsSection = () => {
  return (
    <div id="why-us">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
        <div className="space-y-6">
          <h1 className="font-display-lg-mobile md:font-display-lg text-[40px] md:text-[56px] font-bold leading-tight text-primary">
            Excellence in Every Smile
          </h1>
          <p className="font-body-lg text-on-surface-variant">
            At Lumina Dental Clinic, we blend state-of-the-art technology with compassionate care. Discover why our patients trust us with their most valuable asset: their smile.
          </p>
          <div className="flex gap-4">
            <a href="#appointment" className="inline-flex bg-primary-container text-on-primary-container items-center justify-center h-14 px-8 rounded-[16px] font-label-md text-label-md shadow-sm transition-all hover:-translate-y-1 hover:shadow-ambient">
              Book Your Visit
            </a>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-ambient h-[400px] md:h-[500px]">
          <img alt="Dentist and patient smiling in modern clinic" className="w-full h-full object-cover" src={heroImg} />
        </div>
      </section>

      {/* Pillars Bento Grid */}
      <section className="bg-surface-container-low py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Our Commitment to You</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              We've built our practice on six fundamental pillars designed to provide you with the ultimate dental experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="bg-surface rounded-[16px] p-6 shadow-ambient flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Experienced Professionals</h3>
              <p className="text-on-surface-variant">Our team of specialists brings decades of combined experience, ensuring top-tier clinical expertise for every procedure.</p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-surface rounded-[16px] p-6 shadow-ambient flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Modern Technology</h3>
              <p className="text-on-surface-variant">From 3D imaging to laser dentistry, we utilize the latest advancements to provide precise, minimally invasive treatments.</p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-surface rounded-[16px] p-6 shadow-ambient flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Patient Comfort</h3>
              <p className="text-on-surface-variant">We prioritize your relaxation. Enjoy our calm environment, noise-canceling headphones, and gentle approach to care.</p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-surface rounded-[16px] p-6 shadow-ambient flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>sanitizer</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Strict Hygiene</h3>
              <p className="text-on-surface-variant">Your safety is paramount. We exceed industry standards with rigorous sterilization protocols and pristine clinical environments.</p>
            </div>

            {/* Pillar 5 */}
            <div className="bg-surface rounded-[16px] p-6 shadow-ambient flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Transparent Pricing</h3>
              <p className="text-on-surface-variant">No hidden fees or surprise bills. We provide clear, comprehensive treatment plans and financial options upfront.</p>
            </div>

            {/* Pillar 6 */}
            <div className="bg-surface rounded-[16px] p-6 shadow-ambient flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>clinical_notes</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Personalized Plans</h3>
              <p className="text-on-surface-variant">Every smile is unique. We tailor our treatments specifically to your oral health needs and aesthetic goals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsSection;
