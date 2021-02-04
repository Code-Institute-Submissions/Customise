// code from google maps api 
function initMap() {
    
  const dublin = { lat: 53.3498, lng:-6.2603 };
  let atlantic = { lat: 53.3498, lng:-25.2603 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: atlantic,
    mapId: "d4b44cdc72180b83",
    
  });

  const marker = new google.maps.Marker({
    position: dublin,
    map: map,
    
  });

  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [
    { lat : 48.8566, lng: 2.3522},
    { lat : 51.5074, lng: 0.1278},
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
  

  