import React from "react";
import "./PlayStore.css";
import BannerImg from "../assets/images/app-banner.png";
import PlayStoreImage from "../assets/images/googleplay.png";
const PlayStore = () => {
  return (
    <section className="about-banner">
      <div className="about-container">
        <div className="about-content">
          <h2>Free Your Money & Invest With Confident</h2>
          <p className="about-main">
            With Cryptor Trade, you can be sure your trading skills are matched.
          </p>

          <div className="about-feature">
            <div>
              <h4>Buy, Sell, And Trade On The Go</h4>
              <p>Manage Your Holdings From Your Mobile Decive.</p>
            </div>
          </div>

          <div className="about-feature">
            <div>
              <h4>Take Control Of Your Wealth</h4>
              <p>Rest Assured You (And Only You) Have Access To Your Funds.</p>
            </div>
          </div>
          <div>
            <img src={PlayStoreImage} alt="PlayStoreImage" />
          </div>
        </div>
        <div className="about-image">
          <img src={BannerImg} alt="About Cryptex" />
        </div>
      </div>
    </section>
  );
};

export default PlayStore;
