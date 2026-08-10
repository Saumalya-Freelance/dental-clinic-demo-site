import React from 'react';
import heroBg from '../../../public/assets/sitting_at_operation_chair_with_doctor.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" id="home">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center" 
          aria-label="A modern, high-end dental clinic reception area. Bright, natural light filtering through large windows. Clean, white aesthetic with soft teal accents. A sleek reception desk, plush seating, and subtle botanical elements conveying calm and professional medical care. 8k resolution, photorealistic." 
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
      </div>
      
      <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter pt-12 pb-24 md:pb-32">
        <div className="col-span-1 md:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high/50 backdrop-blur-sm border border-outline-variant/20">
            <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
            <span className="font-label-md text-on-surface-variant text-sm">Premium Dental Clinic</span>
          </div>
          
          <h1 className="font-display-lg-mobile md:font-display-lg text-on-surface text-[40px] md:text-[64px] leading-tight max-w-2xl">
            Modern Dental Care for a <span className="text-primary">Healthier</span>, Confident Smile
          </h1>
          
          <p className="font-body-lg text-on-surface-variant max-w-xl">
            Comprehensive dental care focused on your comfort, oral health and beautiful, confident smiles. Experience a serene, clinical environment designed for you.
          </p>
          
          <div className="flex flex-wrap flex-col sm:flex-row gap-4 pt-4">
            <a className="inline-flex w-full sm:w-auto items-center justify-center gap-2 h-14 px-8 rounded-[16px] bg-primary text-on-primary font-label-md text-label-md shadow-ambient hover:shadow-ambient-hover transition-all hover:-translate-y-1" href="#appointment">
              <span>Book an Appointment</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </a>
            <a className="inline-flex w-full sm:w-auto items-center justify-center gap-2 h-14 px-8 rounded-[16px] bg-surface-container-high text-on-surface font-label-md text-label-md shadow-sm border border-outline-variant/20 hover:bg-surface-container transition-colors" href="tel:+15551234567">
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
