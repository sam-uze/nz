var map = L.map('map').setView([-39.48, 176.90], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([-39.48, 176.90]).addTo(map);
marker.bindPopup("<b>Napier</b><br>Center").openPopup();