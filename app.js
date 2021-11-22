const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
   
    var className = document.body.className;
    if(className == "dark-theme") {
        this.textContent = "Dark";
   
    }
    else {
       this.textContent="Light";
   }
    console.log('current class name: ' + className);
});  




function initMap() {
    // Styles a map in night mode.
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 39.7684, lng: -86.1581 },
      zoom: 12,
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
       
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
       
        
      ],
    });

  
    // Load the stores GeoJSON onto the map.
    // map.data.loadGeoJson('stores.json', {idPropertyName: 'storeid'});
    map.data.loadGeoJson('sr57_patching_color.json');

  
    const apiKey = 'AIzaSyAwns33HA__CMj0Akz3bB3uVW7GfRVlZpk';
    const infoWindow = new google.maps.InfoWindow();
 
   


    // Show the information for a store when its marker is clicked.
    map.data.addListener('mouseover', (event) => {
      const patching_color = event.feature.getProperty('patching_color');
      const DMI = event.feature.getProperty('DMI');
    //   const description = event.feature.getProperty('description');
      const L_IRI = event.feature.getProperty('L_IRI');
      const R_IRI = event.feature.getProperty('R_IRI');
      const patching = event.feature.getProperty('patching');
      const D0 = event.feature.getProperty('D0');
      const D48 = event.feature.getProperty('D48');
      const BCI = event.feature.getProperty('BCI');
      const BDI = event.feature.getProperty('BDI');
      const SCI = event.feature.getProperty('SCI');
      const position = event.feature.getGeometry().get();
      const content = `
      <div style="margin-left:20px; margin-bottom:20px;">
        <h2>DMI : ${DMI}</h2><h4>patching : ${patching}</h4>
        <p><b>L_IRI:</b> ${L_IRI}<br/><b>R_IRI</b> ${R_IRI}</p>
        <p><b>Surface Deflection:</b> ${D0}<br/><b>Subgrade Deflection</b> ${D48}</p>
        <p><b>SCI:</b> ${SCI}<br/><b>BCI</b> ${BCI}<br/><b>BDI:</b> ${BDI}<br/></p>


        <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
      </div>
      `;
    
  
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
      infoWindow.open(map);
     });

     var marker = new google.maps.Marker({
        position:feature.getGeometry().get(),
        animation:google.maps.Animation.BOUNCE
      });
      
      marker.setMap(map);


     
    

      
     






   }


  
   