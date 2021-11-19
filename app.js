function initMap() {
    // Create the map.
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 39.7684, lng:-86.1581},
    });
  
    // Load the stores GeoJSON onto the map.
    // map.data.loadGeoJson('stores.json', {idPropertyName: 'storeid'});
    map.data.loadGeoJson('sr57.json');

  
    const apiKey = 'AIzaSyAwns33HA__CMj0Akz3bB3uVW7GfRVlZpk';
    const infoWindow = new google.maps.InfoWindow();
  
    // Show the information for a store when its marker is clicked.
    map.data.addListener('click', (event) => {
      //const category = event.feature.getProperty('category');
      const DMI = event.feature.getProperty('DMI');
    //   const description = event.feature.getProperty('description');
      const L_IRI = event.feature.getProperty('L_IRI');
      const R_IRI = event.feature.getProperty('R_IRI');
      const position = event.feature.getGeometry().get();
      const content = `
        <h2>DMI : ${DMI}</h2>
        <p><b>L_IRI:</b> ${L_IRI}<br/><b>R_IRI</b> ${R_IRI}</p>
      `;
  
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
      infoWindow.open(map);
     });
   }