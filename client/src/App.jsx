import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase/firebase";
import CreateEventPage from "./pages/CreateEventPage";
import LandingPage from "./pages/LandingPage";
import SearchSponsors from "./pages/SearchSponsors";
import SendProposalPage from "./pages/SendProposalPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SearchEventsPage from "./pages/SearchEventsPage";
import MyEvents from "./pages/MyEvents";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import Proposals from "./pages/Proposals";
import SponsorDetailsPage from "./pages/SponsorDetailsPage";
import Test from "./pages/Test";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./privateRoute";

function App() {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User is signed in:", user);
      } else {
        console.log("No user signed in");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Theme accentColor="violet" grayColor="gray">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
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
          <Route path="/account/dashboard" element={<OrganizerDashboard />} />
          <Route path="/account/proposals" element={<Proposals />} />
          <Route path="/sponsor/:id" element={<SponsorDetailsPage />} />
          <Route path="/obq" element={<Obq />} />
        </Routes>
      </Router>
      {/* <ThemePanel /> */}
      <ToastContainer />
    </Theme>
  );
}

export default App;
