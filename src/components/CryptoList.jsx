import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoItem from "./CryptoItem";
import "./CryptoList.css";

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setLoading(true);
        // CoinGecko API for top 15 cryptocurrencies
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 15,
              page: 1,
              sparkline: true,
              price_change_percentage: "24h",
            },
          }
        );

        setCryptos(response.data);
        setError(null);
      } catch (err) {
        setError(
          "Failed to fetch cryptocurrency data. Please try again later."
        );
        console.error("Error fetching crypto data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();

    // Refresh data every 60 seconds
    const interval = setInterval(fetchCryptoData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="crypto-loading">
        <div className="loader"></div>
        <p>Loading cryptocurrency data...</p>
      </div>
    );
  }

  if (error) {
    return <div className="crypto-error">{error}</div>;
  }

  return (
    <div className="crypto-list-container">
      <h2>Market</h2>

      <div className="crypto-list-header">
        <div className="crypto-rank">#</div>
        <div className="crypto-name">Name</div>
        <div className="crypto-price">Price</div>
        <div className="crypto-change">24h Change</div>
        <div className="crypto-market-cap">Market Cap</div>
        <div className="crypto-chart">Last 7 Days</div>
      </div>

      <div className="crypto-list">
        {cryptos.map((crypto) => (
          <CryptoItem key={crypto.id} crypto={crypto} />
        ))}
      </div>
    </div>
  );
};

export default CryptoList;
