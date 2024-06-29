import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; 

const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User signed up successfully:', user);
    return user;
  } catch (error) {
    console.error('Error signing up:', error.message);
    throw error;
  }
};

export default signUp;
