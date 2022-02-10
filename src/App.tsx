import Home from './components/Home';
import About from './components/About';
import LeftNavBar from './components/LeftNavBar';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex overscroll-none">
      <LeftNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;
