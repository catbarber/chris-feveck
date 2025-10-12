// src/pages/AboutPage.jsx
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import './AboutPage.css';

function AboutPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  const handleContactClick = () => {
    // Smooth scroll to contact section or open contact modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: alert or redirect to contact page
      alert('Contact functionality would open here!');
    }
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hello, I'm Christopher</h1>
            <p className="hero-subtitle">
              For Christopher Feveck, the sea is more than a setting—it's a character. Born and raised in the archipelago of Trinidad and Tobago, he grew up with saltwater in his veins and stories of explorers on the trade winds. After charting a course to King's University College in Edmonton, he found that even the prairie skies couldn't compete with his longing for the ocean's horizon.
            </p>
            <p className="hero-subtitle">
              As a PADI Advanced Open Water diver, Christopher has ventured into the silent, breathtaking world beneath the waves, an experience that breathes authentic detail into the maritime adventures of his characters. This unique blend of island spirit, academic discipline, and hands-on exploration, combined with a curious mind that dabbles in programming, shapes his writing.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Web Developer/ Digital Marketing Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">8+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">2</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="avatar">
              <img 
                src="/nothernlights.jpg" 
                alt="Northern lights over Edmonton landscape" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <h2>My Journey</h2>
          <p>From Caribbean shores to Canadian prairies, my journey has been one of constant exploration and discovery.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <p>
            Christopher Feveck was raised on the twin islands of Trinidad and Tobago, where the rhythm of the ocean and a rich history of seafaring first ignited his passion for adventure. Though his academic journey took him inland to King's University College in Edmonton, the call of the sea never faded. He is a certified PADI Advanced Open Water diver, and his time beneath the waves directly fuels the immersive, aquatic worlds of his pirate fantasy series, The Voyages of Victora.
          </p>
          <p>
            Christopher's unique path—from the Caribbean to Canada, from exploring coral reefs to dabbling in the logical realms of programming—has given him a diverse perspective on storytelling. He believes that the most compelling fantasies are rooted in genuine human experience. His characters and plots are inspired by the myriad of people he has met and the real adventures he has lived along the way.
          </p>
          <div className="cta-buttons">
            <button 
              className="btn-primary" 
              onClick={handleContactClick}
              aria-label="Get in touch with Christopher"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;