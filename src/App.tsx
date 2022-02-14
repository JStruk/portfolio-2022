import Home from './components/Home';
import About from './components/About';
import LeftNavBar from './components/LeftNavBar';
import { Routes, Route } from "react-router-dom";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="flex">
      <LeftNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </div>
  )
}

export default App;
