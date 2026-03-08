import React, { useEffect } from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import './MapContainer.css';

// Fix for default marker icons in React Leaflet
const createCustomIcon = (isSelected) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div class="marker-dot ${isSelected ? 'selected' : ''}"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

function MapUpdater({ selectedSite }) {
  const map = useMap();
  useEffect(() => {
    if (selectedSite) {
      // Pan to selected site with a slight offset to account for sidebar/overlay
      const [lat, lng] = selectedSite.coordinates;
      // Slight offset to the left if viewing on desktop
      const isDesktop = window.innerWidth > 768;
      const lngOffset = isDesktop ? 5 : 0; 
      map.flyTo([lat, lng - lngOffset], 6, {
        duration: 1.5,
      });
    } else {
      // Zoom out to world view softly
      map.flyTo([20, 0], 2, {
        duration: 1.5,
      });
    }
  }, [selectedSite, map]);
  return null;
}

const MapContainer = ({ sites, onSiteSelect, selectedSite }) => {
  return (
    <div className="map-wrapper">
      <LeafletMap 
        center={[20, 0]} 
        zoom={2} 
        scrollWheelZoom={true}
        zoomControl={false}
        className="glamping-map"
      >
        {/* Using Esri NatGeo World Map for gorgeous physical geography styling without authentication issues */}
        <TileLayer
          attribution='Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
        />
        
        {sites.map((site) => (
          <Marker 
            key={site.id}
            position={site.coordinates}
            icon={createCustomIcon(selectedSite?.id === site.id)}
            eventHandlers={{
              click: () => onSiteSelect(site),
            }}
          />
        ))}
        
        <MapUpdater selectedSite={selectedSite} />
      </LeafletMap>
    </div>
  );
};

export default MapContainer;
