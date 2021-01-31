

function initMap() {
    // The location of Uluru
    const dublin = { lat: 53.3498, lng:-6.2603 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: dublin,
      mapId: "d4b44cdc72180b83",
      
    });

    const marker = new google.maps.Marker({
      position: dublin,
      map: map,
      
    });

    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
      { lat : 40.785091, lng: -73.968285},
      { lat : 41.085091, lng: -73.988285},
      { lat : 40.755091, lng: -73.878285}

    ]

    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
   // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
     imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
 }
  

  