// src/pages/DonationPage.jsx
import React, { useState } from 'react';
import './DonationPage.css';

// Google Cloud Functions base URL (replace with your actual Cloud Functions URL)
const CLOUD_FUNCTIONS_BASE_URL = 'https://us-central1-your-project-id.cloudfunctions.net';

// Payment service using Google Cloud Functions
const PaymentService = {
  // Process Stripe payment via Cloud Function
  processStripePayment: async (amount, email, paymentMethodId) => {
    try {
      const response = await fetch(`${CLOUD_FUNCTIONS_BASE_URL}/createStripePaymentIntent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: Math.round(amount * 100), // Convert to cents
          currency: 'usd',
          email: email,
          paymentMethodId: paymentMethodId,
          metadata: {
            donorEmail: email,
            project: 'author-website'
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.error) {
        throw new Error(result.error);
      }

      return result;
    } catch (error) {
      console.error('Stripe payment error:', error);
      throw new Error('Payment processing failed. Please try again.');
    }
  },

  // Process PayPal payment via Cloud Function
  processPayPalPayment: async (amount, email) => {
    try {
      const response = await fetch(`${CLOUD_FUNCTIONS_BASE_URL}/createPayPalOrder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          currency: 'USD',
          email: email,
          description: 'Donation to Christopher Feveck - Author Support'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.error) {
        throw new Error(result.error);
      }

      return result;
    } catch (error) {
      console.error('PayPal payment error:', error);
      throw new Error('PayPal payment failed. Please try again.');
    }
  },

  // Capture PayPal payment
  capturePayPalPayment: async (orderID) => {
    try {
      const response = await fetch(`${CLOUD_FUNCTIONS_BASE_URL}/capturePayPalOrder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderID: orderID
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('PayPal capture error:', error);
      throw new Error('Payment capture failed.');
    }
  },

  // Create cryptocurrency payment invoice
  processCryptoPayment: async (amount, currency, email) => {
    try {
      const response = await fetch(`${CLOUD_FUNCTIONS_BASE_URL}/createCryptoInvoice`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          currency: currency,
          email: email,
          coins: ['BTC', 'ETH', 'USDC'], // Supported cryptocurrencies
          description: 'Donation to Christopher Feveck'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.error) {
        throw new Error(result.error);
      }

      return result;
    } catch (error) {
      console.error('Crypto payment error:', error);
      throw new Error('Cryptocurrency payment setup failed.');
    }
  },

  // Check crypto payment status
  checkCryptoPaymentStatus: async (invoiceId) => {
    try {
      const response = await fetch(`${CLOUD_FUNCTIONS_BASE_URL}/checkCryptoPayment/${invoiceId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Crypto status check error:', error);
      throw new Error('Payment status check failed.');
    }
  }
};

// Email service using Google Cloud Functions
const EmailService = {
  sendDonationReceipt: async (donationData) => {
    try {
      const response = await fetch(`${CLOUD_FUNCTIONS_BASE_URL}/sendDonationReceipt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: donationData.email,
          subject: 'Thank you for your donation!',
          templateData: {
            donorName: donationData.name || 'Supporter',
            amount: donationData.amount,
            paymentMethod: donationData.paymentMethod,
            transactionId: donationData.paymentId,
            date: new Date().toLocaleDateString()
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Email sending error:', error);
      // Don't throw error for email failures - payment was still successful
      return { success: false, error: error.message };
    }
  },

  sendAdminNotification: async (donationData) => {
    try {
      const response = await fetch(`${CLOUD_FUNCTIONS_BASE_URL}/sendAdminNotification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'New Donation Received',
          donation: donationData
        }),
      });

      return await response.json();
    } catch (error) {
      console.error('Admin notification error:', error);
    }
  }
};

// Analytics service using Google Cloud Functions
const AnalyticsService = {
  trackDonation: async (donationData) => {
    try {
      const response = await fetch(`${CLOUD_FUNCTIONS_BASE_URL}/trackDonation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: 'donation_completed',
          donation: donationData,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          language: navigator.language
        }),
      });

      return await response.json();
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }
};

// Local storage for donation history (client-side fallback)
const DonationStorage = {
  saveDonation: (donationData) => {
    try {
      const donations = DonationStorage.getDonations();
      donations.push({
        ...donationData,
        id: Date.now().toString(),
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('donationHistory', JSON.stringify(donations));
    } catch (error) {
      console.error('Local storage error:', error);
    }
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
  const [donorName, setDonorName] = useState('');
  const [showDonorInfo, setShowDonorInfo] = useState(false);
  const [donationData, setDonationData] = useState(null);
  const [cryptoInvoice, setCryptoInvoice] = useState(null);

  const presetAmounts = [5, 10, 25, 50, 100];

  // Validation functions
  const validateEmail = (email) => {
    if (!email) return true; // Email is optional
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

  const handleDonorInfoSubmit = async (e) => {
    e.preventDefault();
    
    if (donorEmail && !validateEmail(donorEmail)) {
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
      const amount = parseFloat(donationAmount);

      switch (paymentMethod) {
        case 'stripe':
          // For Stripe, you would typically use Stripe.js on the client side
          // and only use Cloud Functions for creating payment intents
          paymentResult = await PaymentService.processStripePayment(
            amount,
            donorEmail,
            'payment_method_id_required' // This would come from Stripe Elements
          );
          break;

        case 'paypal':
          // For PayPal, create order and then redirect to PayPal
          paymentResult = await PaymentService.processPayPalPayment(amount, donorEmail);
          if (paymentResult.success && paymentResult.approveUrl) {
            // Redirect to PayPal approval URL
            window.location.href = paymentResult.approveUrl;
            return;
          }
          break;

        case 'crypto':
          // For crypto, create invoice and show payment details
          paymentResult = await PaymentService.processCryptoPayment(amount, 'USD', donorEmail);
          if (paymentResult.success) {
            setCryptoInvoice(paymentResult.invoice);
            // Don't set success yet - wait for payment confirmation
            return;
          }
          break;

        default:
          throw new Error('Unsupported payment method');
      }

      if (paymentResult.success) {
        await completeDonationProcess(paymentResult, amount);
      } else {
        throw new Error(paymentResult.error || 'Payment processing failed');
      }
    } catch (err) {
      setError(err.message || 'Payment failed. Please try again.');
      console.error('Donation error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const completeDonationProcess = async (paymentResult, amount) => {
    // Save donation data
    const donationRecord = {
      amount: amount,
      paymentMethod: paymentMethod,
      email: donorEmail,
      name: donorName,
      paymentId: paymentResult.paymentId || paymentResult.id,
      timestamp: new Date().toISOString()
    };

    // Store donation locally
    DonationStorage.saveDonation(donationRecord);

    // Send receipt if email provided
    if (donorEmail) {
      await EmailService.sendDonationReceipt(donationRecord);
    }

    // Send admin notification
    await EmailService.sendAdminNotification(donationRecord);

    // Track analytics
    await AnalyticsService.trackDonation(donationRecord);

    setDonationData(donationRecord);
    setIsSuccess(true);
  };

  const handleDonateClick = () => {
    if (!showDonorInfo) {
      setShowDonorInfo(true);
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
    setDonorName('');
    setShowDonorInfo(false);
    setError('');
    setDonationData(null);
    setCryptoInvoice(null);
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

  // Crypto payment display component
  const CryptoPaymentDisplay = () => {
    if (!cryptoInvoice) return null;

    return (
      <div className="crypto-payment-section">
        <h3>Cryptocurrency Payment</h3>
        <div className="crypto-details">
          <p>Please send <strong>{cryptoInvoice.amount} {cryptoInvoice.currency}</strong> to:</p>
          <div className="wallet-address">
            <code>{cryptoInvoice.address}</code>
            <button 
              onClick={() => navigator.clipboard.writeText(cryptoInvoice.address)}
              className="copy-button"
            >
              Copy
            </button>
          </div>
          {cryptoInvoice.qrCode && (
            <div className="qr-code">
              <img src={cryptoInvoice.qrCode} alt="QR Code for payment" />
            </div>
          )}
          <p className="crypto-note">
            Payment will be confirmed automatically once received. This may take 10-30 minutes.
          </p>
        </div>
      </div>
    );
  };

  if (cryptoInvoice) {
    return (
      <div className="donation-page">
        <div className="crypto-payment-page">
          <CryptoPaymentDisplay />
          <div className="crypto-actions">
            <button onClick={() => setCryptoInvoice(null)} className="back-button">
              Choose Different Payment Method
            </button>
            <button onClick={handleNewDonation} className="cancel-button">
              Cancel Donation
            </button>
          </div>
        </div>
      </div>
    );
  }

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

            {showDonorInfo && (
              <div className="form-section">
                <label className="section-label">
                  <h2>Your Information (Optional)</h2>
                </label>
                <div className="donor-info-fields">
                  <div className="input-group">
                    <label htmlFor="donor-name">Name (Optional)</label>
                    <input
                      id="donor-name"
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="Your name"
                      className="donor-input"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="donor-email">Email for Receipt (Optional)</label>
                    <input
                      id="donor-email"
                      type="email"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="donor-input"
                    />
                  </div>
                </div>
                <p className="privacy-note">
                  Your information is secure and will never be shared. Email is only used to send your receipt.
                </p>
              </div>
            )}

            {!showDonorInfo && (
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

                  <label className="payment-option">
                    <input
                      type="radio"
                      name="payment-method"
                      value="crypto"
                      checked={paymentMethod === 'crypto'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      aria-label="Cryptocurrency payment"
                    />
                    <div className="payment-content">
                      <div className="payment-icon">₿</div>
                      <div className="payment-info">
                        <div className="payment-name">Cryptocurrency</div>
                        <div className="payment-desc">BTC, ETH, USDC, and more</div>
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
              onClick={showDonorInfo ? handleDonorInfoSubmit : handleDonateClick}
              disabled={!donationAmount || isProcessing || !validateAmount(donationAmount)}
              className="donate-button"
              aria-label={`Donate $${donationAmount || '0'}`}
            >
              {isProcessing ? (
                <>
                  <div className="processing-spinner" aria-hidden="true"></div>
                  Processing...
                </>
              ) : showDonorInfo ? (
                `Complete Donation of $${donationAmount}`
              ) : (
                `Donate $${donationAmount || '0'}`
              )}
            </button>

            <div className="security-notice">
              <div className="lock-icon" aria-hidden="true">🔒</div>
              <span>All payments are securely processed and encrypted</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonationPage;