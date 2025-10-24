import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';
import { handleFirebaseError } from '@/utils/firebaseUtils';

export const useFirebaseAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let unsubscribe;
    
    const initializeAuth = async () => {
      try {
        unsubscribe = onAuthStateChanged(
          auth,
          (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            setError(null);
          },
          (error) => {
            console.error('Auth state change error:', error);
            handleFirebaseError(error, 'Authentication');
            setError(error);
            setLoading(false);
          }
        );
      } catch (error) {
        console.error('Auth initialization error:', error);
        handleFirebaseError(error, 'Authentication initialization');
        setError(error);
        setLoading(false);
      }
    };

    initializeAuth();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return { user, loading, error };
};