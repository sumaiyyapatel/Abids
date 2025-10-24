import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app, 'gs://abidswebsite.firebasestorage.app');

// Enable development mode with better error handling
if (process.env.NODE_ENV === 'development') {
  // Enable Firestore offline persistence and better error handling
  try {
    // Connect to emulators if available (for local development)
    if (process.env.REACT_APP_USE_EMULATORS === 'true') {
      if (!auth._delegate._config.emulator) {
        connectAuthEmulator(auth, 'http://localhost:9099');
      }
      if (!db._delegate._databaseId.projectId.includes('localhost')) {
        connectFirestoreEmulator(db, 'localhost', 8080);
      }
      if (!storage._delegate._host.includes('localhost')) {
        connectStorageEmulator(storage, 'localhost', 9199);
      }
    }
  } catch (error) {
    console.warn('Firebase emulator connection failed:', error);
  }
}

export default app;