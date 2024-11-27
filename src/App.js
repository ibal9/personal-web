import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import ParticlesBackground from "./utils.js/particles";
import Home from "./containers/home";
import About from "./containers/about"; 
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

function App() {
  const location = useLocation();

  return (
    <div className="App">
       {location.pathname === "/" && <ParticlesBackground />}
      {/* Navbar */}
      <NavBar />

      {/* Konten utama halaman */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;