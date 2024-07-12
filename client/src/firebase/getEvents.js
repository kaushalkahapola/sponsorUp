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

    console.log(events);
    return events;
  } catch (error) {
    console.error("Error fetching events: ", error.message);
    return null;
  }
};

export default getEvents;
