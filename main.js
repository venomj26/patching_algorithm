// const data = fetch('/patching_allfiles.json')
//               .then(response => response.json())
//               .catch(error => console.log(error));


// var allfiles = $.ajax({
//   url:'/patching_allfiles.json',
//   dataType: "json",
//   success: console.log("County data successfully loaded."),
//   error: function (xhr) {
//     alert(xhr.statusText)
//   }
// })
// $.when(allfiles).done(function(){




    let map;
    function initMap(road) {
      // Styles a map in night mode.
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.2672, lng: -86.1349 }, //change to center at Indiana polis when more roadss are added
        zoom: 8 ,
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
      iconSize = 0.2
      var icons = {
        icon_red: {
            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            fillColor: 'red',
            fillOpacity: .6,
            strokeWeight: 0,
            scale: iconSize
        },
        icon_blue: {
                
            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            fillColor: 'blue',
            fillOpacity: .6,
            strokeWeight: 0,
            scale: iconSize
        },
        
        icon_orange: {
                
            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            fillColor: 'orange',
            fillOpacity: .8,
            strokeWeight: 0,
            scale: iconSize
        },
        
        icon_orangered: {
            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            fillColor: 'OrangeRed',
            fillOpacity: .6,
            strokeWeight: 0,
            scale: iconSize
        },
        
        icon_yellow: {
                
            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            fillColor: 'Yellow',
            fillOpacity: .6,
            strokeWeight: 0,
            scale: iconSize
        },
        
        icon_grey: {
                
            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            fillColor: 'Silver',
            fillOpacity: .6,
            strokeWeight: 0,
            scale: iconSize
        },
        
        icon_salmon: {
                
            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            fillColor: 'Salmon',
            fillOpacity: .6,
            strokeWeight: 0,
            scale: iconSize
        },
        icon_green: {    
            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            fillColor: 'green',
            fillOpacity: .6,
            strokeWeight: 0,
            scale: iconSize
        },
        
      };
    
    
      // Load the stores GeoJSON onto the map.
      if(road==='interState'){
        map.data.loadGeoJson('sampled_patching_IS.json');
        //creating different colored markers for each color in  the geojson file
        map.data.setStyle((feature) => {
          console.log(feature.getProperty("color"));
          return {
            icon: icons[`icon_${feature.getProperty('color')}`],
            scaledSize: new google.maps.Size(24, 24),
          };
        });
      }else if(road==='stateRoad'){
        map.data.loadGeoJson('sampled_patching_SR.json');
        //creating different colored markers for each color in  the geojson file
        map.data.setStyle((feature) => {
          // console.log(feature.getProperty("color"));
          console.log(icons[`icon_${feature.getProperty('color')}`]);
          return {
            icon: icons[`icon_${feature.getProperty('color')}`],
            scaledSize: new google.maps.Size(24, 24),
    
          };
        });
      }else if(road==='usH'){
        map.data.loadGeoJson('patching_allfiles_USH.json');
        //creating different colored markers for each color in  the geojson file
        map.data.setStyle((feature) => {
          return {
            icon: icons[`icon_${feature.getProperty('color')}`],
            scaledSize: new google.maps.Size(24, 24),
          };
        });
      }else if(road === 'InterState-IRI'){
        map.data.loadGeoJson('/patching_allfiles_IS.json');
        map.data.setStyle(function(feature) {
          var LIRI = feature.getProperty('L_IRI');
          var RIRI = feature.getProperty('R_IRI');
          var color = (LIRI >= 270 && RIRI >=270)? 'red' : 'blue';
          return {
            icon: {
                    url: `img/icon_${color}.png`,
                    scaledSize: new google.maps.Size(24, 24),
    
                  },
                };
        });  
    
      }else if(road === 'State-IRI'){
        map.data.loadGeoJson('/patching_allfiles_SR.json');
        map.data.setStyle(function(feature) {
          var LIRI = feature.getProperty('L_IRI');
          var RIRI = feature.getProperty('R_IRI');
          var color = (LIRI >= 330 && RIRI >=330)? 'red' : 'blue';
          return {
            icon: {
                    url: `img/icon_${color}.png`,
                    scaledSize: new google.maps.Size(24, 24),
    
                  },
                };
        });  
    
      }else if(road === 'USH-IRI'){
        map.data.loadGeoJson('/patching_allfiles_USS.json');
        map.data.setStyle(function(feature) {
          var LIRI = feature.getProperty('L_IRI');
          var RIRI = feature.getProperty('R_IRI');
          var color = (LIRI >= 300 && RIRI >=270)? 'red' : 'blue';
          return {
            icon: {
                    url: `img/icon_${color}.png`,
                    scaledSize: new google.maps.Size(24, 24),
    
                  },
                };
        });  
    
      }else if(road === 'InterState-FWD'){
        map.data.loadGeoJson('/fwd_IS.json');
        map.data.setStyle(function(feature) {
          var SCI = feature.getProperty('SCI');
          var BCI = feature.getProperty('BCI');
          var BDI = feature.getProperty('BDI');
          var D0 = feature.getProperty('D0');
          var D48 = feature.getProperty('D48');
          var color = (BCI >= 3 || D48 >= 1.8)? 'red' :(SCI >= 6 || BDI >=4.5 || D0>= 24.6)?'yellow':'green';
          return {
            icon: {
                    url: `img/icon_${color}.png`,
                    scaledSize: new google.maps.Size(24, 24),
    
                  },
                };
        });  
    
      }else if(road === 'State-FWD'){
        map.data.loadGeoJson('/fwd_SR.json');
        map.data.setStyle(function(feature) {
          var SCI = feature.getProperty('SCI');
          var BCI = feature.getProperty('BCI');
          var BDI = feature.getProperty('BDI');
          var D0 = feature.getProperty('D0');
          var D48 = feature.getProperty('D48');
          var color = (BCI >= 3 || D48 >= 1.8)? 'red' :(SCI >= 6 || BDI >=4.5 || D0>= 24.6)? 'yellow':'green';
          return {
            icon: {
                    url: `img/icon_${color}.png`,
                    scaledSize: new google.maps.Size(24, 24),
    
                  },
                };
        });  
    
      }
      
      
    
    
      
        
    
        // map.data.setStyle(function(feature) {
        //   var LIRI = feature.getProperty('L_IRI');
        //   var color = LIRI >= 270 ? 'red' : 'blue';
    
        //   return {
        //     icon: {
        //             url: `img/icon_${color}.png`,
        //             scaledSize: new google.maps.Size(24, 24),
    
        //           },
        //         };
        // });  
    
      map.addListener("zoom_changed", () => {
        var zoom_level = map.getZoom();
        console.log(zoom_level);
      });
      
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
        const Road = event.feature.getProperty('Road');
        const Bound = event.feature.getProperty('Bound');
        const Lane = event.feature.getProperty('Lane');
        const position = event.feature.getGeometry().get();
        const content = `
        <div style="margin-left:20px; margin-bottom:20px;">
          <h2> Road: ${Road} ${Bound} ${Lane} </h2>
          <h4>DMI: ${DMI}</h4><h4>patching: ${patching}</h4>
          <p><b>L_IRI:</b> ${L_IRI}<br/><b>R_IRI:</b> ${R_IRI}</p>
          <p><b>Surface Deflection:</b> ${D0}<br/><b>Subgrade Deflection:</b> ${D48}</p>
          <p><b>SCI:</b> ${SCI}<br/><b>BCI:</b> ${BCI}<br/><b>BDI:</b> ${BDI}<br/></p>
    
    
          <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
        </div>
        `;
        infoWindow.setContent(content);
        infoWindow.setPosition(position);
        infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
        infoWindow.open(map);
       });
     }
    
    
    
    $(document).ready(function(){
        //jquery for toggle sub menus
        $('.sub-btn').click(function(){
          $(this).next('.sub-menu').slideToggle();
          $(this).find('.dropdown').toggleClass('rotate');
        });
        $('.InterState').click(function(){
          let roadType=$(this).attr('id');
          alert(roadType);
          initMap(roadType);
        });
        $('.State').click(function(){
          let roadType=$(this).attr('id');
          initMap(roadType);
          alert(roadType);
        });
        $('.usH').click(function(){
          let roadType=$(this).attr('id');
          initMap(roadType);
          alert(roadType);
        });
        $('.InterState-IRI').click(function(){
          let parameterType=$(this).attr('class');
          initMap(parameterType);
          alert(parameterType);
        });
        $('.State-IRI').click(function(){
          let parameterType=$(this).attr('class');
          initMap(parameterType);
          alert(parameterType);
        });
        $('.USH-IRI').click(function(){
          let parameterType=$(this).attr('class');
          initMap(parameterType);
          alert(parameterType);
        });
        $('.InterState-FWD').click(function(){
          let parameterType=$(this).attr('class');
          initMap(parameterType);
          alert(parameterType);
        });
        $('.State-FWD').click(function(){
          let parameterType=$(this).attr('class');
          initMap(parameterType);
          alert(parameterType);
        });
        $('.IS-Th').click(function(){
          $('.overlay').show('slow');
        });
    
        //jquery for expand and collapse the sidebar
        $('.menu-btn').click(function(){
          $('.side-bar').addClass('active');
          $('.menu-btn').css('visibility', 'hidden');
        });
    
        $('.close-btn').click(function(){
          $('.side-bar').removeClass('active');
          $('.menu-btn').css('visibility', 'visible');
        });
        // instead of click function this has to obe started from a button
        $('.overlay').click(function(){
          $('.form-th').addClass('active');
          $('.overlay').css('visibility', 'hidden');
        });
    
      });
    
    