import React from "react";
import Navbar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import HowCryptoWorks from "./pages/HowCryptoWorks.jsx";
import AboutBanner from "./pages/AboutBanner.jsx";
import PlayStore from "./pages/PlayStore.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <HowCryptoWorks />
      <AboutBanner />
      <PlayStore />
    </div>
  );
}

export default App;
