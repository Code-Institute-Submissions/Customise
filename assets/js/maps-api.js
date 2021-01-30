

function initMap() {
    // The location of Uluru
    const dublin = { lat: 53.3498, lng:-6.2603 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: dublin,
      mapId: "d4b44cdc72180b83",
      
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: dublin,
      map: map,
      
    });
      
  }

