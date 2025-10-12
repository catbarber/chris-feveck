// src/pages/HomePage.jsx
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import NewsletterSignup from '../components/NewsletterSignup';
import './HomePage.css';

// Christopher Feveck's Author Homepage Component
const HomePage = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1023px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const getImageSrc = () => {
    if (isMobile) return '/vite.svg';
    return '/me.jpg';
  };

  return (
    <div className="home-page">
      {/* Header */}
      <header className="hero-section">
        <h3 className="tagline">
          Author of Swashbuckling{isMobile ? <br /> : " "}Pirate Fantasy Novels
        </h3>
        
        <div className="external-links-menu-top">
          <a 
            href="https://voyagesofvictora.web.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Explore The Voyages of Victora series"
          >
            Explore The Voyages of Victora
          </a>
          
          <a 
            href="#signup"
            aria-label="Sign up for a free short story"
          >
            Sign Up for a Free Short Story
          </a>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="home-container">
        <main>
          {/* Bio Section */}
          <section className="bio-section">
            <h1 className="bio-heading">Welcome Aboard</h1>
            <hr />
            <div className="bio-flex-container">
              <div className="bio-text">
                <p>
                  Christopher Feveck was raised on the twin islands of Trinidad and Tobago, 
                  where the rhythm of the ocean and a rich history of seafaring first ignited 
                  his passion for adventure. Though his academic journey took him inland to 
                  King's University College in Edmonton, the call of the sea never faded. 
                  He is a certified PADI Advanced Open Water diver, and his time beneath 
                  the waves directly fuels the immersive, aquatic worlds of his pirate 
                  fantasy series, The Voyages of Victora.
                </p>
                <p>
                  Christopher's unique path—from the Caribbean to Canada, from exploring 
                  coral reefs to dabbling in programming—has given him a diverse perspective 
                  on storytelling. He believes that the most compelling fantasies are rooted 
                  in genuine human experience.
                </p>
              </div>
              
              <div className="bio-image">
                <img 
                  src={getImageSrc()} 
                  alt="Christopher Feveck - Author of pirate fantasy novels" 
                  className="author-portrait" 
                />
              </div>
            </div>
          </section>

          {/* Book Series Section */}
          <section className="books-section">
            <h2 className="book-section-header">The Voyages of Victora Series</h2>
            <hr />
            
            <p className="book-description-text">
              Dive into the acclaimed series where high-seas adventure meets ancient mystery. 
              Follow the crew of the legendary ship <em>Victoria</em> as they battle ruthless pirates, 
              navigate treacherous waters, and uncover secrets that could rewrite history.
            </p>
            
            <div className="book-covers">
              <div className="book-item">
                <a href="https://t.co/J3zYY5ASlm" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/voyages1.png" 
                    alt="The Voyages of Victora - Book 1" 
                  />
                </a>
                <button 
                  onClick={() => window.open('https://t.co/J3zYY5ASlm', '_blank')}
                  aria-label="Get The Voyages of Victora Book 1"
                >
                  Get Now!
                </button>
              </div>
              
              <div className="book-item">
                <a href="https://t.co/J3zYY5ASlm" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/voyages2.jpg" 
                    alt="The Voyages of Victora - The Vanishing Isle - Book 2" 
                  />
                </a>
                <button 
                  onClick={() => window.open('https://t.co/J3zYY5ASlm', '_blank')}
                  aria-label="Get The Voyages of Victora Book 2 - The Vanishing Isle"
                >
                  Get Now!
                </button>
              </div>
            </div>
            
            <div className="book-list-links">
              <a 
                href="https://voyagesofvictora.web.app/" 
                className="cta-button" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Explore the entire Voyages of Victora series"
              >
                Explore the Series
              </a>
            </div>
          </section>

          {/* Newsletter Sign-up Section */}
          <section className="newsletter-section" id="signup">
            <h2>Join the Crew's Log</h2>
            <p>
              Sign up for my newsletter to get exclusive updates, behind-the-scenes insights, 
              and first looks at new chapters. Plus, receive a free short story as a welcome gift!
            </p>
            <NewsletterSignup />
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Christopher Feveck. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;