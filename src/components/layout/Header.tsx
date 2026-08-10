import React from 'react';

import { useState, useEffect } from 'react';
import logoImg from '../../../public/assets/dental_clinic_logo/screen.png';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'treatments', label: 'Treatments' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' }
];

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Find the section that is currently in view
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100; // offset for the header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Navigation Bar (Desktop) */}
      <header className="fixed top-0 w-full z-50 bg-surface/90 dark:bg-surface-container/90 backdrop-blur-md shadow-sm border-b border-outline-variant/30 hidden md:block">
        <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          {/* Brand */}
          <a className="flex items-center gap-3 group" href="#home">
            <img 
              alt="Lumina Dental Clinic Logo" 
              className="h-10 w-10 rounded-lg shadow-ambient group-hover:scale-105 transition-transform" 
              src={logoImg}
            />
            <span className="font-display-lg text-headline-sm font-bold text-primary dark:text-primary-fixed">Lumina Dental</span>
          </a>
          {/* Navigation Links */}
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                className={`font-label-md text-label-md transition-colors hover:text-primary dark:hover:text-primary-fixed ${
                  activeSection === link.id 
                    ? 'text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1' 
                    : 'text-on-surface-variant dark:text-surface-variant'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Trailing Action */}
          <a className="bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md px-6 py-3 rounded-[16px] shadow-ambient transition-all hover:shadow-ambient-hover hover:-translate-y-0.5 active:opacity-80 active:scale-95" href="#appointment">
            Book Now
          </a>
        </div>
      </header>

      {/* Mobile Header (Simplified) */}
      <header className="fixed top-0 w-full z-40 bg-surface/90 backdrop-blur-md shadow-sm border-b border-outline-variant/30 md:hidden h-16 flex items-center justify-between px-margin-mobile">
        <a className="flex items-center gap-2" href="#home">
          <img 
            alt="Lumina Dental Clinic Logo" 
            className="h-8 w-8 rounded-lg" 
            src={logoImg}
          />
          <span className="font-headline-sm text-primary font-bold">Lumina</span>
        </a>
      </header>
    </>
  );
};

export default Header;
