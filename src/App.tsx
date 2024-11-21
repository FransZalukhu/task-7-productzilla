import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/navbar";
import Footer from "./component/Footer/footer";
import Home from "./pages/Home/home";
import Contact from "./pages/Contact/contact";
import Projects from "./pages/Projects/project";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
