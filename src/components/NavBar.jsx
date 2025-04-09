import React, { useState, useEffect, useRef } from "react";
import "../index.css";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Ref to track navbar height for dynamic positioning
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Effect to track window resize for responsive behavior
  useEffect(() => {
    // Function to update window width state and navbar height
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile menu when screen size increases past mobile breakpoint
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }

      // Update navbar height for mobile menu positioning
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    // Initial height calculation
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle mobile menu function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Added ref to measure navbar height */}
      <nav className="navbar" ref={navbarRef}>
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={logo} alt="Cryptex Logo" />
            Cryptex
          </div>
          {/* Desktop navigation links */}
          <div className="navbar-links">
            <a href="/" className="active">
              Homepage
            </a>
            <a href="/buy">Buy Crypto</a>
            <a href="/markets">Markets</a>
            <a href="/sell">Sell Crypto</a>
            <a href="/blog">Blog</a>
            <a href="/bitusdt">BITUSDT</a>
          </div>
        </div>

        <div className="navbar-right">
          {/* Wallet button - will be styled differently on mobile via CSS */}
          <button className="wallet-button">Wallet</button>
          {/* Menu toggle button only visible on mobile */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu - fixed position with dynamic top positioning */}
      <div
        className={`mobile-menu ${menuOpen ? "show" : ""}`}
        style={{ top: `${navbarHeight}px` }} // Dynamic positioning based on navbar height
      >
        <a href="/" className="active">
          Homepage
        </a>
        <a href="/buy">Buy Crypto</a>
        <a href="/markets">Markets</a>
        <a href="/sell">Sell Crypto</a>
        <a href="/blog">Blog</a>
        <a href="/bitusdt">BITUSDT</a>
      </div>

      {/* Overlay backdrop when mobile menu is open */}
      {menuOpen && (
        <div className="mobile-menu-backdrop" onClick={toggleMenu}></div>
      )}
    </>
  );
};

export default Navbar;
