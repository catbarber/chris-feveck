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
    // Allow only numbers and decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setCustomAmount(value);
      if (value) {
        setDonationAmount(value);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate amount
    const amount = parseFloat(donationAmount);
    if (!amount || amount < 1) {
      return;
    }

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

  const getDisplayAmount = () => {
    if (!donationAmount) return '0';
    const amount = parseFloat(donationAmount);
    return amount % 1 === 0 ? amount.toString() : amount.toFixed(2);
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
          <p>Your generous donation helps me continue creating valuable content, resources, and stories for everyone to enjoy.</p>
          <div className="success-details">
            <div className="detail-item">
              <span className="detail-label">Amount:</span>
              <span className="detail-value">${getDisplayAmount()}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Payment Method:</span>
              <span className="detail-value">
                {paymentMethod === 'stripe' ? 'Credit/Debit Card' : 
                 paymentMethod === 'paypal' ? 'PayPal' : 'Cryptocurrency'}
              </span>
            </div>
          </div>
          <button 
            onClick={handleNewDonation} 
            className="new-donation-btn"
            aria-label="Make another donation"
          >
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
            Your contribution helps me continue creating novels, 
            tutorials, web apps, and free resources for the community.
            Every donation makes a difference!
          </p>
        </header>

        <div className="donation-content">
          <div className="donation-benefits">
            <h3>What your support enables:</h3>
            <ul className="benefits-list">
              <li>🎯 Creating in-depth programming tutorials</li>
              <li>🔧 Maintaining and improving existing projects</li>
              <li>🆓 Keeping content accessible to everyone</li>
              <li>💡 Exploring new technologies and sharing insights</li>
              <li>🚀 Web application and programming development</li>
              <li>📚 Writing and publishing new novels</li>
            </ul>

            <div className="impact-stats">
              <div className="stat">
                <div className="stat-number">2+</div>
                <div className="stat-label">Novels Written</div>
              </div>
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Happy Clients</div>
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
                    aria-label={`Donate $${amount}`}
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
                    type="text"
                    inputMode="decimal"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="0.00"
                    className="custom-amount-input"
                    aria-label="Custom donation amount"
                  />
                </div>
                {customAmount && parseFloat(customAmount) < 1 && (
                  <div className="error-message">
                    Minimum donation amount is $1
                  </div>
                )}
              </div>
            </div>

            <div className="form-section">
              <label className="section-label">
                <h2>Payment Method</h2>
              </label>
              <div className="payment-methods">
                <label className="payment-option">
                  <input
                    type="radio"
                    name="payment-method"
                    value="stripe"
                    checked={paymentMethod === 'stripe'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    aria-label="Credit or Debit Card payment"
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
                    aria-label="PayPal payment"
                  />
                  <div className="payment-content">
                    <div className="payment-icon">📊</div>
                    <div className="payment-info">
                      <div className="payment-name">PayPal</div>
                      <div className="payment-desc">Pay with your PayPal account</div>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={!donationAmount || isProcessing || parseFloat(donationAmount) < 1}
              className="donate-button"
              aria-label={`Donate $${getDisplayAmount()}`}
            >
              {isProcessing ? (
                <>
                  <div className="processing-spinner" aria-hidden="true"></div>
                  Processing...
                </>
              ) : (
                `Donate $${getDisplayAmount()}`
              )}
            </button>

            <div className="security-notice">
              <div className="lock-icon" aria-hidden="true">🔒</div>
              <span>Your payment is secure and encrypted</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonationPage;