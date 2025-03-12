document.addEventListener("DOMContentLoaded", function () {

    // Initialize Glide.js
    new Glide('.glide', {
        type: 'carousel',
        perView: 1,
        autoplay: 3000
    }).mount();

    // Initialize Leaflet Map
    var map = L.map('map').setView([43.65107, -79.347015], 10); // Toronto coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([43.65107, -79.347015]).addTo(map)
        .bindPopup('Toronto, Canada')
        .openPopup();

    // Initialize Granim.js for the header
    new Granim({
        element: '#granim-header',
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        opacity: [1, 1],
        states: {
            "default-state": {
                gradients: [
                    ['#ff9966', '#ff5e62'],
                    ['#00F260', '#0575E6'],
                    ['#e1eec3', '#f05053']
                ],
                transitionSpeed: 3000
            }
        }
    });

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // Animation duration in ms
        once: true,     // Whether animation should happen only once
    });

});
