// src/pages/DonationPage.jsx
import React, { useState } from 'react';
import './DonationPage.css';

// Mock payment service functions (replace with actual payment gateway)
const PaymentService = {
  // Simulate Stripe payment processing
  processStripePayment: async (amount, email, paymentMethodId) => {
    // In a real app, you would call your backend API here
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          paymentId: 'pi_' + Math.random().toString(36).substr(2, 9),
          amount: amount,
          email: email
        });
      }, 2000);
    });
  },

  // Simulate PayPal payment processing
  processPayPalPayment: async (amount, email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          paymentId: 'PAY-' + Math.random().toString(36).substr(2, 9),
          amount: amount,
          email: email
        });
      }, 2000);
    });
  },

  // Simulate cryptocurrency payment
  processCryptoPayment: async (amount, currency, walletAddress) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          transactionHash: '0x' + Math.random().toString(36).substr(2, 64),
          amount: amount,
          currency: currency
        });
      }, 2000);
    });
  }
};

// Email service for receipts
const EmailService = {
  sendDonationReceipt: async (donationData) => {
    // In a real app, you would call your email service API here
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Receipt sent to:', donationData.email);
        resolve({ success: true });
      }, 1000);
    });
  }
};

// Local storage for donation history
const DonationStorage = {
  saveDonation: (donationData) => {
    const donations = DonationStorage.getDonations();
    donations.push({
      ...donationData,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('donationHistory', JSON.stringify(donations));
  },

  getDonations: () => {
    try {
      return JSON.parse(localStorage.getItem('donationHistory') || '[]');
    } catch {
      return [];
    }
  },

  getTotalDonated: () => {
    const donations = DonationStorage.getDonations();
    return donations.reduce((total, donation) => total + parseFloat(donation.amount), 0);
  }
};

function DonationPage() {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [donationData, setDonationData] = useState(null);

  const presetAmounts = [5, 10, 25, 50, 100];

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateAmount = (amount) => {
    const numAmount = parseFloat(amount);
    return !isNaN(numAmount) && numAmount >= 1 && numAmount <= 10000;
  };

  // Donation handlers
  const handleAmountSelect = (amount) => {
    setDonationAmount(amount.toString());
    setCustomAmount('');
    setError('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value && validateAmount(value)) {
      setDonationAmount(value);
      setError('');
    } else if (value) {
      setDonationAmount('');
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(donorEmail)) {
      setError('Please enter a valid email address');
      return;
    }

    await processDonation();
  };

  const processDonation = async () => {
    if (!validateAmount(donationAmount)) {
      setError('Please enter a valid amount between $1 and $10,000');
      return;
    }

    setIsProcessing(true);
    setError('');

    try {
      let paymentResult;

      switch (paymentMethod) {
        case 'stripe':
          paymentResult = await PaymentService.processStripePayment(
            parseFloat(donationAmount),
            donorEmail,
            'mock_payment_method_id'
          );
          break;
        case 'paypal':
          paymentResult = await PaymentService.processPayPalPayment(
            parseFloat(donationAmount),
            donorEmail
          );
          break;
        case 'crypto':
          paymentResult = await PaymentService.processCryptoPayment(
            parseFloat(donationAmount),
            'USD',
            'mock_wallet_address'
          );
          break;
        default:
          throw new Error('Unsupported payment method');
      }

      if (paymentResult.success) {
        // Save donation data
        const donationRecord = {
          amount: donationAmount,
          paymentMethod: paymentMethod,
          email: donorEmail,
          paymentId: paymentResult.paymentId || paymentResult.transactionHash,
          timestamp: new Date().toISOString()
        };

        // Store donation locally
        DonationStorage.saveDonation(donationRecord);

        // Send receipt if email provided
        if (donorEmail) {
          await EmailService.sendDonationReceipt(donationRecord);
        }

        setDonationData(donationRecord);
        setIsSuccess(true);
        
        // Track donation analytics
        trackDonationEvent(donationRecord);
      } else {
        throw new Error('Payment processing failed');
      }
    } catch (err) {
      setError(err.message || 'Payment failed. Please try again.');
      console.error('Donation error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  // Analytics tracking
  const trackDonationEvent = (donation) => {
    // In a real app, you would send this to your analytics service
    console.log('Donation completed:', donation);
    
    // Example: Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', 'donation', {
        'event_category': 'engagement',
        'event_label': donation.paymentMethod,
        'value': parseFloat(donation.amount)
      });
    }
  };

  const handleDonateClick = () => {
    if (!donorEmail) {
      setShowEmailInput(true);
    } else {
      processDonation();
    }
  };

  const handleNewDonation = () => {
    setIsSuccess(false);
    setDonationAmount('');
    setCustomAmount('');
    setPaymentMethod('stripe');
    setDonorEmail('');
    setShowEmailInput(false);
    setError('');
    setDonationData(null);
  };

  const getTotalDonations = () => {
    return DonationStorage.getTotalDonated();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
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
              <span className="detail-value">{formatCurrency(parseFloat(donationData.amount))}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Payment Method:</span>
              <span className="detail-value">
                {donationData.paymentMethod === 'stripe' ? 'Credit/Debit Card' : 
                 donationData.paymentMethod === 'paypal' ? 'PayPal' : 'Cryptocurrency'}
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Transaction ID:</span>
              <span className="detail-value transaction-id">
                {donationData.paymentId}
              </span>
            </div>
            {donationData.email && (
              <div className="detail-item">
                <span className="detail-label">Receipt sent to:</span>
                <span className="detail-value">{donationData.email}</span>
              </div>
            )}
          </div>
          <div className="success-actions">
            <button onClick={handleNewDonation} className="new-donation-btn">
              Make Another Donation
            </button>
            <button 
              onClick={() => window.print()} 
              className="print-receipt-btn"
            >
              Print Receipt
            </button>
          </div>
          <div className="community-impact">
            <h3>Community Impact</h3>
            <p>Your contribution joins <strong>{formatCurrency(getTotalDonations())}</strong> in total community support!</p>
          </div>
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
          <div className="total-raised">
            <span className="total-label">Total Community Support:</span>
            <span className="total-amount">{formatCurrency(getTotalDonations())}</span>
          </div>
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

          <form onSubmit={(e) => e.preventDefault()} className="donation-form">
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
                    type="number"
                    inputMode="decimal"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="0.00"
                    min="1"
                    max="10000"
                    step="0.01"
                    className="custom-amount-input"
                    aria-label="Custom donation amount"
                  />
                </div>
                {customAmount && !validateAmount(customAmount) && (
                  <div className="error-message">
                    Please enter an amount between $1 and $10,000
                  </div>
                )}
              </div>
            </div>

            {showEmailInput && (
              <div className="form-section">
                <label className="section-label">
                  <h2>Email for Receipt (Optional)</h2>
                </label>
                <div className="email-input-wrapper">
                  <input
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="email-input"
                    aria-label="Email address for donation receipt"
                  />
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    disabled={!validateEmail(donorEmail)}
                    className="email-submit-btn"
                  >
                    Continue
                  </button>
                </div>
                <p className="email-note">
                  Providing your email ensures you receive a receipt for your donation. 
                  Your information is secure and will never be shared.
                </p>
              </div>
            )}

            {!showEmailInput && (
              <div className="form-section">
                <br/>
                <label className="section-label"><h2>Payment Method</h2></label>
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
            )}

            {error && (
              <div className="error-banner">
                {error}
              </div>
            )}

            <button
              type="button"
              onClick={showEmailInput ? handleEmailSubmit : handleDonateClick}
              disabled={!donationAmount || isProcessing || !validateAmount(donationAmount) || (showEmailInput && !validateEmail(donorEmail))}
              className="donate-button"
              aria-label={`Donate $${donationAmount || '0'}`}
            >
              {isProcessing ? (
                <>
                  <div className="processing-spinner" aria-hidden="true"></div>
                  Processing...
                </>
              ) : showEmailInput ? (
                'Continue to Payment'
              ) : (
                `Donate $${donationAmount || '0'}`
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