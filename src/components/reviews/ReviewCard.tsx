import React from 'react';

interface ReviewCardProps {
  initials: string;
  name: string;
  treatment: string;
  review: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ initials, name, treatment, review, rating }) => {
  return (
    <article className="bg-surface rounded-xl p-6 shadow-[0_8px_32px_0_rgba(0,109,119,0.04)] hover:-translate-y-1 transition-transform duration-300">
      <div className="flex gap-1 text-secondary mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            {i < Math.floor(rating) ? 'star' : (i < rating ? 'star_half' : 'star_border')}
          </span>
        ))}
      </div>
      
      <p className="font-body-md text-body-md text-on-surface-variant mb-6 italic">
        "{review}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center text-primary font-headline-sm text-headline-sm">
          {initials}
        </div>
        <div>
          <p className="font-label-md text-label-md text-on-surface">{name}</p>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">{treatment}</p>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
