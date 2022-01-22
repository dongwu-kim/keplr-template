import { useEffect, useState } from 'react';

export function debounce(fn: Function, delay = 0) {
  let timer: number;

  function debounced(...args: any[]) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debounced;
}

const delay = 10;

export function useScroll() {
  const [scrollY, setScrollY] = useState<number>(0);

  const listener = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(listener, delay));
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollY,
  };
}
