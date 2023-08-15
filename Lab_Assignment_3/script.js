let map;

function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('mapCanvas'), {
        credentials: 'AnwScUqyWNCC1lj52RLnVD3NY9YXvCQAGzVP5_lZtgoCCT1MVXEGXz_F0Sxbvz9K',
        center: new Microsoft.Maps.Location(12.9716, 77.5946), // Default to Bangalore City
        zoom: 12
    });

    // Get user's geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
    const userLocation = new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude);

    // Add a pushpin for user's location
    const userPin = new Microsoft.Maps.Pushpin(userLocation);
    map.entities.push(userPin);

    // Fetch and display nearby points of interest
    fetchNearbyPointsOfInterest(userLocation);
}

function fetchNearbyPointsOfInterest(location) {
    // Use your own logic to fetch nearby points of interest from an API
    // and then display them on the map as pushpins or markers
    // For example:
    const poiLocations = [
        new Microsoft.Maps.Location(location.latitude + 0.01, location.longitude + 0.01),
        new Microsoft.Maps.Location(location.latitude - 0.02, location.longitude + 0.02),
        // Add more locations here
    ];

    poiLocations.forEach(poiLocation => {
        const poiPin = new Microsoft.Maps.Pushpin(poiLocation, { color: 'red' });
        map.entities.push(poiPin);
    });
}
