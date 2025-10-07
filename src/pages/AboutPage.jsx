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
              A passionate web developer and cloud enthusiast dedicated to creating
              exceptional digital experiences that drive business growth.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">100+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
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