import React, { useState, useEffect, useRef } from "react";
import "../index.css";
import logo from "../assets/images/logo.svg";

const Navbar = ({ activeSection, onNavClick, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [walletOpen, setWalletOpen] = useState(false); // 👈 NEW: wallet popup open/close state
  const walletRef = useRef(); // 👈 NEW: reference to wallet popup for outside click handling

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

  const toggleWallet = () => setWalletOpen(!walletOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (walletRef.current && !walletRef.current.contains(e.target)) {
        setWalletOpen(false); // 👈 Close popup when clicked outside
      }
    };

    if (walletOpen) {
      document.addEventListener("mousedown", handleClickOutside); // 👈 Add listener
    } else {
      document.removeEventListener("mousedown", handleClickOutside); // 👈 Cleanup
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [walletOpen]); // 👈 Only run effect when walletOpen changes

  // Toggle mobile menu function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle navigation link clicks
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    onNavClick(sectionId);
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  // Handle logout
  const handleLogout = (e) => {
    e.preventDefault();
    if (onLogout) {
      onLogout();
    }
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
            <a
              href="#"
              className={activeSection === "homepage" ? "active" : ""}
              onClick={(e) => handleNavClick(e, "homepage")}
            >
              Homepage
            </a>
            <a
              href="#"
              className={activeSection === "buy" ? "active" : ""}
              onClick={(e) => handleNavClick(e, "buy")}
            >
              Buy Crypto
            </a>
            <a
              href="#"
              className={activeSection === "markets" ? "active" : ""}
              onClick={(e) => handleNavClick(e, "markets")}
            >
              Markets
            </a>
            <a
              href="#"
              className={activeSection === "sell" ? "active" : ""}
              onClick={(e) => handleNavClick(e, "sell")}
            >
              Sell Crypto
            </a>
            <a
              href="#"
              className={activeSection === "blog" ? "active" : ""}
              onClick={(e) => handleNavClick(e, "blog")}
            >
              Blog
            </a>
            <a
              href="#"
              className={activeSection === "bitusdt" ? "active" : ""}
              onClick={(e) => handleNavClick(e, "bitusdt")}
            >
              BITUSDT
            </a>
          </div>
        </div>

        <div className="navbar-right">
          {/* Wallet button - will be styled differently on mobile via CSS */}
          <button className="wallet-button" onClick={toggleWallet}>
            {" "}
            {/* 👈 Added onClick */}
            Wallet
          </button>
          {/* Add logout button */}
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
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
        <a
          href="#"
          className={activeSection === "homepage" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "homepage")}
        >
          Homepage
        </a>
        <a
          href="#"
          className={activeSection === "buy" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "buy")}
        >
          Buy Crypto
        </a>
        <a
          href="#"
          className={activeSection === "markets" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "markets")}
        >
          Markets
        </a>
        <a
          href="#"
          className={activeSection === "sell" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "sell")}
        >
          Sell Crypto
        </a>
        <a
          href="#"
          className={activeSection === "blog" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "blog")}
        >
          Blog
        </a>
        <a
          href="#"
          className={activeSection === "bitusdt" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "bitusdt")}
        >
          BITUSDT
        </a>
        {/* Updated logout link with a class for specific styling */}
        <a href="#" className="logout-link" onClick={handleLogout}>
          Logout
        </a>
      </div>

      {walletOpen && (
        <div className="wallet-popup-dark" ref={walletRef}>
          <div className="wallet-header">
            <img
              src="https://i.pravatar.cc/100?img=12" // 👈 Fake static profile pic
              alt="Profile"
              className="wallet-avatar"
            />
            <div>
              <h3>CryptoMaster23</h3>
              <span className="wallet-tagline">Techy Trader • Level 3</span>
            </div>
          </div>

          <div className="wallet-section">
            <p>
              <strong>Total Balance:</strong>{" "}
              <span className="highlight">$12,500</span>
            </p>
            <p>
              <strong>BTC:</strong> 0.72 <span className="symbol">₿</span>
            </p>
            <p>
              <strong>ETH:</strong> 4.5 <span className="symbol">Ξ</span>
            </p>
            <p>
              <strong>Last TX:</strong> Bought 0.1 BTC for $3,000
            </p>
          </div>

          <div className="wallet-section stats">
            <p>
              <strong>Ranking:</strong> #402 Global
            </p>
            <p>
              <strong>Streak:</strong> 6-day trading
            </p>
            <p>
              <strong>Status:</strong> Pro Member
            </p>
          </div>

          <button
            className="wallet-close-btn"
            onClick={() => setWalletOpen(false)}
          >
            Close
          </button>
        </div>
      )}

      {/* Overlay backdrop when mobile menu is open */}
      {menuOpen && (
        <div className="mobile-menu-backdrop" onClick={toggleMenu}></div>
      )}
    </>
  );
};

export default Navbar;
