import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import About from "./page/About";
import Contacet from "./page/Contacet";
import Skil from "./page/Skil";
import Project from "./page/Project";
import Cv from "./ux/Cv";
function App() {
  return (
    <>
      <div className=" dark:text-white min-h-screen transition-colors duration-500">
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skil" element={<Skil />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contacet" element={<Contacet />} />
            <Route path="/cv" element={<Cv />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
