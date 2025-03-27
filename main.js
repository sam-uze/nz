/*
Skript für die Neuseelandreise
*/

let lat = -39.48;
let lng = 176.90;
let zoom = 13;

//Karte initialisieren
let map = L.map('map').setView([lat, lng], zoom);

//Hintergrund definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Marker zeichnen
let marker = L.marker([-39.48, 176.90]).addTo(map);


//Popup definieren und öffnen
marker.bindPopup(`
    <b><h2>Napier</h2>
    <ul>
        <li>geogr. Breite:5 ${lat.toFixed(5)}°</li> 
        <li>geogr. Länge: ${lng.toFixed(5)}°</li>
    </ul>
`).openPopup();