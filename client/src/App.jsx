import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Test from './pages/Test';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/test" element={<Test />} />
    </Routes>
    </Router>
  );
}

export default App;
