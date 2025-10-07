import React from 'react';
import NewsletterSignup from '../components/NewsletterSignup';
// Add this import at the top of HomePage.jsx
import './HomePage.css';
// Christopher Feveck's Author Homepage Component
const HomePage = () => {
  return (
    <div className="author-homepage">
      {/* Hero Section */}
      <header className="hero-section">
        <h3 className="tagline" style={{ padding: '0 20px', }}>Author of Swashbuckling Pirate Fantasy</h3>
        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}> <a href="https://voyagesofvictora.web.app/" target='_blank'>Explore The Voyages of Victora</a>

          <a>Sign Up for a Free Short Story</a>
        </div>     </header>
      <br />
      <br />
      {/* Main Bio Section */}
      <div style={{ padding: '0 20px' }}>
        <main className="bio-section">
          <div className="bio-content">
            <h2>Welcome Aboard</h2><hr />
            <div className="bio-flex-container" style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
              <div className="bio-text" style={{ flex: 2 }}>
                Christopher Feveck was raised on the twin islands of Trinidad and Tobago, where the rhythm of the ocean and a rich history of seafaring first ignited his passion for adventure. Though his academic journey took him inland to King's University College in Edmonton, the call of the sea never faded. He is a certified PADI Advanced Open Water diver, and his time beneath the waves directly fuels the immersive, aquatic worlds of his pirate fantasy series, The Voyages of Victora.

              </div>



              <div style={{ flex: 1 }}>{/* Placeholder for an author photo - you can add an image here later */}
                <img src="/me.jpg" alt="Christopher Feveck" className="author-portrait" width="600px" style={{ backgroundSize: 'contain' }} />
              </div>

            </div></div>
        </main>
        <br /><br /><br />
        {/* Book Series Section */}
        <section className="books-section">
          <h2>The Voyages of Victora Series</h2>
          <hr />
          <p>Dive into the acclaimed series where high-seas adventure meets ancient mystery. Follow the crew of the legendary ship <em>Victoria</em> as they battle ruthless pirates, navigate treacherous waters, and uncover secrets that could rewrite history.</p>
          {/* You can add book cover images and links here as needed */}
          <div className="book-covers" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
            <img src="/voyages1.png" alt="The Voyages of Victora" height="160px" width="160px" />
            <img src="/voyages2.jpg" alt=" The Voyages of Victora - The Vanishing Isle" height="160px" width="160px" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '20px' }}><a href="https://voyagesofvictora.web.app/" className="cta-button">Explore the Series</a>
          </div></section>
        <br /><br /><br /><br />
      </div>
      {/* Newsletter Sign-up Section */}
      <section className="newsletter-section">
        <h2 style={{color:'#fff'}}>Join the Crew's Log</h2>
        <p style={{color:'#fff'}}>Sign up for my newsletter to get exclusive updates, behind-the-scenes insights, and first looks at new chapters.</p>
        {/* This is a basic form structure; functionality would need to be connected to a service */}
        <NewsletterSignup />
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Christopher Feveck. All rights reserved.</p>
        {/* You can add social media icons and links here */}
        {/* <div className="social-links"> ... </div> */}
      </footer>
    </div>
  );
};

export default HomePage;


// Option 1: Short & Punchy (Ideal for book jackets, Amazon author page, or social media profiles)
// Christopher Feveck is a Trinidadian-born author who crafts tales of high-seas adventure, drawing inspiration from the vibrant culture and boundless ocean of his island home. A graduate of King's University College in Edmonton, he is a certified PADI Advanced Open Water diver, finding as much magic in the real-world depths as he does in his fictional worlds. When not writing or exploring the sea, he dabbles in programming. He lives by the belief that the greatest stories are anchored in real life, and his novels are inspired by the people and experiences from his own voyages.

// Option 2: Standard Author Bio (Ideal for an "About the Author" page on your website)
// Christopher Feveck was raised on the twin islands of Trinidad and Tobago, where the rhythm of the ocean and a rich history of seafaring first ignited his passion for adventure. Though his academic journey took him inland to King's University College in Edmonton, the call of the sea never faded. He is a certified PADI Advanced Open Water diver, and his time beneath the waves directly fuels the immersive, aquatic worlds of his pirate fantasy series, The Voyages of Victora.

// Christopher's unique path—from the Caribbean to Canada, from exploring coral reefs to dabbling in the logical realms of programming—has given him a diverse perspective on storytelling. He believes that the most compelling fantasies are rooted in genuine human experience. His characters and plots are inspired by the myriad of people he has met and the real adventures he has lived along the way.

// Option 3: Narrative & Evocative (Ideal for a keynote speaker bio or the main page of your author website)
// For Christopher Feveck, the sea is more than a setting—it's a character. Born and raised in the archipelago of Trinidad and Tobago, he grew up with saltwater in his veins and stories of explorers on the trade winds. After charting a course to King's University College in Edmonton, he found that even the prairie skies couldn't compete with his longing for the ocean's horizon.

// As a PADI Advanced Open Water diver, Christopher has ventured into the silent, breathtaking world beneath the waves, an experience that breathes authentic detail into the maritime adventures of his characters. This unique blend of island spirit, academic discipline, and hands-on exploration, combined with a curious mind that dabbles in programming, shapes his writing. He spins his fantasies not from pure imagination, but from the rich tapestry of his own life—every person he's met a potential crewmate, every experience a treasure map to a new story.

