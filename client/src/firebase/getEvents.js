import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const getEvents = async () => {
  try {
    const eventsRef = collection(db, "events");
    const eventsSnapshot = await getDocs(eventsRef);

    const events = [];
    eventsSnapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() });
    });

    console.log("Fetched events:", events);
    return events;
  } catch (error) {
    console.error("Error fetching events: ", error.message);
    return []; // Return an empty array or handle null case as needed
  }
};

export default getEvents;
