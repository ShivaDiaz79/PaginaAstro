import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

const MapBox = ({ lat, lng, zoom }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current === null) {
      const L = require('leaflet');
      const map = L.map('map').setView([lat, lng], zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);

      const coord = [lat, lng];

      // Crear un icono personalizado con la imagen
      const customIcon = L.icon({
        iconUrl: '/Img/edificio.jpg',
        iconSize: [40, 40], // Tamaño de la imagen del icono
        iconAnchor: [20, 40], // Punto de anclaje del icono
      });

      const marker = L.marker(coord, { icon: customIcon }).addTo(map);

      marker.on('click', () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`);
      });

      mapRef.current = map;
    }
  }, [lat, lng, zoom]);

  return <div id='map' className='h-96  w-68 sm:h-full sm:w-full'></div>;
};

export default MapBox;




