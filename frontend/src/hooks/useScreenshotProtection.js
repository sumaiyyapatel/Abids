import { useEffect } from 'react';
import { toast } from 'sonner';

export const useScreenshotProtection = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Detect PrintScreen key
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        toast.error('Screenshots are not allowed on this page');
      }
      
      // Detect Ctrl+Shift+S (Firefox screenshot)
      if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        toast.error('Screenshots are not allowed on this page');
      }
      
      // Detect Cmd+Shift+3/4/5 (Mac screenshot)
      if (e.metaKey && e.shiftKey && ['3', '4', '5'].includes(e.key)) {
        e.preventDefault();
        toast.error('Screenshots are not allowed on this page');
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page might be hidden for screenshot
        toast.error('Screenshots are not allowed');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Disable right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
      toast.error('Right-click is disabled');
    };
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
};