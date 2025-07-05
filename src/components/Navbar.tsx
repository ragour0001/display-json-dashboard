import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMobileMenu = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = (): void => {
    setMobileMenuOpen(false);
  };

  const onSignIn = (): void => {
    navigate('/login');
    closeMenu();
  };

  const onRequestDemo = (): void => {
    console.log('Request demo clicked');
    closeMenu();
  };

  const onLogoClick = (): void => {
    navigate('/');
    closeMenu();
  };

  return (
    <header className="navigation-header">
      <img
        src="/assets/images/logo.png"
        alt="Refill Health Logo"
        className="logo"
        onClick={onLogoClick}
        style={{
          maxWidth: isMobile ? '155px' : undefined,
          width: isMobile ? '155px' : undefined
        }}
      />
      
      {/* Desktop Navigation */}
      <nav className="navigation-container desktop-nav">
        <ul className="nav-links">
          <li><Link to="/organizations" className="nav-link">Organizations</Link></li>
          <li><Link to="/individuals" className="nav-link">Individuals</Link></li>
          <li><Link to="/care-providers" className="nav-link">Care Providers</Link></li>
          <li><Link to="/insurers" className="nav-link">Insurers</Link></li>
          <li><Link to="/our-approach" className="nav-link">Our Approach</Link></li>
          <li><Link to="/our-impact" className="nav-link">Our Impact</Link></li>
          <li><Link to="/discover-yourself" className="nav-link">Discover Yourself</Link></li>
        </ul>
      </nav>
      
      <div className="action-buttons">
        <button className="demo-button" onClick={onRequestDemo}>Request a Demo</button>
        <button className="signin-button" onClick={onSignIn}>Sign in</button>
      </div>
      
      {/* Mobile Header Actions */}
      <div className="mobile-header-actions">
        <button className="signin-button mobile-signin" onClick={onSignIn}>Sign in</button>
        <button
          className={`hamburger-menu ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'show' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/organizations" className="nav-link" onClick={closeMenu}>Organizations</Link></li>
          <li><Link to="/individuals" className="nav-link" onClick={closeMenu}>Individuals</Link></li>
          <li><Link to="/care-providers" className="nav-link" onClick={closeMenu}>Care Providers</Link></li>
          <li><Link to="/insurers" className="nav-link" onClick={closeMenu}>Insurers</Link></li>
          <li><Link to="/our-approach" className="nav-link" onClick={closeMenu}>Our Approach</Link></li>
          <li><Link to="/our-impact" className="nav-link" onClick={closeMenu}>Our Impact</Link></li>
          <li><Link to="/discover-yourself" className="nav-link" onClick={closeMenu}>Discover Yourself</Link></li>
        </ul>
        <div className="action-buttons">
          <button className="demo-button" onClick={onRequestDemo}>Request a Demo</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 