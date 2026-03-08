import React from 'react';
import { X, MapPin, Calendar, ExternalLink, DollarSign } from 'lucide-react';
import './SiteDetails.css';

const SiteDetails = ({ site, onClose }) => {
  if (!site) return null;

  return (
    <div className="site-details-overlay">
      <div className="site-card glass-panel">
        <button className="close-btn" onClick={onClose} aria-label="Close details">
          <X size={20} />
        </button>
        
        <div className="card-image-container">
          <img src={site.imageUrl} alt={site.name} className="site-image" />
          <div className="image-overlay-gradient"></div>
          <h2 className="site-title">{site.name}</h2>
        </div>
        
        <div className="card-content">
          <div className="info-row location">
            <MapPin size={18} className="icon" />
            <span>{site.location}</span>
          </div>
          
          <p className="site-description">{site.description}</p>
          
          <div className="meta-grid">
            <div className="meta-item">
              <Calendar size={18} className="icon" />
              <div>
                <span className="meta-label">Best Time To Visit</span>
                <span className="meta-value">{site.bestTime}</span>
              </div>
            </div>
            
            <div className="meta-item">
              <DollarSign size={18} className="icon" />
              <div>
                <span className="meta-label">Price Range</span>
                <span className="meta-value">{site.priceRange}</span>
              </div>
            </div>
          </div>
          
          <a 
            href={site.website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="action-btn"
          >
            <span>Visit Website</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SiteDetails;
