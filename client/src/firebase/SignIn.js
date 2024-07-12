import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { signInSchema } from "../schemas/validationSchema";

const signInFn = async (email, password, navigate) => {
  try {
    const validation = signInSchema.safeParse({ email, password });

    if (!validation.success) {
      return console.error(
        " Please enter valid information",
        validation.error.errors
      );
    }

    const userCredential = await signInWithEmailAndPassword(
      auth,
      validation.data.email,
      validation.data.password
    );
    const user = userCredential.user;
    console.log("User signed in successfully:", user);
    navigate("/account/settings");
    return user;
  } catch (error) {
    console.error("Error signing in:", error.message);
    throw error;
  }
};

export default signInFn;
