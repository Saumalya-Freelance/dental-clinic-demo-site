import React, { useState, useEffect } from 'react';
import toothIcon from '../../../public/icons/icons8-tooth.png';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Wait for the window load event to ensure images are downloaded,
    // but also apply a minimum timeout for the animation.
    const handleLoad = () => {
      // Small timeout to allow the cool animation to show at least a bit
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => setIsLoading(false), 2000); // Wait for fade-out transition
      }, 2500);
    };

    if (document.readyState === 'complete') {
      // If already loaded by the time this mounts
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback timeout in case some resources take too long (e.g. 3 seconds)
      const fallbackTimer = setTimeout(handleLoad, 3000);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer rotating ring */}
        <div className="absolute w-32 h-32 border-4 border-primary/10 rounded-full"></div>
        <div className="absolute w-32 h-32 border-4 border-primary border-t-transparent border-r-transparent rounded-full animate-spin shadow-ambient"></div>
        <div className="absolute w-24 h-24 border-4 border-secondary border-b-transparent border-l-transparent rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
        
        {/* Pulsing Tooth Icon */}
        <div className="animate-pulse flex items-center justify-center relative z-10 drop-shadow-[0_0_15px_rgba(var(--color-primary),0.5)]">
          <img src={toothIcon} alt="Loading tooth" className="w-16 h-16 object-contain" />
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="mt-12 flex flex-col items-center gap-2">
        <p className="text-primary font-headline-sm font-bold tracking-[0.2em] animate-pulse">
          LUMINA DENTAL CLINIC
        </p>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
