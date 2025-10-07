import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import NewsletterSignup from '../components/NewsletterSignup';
// Add this import at the top of HomePage.jsx
import './HomePage.css';
// Christopher Feveck's Author Homepage Component
const HomePage = () => {

   const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  return (
    <div className="home-page">
       <h3 className='tagline'>Author of Swashbuckling{isMobile?<br/>:" "}Pirate Fantasy Novels</h3>
      
      {/* Hero Section */}
      <header className="hero-section">
         <div className='external-links-menu-top'> 
          <a href="https://voyagesofvictora.web.app/" target='_blank'>Explore The Voyages of Victora</a>
          
          <a href='#signup'>Sign Up for a Free Short Story</a>
        </div>     
      </header>
      
      {/* Main Bio Section */}
      <div className='home-container'>
        <main>
          <div>
            <h1 className="bio-heading">Welcome Aboard</h1>
            <hr />
            <div className="bio-flex-container">
                <div className="bio-text">Christopher Feveck was raised on the twin islands of Trinidad and Tobago, where the rhythm of the ocean and a rich history of seafaring first ignited his passion for adventure. Though his academic journey took him inland to King's University College in Edmonton, the call of the sea never faded. He is a certified PADI Advanced Open Water diver, and his time beneath the waves directly fuels the immersive, aquatic worlds of his pirate fantasy series, The Voyages of Victora.
                </div>



                {isMobile && <div className="bio-image"><img src='/vite.svg' className="author-portrait"/></div>}
                {isTablet && <div className="bio-image"><img src="/me.jpg" alt="Christopher Feveck" className="author-portrait" /></div>}
                {isDesktop && <div className="bio-image"><img src="/me.jpg" alt="Christopher Feveck" className="author-portrait" /></div>}

            </div>
            </div>
        {/* Book Series Section */}
        
        <h2 className="book-section-header">The Voyages of Victora Series</h2>
          <hr />
          
          <section className="books-section">
          
          <p className='book-description-text'>Dive into the acclaimed series where high-seas adventure meets ancient mystery. Follow the crew of the legendary ship <em>Victoria</em> as they battle ruthless pirates, navigate treacherous waters, and uncover secrets that could rewrite history.</p>
          {/* You can add book cover images and links here as needed */}
          <div className="book-covers">
              <div>
               <a href="https://t.co/J3zYY5ASlm" target="_blank">
                <img src="/voyages1.png" alt="The Voyages of Victora" />                
               </a>
                <div>
                    <a href="https://t.co/J3zYY5ASlm" target="_blank">
                      <button>Get now!</button>
                    </a>
                  </div>   
              </div>
            
              <div> 
               <a href="https://t.co/J3zYY5ASlm" target="_blank">
                <img src="/voyages2.jpg" alt=" The Voyages of Victora - The Vanishing Isle" />
              </a>
               <div>
                <a href="https://t.co/J3zYY5ASlm" target="_blank">
                  <button>Get now!</button>
                </a>
                </div> 
              </div>
          </div>
          
          <div className='book-list-links' >
            <div>
              <a href="https://voyagesofvictora.web.app/" className="cta-button" target='_blank'>Explore the Series</a>
           <br/><br/>
            </div>
          </div>
          </section>
            {/* Newsletter Sign-up Section */}
      <section className="newsletter-section" id='signup'>
        <h2 style={{ color: '#fff' }}>Join the Crew's Log</h2>
        <p style={{ color: '#fff' }}>Sign up for my newsletter to get exclusive updates, behind-the-scenes insights, and first looks at new chapters.</p>
        <NewsletterSignup />
      </section>
        </main>
   
      </div>
      

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

