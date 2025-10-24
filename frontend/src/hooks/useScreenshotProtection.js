import { useEffect, useState } from 'react';

export const useScreenshotProtection = () => {
  const [skeletonActive, setSkeletonActive] = useState(false);

  useEffect(() => {
    const showSkeleton = () => {
      setSkeletonActive(true);
      setTimeout(() => setSkeletonActive(false), 1500); // show skeleton for 1.5s
    };

    const handleKeyDown = (e) => {
      // PrintScreen
      if (e.key === 'PrintScreen') showSkeleton();

      // Ctrl+Shift+S (Firefox screenshot)
      if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        showSkeleton();
      }

      // Cmd+Shift+3/4/5 (Mac screenshot)
      if (e.metaKey && e.shiftKey && ['3', '4', '5'].includes(e.key)) {
        e.preventDefault();
        showSkeleton();
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) showSkeleton();
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
      showSkeleton();
    };

    const handleCopy = (e) => {
      e.preventDefault();
      showSkeleton();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  return skeletonActive;
};
