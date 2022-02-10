import React from 'react';
import Home from './components/Home';
import About from './components/About';
import LeftBar from './components/LeftBar';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="flex overscroll-none">
      <LeftBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
