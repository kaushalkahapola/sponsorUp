import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

const getUserType = async (uid) => {
  try {
    if (!uid) {
      //get current uid
      uid = auth.currentUser.uid;
    }
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    console.log("userDoc: ", userDoc);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      return userData.userType;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user type: ", error);
    return null;
  }
};

export default getUserType;
