import './TeamPage.scss';
import './TeamPage.scss';
import React, { useState, useEffect } from 'react';

function PricingSlider() {
  const MIN_INVESTMENT = 250000; // Updated to 100k ICP for clarity
  const MAX_INVESTMENT = 1000000;
  const TOTAL_TOKENS = 150_000_000;

  const [amountInvested, setAmountInvested] = useState(MIN_INVESTMENT);
  const [tokenPrice, setTokenPrice] = useState(0); // Initialize
  const [userInvestment, setUserInvestment] = useState(1);
  const [tokensReceived, setTokensReceived] = useState(0);
  const [totalTokensReleased, setTotalTokensReleased] = useState(0); // New state for total tokens released

  useEffect(() => {
    calculatePricing(); // Recalculate on investment change
  }, [amountInvested]);

  useEffect(() => {
    setTokensReceived(Math.floor(userInvestment / tokenPrice));
  }, [userInvestment, tokenPrice]);

  const handleInvestmentChange = (event) => {
    setAmountInvested(parseInt(event.target.value));
  };

  const handleUserInvestmentChange = (event) => {
    setUserInvestment(parseInt(event.target.value));
  };

  const calculatePricing = () => {
    const ratio = (amountInvested - MIN_INVESTMENT) / (MAX_INVESTMENT - MIN_INVESTMENT);
    const tokensPerICP = 100 + (100 * ratio); // 100 at minimum, scales to 200
    setTokenPrice(1 / tokensPerICP); // Price per token in ICP

    // Calculate total tokens released based on current ICP investment
    const tokensReleasedRatio = amountInvested / MAX_INVESTMENT;
    const tokensReleased = tokensReleasedRatio * TOTAL_TOKENS;
    setTotalTokensReleased(tokensReleased);
  };

  return (
    <div className="pricing-slider-container">
      <div className="section">
        <h2>Total Amount Invested</h2>
        <p>(ICP): {amountInvested.toLocaleString()}</p>
        <input
          type="range"
          min={MIN_INVESTMENT}
          max={MAX_INVESTMENT}
          value={amountInvested}
          onChange={handleInvestmentChange}
          className="slider"
        />
        <p>Min |-------------slider-----------| Max</p>
      </div>

      <div className="section">
        <h2>Spiral Token Price</h2>
        <p>(ICP): {tokenPrice.toFixed(4)}</p>
      </div>

      <div className="section">
        <h2>Total Tokens on Sale</h2>
        <p>Spirals: {totalTokensReleased.toLocaleString()}</p>
      </div>

      <div className="section">
        <h2>Choose Your Investment</h2>
        <p>(ICP): {userInvestment.toLocaleString()}</p>
        <input
          type="range"
          min="1"
          max="100000" // Adjust based on your scenario
          value={userInvestment}
          onChange={handleUserInvestmentChange}
          className="slider"
        />
        <p>Min |-------------slider-----------| Max</p>
        <p>You will receive: {tokensReceived.toLocaleString()} Spiral Tokens</p>
      </div>
    </div>
  );
}

export default PricingSlider;