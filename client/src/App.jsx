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
import PrivateRoute from "./privateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Obq from "./pages/Obq";

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
          <Route
            path="/obq"
            element={<PrivateRoute element={Obq} requiredUserType="any" />}
          />
          <Route
            path="/events/new"
            element={
              <PrivateRoute
                element={CreateEventPage}
                requiredUserType="organizer"
              />
            }
          />
          <Route
            path="/sendproposal"
            element={
              <PrivateRoute
                element={SendProposalPage}
                requiredUserType="Sponsor"
              />
            }
          />
          <Route
            path="/sponsors"
            element={
              <PrivateRoute
                element={SearchSponsors}
                requiredUserType="organizer"
              />
            }
          />
          <Route
            path="/events"
            element={
              <PrivateRoute element={SearchEventsPage} requiredUserType="any" />
            }
          />
          <Route
            path="/account/myevents"
            element={
              <PrivateRoute element={MyEvents} requiredUserType="organizer" />
            }
          />
          <Route
            path="/account/dashboard"
            element={
              <PrivateRoute
                element={OrganizerDashboard}
                requiredUserType="organizer"
              />
            }
          />
          <Route
            path="/account/proposals"
            element={
              <PrivateRoute element={Proposals} requiredUserType="Sponsor" />
            }
          />
          <Route path="/sponsor/:id" element={<SponsorDetailsPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </Theme>
  );
}

export default App;
