// src/pages/BlogPage.jsx
import React, { useState } from 'react';
import './BlogPage.css';

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample blog data - replace with actual data from CMS or API
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React and Vite",
      excerpt: "Learn how to set up a modern React development environment with Vite for faster builds and better developer experience.",
      category: "react",
      readTime: "5 min read",
      date: "2024-01-15",
      image: "🚀",
      tags: ["React", "Vite", "JavaScript", "Frontend"]
    },
    {
      id: 2,
      title: "Mastering CSS Grid and Flexbox",
      excerpt: "A comprehensive guide to creating responsive layouts using CSS Grid and Flexbox with practical examples.",
      category: "css",
      readTime: "8 min read",
      date: "2024-01-12",
      image: "🎨",
      tags: ["CSS", "Grid", "Flexbox", "Responsive Design"]
    },
    {
      id: 3,
      title: "Google Cloud Platform for Web Developers",
      excerpt: "How to deploy and scale your web applications using Google Cloud Platform services and infrastructure.",
      category: "cloud",
      readTime: "12 min read",
      date: "2024-01-08",
      image: "☁️",
      tags: ["GCP", "Cloud", "Deployment", "Serverless"]
    },
    {
      id: 4,
      title: "TypeScript Best Practices for React",
      excerpt: "Improve your React code quality and developer experience with these TypeScript tips and patterns.",
      category: "typescript",
      readTime: "6 min read",
      date: "2024-01-05",
      image: "📘",
      tags: ["TypeScript", "React", "Best Practices"]
    },
    {
      id: 5,
      title: "Building Accessible Web Applications",
      excerpt: "Learn how to create web applications that are accessible to everyone, following WCAG guidelines.",
      category: "accessibility",
      readTime: "10 min read",
      date: "2024-01-02",
      image: "♿",
      tags: ["Accessibility", "WCAG", "Inclusive Design"]
    },
    {
      id: 6,
      title: "Optimizing Website Performance",
      excerpt: "Techniques and tools to improve your website's loading speed and overall performance metrics.",
      category: "performance",
      readTime: "7 min read",
      date: "2023-12-28",
      image: "⚡",
      tags: ["Performance", "Optimization", "Core Web Vitals"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'react', name: 'React', count: blogPosts.filter(post => post.category === 'react').length },
    { id: 'css', name: 'CSS', count: blogPosts.filter(post => post.category === 'css').length },
    { id: 'cloud', name: 'Cloud', count: blogPosts.filter(post => post.category === 'cloud').length },
    { id: 'typescript', name: 'TypeScript', count: blogPosts.filter(post => post.category === 'typescript').length },
    { id: 'accessibility', name: 'Accessibility', count: blogPosts.filter(post => post.category === 'accessibility').length },
    { id: 'performance', name: 'Performance', count: blogPosts.filter(post => post.category === 'performance').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
                         post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setActiveCategory('all');
  };

  return (
    <div className="blog-page">
      {/* Header */}
      <header className="hero-section">
        <h3 className="tagline">Author of Swashbuckling Pirate Fantasy</h3>
        <div className="hero-links">
          <a 
            href="https://voyagesofvictora.web.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-link"
          >
            Explore The Voyages of Victora
          </a>
          <a href="#newsletter" className="hero-link">
            Sign Up for a Free Short Story
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Blog & Articles</h1>
            <p className="hero-subtitle">
              Insights, tutorials, and thoughts on web development, cloud technologies, 
              and creating exceptional digital experiences.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">{blogPosts.length}+</div>
                <div className="stat-label">Articles Published</div>
              </div>
              <div className="stat">
                <div className="stat-number">10k+</div>
                <div className="stat-label">Monthly Readers</div>
              </div>
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Topics Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="blog-filters">
        <div className="filters-content">
          <div className="search-box">
            <div className="search-icon">🔍</div>
            <input
              type="text"
              placeholder="Search articles, topics, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              aria-label="Search blog posts"
            />
            {searchTerm && (
              <button 
                onClick={handleClearSearch}
                className="clear-search"
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>

          <div className="category-filters">
            <div className="filter-scroll">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                  aria-label={`Filter by ${category.name}`}
                  aria-pressed={activeCategory === category.id}
                >
                  {category.name}
                  <span className="post-count">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="no-posts">
              <div className="no-posts-icon">📝</div>
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button 
                onClick={handleResetFilters}
                className="reset-filters"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="posts-header">
                <h2>
                  {activeCategory === 'all' ? 'Latest Articles' : 
                   categories.find(cat => cat.id === activeCategory)?.name}
                </h2>
                <div className="results-count">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                </div>
              </div>

              <div className="posts-grid">
                {filteredPosts.map(post => (
                  <article key={post.id} className="blog-card">
                    <div className="card-header">
                      <div className="card-image">
                        {post.image}
                      </div>
                      <div className="card-meta">
                        <span className="read-time">{post.readTime}</span>
                        <span className="date">{formatDate(post.date)}</span>
                      </div>
                    </div>
                    
                    <div className="card-content">
                      <h3 className="card-title">{post.title}</h3>
                      <p className="card-excerpt">{post.excerpt}</p>
                      
                      <div className="card-tags">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="card-footer">
                      <button 
                        className="read-more-btn"
                        aria-label={`Read more about ${post.title}`}
                      >
                        Read Article →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter" className="blog-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Stay Updated</h3>
              <p>Get the latest articles and insights delivered directly to your inbox. No spam, ever.</p>
            </div>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address..."
                className="newsletter-input"
                aria-label="Email address for newsletter"
              />
              <button className="newsletter-btn">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;