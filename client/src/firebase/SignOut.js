import { signOut } from "firebase/auth";
import { auth } from './firebase';

const SignOutFn = async (auth) => {
    try {
      const user = await signOut(auth);
      console.log('User signed out successfully:', user);
      return user;
    } catch (error) {
      console.error('Error signing in:', error.message);
      throw error;
    }
  };
  
  export default SignOutFn;
