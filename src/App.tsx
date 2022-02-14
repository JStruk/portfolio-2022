import Home from './Pages/Home';
import About from './Pages/About';
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import LeftNavBar from './components/LeftNavBar';

import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="flex">
            <LeftNavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="resume" element={<Resume/>}/>
                <Route path="projects" element={<Projects/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Routes>
        </div>
    )
}

export default App;
