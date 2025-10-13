// src/pages/ScubaPage.jsx
import React from 'react';
import './ScubaPage.css';

function ScubaPage() {
  const scubaExperiences = [
    {
      location: "Trinidad & Tobago",
      depth: "18m",
      highlights: ["Coral Gardens", "Tropical Fish", "Shipwrecks"],
      description: "Exploring the vibrant marine life of my home islands where I first discovered my passion for the underwater world."
    },
    {
      location: "Caribbean Sea",
      depth: "25m",
      highlights: ["Wall Dives", "Blue Hole", "Marine Conservation"],
      description: "Advanced dives in the deep blue Caribbean, witnessing the breathtaking underwater landscapes."
    },
    {
      location: "Pacific Northwest",
      depth: "15m",
      highlights: ["Kelp Forests", "Cold Water Species", "Underwater Photography"],
      description: "Adapting to colder waters and discovering the unique ecosystems of the Pacific."
    }
  ];

  const certifications = [
    {
      name: "PADI Advanced Open Water Diver",
      organization: "PADI",
      year: "2018",
      description: "Certified to dive to 30 meters with advanced navigation and deep diving skills"
    },
    {
      name: "PADI Rescue Diver",
      organization: "PADI", 
      year: "2019",
      description: "Trained in dive emergency management and rescue techniques"
    },
    {
      name: "Enriched Air Nitrox",
      organization: "PADI",
      year: "2020",
      description: "Certified to dive with enriched air mixtures for extended bottom times"
    }
  ];

  return (
    <div className="scuba-page">
      {/* Hero Section */}
      <section className="scuba-hero">
        <div className="scuba-container">
          <div className="hero-content">
            <h1>Beneath the Waves</h1>
            <p className="hero-subtitle">
              My journey as a PADI Advanced Open Water Diver and how underwater exploration 
              inspires the maritime worlds in my writing.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">30m</div>
                <div className="stat-label">Max Depth</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Dives Logged</div>
              </div>
              <div className="stat">
                <div className="stat-number">3</div>
                <div className="stat-label">Oceans Explored</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="scuba-intro">
        <div className="scuba-container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>From Caribbean Depths to Fantasy Worlds</h2>
              <p>
                Growing up in Trinidad and Tobago, the ocean was always part of my life. 
                But it wasn't until I became a certified diver that I truly discovered 
                the magic beneath the waves. The silent, weightless world of coral reefs, 
                the curious marine life, and the sunken stories waiting to be told—these 
                experiences directly fuel the aquatic adventures in The Voyages of Victora.
              </p>
              <p>
                Every dive is research. The way light filters through water, the pressure 
                changes, the marine ecosystems, and the camaraderie among divers—all find 
                their way into my writing, bringing authentic detail to fictional adventures.
              </p>
            </div>
            <div className="intro-image">
              <div className="image-placeholder">
                <span>🌊</span>
                <p>Underwater Exploration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dive Experiences */}
      <section className="dive-experiences">
        <div className="scuba-container">
          <h2>Notable Dive Experiences</h2>
          <div className="experiences-grid">
            {scubaExperiences.map((experience, index) => (
              <div key={index} className="experience-card">
                <div className="card-header">
                  <h3>{experience.location}</h3>
                  <span className="depth-badge">{experience.depth}</span>
                </div>
                <p className="experience-description">{experience.description}</p>
                <div className="highlights">
                  {experience.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">🐠 {highlight}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications">
        <div className="scuba-container">
          <h2>Diving Certifications</h2>
          <div className="certs-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-icon">🎖️</div>
                <div className="cert-content">
                  <h3>{cert.name}</h3>
                  <div className="cert-meta">
                    <span className="organization">{cert.organization}</span>
                    <span className="year">{cert.year}</span>
                  </div>
                  <p>{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Connection */}
      <section className="writing-connection">
        <div className="scuba-container">
          <div className="connection-content">
            <h2>How Diving Inspires My Writing</h2>
            <div className="connection-points">
              <div className="point">
                <div className="point-icon">📖</div>
                <div className="point-content">
                  <h4>Authentic Marine Details</h4>
                  <p>First-hand experience with marine ecosystems helps create believable underwater worlds</p>
                </div>
              </div>
              <div className="point">
                <div className="point-icon">⚓</div>
                <div className="point-content">
                  <h4>Real Diving Techniques</h4>
                  <p>Knowledge of actual diving procedures and equipment informs realistic scenes</p>
                </div>
              </div>
              <div className="point">
                <div className="point-icon">🌅</div>
                <div className="point-content">
                  <h4>Sensory Experience</h4>
                  <p>Understanding light, pressure, and sound underwater enhances descriptive writing</p>
                </div>
              </div>
              <div className="point">
                <div className="point-icon">🤿</div>
                <div className="point-content">
                  <h4>Diver Psychology</h4>
                  <p>Insights into the mindset and camaraderie of divers enrich character development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="scuba-cta">
        <div className="scuba-container">
          <div className="cta-content">
            <h2>Ready to Dive Into Adventure?</h2>
            <p>Explore the maritime worlds inspired by these real underwater experiences in The Voyages of Victora series.</p>
            <div className="cta-buttons">
              <a 
                href="https://voyagesofvictora.web.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button primary"
              >
                Discover the Series
              </a>
              <a 
                href="/blog" 
                className="cta-button secondary"
              >
                Read Dive Stories
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ScubaPage;