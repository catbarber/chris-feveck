import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1>Oops! Page Not Found</h1>
        <p className="error-message">
          Sorry, the page you're looking for doesn't exist. 
          It might have been moved or deleted.
        </p>
        <div className="action-buttons">
          <button className="btn btn-primary" onClick={handleGoBack}>
            Go Back
          </button>
          <button className="btn btn-secondary" onClick={handleGoHome}>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;