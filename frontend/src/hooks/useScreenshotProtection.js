import { useEffect } from 'react';

export const useScreenshotProtection = () => {
  useEffect(() => {
    const showBlur = () => {
      document.body.style.transition = 'filter 0.2s';
      document.body.style.filter = 'blur(8px) brightness(0.7)';
      setTimeout(() => {
        document.body.style.filter = '';
      }, 1500); // blur lasts 1.5 seconds
    };

    const handleKeyDown = (e) => {
      // PrintScreen key
      if (e.key === 'PrintScreen') showBlur();

      // Ctrl+Shift+S (Firefox screenshot)
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        showBlur();
      }

      // Cmd+Shift+3/4/5 (Mac screenshot)
      if (e.metaKey && e.shiftKey && ['3', '4', '5'].includes(e.key)) {
        e.preventDefault();
        showBlur();
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) showBlur();
    };

    const handleCopy = (e) => {
      e.preventDefault();
      showBlur();
    };

    const handleDrag = (e) => {
      e.preventDefault();
    };

    const handleSelect = (e) => {
      e.preventDefault();
    };

    // Event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('dragstart', handleDrag);
    document.addEventListener('selectstart', handleSelect);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('dragstart', handleDrag);
      document.removeEventListener('selectstart', handleSelect);
    };
  }, []);
};
