// src/components/NewsletterSignup.jsx
import React, { useState } from 'react';
import './NewsletterSignup.css';

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section className="newsletter-section success">
        <div className="newsletter-content">
          <div className="success-icon">✓</div>
          <h3>Welcome to the Community!</h3>
          <p>Thank you for subscribing to my newsletter. You'll receive updates on my latest articles and projects.</p>
          <button 
            onClick={() => setIsSubscribed(false)}
            className="subscribe-again-btn"
          >
            Subscribe Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <div className="newsletter-header">
          <h3>Stay Updated</h3>
          <p>Get the latest articles, tips, and insights delivered to your inbox</p>
        </div>
        
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              disabled={isSubmitting}
              className="newsletter-input"
            />
            <button 
              type="submit" 
              disabled={isSubmitting || !email}
              className="subscribe-btn"
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Subscribing...
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
          
          <div className="privacy-note">
            <p>No spam ever. Unsubscribe at any time.</p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSignup;