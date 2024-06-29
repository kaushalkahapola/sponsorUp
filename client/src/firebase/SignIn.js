import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const signInFn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User signed in successfully:', user);
    return user;
  } catch (error) {
    console.error('Error signing in:', error.message);
    throw error;
  }
};

export default signInFn;
