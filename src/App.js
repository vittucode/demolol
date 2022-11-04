
import Nav from "./Nav";
import Footer from "./Footer";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Homepage from "./Homepage";
import Service from "./Service";
import { Routes, Route } from "react-router-dom";
import ServiceDetail from "./ServiceDetail";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/servise-details" element={<ServiceDetail/>} />
        
      </Routes>
      <Footer />
    </>
  );
};

export default App;