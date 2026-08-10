import React from 'react';

interface TeamMemberCardProps {
  imageSrc: string;
  name: string;
  role: string;
  bio: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ imageSrc, name, role, bio }) => {
  return (
    <div className="bg-surface rounded-xl overflow-hidden shadow-ambient border border-outline-variant/10">
      <div className="h-64 bg-surface-variant relative">
        <img alt={`Professional portrait of ${name}`} className="w-full h-full object-cover" src={imageSrc} />
      </div>
      <div className="p-6 text-center">
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{name}</h3>
        <p className="font-label-md text-label-md text-secondary mb-4">{role}</p>
        <p className="font-body-md text-body-md text-on-surface-variant text-sm">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
