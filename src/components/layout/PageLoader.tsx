import React, { useState, useEffect } from 'react';

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
        
        {/* Pulsing Tooth SVG */}
        <div className="animate-pulse flex items-center justify-center">
          <svg 
            width="52" 
            height="52" 
            viewBox="0 0 24 24" 
            className="drop-shadow-[0_0_15px_rgba(var(--color-primary),0.5)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="toothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
                <stop offset="70%" stopColor="currentColor" stopOpacity="0.8" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path 
              fill="url(#toothGrad)" 
              className="text-primary"
              d="M18.5 6c-2.25 0-4.8 1.4-6.5 2.2-1.7-.8-4.25-2.2-6.5-2.2-1.66 0-3 1.34-3 3v.3c0 3.82 2.6 7.4 6 8.5v4.5c0 .55.45 1 1 1h.5c.55 0 1-.45 1-1v-4c0-.55.45-1 1-1h.5c.55 0 1 .45 1 1v4c0 .55.45 1 1 1h.5c.55 0 1-.45 1-1v-4.5c3.4-1.1 6-4.68 6-8.5V9c0-1.66-1.34-3-3-3z"
            />
          </svg>
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
