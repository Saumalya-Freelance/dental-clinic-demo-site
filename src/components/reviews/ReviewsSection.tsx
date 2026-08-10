import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewsSection = () => {
  return (
    <section id="reviews" className="bg-surface-container-lowest">
      {/* Header / Rating Overview */}
      <div className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">Patient Stories</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
          Discover why our patients trust us with their smiles. Real experiences from our dedicated clinic.
        </p>
        
        {/* Rating Overview Card */}
        <div className="bg-white/70 backdrop-blur-md border border-white/50 shadow-[0_8px_32px_0_rgba(0,109,119,0.04)] rounded-xl p-8 max-w-md mx-auto flex flex-col items-center">
          <div className="text-6xl font-bold text-primary mb-2">4.9</div>
          <div className="flex gap-1 text-secondary mb-4">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
          </div>
          <p className="font-label-md text-label-md text-on-surface-variant">Based on 342 reviews</p>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="pb-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <ReviewCard 
            initials="RS" 
            name="Rahul Sharma" 
            treatment="Cosmetic Whitening" 
            review="Very happy with the service at Lumina Dental. The clinic is very neat and clean. The doctor explained everything properly before starting my whitening treatment. Really good experience!" 
            rating={5} 
          />
          <ReviewCard 
            initials="AS" 
            name="Anindita Sen" 
            treatment="Root Canal Treatment" 
            review="আমার দাঁতে খুব ব্যথা ছিল, কিন্তু এখানকার ডাক্তারবাবুরা খুব যত্ন করে রুট ক্যানেল করেছেন। কোনো ব্যথা লাগেনি। ক্লিনিকের পরিবেশটাও খুব সুন্দর আর পরিষ্কার। সবাইকে রেকমেন্ড করব।" 
            rating={5} 
          />
          <ReviewCard 
            initials="PD" 
            name="Priya Desai" 
            treatment="Orthodontics" 
            review="I visited for my daughter's braces. The digital scanning technology they use is amazing, no messy clay impressions. Staff is very polite and always gives a reminder call before appointments. Totally worth it." 
            rating={4.5} 
          />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
