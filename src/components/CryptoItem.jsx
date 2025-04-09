import React from "react";
import { Line } from "react-chartjs-2";
import "./CryptoItem.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const CryptoItem = ({ crypto }) => {
  const priceChangeColor =
    crypto.price_change_percentage_24h >= 0 ? "positive" : "negative";

  // Prepare chart data
  const chartData = {
    labels: [...Array(crypto.sparkline_in_7d.price.length).keys()].map(
      (i) => ""
    ),
    datasets: [
      {
        data: crypto.sparkline_in_7d.price,
        fill: true,
        backgroundColor:
          crypto.price_change_percentage_24h >= 0
            ? "rgba(74, 222, 128, 0.1)"
            : "rgba(248, 113, 113, 0.1)",
        borderColor:
          crypto.price_change_percentage_24h >= 0 ? "#4ADE80" : "#F87171",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  // Format market cap with abbreviations
  const formatMarketCap = (marketCap) => {
    if (marketCap >= 1e12) return `$${(marketCap / 1e12).toFixed(2)}T`;
    if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`;
    if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`;
    return `$${marketCap.toLocaleString()}`;
  };

  return (
    <div className="crypto-item">
      <div className="crypto-rank">{crypto.market_cap_rank}</div>
      <div className="crypto-name">
        <img src={crypto.image} alt={crypto.name} className="crypto-icon" />
        <div className="crypto-name-details">
          <span className="crypto-symbol">{crypto.symbol.toUpperCase()}</span>
          <span className="crypto-fullname">{crypto.name}</span>
        </div>
      </div>
      <div className="crypto-price">
        ${crypto.current_price.toLocaleString()}
      </div>
      <div className={`crypto-change ${priceChangeColor}`}>
        {crypto.price_change_percentage_24h >= 0 ? "+" : ""}
        {crypto.price_change_percentage_24h.toFixed(2)}%
      </div>
      <div className="crypto-market-cap">
        {formatMarketCap(crypto.market_cap)}
      </div>
      <div className="crypto-chart">
        <div className="chart-container">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default CryptoItem;
