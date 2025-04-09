import React from "react";
import "./AboutBanner.css";
import BannerImg from "../assets/images/about-banner.png";

const AboutBanner = () => {
  return (
    <section className="about-banner">
      <div className="about-container">
        <div className="about-image">
          <img src={BannerImg} alt="About Cryptex" />
        </div>
        <div className="about-content">
          <h2>What Is Cryptex</h2>
          <p className="about-main">
            Experience a variety of trading on Bitcost. You can use various
            types of coin transactions such as Spot Trade, Futures Trade, P2P,
            Staking, Mining, and margin.
          </p>

          <div className="about-feature">
            <div>
              <h4>View real-time cryptocurrency prices</h4>
              <p>
                Experience a variety of trading on Bitcost with options like
                Spot, Futures, P2P & more.
              </p>
            </div>
          </div>

          <div className="about-feature">
            <div>
              <h4>Buy and sell BTC, ETH, XRP, OKB, Etc...</h4>
              <p>
                Trade safely and easily with our simple, intuitive platform
                built for all levels.
              </p>
            </div>
          </div>

          <button className="about-btn">Explore More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
