import { useRef, useEffect } from 'react';

export function useScrollToTop() {
  const topElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topElement.current) {
      topElement.current.scrollIntoView();
    }
  }, []);

  return { topElement };
}


