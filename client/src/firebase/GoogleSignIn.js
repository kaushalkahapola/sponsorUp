import { auth, googleProvider, db } from './firebase';
import {signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// Google Sign In function
const GoogleSignIn = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        

        const data = {
            email: user.email,
            uid: user.uid,
        };

        await setDoc(doc(db, "users", user.uid), data);

        console.log('User signed in with Google:', user);console.log(user);
    } catch (error) {
        console.error('Error signing in with Google:', error.message);
    }
};

export default GoogleSignIn;