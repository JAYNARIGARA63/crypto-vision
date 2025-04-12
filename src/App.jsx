import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import HowCryptoWorks from "./pages/HowCryptoWorks.jsx";
import AboutBanner from "./pages/AboutBanner.jsx";
import PlayStore from "./pages/PlayStore.jsx";
import Footer from "./pages/Footer.jsx";
import AuthForm from "./pages/AuthForm.jsx";
import CryptoList from "./components/CryptoList.jsx";

function App() {
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // State to track active section
  const [activeSection, setActiveSection] = useState("homepage");

  // Refs for each section
  const homeRef = useRef(null);
  const cryptoListRef = useRef(null);
  const howCryptoWorksRef = useRef(null);
  const aboutRef = useRef(null);
  const playStoreRef = useRef(null);

  // Handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    // Scroll to home section after login
    setTimeout(() => {
      if (homeRef.current) {
        homeRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    let targetRef;

    switch (sectionId) {
      case "homepage":
        targetRef = homeRef;
        break;
      case "markets":
        targetRef = cryptoListRef;
        break;
      case "buy":
      case "sell":
        targetRef = howCryptoWorksRef;
        break;
      case "blog":
        targetRef = aboutRef;
        break;
      case "bitusdt":
        targetRef = playStoreRef;
        break;
      default:
        targetRef = homeRef;
    }

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // If not logged in, only show the auth form
  if (!isLoggedIn) {
    return <AuthForm onLoginSuccess={handleLoginSuccess} />;
  }

  // If logged in, show the main application
  return (
    <div>
      <Navbar
        activeSection={activeSection}
        onNavClick={scrollToSection}
        onLogout={handleLogout}
      />
      <div ref={homeRef} id="homepage">
        <Home />
      </div>
      <div ref={cryptoListRef} id="markets">
        <CryptoList />
      </div>
      <div ref={howCryptoWorksRef} id="buy-sell">
        <HowCryptoWorks />
      </div>
      <div ref={aboutRef} id="blog">
        <AboutBanner />
      </div>
      <div ref={playStoreRef} id="bitusdt">
        <PlayStore />
      </div>
      <Footer />
    </div>
  );
}

export default App;
