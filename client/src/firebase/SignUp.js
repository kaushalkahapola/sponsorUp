import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, setDoc } from "firebase/firestore";


const signUpFn = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    const data = {
      email: user.email,
      uid: user.uid,
    };
    
    await setDoc(doc(db, "users", user.uid ), data); 

    console.log('User signed up successfully:', user);
    return user;
  } catch (error) {
    console.error('Error signing up:', error.message);
    throw error;
  }
};

export default signUpFn;
