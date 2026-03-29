'use client';

import { useRef, useState, useEffect } from 'react';

/**
 * Returns a ref to attach to an element and a boolean indicating whether
 * that element is currently visible in the viewport.
 *
 * @param options - IntersectionObserver options (root, rootMargin, threshold)
 * @returns [ref, isInView] tuple
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once the element is in view, stop observing to keep it visible
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isInView];
}
