import { useEffect, useState } from 'react';

export default function useIntersection(element, rootMargin) {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const currentElement = element.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin },
    );

    element.current && observer.observe(element.current);

    return () => observer.unobserve(currentElement);
  });

  return isVisible;
}
