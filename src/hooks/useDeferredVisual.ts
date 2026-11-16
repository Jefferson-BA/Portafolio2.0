'use client';

import { useEffect, useState, type RefObject } from 'react';

/** Mount expensive decoration only when nearby and the browser has spare time. */
export function useDeferredVisual(ref: RefObject<HTMLElement | null>) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let disposed = false;
    let scheduled = false;
    let idle: number | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const enable = () => {
      if (!disposed) setEnabled(true);
    };
    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      if ('requestIdleCallback' in window)
        idle = window.requestIdleCallback(enable, { timeout: 1200 });
      else timer = setTimeout(enable, 150);
    };
    const observer =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              if (entries.some((entry) => entry.isIntersecting)) {
                schedule();
                observer?.disconnect();
              }
            },
            { rootMargin: '150px' },
          )
        : undefined;
    if (observer) observer.observe(element);
    else schedule();

    return () => {
      disposed = true;
      observer?.disconnect();
      if (idle !== undefined) window.cancelIdleCallback(idle);
      clearTimeout(timer);
    };
  }, [ref]);

  return enabled;
}
