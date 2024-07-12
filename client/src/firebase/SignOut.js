import { signOut } from "firebase/auth";

const SignOutFn = async (auth, navigate) => {
    try {
      const user = await signOut(auth);
      console.log('User signed out successfully:', user);
      navigate("/");
      return user;
    } catch (error) {
      console.error('Error signing in:', error.message);
      throw error;
    }
  };
  
  export default SignOutFn;
