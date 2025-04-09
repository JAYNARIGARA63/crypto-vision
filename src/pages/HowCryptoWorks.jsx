import React from "react";
import "./HowCryptoWorks.css";
import Line from "../assets/images/connect-line.png"; // Make sure this path is correct
import Img1 from "../assets/images/instruction-1.png";
import Img2 from "../assets/images/instruction-2.png";
import Img3 from "../assets/images/instruction-3.png";
import Img4 from "../assets/images/instruction-4.png";

const steps = [
  {
    id: 1,
    title: "Download",
    description:
      "Download our secure crypto app to begin your trading journey.",
    image: Img1,
  },
  {
    id: 2,
    title: "Connect Wallet",
    description: "Connect your wallet to access the full trading platform.",
    image: Img2,
  },
  {
    id: 3,
    title: "Start Trading",
    description: "Buy, sell, and trade cryptocurrencies with low fees.",
    image: Img3,
  },
  {
    id: 4,
    title: "Earn Money",
    description: "Grow your portfolio and earn profits from your investments.",
    image: Img4,
  },
];

const HowCryptoWorks = () => {
  return (
    <div className="how-it-works-section">
      <h2>How Crypto Works</h2>
      <p>
        Tradex is a production-ready library of stackable content blocks built
        in React Native.
      </p>

      <div className="steps-row">
        {steps.map((step, index) => (
          <div className="step-item" key={step.id}>
            <img src={step.image} alt={step.title} className="step-icon" />
            <p className="step-number">Step {step.id}</p>
            <h4 className="step-title">{step.title}</h4>
            <p className="step-desc">{step.description}</p>

            {/* line between steps, not after the last */}
            {index < steps.length - 1 && (
              <img src={Line} alt="line" className="step-line" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowCryptoWorks;
