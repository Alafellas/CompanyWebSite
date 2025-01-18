import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const location = useLocation(); // Get the current route

  return (
    <>
      {/* Render Header only if not on the /dashboard route */}
      {location.pathname !== "/dashboard" && <Header />}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
    <Home />
    <About/>
    <Contact/>
    <Footer />
  </Router>
);

export default AppWrapper;
