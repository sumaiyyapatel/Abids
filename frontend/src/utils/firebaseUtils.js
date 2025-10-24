// Firebase utility functions with error handling and retry logic
import { toast } from 'sonner';

// Firebase connection retry configuration
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

// Common Firebase error handling
export const handleFirebaseError = (error, context = 'Firebase operation') => {
  console.error(`${context} error:`, error);
  
  let userMessage = 'An error occurred. Please try again.';
  
  switch (error.code) {
    case 'firestore/permission-denied':
      userMessage = 'Access denied. Please check your authentication.';
      break;
    case 'firestore/unavailable':
      userMessage = 'Service temporarily unavailable. Please try again later.';
      break;
    case 'storage/unauthorized':
      userMessage = 'Unauthorized access to storage. Please check your permissions.';
      break;
    case 'storage/retry-limit-exceeded':
      userMessage = 'Upload failed after multiple attempts. Please try again.';
      break;
    case 'auth/network-request-failed':
      userMessage = 'Network error. Please check your connection.';
      break;
    case 'auth/too-many-requests':
      userMessage = 'Too many requests. Please wait a moment and try again.';
      break;
    default:
      if (error.message) {
        userMessage = error.message;
      }
  }
  
  toast.error(userMessage);
  return { error, userMessage };
};

// Retry logic for Firebase operations
export const retryOperation = async (operation, maxRetries = MAX_RETRIES) => {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      
      // Don't retry certain types of errors
      if (
        error.code === 'firestore/permission-denied' ||
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password'
      ) {
        throw error;
      }
      
      if (attempt < maxRetries) {
        console.warn(`Attempt ${attempt} failed, retrying in ${RETRY_DELAY}ms...`, error);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * attempt));
      }
    }
  }
  
  throw lastError;
};

// Enhanced image upload with better error handling
export const uploadImageWithRetry = async (storage, file, path) => {
  const { ref, uploadBytes, getDownloadURL } = await import('firebase/storage');
  
  return retryOperation(async () => {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  });
};

// Connection health check
export const checkFirebaseConnection = async (db) => {
  try {
    const { doc, getDoc } = await import('firebase/firestore');
    // Try to read a non-existent document to test connection
    await getDoc(doc(db, '_health', 'check'));
    return true;
  } catch (error) {
    console.warn('Firebase connection check failed:', error);
    return false;
  }
};

// Initialize Firebase with connection validation
export const initializeFirebaseWithValidation = async (db, auth, storage) => {
  try {
    // Check if we can connect to Firebase services
    const isConnected = await checkFirebaseConnection(db);
    
    if (!isConnected) {
      console.warn('Firebase connection may be unstable');
    }
    
    // Log successful initialization
    console.log('Firebase initialized successfully');
    
    return true;
  } catch (error) {
    console.error('Firebase initialization failed:', error);
    handleFirebaseError(error, 'Firebase initialization');
    return false;
  }
};

// Firestore operation wrapper with error handling
export const firestoreOperation = async (operation, errorContext = 'Firestore operation') => {
  try {
    return await retryOperation(operation);
  } catch (error) {
    handleFirebaseError(error, errorContext);
    throw error;
  }
};