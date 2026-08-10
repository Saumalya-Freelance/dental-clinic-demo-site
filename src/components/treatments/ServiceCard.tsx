import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-surface rounded-xl p-6 shadow-[0_10px_30px_-10px_rgba(0,109,119,0.08)] border border-surface-variant/50 hover:-translate-y-1 transition-transform duration-300">
      <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-4 text-on-secondary-container">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{title}</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
    </div>
  );
};

export default ServiceCard;
