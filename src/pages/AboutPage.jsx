// src/pages/AboutPage.jsx
import React from 'react';
import './AboutPage.css';

function AboutPage() {
  const skills = [
    {
      category: "Frontend Development",
      items: ["React", "Vue.js", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Python", "Express.js", "REST APIs", "GraphQL", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Cloud & DevOps",
      items: ["Google Cloud Platform", "Microsoft Azure", "Docker", "Kubernetes", "CI/CD", "Serverless"]
    },
    {
      category: "Design & UX",
      items: ["Figma", "Adobe XD", "Responsive Design", "UI/UX Principles", "Prototyping", "User Research"]
    }
  ];

  const experience = [
    {
      year: "2022 - Present",
      role: "Freelance Web Developer & Designer",
      company: "Self-Employed",
      description: "Building scalable web applications and providing consulting services for businesses migrating to cloud platforms."
    },
    {
      year: "2020 - 2022",
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      description: "Led frontend development team in creating responsive web applications and improving user experience metrics."
    },
    {
      year: "2018 - 2020",
      role: "Full Stack Developer",
      company: "Digital Innovations LLC",
      description: "Developed full-stack applications and implemented cloud infrastructure solutions for various clients."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hello, I'm Christopher</h1>
            <p className="hero-subtitle">
              For Christopher Feveck, the sea is more than a setting—it's a character. Born and raised in the archipelago of Trinidad and Tobago, he grew up with saltwater in his veins and stories of explorers on the trade winds. After charting a course to King's University College in Edmonton, he found that even the prairie skies couldn't compete with his longing for the ocean's horizon.

              As a PADI Advanced Open Water diver, Christopher has ventured into the silent, breathtaking world beneath the waves, an experience that breathes authentic detail into the maritime adventures of his characters. This unique blend of island spirit, academic discipline, and hands-on exploration, combined with a curious mind that dabbles in programming, shapes his writing. He spins his fantasies not from pure imagination, but from the rich tapestry of his own life—every person he's met a potential crewmate, every experience a treasure map to a new story.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Web Developer/ Digital marker Experience</div>
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
            <div className="image-placeholder">
              <div className="avatar">CB</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <h2>My Journey</h2>
        </div>
      </section>
      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">

          <p>Christopher Feveck was raised on the twin islands of Trinidad and Tobago, where the rhythm of the ocean and a rich history of seafaring first ignited his passion for adventure. Though his academic journey took him inland to King's University College in Edmonton, the call of the sea never faded. He is a certified PADI Advanced Open Water diver, and his time beneath the waves directly fuels the immersive, aquatic worlds of his pirate fantasy series, The Voyages of Victora.

            Christopher's unique path—from the Caribbean to Canada, from exploring coral reefs to dabbling in the logical realms of programming—has given him a diverse perspective on storytelling. He believes that the most compelling fantasies are rooted in genuine human experience. His characters and plots are inspired by the myriad of people he has met and the real adventures he has lived along the way.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Get In Touch</button>
  
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;