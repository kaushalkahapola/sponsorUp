// createProposal.js
import { auth, db } from "./firebase";
import { getDoc, doc, collection, addDoc } from "firebase/firestore";

const CreateProposal = async (proposal) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User not authenticated");
  }

  // Reference to the user's document
  const userRef = doc(db, "users", user.uid);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    throw new Error("User does not exist");
  }

  const userData = userDoc.data();

  if (userData.userType !== "organizer") {
    throw new Error("User is not an organizer");
  }

  // Reference to the proposals collection
  const proposalRef = collection(db, "proposals");
  const newProposal = {
    eventId: proposal.eventId,
    sponsorId: proposal.sponsorId,
    organizerId: user.uid,
    status: "pending",
    createdAt: new Date(),
    sponsorshipPackages: proposal.sponsorshipPackages,
    description: proposal.description,
  };

  console.log(newProposal);

  await addDoc(proposalRef, newProposal);

  console.log("Proposal created successfully");
};

export default CreateProposal;
