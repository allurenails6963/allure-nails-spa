import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import DefaultTopNavBar from "./Components/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <DefaultTopNavBar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
