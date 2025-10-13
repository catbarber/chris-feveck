// src/components/Navigation.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-content">
        <div className="nav-brand">
          <Link to="/" onClick={() => setIsMenuOpen(false)}><h1>Christopher Feveck</h1></Link>
        </div>
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home 🏠</Link></li>

<li><Link to="/scuba" onClick={() => setIsMenuOpen(false)}>
My Scuba Life 🤿
</Link></li>
<li>
<Link to="/programming">
Programming 💻
</Link></li>

       <li><Link to="/donate" onClick={() => setIsMenuOpen(false)}>Donate 💸</Link></li>
          <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog 📚</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About ℹ️</Link></li>
   
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;