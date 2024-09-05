function initializeMap() {
    // Correct coordinates for 1200 Sagwityi Street, Mayibuye, Commercia, Midrand, Gauteng
    const map = L.map('map', {
        center: [-25.9795, 28.1378], // Updated coordinates
        zoom: 10,
        attributionControl: false, 
        zoomControl: false // Disable the default zoom control
    }); 

    // Add a tile layer (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Optional: Add a marker
    const marker = L.marker([-25.9795, 28.1378]).addTo(map);
    marker.bindPopup("Mayibuye, Commercia, Midrand, Gauteng, 1685, South Africa").openPopup();

    // Add a circular border
    const circle = L.circle([-25.9795, 28.1378], {
        color: ' #cadcfc', // Border color
        fillColor: '#004750af', // Fill color
        fillOpacity: 0.5, // Fill opacity
        radius: 500 // Radius in meters
    }).addTo(map);
}



