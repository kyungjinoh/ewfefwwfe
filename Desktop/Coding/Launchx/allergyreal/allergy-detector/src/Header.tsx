import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { MdAccountCircle, MdLogout, MdDashboard, MdKeyboardArrowDown, MdPerson, MdOpenInNew } from 'react-icons/md';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOut } = useAuth();
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Check if we're on the main page
  const isMainPage = location.pathname === '/';

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSignIn = () => {
    closeMenu();
    navigate('/signin');
  };

  const handleLogoClick = () => {
    closeMenu();
    navigate('/');
    window.scrollTo(0, 0);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setShowUserMenu(false);
      closeMenu();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleDashboard = () => {
    setShowUserMenu(false);
    closeMenu();
    window.scrollTo(0, 0);
    navigate('/dashboard');
  };

  const handleProfile = () => {
    setShowUserMenu(false);
    closeMenu();
    window.scrollTo(0, 0);
    navigate('/profile');
  };

  const handleQuickDashboard = () => {
    closeMenu();
    window.scrollTo(0, 0);
    navigate('/dashboard');
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <button onClick={handleLogoClick} className="logo-button">AllergyReal Clinical</button>
        </div>
        
        <nav className={`header-nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {isMainPage && (
            <>
              <a href="#upload" onClick={closeMenu} className="nav-highlight">Begin Analysis</a>
              <a href="#how-it-works" onClick={closeMenu}>Clinical Protocol</a>
              <a href="#features" onClick={closeMenu}>Capabilities</a>
              <a href="#testimonials" onClick={closeMenu}>Validation</a>
            </>
          )}
          {user ? (
            <div className="mobile-user-menu-container" ref={userMenuRef}>
              <div className="mobile-user-controls">
                <button className="mobile-user-menu-button" onClick={toggleUserMenu}>
                  <MdAccountCircle />
                  <span>{user.displayName || user.email}</span>
                  <span className={`dropdown-arrow ${showUserMenu ? 'rotated' : ''}`}>
                    <MdKeyboardArrowDown />
                  </span>
                </button>
                <button className="mobile-quick-dashboard-button" onClick={handleQuickDashboard} title="Go to Dashboard">
                  <MdOpenInNew />
                </button>
              </div>
              {showUserMenu && (
                <div className="mobile-user-menu">
                  <div className="mobile-user-info">
                    <strong>{user.displayName || 'User'}</strong>
                    <span>{user.email}</span>
                  </div>
                  <button className="mobile-dashboard-menu-button" onClick={handleDashboard}>
                    <MdDashboard />
                    Dashboard
                  </button>
                  <button className="mobile-profile-menu-button" onClick={handleProfile}>
                    <MdPerson />
                    Profile
                  </button>
                  <button className="mobile-signout-button" onClick={handleSignOut}>
                    <MdLogout />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="mobile-signup-btn" onClick={handleSignIn}>Sign In</button>
          )}
        </nav>

        <div className="header-actions">
          {user ? (
            <div className="user-menu-container" ref={userMenuRef}>
              <div className="user-controls">
                <button className="user-menu-button" onClick={toggleUserMenu}>
                  <MdAccountCircle />
                  <span>{user.displayName || user.email}</span>
                  <span className={`dropdown-arrow ${showUserMenu ? 'rotated' : ''}`}>
                    <MdKeyboardArrowDown />
                  </span>
                </button>
                <button className="quick-dashboard-button" onClick={handleQuickDashboard} title="Go to Dashboard">
                  <MdOpenInNew />
                </button>
              </div>
              {showUserMenu && (
                <div className="user-menu">
                  <div className="user-info">
                    <strong>{user.displayName || 'User'}</strong>
                    <span>{user.email}</span>
                  </div>
                  <button className="dashboard-menu-button" onClick={handleDashboard}>
                    <MdDashboard />
                    Dashboard
                  </button>
                  <button className="profile-menu-button" onClick={handleProfile}>
                    <MdPerson />
                    Profile
                  </button>
                  <button className="signout-button" onClick={handleSignOut}>
                    <MdLogout />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="signup-btn" onClick={handleSignIn}>Sign In</button>
          )}
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 