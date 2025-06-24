import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { MdScience, MdUpload, MdHistory, MdSettings } from 'react-icons/md';
import Header from './Header';
import Footer from './Footer';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/signin');
    return null;
  }

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="dashboard-header">
            <h1>Welcome, {user.displayName || 'Clinical User'}!</h1>
            <p>Access your allergen detection tools and analysis history.</p>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card">
              <div className="card-icon">
                <MdUpload />
              </div>
              <h3>Begin Analysis</h3>
              <p>Upload ingredient labels for allergen detection</p>
              <button className="card-button" onClick={() => navigate('/#upload')}>
                Start Analysis
              </button>
            </div>

            <div className="dashboard-card">
              <div className="card-icon">
                <MdHistory />
              </div>
              <h3>Analysis History</h3>
              <p>View your previous allergen detection results</p>
              <button className="card-button secondary">
                View History
              </button>
            </div>

            <div className="dashboard-card">
              <div className="card-icon">
                <MdScience />
              </div>
              <h3>Clinical Protocol</h3>
              <p>Review clinical procedures and guidelines</p>
              <button className="card-button secondary" onClick={() => navigate('/#how-it-works')}>
                View Protocol
              </button>
            </div>

            <div className="dashboard-card">
              <div className="card-icon">
                <MdSettings />
              </div>
              <h3>Account Settings</h3>
              <p>Manage your clinical account preferences</p>
              <button className="card-button secondary">
                Settings
              </button>
            </div>
          </div>

          <div className="dashboard-info">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">
                  <MdScience />
                </div>
                <div className="activity-content">
                  <h4>Welcome to AllergyReal Clinical</h4>
                  <p>Your account is ready for allergen detection analysis.</p>
                  <span className="activity-time">Just now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard; 