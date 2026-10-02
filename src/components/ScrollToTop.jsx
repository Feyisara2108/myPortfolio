import { useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

// Scroll position per history entry, so Back returns to where the visitor was.
const positions = new Map();

// New pages open at the top, Back/Forward restore the previous position, and
// links like /#work (from another page) scroll to that section.
export default function ScrollToTop() {
  const { key, pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  }, []);

  // Record this entry's position as the visitor scrolls, ready for Back.
  useEffect(() => {
    const save = () => positions.set(key, window.scrollY);
    window.addEventListener('scroll', save, { passive: true });
    return () => window.removeEventListener('scroll', save);
  }, [key]);

  useLayoutEffect(() => {
    if (navigationType === 'POP' && positions.has(key)) {
      window.scrollTo(0, positions.get(key));
    } else if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [key, pathname, hash, navigationType]);

  return null;
}
