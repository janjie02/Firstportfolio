import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Pricing: React.FC = () => {
  return (
    <div className="pricing-page">
      <div className="pricing-container">
        <h1>Pricing Plans</h1>
        <div className="pricing-options">
          <div className="pricing-option">
            <h2>Monthly</h2>
            <p>$10 per month</p>
          </div>
          <div className="pricing-option">
            <h2>Annually</h2>
            <p>$100 per year</p>
          </div>
          <div className="pricing-option">
            <h2>Yearly</h2>
            <p>$120 per year</p>
          </div>
        </div>
        <Link to="/" className="back-home-link">Back to Home</Link>
      </div>
    </div>
  );
};

export default Pricing;