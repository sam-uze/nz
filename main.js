/*
Skript für die Neuseelandreise
*/

//Karte initialisieren
let map = L.map('map').setView([-39.48, 176.90], 13);

//Hintergrund definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Marker zeichnen
let marker = L.marker([-39.48, 176.90]).addTo(map);

//Popup definieren und öffnen
marker.bindPopup("<b>Napier</b><br>Center").openPopup();