import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Utility component that oversees window scroll positions during routing.
 * Ensures that navigating to new pages automatically snaps to coordinate (0,0).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
