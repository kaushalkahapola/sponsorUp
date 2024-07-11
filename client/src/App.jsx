import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { auth } from "./firebase/firebase";
import { Button } from "./components/Buttons";
import SignOutFn from "./firebase/SignOut";
import LandingPage from "./pages/LandingPage";
import CreateEventPage from "./pages/CreateEventPage";
import "./App.css";
import SendProposalPage from "./pages/SendProposalPage";
import EventCard from "./components/EventCard";
import SearchSponsors from "./pages/SearchSponsors";
// import Test from "./pages/Test";
import SearchEventsPage from "./pages/SearchEventsPage";
import Test from "./pages/Test";
import MyEvents from "./pages/MyEvents";
import SponsorDetailsPage from "./pages/SponsorDetailsPage";

function App() {
  // just a simple useEffect to check if the user is signed in or not
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User is signed in:", user);
        // Optionally, you can perform additional actions based on user authentication
      } else {
        console.log("No user signed in");
      }
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe from the listener
  }, []);

  return (
    <Theme accentColor="violet" grayColor="gray">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route
            path="/signout"
            element={
              <Button
                id="signout-btn"
                text="Sign out"
                minWidth="200px"
                onClick={() => SignOutFn(auth)}
              />
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/events/new" element={<CreateEventPage />} />
          <Route path="/sendproposal" element={<SendProposalPage />} />
          <Route path="/sponsors" element={<SearchSponsors />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/events" element={<SearchEventsPage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/account/myevents" element={<MyEvents />} />
          <Route path="/sponsor/:id" element={<SponsorDetailsPage />} />
        </Routes>
      </Router>
      {/* <ThemePanel /> */}
    </Theme>
  );
}

export default App;
