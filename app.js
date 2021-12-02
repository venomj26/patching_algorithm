

function initMap() {
    // Styles a map in night mode.
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 38.672131, lng: -87.165268 }, //change to center at Indiana polis when more roadss are added
      zoom: 15,
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
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#263c3f"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#6b9a76"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#38414e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#212a37"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9ca5b3"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#746855"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#1f2835"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#f3d19c"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#2f3948"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#17263c"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#515c6d"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#17263c"
              }
            ]
          }
        ]
          
            
    });

    

  
    // Load the stores GeoJSON onto the map.
    map.data.loadGeoJson('sr57_patching_color.json',{idPropertyName: 'DMI'});
   
    //creating different colored markers for each color in  the geojson file
    map.data.setStyle((feature) => {
      return {
        icon: {
          url: `img/icon_${feature.getProperty('color')}.png`,
          scaledSize: new google.maps.Size(24, 24),
        },
      };
    });
    //creating icons variable for SVG markers in future
    // const icons_svg = {
    //   Good_condition: {
    //     name: "Good Road",
    //     icon: img/icon_red.svg,
    //     fillcolor: "green"
    //     scale: 2,
    //   },
    //   high_IRI: {
    //     name: "high IRI",
    //     icon: "img/icon_blue.png",
    //     scale: 2,
    //   },
    //   Full_depth_patching: {
    //     name: "Full depth patching",
    //     icon: "img/icon_red.png",
    //     scale: 2,
    //   },
    //   Full_depth_patching_fwd: {
    //     name: "Full depth patching fwd",
    //     icon: "img/icon_orangered.png",
    //     scale: 2,
    //   },
    //   Full_depth_patching_warning: {
    //     name: "Full depth patching warning",
    //     icon:"img/icon_orange.png",
    //     scale: 2,
    //   },
    //   Surface_patching: {
    //     name: "Surface patching",
    //     icon: "img/icon_salmon.png",
    //     scale: 2,
    //   },
    //   Surface_patching_warning: {
    //     name: "Surface patching warning",
    //     icon: "img/icon_yellow.png",
    //     scale: 2,
    //   },
    //   need_to_be_checked: {
    //     name: "need to be checked",
    //     icon: "img/icon_grey.png",
    //     scale: 2,
    //   },
    // };
    // const legend = document.getElementById("legend");
    // for (const key in icons) {
    //   const type = icons[key];
    //   const name = type.name;
    //   const icon = type.icon;
    //   const scale = type.scale;
    //   const div = document.createElement("div");
  
    //   div.innerHTML = '<img src="' + icon + '"> ' + name;
    //   legend.appendChild(div);
    // }
  
    // map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
  
    const apiKey = 'AIzaSyAwns33HA__CMj0Akz3bB3uVW7GfRVlZpk';
    const infoWindow = new google.maps.InfoWindow();
 
   


    //Show the information for a store when its marker is clicked.
    map.data.addListener('click', (event) => {
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
     
      

     
    

      
     






   }


  
   