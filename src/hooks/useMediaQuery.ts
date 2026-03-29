'use client';

import { useState, useEffect } from 'react';

/**
 * Returns whether the given media query currently matches.
 * Useful for responsive breakpoint logic in components.
 *
 * @param query - A CSS media query string, e.g. "(min-width: 768px)"
 * @returns true if the media query matches, false otherwise
 *
 * @example
 * const isDesktop = useMediaQuery('(min-width: 1024px)');
 * const isMobile = useMediaQuery('(max-width: 639px)');
 * const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    // Set initial value
    setMatches(mediaQuery.matches);

    function handleChange(event: MediaQueryListEvent) {
      setMatches(event.matches);
    }

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}
