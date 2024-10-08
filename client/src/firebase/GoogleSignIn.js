import { auth, googleProvider, db } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Google Sign In function
const GoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    const data = {
      email: user.email,
      uid: user.uid,
    };

    const userRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userRef);

    // Check if the document exists
    if (!userDoc.exists()) {
      await setDoc(doc(db, "users", user.uid), data);
    }

    if (userType === "organizer") {
      navigate("/account/dashboard");
    } else {
      navigate("/account/settings");
    }

    console.log("User signed in with Google:", user);
    console.log(user);
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
  }
};

export default GoogleSignIn;
