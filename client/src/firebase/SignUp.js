import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, setDoc } from "firebase/firestore";
import { signUpSchema } from '../schemas/validationSchema';

const signUpFn = async (email, password, confirmPassword, navigate) => {
  try {

    const validation = signUpSchema.safeParse({ email, password, confirmPassword });
    if (!validation.success) {
    return console.error(" Please enter valid information",validation.error.errors);
  }

    const userCredential = await createUserWithEmailAndPassword(auth, validation.data.email, validation.data.password);
    const user = userCredential.user;
    
    const data = {
      email: user.email,
      uid: user.uid,
    };
    
    await setDoc(doc(db, "users", user.uid ), data); 

    console.log('User signed up successfully:', user);
    navigate('/account/dashboard');
    return user;
  } catch (error) {
    console.error('Error signing up:', error.message);
    throw error;
  }
};

export default signUpFn;
