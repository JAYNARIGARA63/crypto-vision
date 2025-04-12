import React from "react";
import "./Home.css";
import cryptoImage from "../assets/images/hero-banner.png"; // Update this path to your actual image
import CryptoList from "../components/CryptoList";

const Home = () => {
  return (
    <div className="home-page">
      <section className="home-container">
        {/* Left side content */}
        <div className="home-content">
          <h1 className="home-title">
            Buy & Sell Digital Assets In The Cryptex
          </h1>
          <p className="home-description">
            Coin Cryptex is the easiest, safest, and fastest way to buy & sell
            crypto asset exchange.
          </p>
          <button className="cta-button">Get started now</button>
        </div>

        {/* Right side image */}
        <div className="home-image-container">
          <img
            src={cryptoImage}
            alt="Crypto trading platform"
            className="home-image"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
