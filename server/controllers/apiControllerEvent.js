import { db, admin } from "../firebase/firebase.js";
import { eventModel, idModel } from "../models/models.js";

export const createEvent = async (req, res) => {
  var data = req.body;

  const { error } = eventModel.safeParse(data);
  if (error) {
    return res.status(400).json({ error: error.errors });
  }
  const { id } = await db.collection("events").add(data);
  res.json({
    data: { id: id, ...data },
    message: "Event created successfully.",
  });
};

export const getEvents = async (req, res) => {
  const search =
    req.query.search && req.query.search !== "undefined"
      ? req.query.search.toLowerCase()
      : "";

  try {
    let events = [];

    // Fetch a reasonable amount of documents to filter in memory
    const querySnapshot = await db
      .collection("events")
      .orderBy("datetime")
      .get();

    querySnapshot.docs.forEach((doc) => {
      const data = doc.data();
      events.push({ id: doc.id, ...data });
    });

    if (search) {
      // Filter the results in memory
      events = events.filter(
        ({ title, description, location }) =>
          title.toLowerCase().includes(search) ||
          description.toLowerCase().includes(search) ||
          location.toLowerCase().includes(search)
      );
    }

    // Limit the final results to 10
    events = events.slice(0, 10);

    res.json({ events });
  } catch (error) {
    console.error("Error fetching events: ", error);
    res.status(500).json({ error: "Error fetching events" });
  }
};

export const getEvent = async (req, res) => {
  const id = req.query.id && req.query.id !== "undefined" ? req.query.id : "";

  if (id !== "") {
    try {
      const doc = await db.collection("events").doc(id).get();
      if (!doc.exists) {
        return res.status(404).json({ error: "Event not found" });
      }
      const data = doc.data();
      res.json({ event: { id: doc.id, ...data } });
    } catch (error) {
      console.error("Error fetching event: ", error);
      res.status(500).json({ error: "Error fetching event" });
    } finally {
      return;
    }
  }
};

export const updateEvent = async (req, res) => {
  const eventData = req.body; // Assuming the updated event data is passed in the request body
  const eventId = eventData.id; // Assuming the event ID is passed in body

  // Validate the event ID
  const { error: idError } = idModel.safeParse(eventId);
  if (idError) {
    return res.status(400).json({ error: idError.errors });
  }

  try {
    const eventRef = db.collection("events").doc(eventId);
    // Check if the event exists
    const doc = await eventRef.get();
    if (!doc.exists) {
      return res.status(404).json({ error: "Event not found" });
    }

    const existingEventData = doc.data();

    // Merge existing data with updated data, ensuring all fields are present
    const updatedEventData = {
      ...existingEventData, // Preserve existing data
      ...eventData, // Overwrite with new values from eventData
    };
    // Validate data using eventModel or any other validation mechanism
    const { error } = eventModel.safeParse(updatedEventData);
    if (error) {
      return res.status(400).json({ error: error.errors });
    }

    // Perform the update with merge: true to only update specified fields
    await eventRef.set(updatedEventData, { merge: true });
    // send updated data
    res.json({
      event: { id: eventId, ...updatedEventData },
      message: "Event updated successfully",
    });
  } catch (error) {
    console.error("Error updating event: ", error);
    res.status(500).json({ error: "Error updating event" });
  }
};

export const deleteEvent = async (req, res) => {
  const eventId =
    req.query.id && req.query.id !== "undefined" ? req.query.id : "";

  // Validate the event ID
  const { error: idError } = idModel.safeParse(eventId);
  if (idError) {
    return res.status(400).json({ error: idError.errors });
  }

  try {
    const eventRef = db.collection("events").doc(eventId);
    // Check if the event exists
    const doc = await eventRef.get();
    if (!doc.exists) {
      return res.status(404).json({ error: "Event not found" });
    }

    // Delete the event
    await eventRef.delete();
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event: ", error);
    res.status(500).json({ error: "Error deleting event" });
  }
};
