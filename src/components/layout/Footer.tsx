import React from 'react';
import logoImg from '../../../public/assets/dental_clinic_logo/screen.png';

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-low dark:bg-surface-container-lowest border-t border-outline-variant/10 shadow-flat pb-24 md:pb-0 mt-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1 space-y-4">
          <a className="flex items-center gap-2" href="#home">
            <img 
              alt="Lumina Dental Clinic Logo" 
              className="h-8 w-8 rounded-md" 
              src={logoImg}
            />
            <span className="font-display-lg text-headline-md text-primary dark:text-primary-fixed">Lumina</span>
          </a>
          <p className="font-body-md text-on-surface-variant text-sm mt-4">
            Excellence in Dentistry. Providing modern, comfortable care for your healthiest smile.
          </p>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-headline-sm text-[18px] text-on-surface mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li><a className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors text-sm opacity-90 hover:opacity-100" href="#about">About Us</a></li>
            <li><a className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors text-sm opacity-90 hover:opacity-100" href="#treatments">Treatments</a></li>
            <li><a className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors text-sm opacity-90 hover:opacity-100" href="#doctor">Our Doctor</a></li>
            <li><a className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors text-sm opacity-90 hover:opacity-100" href="#appointment">Book Appointment</a></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-headline-sm text-[18px] text-on-surface mb-4">Legal</h4>
          <ul className="space-y-3">
            <li><a className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors text-sm opacity-90 hover:opacity-100" href="#">Privacy Policy</a></li>
            <li><a className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors text-sm opacity-90 hover:opacity-100" href="#">Terms of Service</a></li>
            <li><a className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors text-sm opacity-90 hover:opacity-100" href="#">Patient Portal</a></li>
            <li><a className="font-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors text-sm opacity-90 hover:opacity-100" href="#">Accessibility</a></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-headline-sm text-[18px] text-on-surface mb-4">Contact</h4>
          <ul className="space-y-3 font-body-md text-on-surface-variant text-sm">
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-[18px] shrink-0">location_on</span>
              <span>Santragachi Station Rd, Opp. Bank of Baroda, GIP Colony, Jagacha, Howrah, West Bengal 711112</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] shrink-0">call</span>
              <span>+91 98300 12345</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] shrink-0">mail</span>
              <span>hello@luminadental.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-outline-variant/10 py-6 text-center">
        <p className="font-body-md text-on-surface-variant text-xs">
          © {new Date().getFullYear()} Lumina Dental Clinic. Excellence in Dentistry.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
