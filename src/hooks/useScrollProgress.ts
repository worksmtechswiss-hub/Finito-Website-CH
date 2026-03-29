'use client';

import { useState, useEffect } from 'react';

/**
 * Returns the scroll progress of the page as a value between 0 and 1.
 * 0 means the user is at the top of the page, 1 means the user has scrolled to the bottom.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (docHeight <= 0) {
        setProgress(0);
        return;
      }

      const scrolled = Math.min(Math.max(scrollTop / docHeight, 0), 1);
      setProgress(scrolled);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return progress;
}
