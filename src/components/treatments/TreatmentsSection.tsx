import React from 'react';
import ServiceCard from './ServiceCard';

import sittingImg from '../../../public/assets/sitting_at_doctor_room.png';

const TreatmentsSection = () => {
  return (
    <>
      {/* Treatments Hero Section */}
      <section id="treatments" className="relative bg-surface-container-low overflow-hidden py-section-gap px-margin-mobile md:px-margin-desktop">
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: 'radial-gradient(var(--tw-colors-outline-variant) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        ></div>
        <div className="max-w-container-max mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="space-y-6">
            <h1 className="font-display-lg-mobile md:font-display-lg text-[40px] md:text-[56px] font-bold leading-tight text-primary">Comprehensive Dental Care</h1>
            <p className="font-body-lg text-on-surface-variant max-w-lg">
              From routine cleanings to advanced restorative procedures, our expert team provides personalized treatments using state-of-the-art technology in a calm, welcoming environment.
            </p>
            <a href="#appointment" className="inline-flex bg-primary-container text-on-primary-container font-label-md text-label-md px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all shadow-sm items-center gap-2 w-fit">
              Book Consultation
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-64 md:h-96 relative">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt="A bright, modern dental treatment room"
              src={sittingImg}
            />
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background">
        <div className="max-w-container-max mx-auto space-y-16">

          {/* General Dentistry */}
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-4">
              <h2 className="font-headline-md text-headline-md text-on-background">General Dentistry</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">Foundational care to maintain optimal oral health and prevent future complications.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <ServiceCard
                icon="stethoscope"
                title="Consultation"
                description="Comprehensive exams, digital X-rays, and personalized treatment planning."
              />
              <ServiceCard
                icon="clean_hands"
                title="Cleaning"
                description="Professional scaling, polishing, and fluoride treatments for a healthier smile."
              />
              <ServiceCard
                icon="healing"
                title="Fillings"
                description="Tooth-colored composite fillings to restore decayed teeth invisibly."
              />
            </div>
          </div>

          {/* Cosmetic */}
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-4">
              <h2 className="font-headline-md text-headline-md text-on-background">Cosmetic</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">Enhance the aesthetics of your smile with our premium cosmetic procedures.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <ServiceCard
                icon="auto_awesome"
                title="Whitening"
                description="Professional in-office or take-home kits for a noticeably brighter smile."
              />
              <ServiceCard
                icon="layers"
                title="Veneers"
                description="Custom porcelain shells to correct chips, gaps, or severe discoloration."
              />
              <ServiceCard
                icon="sentiment_satisfied"
                title="Smile Design"
                description="Comprehensive digital planning for a complete aesthetic transformation."
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default TreatmentsSection;
