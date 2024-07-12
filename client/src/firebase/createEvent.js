import { db, storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore"; // Import addDoc
import { useNavigate } from "react-router-dom";

// Function to create a new event
export const createEventFn = async (data) => {
  //const navigate = useNavigate();

  try {
    const imageRef = ref(storage, `events/${data.name}.jpg`); // Create a reference to the image file in Firebase Storage
    await uploadBytes(imageRef, data.coverPhoto);
    console.log("Uploaded a blob or file!");

    // Get download URL for the uploaded image
    const coverPhotoUrl = await getDownloadURL(imageRef);

    const albumPhotoUrls = await Promise.all(
      data.albumPhotos.map(async (photo) => {
        const photoRef = ref(storage, `events/${data.name}/${photo.name}`);
        await uploadBytes(photoRef, photo);
        return getDownloadURL(photoRef);
      })
    );

    // Add a new document with an auto-generated id.
    await addDoc(collection(db, "events"), {
      title: data.name,
      description: data.description,
      category: data.category,
      // address: data.address,
      location: data.city,
      // state: data.state,
      // country: data.country,
      eventDate: data.eventDate,
      startTime: data.startTime,
      album: albumPhotoUrls, // Store the image URLs in Firestore
      coverImage: coverPhotoUrl, // Store the image URL in Firestore
    });

    console.log("Document successfully written!");

    window.location.href = "/account/myevents";

    //navigate('/account/myevents')
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
