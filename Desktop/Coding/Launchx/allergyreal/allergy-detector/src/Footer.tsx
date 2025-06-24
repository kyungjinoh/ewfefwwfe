import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Footer.css';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleDashboard = () => {
    window.scrollTo(0, 0);
    navigate('/dashboard');
  };

  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>AllergyReal Clinical</h3>
          <p>Advanced AI-powered allergen detection for clinical applications. FDA registered medical device.</p>
        </div>
        
        <div className="footer-section">
          <h3>Clinical Resources</h3>
          <ul className="footer-links">
            <li><a href="#upload">Begin Analysis</a></li>
            <li><a href="#about">Clinical Overview</a></li>
            <li><a href="#features">Analytical Features</a></li>
            <li><a href="#testimonials">Clinical Validation</a></li>
          </ul>
          {user ? (
            <button className="footer-dashboard-btn" onClick={handleDashboard}>Dashboard</button>
          ) : (
            <button className="footer-signup-btn" onClick={handleSignIn}>Sign In</button>
          )}
        </div>
      </div>
      
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} AllergyReal Clinical Systems. All rights reserved. FDA Registered Medical Device.
      </div>
    </footer>
  );
};

export default Footer; 