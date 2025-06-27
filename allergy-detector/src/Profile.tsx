import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { User, Mail, Edit, Save, X, ArrowLeft } from 'lucide-react';
import './Profile.css';

const Profile: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Here you would typically update the user profile in Firebase
      // For now, we'll just simulate the update
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setDisplayName(user?.displayName || '');
    setIsEditing(false);
  };

  if (!user) {
    navigate('/signin');
    return null;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <button className="back-button" onClick={handleBackToDashboard}>
          <ArrowLeft />
          Back to Dashboard
        </button>
        <h1>Profile Settings</h1>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-avatar">
            <User />
          </div>

          <div className="profile-info">
            <div className="profile-field">
              <label>Display Name</label>
              {isEditing ? (
                <div className="edit-field">
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Enter display name"
                  />
                </div>
              ) : (
                <div className="field-value">
                  <span>{user.displayName || 'Not set'}</span>
                </div>
              )}
            </div>

            <div className="profile-field">
              <label>Email</label>
              <div className="field-value">
                <Mail />
                <span>{user.email}</span>
              </div>
            </div>

            <div className="profile-field">
              <label>Account Type</label>
              <div className="field-value">
                <span>{user.providerData[0]?.providerId === 'google.com' ? 'Google Account' : 'Email/Password'}</span>
              </div>
            </div>

            <div className="profile-actions">
              {isEditing ? (
                <div className="edit-actions">
                  <button 
                    className="save-button" 
                    onClick={handleSave}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button className="cancel-button" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              ) : (
                <button className="edit-button" onClick={handleEdit}>
                  <Edit />
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="profile-actions-card">
          <h3>Account Actions</h3>
          <button className="signout-button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile; 