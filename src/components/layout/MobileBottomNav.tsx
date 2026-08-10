import React from 'react';

const MobileBottomNav = () => {
  return (
    <nav className="fixed bottom-0 w-full z-50 md:hidden bg-surface/95 dark:bg-surface-container-highest/95 backdrop-blur-md shadow-lg border-t border-outline-variant/20">
      <div className="flex justify-around items-center py-3 px-4 w-full">
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant font-label-md text-label-md scale-95 transition-transform duration-100 active:bg-surface-variant/50 p-2 rounded-lg" href="tel:+15551234567">
          <span className="material-symbols-outlined mb-1">call</span>
          <span>Call</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant font-label-md text-label-md scale-95 transition-transform duration-100 active:bg-surface-variant/50 p-2 rounded-lg" href="https://wa.me/15551234567">
          <span className="material-symbols-outlined mb-1">chat</span>
          <span>WhatsApp</span>
        </a>
        <a className="flex flex-col items-center justify-center text-primary dark:text-primary-fixed font-bold font-label-md text-label-md scale-95 transition-transform duration-100 active:bg-surface-variant/50 p-2 rounded-lg" href="#appointment">
          <span className="material-symbols-outlined mb-1 fill">calendar_month</span>
          <span>Book</span>
        </a>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
