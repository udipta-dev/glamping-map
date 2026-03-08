import React, { useState, useEffect } from 'react';
import { Compass, X } from 'lucide-react';
import './WelcomeModal.css';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the modal before
    const hasSeenModal = localStorage.getItem('hasSeenGlampingWelcome');
    if (!hasSeenModal) {
      // Small delay for effect
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenGlampingWelcome', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="welcome-overlay">
      <div className="welcome-modal">
        <button className="close-welcome-btn" onClick={handleClose}>
          <X size={20} />
        </button>
        <div className="welcome-icon-wrapper">
          <Compass size={40} className="welcome-icon" />
        </div>
        <h2 className="welcome-title">Global Glamping Map</h2>
        <p className="welcome-text">
          Discover the world's most luxurious and breathtaking glamping locations.
          <br /><br />
          This map features a curated list of the best nature escapes globally, and will be continuously updated.
        </p>
        <button className="welcome-cta-btn" onClick={handleClose}>
          Start Exploring
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
