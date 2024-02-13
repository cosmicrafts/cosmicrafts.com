import './DAOcalc.scss';
import './TeamPage.scss';
import React, { useState, useEffect } from 'react';

function PricingSlider() {
      const MIN_INVESTMENT = 250000;
      const MAX_INVESTMENT = 1000000;
      const TOTAL_TOKENS = 150_000_000;
    
      const [amountInvested, setAmountInvested] = useState(MIN_INVESTMENT);
      const [tokenPrice, setTokenPrice] = useState(0);
      const [userInvestment, setUserInvestment] = useState(1);
      const [tokensReceived, setTokensReceived] = useState(0);
      const [totalTokensReleased, setTotalTokensReleased] = useState(0);
    
      useEffect(() => {
        calculatePricing();
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
        const tokensPerICP = 100 + 100 * ratio; // 100 at minimum, scales to 200
        setTokenPrice(1 / tokensPerICP);
    
        const tokensReleasedRatio = amountInvested / MAX_INVESTMENT;
        const tokensReleased = tokensReleasedRatio * TOTAL_TOKENS;
        setTotalTokensReleased(tokensReleased);
      };
    
      return (
        <div className="pricing-container">
          <section className="investment-info">
            <h2>Total Amount Invested</h2>
            <p className="current-icp">(ICP): {amountInvested.toLocaleString()}</p>
            <input
              type="range"
              min={MIN_INVESTMENT}
              max={MAX_INVESTMENT}
              value={amountInvested}
              onChange={handleInvestmentChange}
              className="slider"
            />
            <div className="labels">
              <span>Min</span>
              <span>Max</span>
            </div>
            <div className="token-nfo">
            <h2>Spiral Token Price</h2>
            <p className="current-price">(ICP): {tokenPrice.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}</p>
            <h2>Total Tokens on Sale</h2>
            <p className="total-tokens">Spirals: {totalTokensReleased.toLocaleString()}</p>
            </div>
          </section>
    
          <section className="user-investment">
            <h2>Choose Your Investment</h2>
            <p className="current-icp">(ICP): {userInvestment.toLocaleString()}</p>
            <input
              type="range"
              min="1"
              max="100000" // You might need to adjust this later
              value={userInvestment}
              onChange={handleUserInvestmentChange}
              className="slider"
            />
            <div className="labels">
              <span>Min</span>
              <span>Max</span>
            </div>
            <h2>You Will Receive</h2>
            <p className="tokens-received">{tokensReceived.toLocaleString()} Spiral Tokens</p>
          </section>
        </div>
      );
    }
    
    export default PricingSlider;