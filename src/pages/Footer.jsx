import React from "react";
import "./Footer.css";
import logo from "../assets/images/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column company-info">
            <div className="logo-container">
              {/* Placeholder for logo - you can replace this with your actual logo */}
              <img className="logo" src={logo} alt="Cryptex Logo" />
              <h2 className="company-name">Cryptex</h2>
            </div>

            <div className="contact-info">
              <p className="contact-title">Let's talk! 🤙</p>
              <p className="phone">+12 345 678 9101</p>
              <p className="email">hello.cryptex@gmail.com</p>
              <p className="address">
                Cecilia Chapman
                <br />
                711-2880 Nulla St.
                <br />
                Mankato Mississippi 96522
              </p>
            </div>
          </div>

          {/* Products */}
          <div className="footer-column">
            <h3 className="column-title">Products</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Spot</a>
              </li>
              <li>
                <a href="#">Inverse Perpetual</a>
              </li>
              <li>
                <a href="#">USDT Perpetual</a>
              </li>
              <li>
                <a href="#">Exchange</a>
              </li>
              <li>
                <a href="#">Launchpad</a>
              </li>
              <li>
                <a href="#">Binance Pay</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3 className="column-title">Services</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Buy Crypto</a>
              </li>
              <li>
                <a href="#">Markets</a>
              </li>
              <li>
                <a href="#">Trading Fee</a>
              </li>
              <li>
                <a href="#">Affiliate Program</a>
              </li>
              <li>
                <a href="#">Referral Program</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h3 className="column-title">Support</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Bybit Learn</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">User Feedback</a>
              </li>
              <li>
                <a href="#">Submit a request</a>
              </li>
              <li>
                <a href="#">API Documentation</a>
              </li>
              <li>
                <a href="#">Trading Rules</a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div className="footer-column">
            <h3 className="column-title">About Us</h3>
            <ul className="footer-links">
              <li>
                <a href="#">About Bybit</a>
              </li>
              <li>
                <a href="#">Authenticity Check</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Business Contacts</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright and social icons */}
        <div className="social-icons">
          <a href="#" className="social-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" className="social-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a href="#" className="social-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" className="social-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
