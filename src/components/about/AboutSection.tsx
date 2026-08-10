import React from 'react';
import MeetTheTeamSection from './MeetTheTeamSection';

const AboutSection = () => {
  return (
    <section id="about" className="pt-20">
      {/* Intro Heading */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="font-display-lg-mobile md:font-display-lg text-[40px] md:text-[56px] font-bold leading-tight text-primary">Redefining Dental Excellence</h1>
          <p className="font-body-lg text-on-surface-variant">
            At Lumina Dental Clinic, we blend state-of-the-art technology with compassionate care to create a comfortable, stress-free environment for every patient.
          </p>
        </div>
      </div>

      {/* Mission & Vision (Bento Grid) */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="bg-surface-container-low rounded-xl p-8 shadow-ambient hover:shadow-ambient-hover transition-shadow flex flex-col justify-center">
            <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Our Vision</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              To set a new standard in dentistry where advanced clinical precision meets unparalleled patient comfort. We envision a future where dental visits are anticipated with confidence, not anxiety.
            </p>
          </div>
          <div className="bg-primary-container text-on-primary-container rounded-xl p-8 shadow-ambient flex flex-col justify-center">
            <span className="material-symbols-outlined text-on-primary-container text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            <h2 className="font-headline-md text-headline-md mb-4">Our Mission</h2>
            <p className="font-body-md text-body-md opacity-90">
              To provide personalized, comprehensive dental care in a pristine, modern setting. We are dedicated to continuous education, adopting the latest techniques to ensure optimal oral health for our community.
            </p>
          </div>
        </div>
      </div>

      {/* Clinic Story & Environment (Commented out per user request)
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline-md text-headline-md text-primary">The Lumina Difference</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Founded on the principle that healthcare should be both effective and empathetic, Lumina Dental Clinic was designed from the ground up to challenge the traditional clinical experience.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Every aspect of our clinic, from the soothing ambient lighting to the ergonomic treatment chairs, has been meticulously chosen to enhance your wellbeing. We believe that a calm environment is crucial for optimal healing and preventive care.
            </p>
            
            <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant mt-6">
              <li className="flex items-center">
                <span className="material-symbols-outlined text-secondary mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Advanced 3D Imaging Technology
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-secondary mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Anxiety-Free Treatment Protocols
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-secondary mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Eco-Friendly Clinic Practices
              </li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-ambient relative h-[400px]">
            <img 
              alt="Modern dental clinic interior showing a clean, minimalist reception area with comfortable seating and soft medical blue lighting." 
              className="w-full h-full object-cover" 
              src="/assets/modern_dental_clinic_interior._clean_minimalist_reception_area_with_a/screen.png"
            />
          </div>
        </div>
      </div>
      */}

      {/* Meet the Team */}
      <MeetTheTeamSection />
    </section>
  );
};

export default AboutSection;
