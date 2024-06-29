import { auth, googleProvider } from './firebase';
import {signInWithPopup } from "firebase/auth";

// Google Sign In function
const GoogleSignIn = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        console.log('User signed in with Google:', user);console.log(user);
    } catch (error) {
        console.error('Error signing in with Google:', error.message);
    }
};

export default GoogleSignIn;