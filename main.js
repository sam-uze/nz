/*
Skript für die Neuseelandreise
*/

let stop = {
    nr: 7,
    title: "Napier",
    user: "Samuel",
    lat: -39.48,
    lng: 176.90,
    zoom: 13,
};

//Karte initialisieren
let map = L.map('map').setView([stop.lat, stop.lng], stop.zoom);

//Hintergrund definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Marker zeichnen
let marker = L.marker([stop.lat, stop.lng]).addTo(map);


//Popup definieren und öffnen
marker.bindPopup(`
    <h2>${stop.title}</h2>
    <ul>
        <li>geogr. Breite: ${stop.lat.toFixed(5)}°</li> 
        <li>geogr. Länge: ${stop.lng.toFixed(5)}°</li>
    </ul>
`).openPopup();

