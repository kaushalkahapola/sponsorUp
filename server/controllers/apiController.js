import { db } from "../firebase/firebase.js";

export const getApiMessage = (req, res) => {
  res.json({ message: "Hello from the API!" });
};

export const examplePost = async (req, res) => {
  const data = req.body;
  await db.collection("users").add(data);
  res.json({ message: "Data added successfully" });
};
