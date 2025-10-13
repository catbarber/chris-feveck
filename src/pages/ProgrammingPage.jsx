// src/pages/ProgrammingPage.jsx
import React from 'react';
import './ProgrammingPage.css';

function ProgrammingPage() {
  const skills = [
    {
      category: "Frontend Development",
      icon: "🎨",
      technologies: ["React", "Vue.js", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "Material-UI"]
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      technologies: ["Node.js", "Python", "Express.js", "REST APIs", "GraphQL", "MongoDB", "PostgreSQL", "Firebase"]
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      technologies: ["Google Cloud Platform", "Microsoft Azure", "Docker", "Kubernetes", "CI/CD", "Serverless", "AWS Lambda"]
    },
    {
      category: "Tools & Methodologies",
      icon: "🛠️",
      technologies: ["Git", "Agile/Scrum", "Jest", "Cypress", "Webpack", "Vite", "Figma", "VS Code"]
    }
  ];

  const projects = [
    {
      title: "The Voyages of Victora Website",
      description: "Interactive author website and book series portal built with React and Firebase",
      technologies: ["React", "Firebase", "CSS3", "JavaScript"],
      liveLink: "https://voyagesofvictora.web.app/",
      githubLink: "#",
      image: "🌊"
    },
    {
      title: "Portfolio Platform",
      description: "Responsive portfolio website showcasing writing and development work with modern design",
      technologies: ["React", "Vite", "CSS3", "Responsive Design"],
      liveLink: "/",
      githubLink: "#",
      image: "💼"
    },
    {
      title: "API Integration Solutions",
      description: "Various REST API integrations and microservices for client projects",
      technologies: ["Node.js", "Express", "MongoDB", "REST APIs"],
      liveLink: "#",
      githubLink: "#",
      image: "🔌"
    }
  ];

  const experience = [
    {
      period: "2022 - Present",
      role: "Freelance Full Stack Developer",
      company: "Self-Employed",
      description: "Building scalable web applications and providing technical solutions for businesses. Specializing in React, Node.js, and cloud platforms.",
      achievements: ["Delivered 8+ client projects", "Improved application performance by 40%", "Implemented CI/CD pipelines"]
    },
    {
      period: "2020 - 2022",
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      description: "Led frontend development team in creating responsive web applications and improving user experience metrics.",
      achievements: ["Led team of 4 developers", "Reduced load times by 60%", "Implemented design system"]
    },
    {
      period: "2018 - 2020",
      role: "Full Stack Developer",
      company: "Digital Innovations LLC",
      description: "Developed full-stack applications and implemented cloud infrastructure solutions for various clients.",
      achievements: ["Built 10+ full-stack applications", "Migrated legacy systems to cloud", "Mentored junior developers"]
    }
  ];

  return (
    <div className="programming-page">
      {/* Hero Section */}
      <section className="programming-hero">
        <div className="programming-container">
          <div className="hero-content">
            <h1>Code & Creativity</h1>
            <p className="hero-subtitle">
              Where logical problem-solving meets creative storytelling. 
              Exploring how programming enhances my writing process and brings digital worlds to life.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">20+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">10+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="programming-intro">
        <div className="programming-container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Bridging Two Worlds</h2>
              <p>
                As both a writer and developer, I've discovered that programming and storytelling 
                share more in common than one might think. Both require structure, creativity, 
                and the ability to solve complex problems—whether it's debugging code or 
                developing character arcs.
              </p>
              <p>
                My journey in tech began alongside my writing career, and I've found that 
                the logical thinking required for programming enhances my world-building 
                and plot development. From building author platforms to creating interactive 
                reading experiences, technology empowers me to share stories in innovative ways.
              </p>
              <div className="tech-philosophy">
                <h3>My Tech Philosophy</h3>
                <ul>
                  <li>💡 <strong>Clean Code</strong> is like good prose—clear, maintainable, and elegant</li>
                  <li>🚀 <strong>User Experience</strong> matters as much in apps as in storytelling</li>
                  <li>🌐 <strong>Accessibility</strong> ensures everyone can access content and code</li>
                  <li>🔄 <strong>Continuous Learning</strong> drives growth in both tech and writing</li>
                </ul>
              </div>
            </div>
            <div className="intro-visual">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control red"></span>
                    <span className="control yellow"></span>
                    <span className="control green"></span>
                  </div>
                  <span className="window-title">storytelling.js</span>
                </div>
                <div className="code-content">
                  <pre>{`// Where code meets creativity
function createAdventure() {
  const imagination = new WorldBuilder();
  const logic = new ProblemSolver();
  
  return imagination.collaborate(logic)
    .buildWorlds()
    .craftCharacters()
    .solvePlotHoles()
    .deliverMagic();
}

// Currently building: 
// - Next novel in The Voyages of Victora
// - Interactive reading experiences
// - Author platform innovations`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="programming-container">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skillCategory, index) => (
              <div key={index} className="skill-category">
                <div className="category-header">
                  <span className="category-icon">{skillCategory.icon}</span>
                  <h3>{skillCategory.category}</h3>
                </div>
                <div className="technologies-list">
                  {skillCategory.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="programming-container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  {project.image}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link live"
                      >
                        🌐 Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link github"
                      >
                        💻 Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="experience-section">
        <div className="programming-container">
          <h2>Development Journey</h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-period">{exp.period}</div>
                  <h3>{exp.role} • {exp.company}</h3>
                  <p>{exp.description}</p>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing & Tech Connection */}
      <section className="connection-section">
        <div className="programming-container">
          <div className="connection-content">
            <h2>How Programming Enhances My Writing</h2>
            <div className="connection-grid">
              <div className="connection-point">
                <div className="point-icon">📐</div>
                <div className="point-content">
                  <h4>Structural Thinking</h4>
                  <p>Software architecture principles help me structure complex narratives and plotlines with clarity and purpose.</p>
                </div>
              </div>
              <div className="connection-point">
                <div className="point-icon">🔍</div>
                <div className="point-content">
                  <h4>Problem Solving</h4>
                  <p>Debugging code trains the same analytical mindset needed for resolving plot holes and character inconsistencies.</p>
                </div>
              </div>
              <div className="connection-point">
                <div className="point-icon">🚀</div>
                <div className="point-content">
                  <h4>Technical World-Building</h4>
                  <p>Understanding technology allows me to create more believable futuristic or alternative worlds in my stories.</p>
                </div>
              </div>
              <div className="connection-point">
                <div className="point-icon">💻</div>
                <div className="point-content">
                  <h4>Digital Storytelling</h4>
                  <p>I can build interactive platforms and tools to enhance how readers experience and engage with my stories.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="programming-cta">
        <div className="programming-container">
          <div className="cta-content">
            <h2>Let's Build Something Amazing</h2>
            <p>Interested in collaborating on a project or discussing how technology can enhance your creative work?</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Get In Touch
              </a>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProgrammingPage;