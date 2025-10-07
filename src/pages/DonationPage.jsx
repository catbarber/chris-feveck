// src/pages/DonationPage.jsx
import React, { useState } from 'react';
import './DonationPage.css';

function DonationPage() {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const presetAmounts = [5, 10, 25, 50, 100];

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount.toString());
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setDonationAmount(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleNewDonation = () => {
    setIsSuccess(false);
    setDonationAmount('');
    setCustomAmount('');
    setPaymentMethod('stripe');
  };

  if (isSuccess) {
    return (
      <div className="donation-page">
        <div className="donation-success">
          <div className="success-animation">
            <div className="success-icon">🎉</div>
            <div className="success-checkmark">✓</div>
          </div>
          <h2>Thank You for Your Support!</h2>
          <p>Your donation helps me continue creating valuable content and resources.</p>
          <div className="success-details">
            <div className="detail-item">
              <span className="detail-label">Amount:</span>
              <span className="detail-value">${donationAmount}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Payment Method:</span>
              <span className="detail-value">{paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)}</span>
            </div>
          </div>
          <button onClick={handleNewDonation} className="new-donation-btn">
            Make Another Donation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="donation-page">
      <div className="donation-container">
        <header className="donation-header">
          <h1>Support My Work</h1>
          <p className="donation-subtitle">
            Your contribution helps me continue creating valuable content, 
            tutorials, and resources for the community.
          </p>
        </header>

        <div className="donation-content">
          <div className="donation-benefits">
            <h3>What your support enables:</h3>
            <ul className="benefits-list">
              <li>🎯 Creating in-depth tutorials and articles</li>
              <li>🔧 Maintaining and improving existing projects</li>
              <li>🆓 Keeping content free and accessible</li>
              <li>💡 Exploring new technologies and sharing insights</li>
              <li>🚀 Faster response to community questions</li>
            </ul>
            
            <div className="impact-stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Articles Written</div>
              </div>
              <div className="stat">
                <div className="stat-number">10k+</div>
                <div className="stat-label">Developers Helped</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Free Content</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="donation-form">
            <div className="form-section">
              <label className="section-label">Select Amount (USD)</label>
              <div className="amount-options">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className={`amount-option ${donationAmount === amount.toString() ? 'selected' : ''}`}
                    onClick={() => handleAmountSelect(amount)}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              
              <div className="custom-amount">
                <label htmlFor="custom-amount">Or enter custom amount:</label>
                <div className="custom-input-wrapper">
                  <span className="currency-symbol">$</span>
                  <input
                    id="custom-amount"
                    type="number"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="0.00"
                    min="1"
                    step="0.01"
                    className="custom-amount-input"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <label className="section-label">Payment Method</label>
              <div className="payment-methods">
                <label className="payment-option">
                  <input
                    type="radio"
                    name="payment-method"
                    value="stripe"
                    checked={paymentMethod === 'stripe'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div className="payment-content">
                    <div className="payment-icon">💳</div>
                    <div className="payment-info">
                      <div className="payment-name">Credit/Debit Card</div>
                      <div className="payment-desc">Secure payment via Stripe</div>
                    </div>
                  </div>
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="payment-method"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div className="payment-content">
                    <div className="payment-icon">📊</div>
                    <div className="payment-info">
                      <div className="payment-name">PayPal</div>
                      <div className="payment-desc">Pay with your PayPal account</div>
                    </div>
                  </div>
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="payment-method"
                    value="crypto"
                    checked={paymentMethod === 'crypto'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div className="payment-content">
                    <div className="payment-icon">₿</div>
                    <div className="payment-info">
                      <div className="payment-name">Cryptocurrency</div>
                      <div className="payment-desc">BTC, ETH, and other major cryptos</div>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={!donationAmount || isProcessing || parseFloat(donationAmount) < 1}
              className="donate-button"
            >
              {isProcessing ? (
                <>
                  <div className="processing-spinner"></div>
                  Processing...
                </>
              ) : (
                `Donate $${donationAmount || '0'}`
              )}
            </button>

            <div className="security-notice">
              <div className="lock-icon">🔒</div>
              <span>Your payment is secure and encrypted</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonationPage;