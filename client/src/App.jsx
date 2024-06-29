import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Theme , ThemePanel} from "@radix-ui/themes";
import '@radix-ui/themes/styles.css'

function App() {
  return (
    <Theme accentColor="purple" grayColor="gray">
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </Theme>
  );
}

export default App;
