import { db, admin } from "../firebase/firebase.js";

export const getApiMessage = (req, res) => {
  res.json({ message: "Hello from the API!" });
};

export const examplePost = async (req, res) => {
  const data = req.body;
  await db.collection("users").add(data);
  res.json({ message: "Data added successfully" });
};

export const exampleGet = async (req, res) => {
  const snapshot = await db.collection("users").get();
  const data = snapshot.docs.map((doc) => doc.data());
  res.json({ data });
};

//Email SignUp
export const emailSignUp = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await admin.auth().createUser({
      email,
      password,
    });

    // Optionally add user data to Firestore
    await db.collection("users").doc(user.uid).set({
      email: user.email,
      uid: user.uid,
    });

    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//email signin to get a token
export const emailSignIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await admin.auth().getUserByEmail(email);
    const token = await admin.auth().createCustomToken(user.uid);
    return res.json({ token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
