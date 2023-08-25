function initMap() {

  var map = new Microsoft.Maps.Map(document.getElementById("mapCanvas"), {
    credentials:
      "AnwScUqyWNCC1lj52RLnVD3NY9YXvCQAGzVP5_lZtgoCCT1MVXEGXz_F0Sxbvz9K",
  });

  var locateButton = document.getElementById("locateButton");
  
  locateButton.addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(function (position) {
      var location = new Microsoft.Maps.Location(
        position.coords.latitude,
        position.coords.longitude
      );

      var pin = new Microsoft.Maps.Pushpin(location);
      map.entities.push(pin);
      map.setView({
        center: location,
        zoom: 15,
      });
    });
  });
}
