import React from 'react';
import TeamMemberCard from './TeamMemberCard';

import doctor1 from '../../../public/assets/doctor1.png';
import doctor2 from '../../../public/assets/doctor2.png';
import doctor3 from '../../../public/assets/doctor3.png';

const MeetTheTeamSection = () => {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
      <div className="text-center mb-12">
        <h2 className="font-headline-md text-headline-md text-primary mb-4">Meet Our Experts</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
          Our team of specialists is dedicated to providing you with the highest level of care, combining years of experience with a passion for modern dentistry.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        <TeamMemberCard 
          imageSrc={doctor1}
          name="Dr. Ananya Sharma"
          role="Lead Prosthodontist"
          bio="With over 15 years of experience, Dr. Sharma specializes in restorative and cosmetic dentistry, bringing art and science together."
        />
        <TeamMemberCard 
          imageSrc={doctor2}
          name="Vikram Singh"
          role="Senior Dental Hygienist"
          bio="James focuses on preventive care and patient education, ensuring every visit is comfortable and informative."
        />
        <TeamMemberCard 
          imageSrc={doctor3}
          name="Dr. Sunirban Banerjee"
          role="Endodontist"
          bio="Dr. Patel is committed to saving natural teeth through advanced endodontic therapy with a gentle touch."
        />
      </div>
    </div>
  );
};

export default MeetTheTeamSection;
