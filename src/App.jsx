import React from "react";
import Navbar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import HowCryptoWorks from "./pages/HowCryptoWorks.jsx";
import AboutBanner from "./pages/AboutBanner.jsx";
import PlayStore from "./pages/PlayStore.jsx";
import Footer from "./pages/Footer.jsx";
import AuthForm from "./pages/AuthForm.jsx";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <AuthForm />
      {/* <Home />
      <HowCryptoWorks />
      <AboutBanner />
      <PlayStore />
      <Footer /> */}
    </div>
  );
}

export default App;
