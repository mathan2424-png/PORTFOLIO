import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const element = elementRef.current;
    if (!element || isVisible) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options, isVisible]);

  return [elementRef, isVisible];
}
