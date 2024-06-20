import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Test from "./pages/Test";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css'

function App() {
  return (
    <Theme>
      <Router>
        <Routes>
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </Theme>
  );
}

export default App;
