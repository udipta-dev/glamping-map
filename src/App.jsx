import React, { useState } from 'react';
import MapContainer from './components/MapContainer';
import SiteDetails from './components/SiteDetails';
import WelcomeModal from './components/WelcomeModal';
import { glampingSites } from './data/glampingSites';

function App() {
  const [selectedSite, setSelectedSite] = useState(null);

  return (
    <div className="app-layout">
      <WelcomeModal />
      <main className="main-content">
        <MapContainer 
          sites={glampingSites} 
          onSiteSelect={setSelectedSite} 
          selectedSite={selectedSite} 
        />
        
        <SiteDetails 
          site={selectedSite} 
          onClose={() => setSelectedSite(null)} 
        />
      </main>
    </div>
  );
}

export default App;
