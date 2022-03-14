// const data = fetch('/patching_allfiles.json')
//               .then(response => response.json())
//               .catch(error => console.log(error));


// var I69 = $.ajax({
//   url:'/SampledRoadSchooldemoPatchingI69.json',
//   dataType: "json",
//   success: console.log("County data successfully loaded."),
//   error: function (xhr) {
//     alert(xhr.statusText)
//   }
// })
// function loadJSON(data) {
//   var json = null;
//   $.ajax({
//       async: false,
//       global: false,
//       url: data,
//       dataType: "json",
//       success: function (data) {
//           json = data;
//       }
//   });
//   return json;
// }


let map;

function initMap(road) {
  // Styles a map in night mode.
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 40.623640,
      lng: -85.658287
    }, //change to center at Indiana polis when more roadss are added
    zoom: 10,
    styles: [{
        elementType: "geometry",
        stylers: [{
          color: "#242f3e"
        }]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#242f3e"
        }]
      },
      {
        elementType: "labels.text.fill",
        stylers: [{
          color: "#746855"
        }]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#d59563"
        }],
      },

      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
          color: "#38414e"
        }],
      },

      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      },
      {
        "featureType": "poi.business",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#263c3f"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#6b9a76"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#38414e"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#212a37"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9ca5b3"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#746855"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#1f2835"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#f3d19c"
        }]
      },
      {
        "featureType": "transit",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#2f3948"
        }]
      },
      {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#17263c"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#515c6d"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#17263c"
        }]
      }
    ]


  });
  iconSize = 0.5
  var icons = {
    icon_maroon: {
      name: "fwdPriorityPatch",
      path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
      fillColor: 'maroon',
      fillOpacity: 0.5,
      strokeWeight: 0.3,
      scale: iconSize
    },
    icon_crimson: {
      name: "fullDepthPatch",
      path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
      fillColor: 'crimson',
      fillOpacity: 0.8,
      strokeWeight: 0.3,
      scale: iconSize
    },
    icon_salmon: {
      name: "fullDepthPatchWarning",
      path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
      fillColor: 'salmon',
      fillOpacity: .9,
      strokeWeight: 0.3,
      scale: iconSize
    },

    icon_orange: {
      name: "surfacePatch",
      path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
      fillColor: 'orange',
      fillOpacity: 1,
      strokeWeight: 0.3,
      scale: iconSize
    },
    icon_yellow: {
      name: "surfacePatchWarning",
      path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
      fillColor: 'Yellow',
      fillOpacity: .6,
      strokeWeight: 0.3,
      scale: iconSize
    },
    icon_green: {
      name: "goodRoad",
      path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
      fillColor: 'green',
      fillOpacity: 0.5,
      strokeWeight: 0.3,
      scale: iconSize
    },
    icon_blue: {
      name: "highIRI",
      path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
      fillColor: 'blue',
      fillOpacity: .6,
      strokeWeight: 0.3,
      scale: iconSize
    },
    // icon_grey: {
    //   name: "manualInspection",
    //   path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
    //   fillColor: 'Silver',
    //   fillOpacity: 1,
    //   strokeWeight: 0.3,
    //   scale: iconSize
    // },
  };



  const apiKey = 'AIzaSyAwns33HA__CMj0Akz3bB3uVW7GfRVlZpk';
  const infoWindow = new google.maps.InfoWindow();


  var isData = loadJSON("/SampledRoadSchooldemoPatchingI69.json");

  if (road === 'interState') {
    map.data.addGeoJson(isData);
    // map.setCenter({lat: 41.061371, lon:-85.238396});
    map.setCenter(new google.maps.LatLng(41.061371, -85.238396));
    //creating different colored markers for each color in  the geojson file
    console.log("loadingcorrectly");
    map.data.setStyle((feature) => {
      return {
        icon: icons[`icon_${feature.getProperty('color')}`],
        scaledSize: new google.maps.Size(24, 24),
      };
    });
    addlegendRoadMarker()

    // legend for the roads 
    // var legend = document.getElementById("legend");

    // for (const key in icons) {
    //   const icon = icons[key];
    //   // console.log(icon);
    //   const name = icon.name;
    //   // console.log(name);
    //   const div_custom = document.createElement("div");

    //   div_custom.innerHTML = '<svg viewBox="10 0 100 20" xmlns="http://www.w3.org/2000/svg"> <circle id="'+icon.name+'" cx="50%" cy="50%" r="10" stroke="black" stroke-width="0.6" fill="'+icon.fillColor+'"</circle></svg> '+icon.name;
    //   legend.appendChild(div_custom);
    // }
    // map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(legend);
    //Show the information for a store when its marker is clicked.
    map.data.addListener('click', (event) => {
      const DMI = event.feature.getProperty('DMI');
      const index = event.feature.getProperty('index');
      // const point = event.feature.getProperty('index');
      const L_IRI = event.feature.getProperty('L_IRI') > 0.0 ? event.feature.getProperty('L_IRI') : "Data Unavailable";
      const R_IRI = event.feature.getProperty('R_IRI') > 0.0 ? event.feature.getProperty('R_IRI') : "Data Unavailable";
      const patching = event.feature.getProperty('patching');
      const D0 = event.feature.getProperty('D0') > 0.0 ? event.feature.getProperty('D0') : "Data Unavailable";
      const D48 = event.feature.getProperty('D48') > 0.0 ? event.feature.getProperty('D48') : "Data Unavailable";
      const BCI = event.feature.getProperty('BCI') > 0.0 ? event.feature.getProperty('BCI') : "Data Unavailable";
      const BDI = event.feature.getProperty('BDI') > 0.0 ? event.feature.getProperty('BDI') : "Data Unavailable";
      const SCI = event.feature.getProperty('SCI') > 0.0 ? event.feature.getProperty('SCI') : "Data Unavailable";
      const Road = event.feature.getProperty('Road');
      const Bound = event.feature.getProperty('Bound');
      const Lane = event.feature.getProperty('Lane');
      const position = event.feature.getGeometry().get();
      const content = `
    <div style="margin-left:20px; margin-bottom:20px;">
      <h2> Road: ${Road} ${Bound} ${Lane} </h2>
      <h4> Index:$(index)</h4> <h4>DMI: ${DMI}</h4> 
      <h4>patching: ${patching}</h4>
      <p><b>L_IRI (Th:270):</b> ${L_IRI}<br/><b>R_IRI(Th:270):</b> ${R_IRI}</p>
      <p><b>Surface Deflection(Th=24.6):</b> ${D0}<br/><b>Subgrade Deflection(Th=1.8):</b> ${D48}</p>
      <p><b>SCI(Th=6):</b> ${SCI}<br/><b>BCI(Th=3):</b> ${BCI}<br/><b>BDI(Th=4.5):</b> ${BDI}<br/></p>
  

      <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
    </div>
    `;
      console.log(content);
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({
        pixelOffset: new google.maps.Size(0, -30)
      });
      infoWindow.open(map);
    });

  } else if (road === 'stateRoad') {
    map.data.loadGeoJson('/SampledRoadSchooldemoPatchingSR327image.json');
    //creating different colored markers for each color in  the geojson file   
    map.setCenter(new google.maps.LatLng(41.596237, -85.169098));

    map.data.setStyle((feature) => {
      // console.log(feature.getProperty("color"));
      console.log(feature.getProperty("color"));
      return {
        icon: icons[`icon_${feature.getProperty('color')}`],
        scaledSize: new google.maps.Size(24, 24),

      };
    });
    addlegendRoadMarker()

    // legend for the roads 

    // var legend = document.getElementById("legend");

    // for (const key in icons) {
    //   const icon = icons[key];
    //   // console.log(icon);
    //   const name = icon.name;
    //   // console.log(name);
    //   const div_c = document.createElement("div");
    //   div_c.innerHTML = '<svg viewBox="10 0 100 20" xmlns="http://www.w3.org/2000/svg"> <circle id="'+icon.name+'" cx="50%" cy="50%" r="10" stroke="black" stroke-width="0.6" fill="'+icon.fillColor+'"</circle></svg> '+icon.name;
    //   // console.log(div_c.innerHTML);

    //   legend.appendChild(div_c);
    // }
    // map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(legend);


    map.data.addListener('click', (event) => {
      const patching_color = event.feature.getProperty('patching_color');
      const DMI = event.feature.getProperty('DMI');
      //   const description = event.feature.getProperty('description');
      const L_IRI = event.feature.getProperty('L_IRI') > 0.0 ? event.feature.getProperty('L_IRI') : "Data Unavailable";
      const R_IRI = event.feature.getProperty('R_IRI') > 0.0 ? event.feature.getProperty('R_IRI') : "Data Unavailable";
      const patching = event.feature.getProperty('patching');
      const D0 = event.feature.getProperty('D0') > 0.0 ? event.feature.getProperty('D0') : "Data Unavailable";
      const D48 = event.feature.getProperty('D48') > 0.0 ? event.feature.getProperty('D48') : "Data Unavailable";
      const BCI = event.feature.getProperty('BCI') > 0.0 ? event.feature.getProperty('BCI') : "Data Unavailable";
      const BDI = event.feature.getProperty('BDI') > 0.0 ? event.feature.getProperty('BDI') : "Data Unavailable";
      const SCI = event.feature.getProperty('SCI') > 0.0 ? event.feature.getProperty('SCI') : "Data Unavailable";
      const Road = event.feature.getProperty('Road');
      const Bound = event.feature.getProperty('Bound');
      const Lane = event.feature.getProperty('Lane');
      const image = event.feature.getProperty('image');
      console.log(`http://artsy.ecn.purdue.edu:40080/LL%2337%20SR-327%20RP-15%2B55%20to%20RP-23%2B87/SB-20190906.121422/ROWImg/00000000/${image}`);
      const position = event.feature.getGeometry().get();
      const content = `
    <div style="margin-left:20px; margin-bottom:20px;">
      <h2> Road: ${Road} ${Bound} ${Lane} </h2>
      <h4>DMI: ${DMI}</h4><h4>patching: ${patching}</h4>
      <p><b>L_IRI (Th:330):</b> ${L_IRI}<br/><b>R_IRI(Th:330):</b> ${R_IRI}</p>
      <p><b>Surface Deflection(Th=24.6):</b> ${D0}<br/><b>Subgrade Deflection(Th=1.8):</b> ${D48}</p>
      <p><b>SCI(Th=6):</b> ${SCI}<br/><b>BCI(Th=3):</b> ${BCI}<br/><b>BDI(Th=4.5):</b> ${BDI}<br/></p>
      <img style="float:center; width:350px; height:120px; margin-top:10px" src="http://artsy.ecn.purdue.edu:40080/LL%2337%20SR-327%20RP-15%2B55%20to%20RP-23%2B87/SB-20190906.121422/ROWImg/00000000/${image}">

  

      <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
    </div>
    `;
      console.log(content);
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({
        pixelOffset: new google.maps.Size(0, -30)
      });
      infoWindow.open(map);
    });
  } else if (road === 'usH') {
    map.data.loadGeoJson('/SampledRoadSchooldemoPatchingUS421.json');
    map.setCenter(new google.maps.LatLng(39.949184, -86.240227));


    //creating different colored markers for each color in  the geojson file

    map.data.setStyle((feature) => {
      return {
        icon: icons[`icon_${feature.getProperty('color')}`],
        scaledSize: new google.maps.Size(45, 45),
      };
    });
    addlegendRoadMarker()

    // legend for the roads 
    // var legend = document.getElementById("legend");

    // for (const key in icons) {
    //   const icon = icons[key];
    //   console.log(icon);
    //   const name = icon.name;
    //   console.log(name);
    //   const div_custom = document.createElement("div");
    //   div_custom.innerHTML = '<svg viewBox="10 0 100 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="50%" cy="50%" r="10" stroke="black" stroke-width="0.6" fill="'+icon.fillColor+'"</circle></svg> '+icon.name;
    //   console.log(legend);

    //   legend.appendChild(div_custom);
    // }
    // map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(legend);
    console.log('not working');
    //Show the information for a store when its marker is clicked.
    map.data.addListener('click', (event) => {
      const patching_color = event.feature.getProperty('patching_color');
      const DMI = event.feature.getProperty('DMI');
      //   const description = event.feature.getProperty('description');
      const L_IRI = event.feature.getProperty('L_IRI') > 0.0 ? event.feature.getProperty('L_IRI') : "Data Unavailable";
      const R_IRI = event.feature.getProperty('R_IRI') > 0.0 ? event.feature.getProperty('R_IRI') : "Data Unavailable";
      const patching = event.feature.getProperty('patching');
      const D0 = event.feature.getProperty('D0') > 0.0 ? event.feature.getProperty('D0') : "Data Unavailable";
      const D48 = event.feature.getProperty('D48') > 0.0 ? event.feature.getProperty('D48') : "Data Unavailable";
      const BCI = event.feature.getProperty('BCI') > 0.0 ? event.feature.getProperty('BCI') : "Data Unavailable";
      const BDI = event.feature.getProperty('BDI') > 0.0 ? event.feature.getProperty('BDI') : "Data Unavailable";
      const SCI = event.feature.getProperty('SCI') > 0.0 ? event.feature.getProperty('SCI') : "Data Unavailable";
      const Road = event.feature.getProperty('Road');
      const Bound = event.feature.getProperty('Bound');
      const Lane = event.feature.getProperty('Lane');
      const position = event.feature.getGeometry().get();
      const content = `
    <div style="margin-left:20px; margin-bottom:20px;">
      <h2> Road: ${Road} ${Bound} ${Lane} </h2>
      <h4>DMI: ${DMI}</h4><h4>patching: ${patching}</h4>
      <p><b>L_IRI (Th:300):</b> ${L_IRI}<br/><b>R_IRI(Th:300):</b> ${R_IRI}</p>
      <p><b>Surface Deflection(Th=24.6):</b> ${D0}<br/><b>Subgrade Deflection(Th=1.8):</b> ${D48}</p>
      <p><b>SCI(Th=6):</b> ${SCI}<br/><b>BCI(Th=3):</b> ${BCI}<br/><b>BDI(Th=4.5):</b> ${BDI}<br/></p>
  

      <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
    </div>
    `;
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({
        pixelOffset: new google.maps.Size(0, -30)
      });
      infoWindow.open(map);
    });
  }
  // var legend = document.getElementById("roadMarkerLegend");
  // // while (legend === null){
  // //   var legend = document.getElementById("legend");
  // // }
  //   // legend for the roads 

  function addlegendRoadMarker() {
    var legend = document.getElementById("roadMarkerLegend");
    if (legend === null) {
      $('body').append('<div id="roadMarkerLegend"><h3>Legend</h3></div>');
    }
    var legend = document.getElementById("roadMarkerLegend");

    for (const key in icons) {
      const icon = icons[key];
      // console.log(icon);
      const name = icon.name;
      // console.log(name);
      const div_custom = document.createElement("div");
      div_custom.innerHTML = '<svg viewBox="10 0 100 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="50%" cy="50%" r="10" stroke="black" stroke-width="0.6" fill="' + icon.fillColor + '"</circle></svg> ' + icon.name;
      // console.log(legend);

      legend.appendChild(div_custom);
    }
    map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(legend);


  }





  //  map() add the code to hide colored poooints in clusters

}




function parameterSelectorMap(road) {
  // Styles a map in night mode.
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 40.2672,
      lng: -86.1349
    }, //change to center at Indiana polis when more roadss are added
    zoom: 8,
    styles: [{
        elementType: "geometry",
        stylers: [{
          color: "#242f3e"
        }]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#242f3e"
        }]
      },
      {
        elementType: "labels.text.fill",
        stylers: [{
          color: "#746855"
        }]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#d59563"
        }],
      },

      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
          color: "#38414e"
        }],
      },

      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      },
      {
        "featureType": "poi.business",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#263c3f"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#6b9a76"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#38414e"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#212a37"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9ca5b3"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#746855"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#1f2835"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#f3d19c"
        }]
      },
      {
        "featureType": "transit",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#2f3948"
        }]
      },
      {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#17263c"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#515c6d"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#17263c"
        }]
      }
    ]


  });
  iconSize = 0.5;
  var icons = {
    icon_blue: {
      name: "highIRI",
      path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
      fillColor: 'blue',
      fillOpacity: .6,
      strokeWeight: 0.3,
      scale: iconSize
    },

    icon_maroon: {
      name: "fwdPriorityPatch",
      path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
      fillColor: 'maroon',
      fillOpacity: 0.5,
      strokeWeight: 0.3,
      scale: iconSize
    },
    icon_crimson: {
      name: "fullDepthPatch",
      path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
      fillColor: 'crimson',
      fillOpacity: 0.8,
      strokeWeight: 0.3,
      scale: iconSize
    },
    icon_salmon: {
      name: "fullDepthPatchWarning",
      path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
      fillColor: 'salmon',
      fillOpacity: .9,
      strokeWeight: 0.3,
      scale: iconSize
    },

    icon_orange: {
      name: "surfacePatch",
      path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
      fillColor: 'orange',
      fillOpacity: 1,
      strokeWeight: 0.3,
      scale: iconSize
    },
    icon_yellow: {
      name: "surfacePatchWarning",
      path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
      fillColor: 'Yellow',
      fillOpacity: .6,
      strokeWeight: 0.3,
      scale: iconSize
    },
    icon_green: {
      name: "goodRoad",
      path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
      fillColor: 'green',
      fillOpacity: 0.5,
      strokeWeight: 0.3,
      scale: iconSize
    },
    icon_grey: {
      name: "manualInspection",
      path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
      fillColor: 'Silver',
      fillOpacity: 1,
      strokeWeight: 0.3,
      scale: iconSize
    },
  };



  const apiKey = 'AIzaSyAwns33HA__CMj0Akz3bB3uVW7GfRVlZpk';
  const infoWindow = new google.maps.InfoWindow();

  if (road === 'InterState-IRI') {
    map.data.loadGeoJson('/SampledRoadSchooldemoPatchingI69.json');
    map.data.setStyle(function (feature) {
      var LIRI = feature.getProperty('L_IRI');
      var RIRI = feature.getProperty('R_IRI');
      console.log(icons[`icon_${color}`]);

      var color = (LIRI >= 1000 || RIRI >= 1000) ? 'blue' : ((LIRI < 1000 && LIRI >= 270) || (RIRI < 1000 && RIRI >= 270)) ? "crimson" : ((LIRI < 270 && LIRI >= 70) || (RIRI < 270 && RIRI >= 70)) ? "yellow" : 'green';
      return {
        icon: icons[`icon_${color}`],
        scaledSize: new google.maps.Size(45, 45),
      };
    });
    map.data.addListener('click', (event) => {
      const DMI = event.feature.getProperty('DMI');
      //   const description = event.feature.getProperty('description');
      const L_IRI = event.feature.getProperty('L_IRI') > 0.0 ? event.feature.getProperty('L_IRI') : "Data Unavailable";
      const R_IRI = event.feature.getProperty('R_IRI') > 0.0 ? event.feature.getProperty('R_IRI') : "Data Unavailable";
      const patching = event.feature.getProperty('patching');
      const Road = event.feature.getProperty('Road');
      const Bound = event.feature.getProperty('Bound');
      const Lane = event.feature.getProperty('Lane');
      const position = event.feature.getGeometry().get();
      const content = `
      <div style="margin-left:20px; margin-bottom:20px;">
        <h2> Road: ${Road} ${Bound} ${Lane} </h2>
        <h4>DMI: ${DMI}</h4><h4>patching: ${patching}</h4>
        <p><b>L_IRI(Th=270):</b> ${L_IRI}<br/><b>R_IRI(Th=270):</b> ${R_IRI}</p>
        <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
      </div>
      `;
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({
        pixelOffset: new google.maps.Size(0, -30)
      });
      infoWindow.open(map);
    });

  } else if (road === 'State-IRI') {
    map.data.loadGeoJson('/SampledRoadSchooldemoPatchingSR327.json');
    map.data.setStyle(function (feature) {
      var LIRI = feature.getProperty('L_IRI');
      var RIRI = feature.getProperty('R_IRI');
      var color = (LIRI >= 1000 || RIRI >= 1000) ? 'blue' : ((LIRI < 1000 && LIRI >= 330) || (RIRI < 1000 && RIRI >= 330)) ? "crimson" : ((LIRI < 330 && LIRI >= 70) || (RIRI < 330 && RIRI >= 70)) ? "yellow" : 'green';
      console.log(color);

      return {
        icon: icons[`icon_${color}`],
        scaledSize: new google.maps.Size(45, 45),
      };
    });
    map.data.addListener('click', (event) => {
      const DMI = event.feature.getProperty('DMI');
      //   const description = event.feature.getProperty('description');
      const L_IRI = event.feature.getProperty('L_IRI') > 0.0 ? event.feature.getProperty('L_IRI') : "Data Unavailable";
      const R_IRI = event.feature.getProperty('R_IRI') > 0.0 ? event.feature.getProperty('R_IRI') : "Data Unavailable";
      const patching = event.feature.getProperty('patching');
      const Road = event.feature.getProperty('Road');
      const Bound = event.feature.getProperty('Bound');
      const Lane = event.feature.getProperty('Lane');
      const position = event.feature.getGeometry().get();
      const content = `
      <div style="margin-left:20px; margin-bottom:20px;">
        <h2> Road: ${Road} ${Bound} ${Lane} </h2>
        <h4>DMI: ${DMI}</h4><h4>patching: ${patching}</h4>
        <p><b>L_IRI(Th=330):</b> ${L_IRI}<br/><b>R_IRI(Th=330):</b> ${R_IRI}</p>
        <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
      </div>
      `;
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({
        pixelOffset: new google.maps.Size(0, -30)
      });
      infoWindow.open(map);
    });

  } else if (road === 'USH-IRI') {
    map.data.loadGeoJson('/SampledRoadSchooldemoPatchingUS421.json');
    map.data.setStyle(function (feature) {
      var LIRI = feature.getProperty('L_IRI');
      var RIRI = feature.getProperty('R_IRI');
      console.log(icons[`icon_${color}`]);
      var color = (LIRI >= 1000 || RIRI >= 1000) ? 'blue' : ((LIRI < 1000 && LIRI >= 300) || (RIRI < 1000 && RIRI >= 300)) ? "crimson" : ((LIRI < 300 && LIRI >= 70) || (RIRI < 300 && RIRI >= 70)) ? "yellow" : 'green';
      return {
        icon: icons[`icon_${color}`],
        scaledSize: new google.maps.Size(45, 45),
      };
    });
    map.data.addListener('click', (event) => {
      const DMI = event.feature.getProperty('DMI');
      //   const description = event.feature.getProperty('description');
      const L_IRI = event.feature.getProperty('L_IRI') > 0.0 ? event.feature.getProperty('L_IRI') : "Data Unavailable";
      const R_IRI = event.feature.getProperty('R_IRI') > 0.0 ? event.feature.getProperty('R_IRI') : "Data Unavailable";
      const patching = event.feature.getProperty('patching');
      const Road = event.feature.getProperty('Road');
      const Bound = event.feature.getProperty('Bound');
      const Lane = event.feature.getProperty('Lane');
      const position = event.feature.getGeometry().get();
      const content = `
      <div style="margin-left:20px; margin-bottom:20px;">
        <h2> Road: ${Road} ${Bound} ${Lane} </h2>
        <h4>DMI: ${DMI}</h4><h4>patching: ${patching}</h4>
        <p><b>L_IRI(Th=300):</b> ${L_IRI}<br/><b>R_IRI(Th=300):</b> ${R_IRI}</p>
        <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
      </div>
      `;
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({
        pixelOffset: new google.maps.Size(0, -30)
      });
      infoWindow.open(map);
    });

  } else if (road === 'InterState-FWD') {
    map.data.loadGeoJson('/fwd_I69.json');
    map.data.setStyle(function (feature) {
      var SCI = feature.getProperty('SCI');
      var BCI = feature.getProperty('BCI');
      var BDI = feature.getProperty('BDI');
      var D0 = feature.getProperty('D0');
      var D48 = feature.getProperty('D48');
      var color = (BCI >= 3 || D48 >= 1.8) ? 'maroon' : (SCI >= 6 || BDI >= 4.5 || D0 >= 24.6) ? 'yellow' : 'green';
      return {
        icon: icons[`icon_${color}`],
        scaledSize: new google.maps.Size(45, 45),
      };
    });
    map.data.addListener('click', (event) => {
      const DMI = event.feature.getProperty('DMI');
      const D0 = event.feature.getProperty('D0') > 0.0 ? event.feature.getProperty('D0') : "Data Unavailable";
      const D48 = event.feature.getProperty('D48') > 0.0 ? event.feature.getProperty('D48') : "Data Unavailable";
      const BCI = event.feature.getProperty('BCI') > 0.0 ? event.feature.getProperty('BCI') : "Data Unavailable";
      const BDI = event.feature.getProperty('BDI') > 0.0 ? event.feature.getProperty('BDI') : "Data Unavailable";
      const SCI = event.feature.getProperty('SCI') > 0.0 ? event.feature.getProperty('SCI') : "Data Unavailable";
      const patching = (BCI >= 3 || D48 >= 1.8) ? 'Full depth Patch' : (SCI >= 6 || BDI >= 4.5 || D0 >= 24.6) ? 'Surface Patch' : 'Good Condition';

      const Road = event.feature.getProperty('Road');
      const Bound = event.feature.getProperty('Bound');
      const Lane = event.feature.getProperty('Lane');
      const position = event.feature.getGeometry().get();
      const content = `
      <div style="margin-left:20px; margin-bottom:20px;">
        <h2> Road: ${Road} ${Bound} ${Lane} </h2>
        <h4>DMI: ${DMI}</h4><h4>patching: ${patching}</h4>
        <p><b>Surface Deflection(Th=24.6):</b> ${D0}<br/><b>Subgrade Deflection(Th=1.8):</b> ${D48}</p>
        <p><b>SCI(Th=6):</b> ${SCI}<br/><b>BCI(Th=3):</b> ${BCI}<br/><b>BDI(Th=4.5):</b> ${BDI}<br/></p>
  
  
        <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
      </div>
      `;
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({
        pixelOffset: new google.maps.Size(0, -30)
      });
      infoWindow.open(map);
    });



  } else if (road === 'State-FWD') {
    map.data.loadGeoJson('/fwd_SR327.json');
    map.data.setStyle(function (feature) {
      var SCI = feature.getProperty('SCI');
      var BCI = feature.getProperty('BCI');
      var BDI = feature.getProperty('BDI');
      var D0 = feature.getProperty('D0');
      var D48 = feature.getProperty('D48');
      var color = (BCI >= 3 || D48 >= 1.8) ? 'maroon' : (SCI >= 6 || BDI >= 4.5 || D0 >= 24.6) ? 'yellow' : 'green';
      return {
        icon: icons[`icon_${color}`],
        scaledSize: new google.maps.Size(45, 45),
      };
    });
    map.data.addListener('click', (event) => {
      const DMI = event.feature.getProperty('DMI');
      const D0 = event.feature.getProperty('D0') > 0.0 ? event.feature.getProperty('D0') : "Data Unavailable";
      const D48 = event.feature.getProperty('D48') > 0.0 ? event.feature.getProperty('D48') : "Data Unavailable";
      const BCI = event.feature.getProperty('BCI') > 0.0 ? event.feature.getProperty('BCI') : "Data Unavailable";
      const BDI = event.feature.getProperty('BDI') > 0.0 ? event.feature.getProperty('BDI') : "Data Unavailable";
      const SCI = event.feature.getProperty('SCI') > 0.0 ? event.feature.getProperty('SCI') : "Data Unavailable";
      const patching = (BCI >= 3 || D48 >= 1.8) ? 'Full depth Patch ' : (SCI >= 6 || BDI >= 4.5 || D0 >= 24.6) ? 'Surface Patch' : 'Good Condition';
      const Road = event.feature.getProperty('Road');
      const Bound = event.feature.getProperty('Bound');
      const Lane = event.feature.getProperty('Lane');
      const position = event.feature.getGeometry().get();
      const content = `
      <div style="margin-left:20px; margin-bottom:20px;">
        <h2> Road: ${Road} ${Bound} ${Lane} </h2>
        <h4>DMI: ${DMI}</h4><h4>patching: ${patching}</h4>
        <p><b>Surface Deflection(Th=24.6):</b> ${D0}<br/><b>Subgrade Deflection(Th=1.8):</b> ${D48}</p>
        <p><b>SCI(Th=6):</b> ${SCI}<br/><b>BCI(Th=3):</b> ${BCI}<br/><b>BDI(Th=4.5):</b> ${BDI}<br/></p>
  
  
        <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
      </div>
      `;
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({
        pixelOffset: new google.maps.Size(0, -30)
      });
      infoWindow.open(map);
    });

  } else if (road === 'USH-FWD') {
    alert("FWD data Unavailable");
  }



  //Show the information for a store when its marker is clicked.

  //  map() add the code to hide colored poooints in clusters
}

function thresholdSelectorMap(road) {
  // Styles a map in night mode.
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 40.2672,
      lng: -86.1349
    }, //change to center at Indiana polis when more roadss are added
    zoom: 8,
    styles: [{
        elementType: "geometry",
        stylers: [{
          color: "#242f3e"
        }]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#242f3e"
        }]
      },
      {
        elementType: "labels.text.fill",
        stylers: [{
          color: "#746855"
        }]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#d59563"
        }],
      },

      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
          color: "#38414e"
        }],
      },

      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      },
      {
        "featureType": "poi.business",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#263c3f"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#6b9a76"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#38414e"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#212a37"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9ca5b3"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#746855"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#1f2835"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#f3d19c"
        }]
      },
      {
        "featureType": "transit",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#2f3948"
        }]
      },
      {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#17263c"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#515c6d"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#17263c"
        }]
      }
    ]


  });
  iconSize = 0.5;
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

  const apiKey = 'AIzaSyAwns33HA__CMj0Akz3bB3uVW7GfRVlZpk';
  const infoWindow = new google.maps.InfoWindow();

  if (road === 'InterState-IRI') {
    map.data.loadGeoJson('/SampledRoadSchooldemoPatchingI69.json');
    map.data.setStyle(function (feature) {
      var LIRI = feature.getProperty('L_IRI');
      var RIRI = feature.getProperty('R_IRI');
      console.log(icons[`icon_${color}`]);

      var color = (LIRI >= 1000 || RIRI >= 1000) ? 'blue' : ((LIRI < 1000 && LIRI >= 270) || (RIRI < 1000 && RIRI >= 270)) ? "red" : ((LIRI < 270 && LIRI >= 70) || (RIRI < 270 && RIRI >= 70)) ? "yellow" : 'green';
      return {
        icon: icons[`icon_${color}`],
        scaledSize: new google.maps.Size(45, 45),
      };
    });
    map.data.addListener('click', (event) => {
      const DMI = event.feature.getProperty('DMI');
      //   const description = event.feature.getProperty('description');
      const L_IRI = event.feature.getProperty('L_IRI') > 0.0 ? event.feature.getProperty('L_IRI') : "Data Unavailable";
      const R_IRI = event.feature.getProperty('R_IRI') > 0.0 ? event.feature.getProperty('R_IRI') : "Data Unavailable";
      const patching = event.feature.getProperty('patching');
      const Road = event.feature.getProperty('Road');
      const Bound = event.feature.getProperty('Bound');
      const Lane = event.feature.getProperty('Lane');
      const position = event.feature.getGeometry().get();
      const content = `
      <div style="margin-left:20px; margin-bottom:20px;">
        <h2> Road: ${Road} ${Bound} ${Lane} </h2>
        <h4>DMI: ${DMI}</h4><h4>patching: ${patching}</h4>
        <p><b>L_IRI(Th=270):</b> ${L_IRI}<br/><b>R_IRI(Th=270):</b> ${R_IRI}</p>
        <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
      </div>
      `;
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({
        pixelOffset: new google.maps.Size(0, -30)
      });
      infoWindow.open(map);
    });

  } else if (road === 'State-IRI') {
    map.data.loadGeoJson('/SampledRoadSchooldemoPatchingSR327.json');
    map.data.setStyle(function (feature) {
      var LIRI = feature.getProperty('L_IRI');
      var RIRI = feature.getProperty('R_IRI');
      var color = (LIRI >= 1000 || RIRI >= 1000) ? 'blue' : ((LIRI < 1000 && LIRI >= 330) || (RIRI < 1000 && RIRI >= 330)) ? "red" : ((LIRI < 330 && LIRI >= 70) || (RIRI < 330 && RIRI >= 70)) ? "yellow" : 'green';
      console.log(color);

      return {
        icon: icons[`icon_${color}`],
        scaledSize: new google.maps.Size(45, 45),
      };
    });
    map.data.addListener('click', (event) => {
      const DMI = event.feature.getProperty('DMI');
      //   const description = event.feature.getProperty('description');
      const L_IRI = event.feature.getProperty('L_IRI') > 0.0 ? event.feature.getProperty('L_IRI') : "Data Unavailable";
      const R_IRI = event.feature.getProperty('R_IRI') > 0.0 ? event.feature.getProperty('R_IRI') : "Data Unavailable";
      const patching = event.feature.getProperty('patching');
      const Road = event.feature.getProperty('Road');
      const Bound = event.feature.getProperty('Bound');
      const Lane = event.feature.getProperty('Lane');
      const position = event.feature.getGeometry().get();
      const content = `
      <div style="margin-left:20px; margin-bottom:20px;">
        <h2> Road: ${Road} ${Bound} ${Lane} </h2>
        <h4>DMI: ${DMI}</h4><h4>patching: ${patching}</h4>
        <p><b>L_IRI(Th=330):</b> ${L_IRI}<br/><b>R_IRI(Th=330):</b> ${R_IRI}</p>
        <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
      </div>
      `;
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({
        pixelOffset: new google.maps.Size(0, -30)
      });
      infoWindow.open(map);
    });

  } else if (road === 'USH-IRI') {
    map.data.loadGeoJson('/SampledRoadSchooldemoPatchingUS421.json');
    map.data.setStyle(function (feature) {
      var LIRI = feature.getProperty('L_IRI');
      var RIRI = feature.getProperty('R_IRI');
      console.log(icons[`icon_${color}`]);
      var color = (LIRI >= 1000 || RIRI >= 1000) ? 'blue' : ((LIRI < 1000 && LIRI >= 300) || (RIRI < 1000 && RIRI >= 300)) ? "red" : ((LIRI < 300 && LIRI >= 70) || (RIRI < 300 && RIRI >= 70)) ? "yellow" : 'green';
      return {
        icon: icons[`icon_${color}`],
        scaledSize: new google.maps.Size(45, 45),
      };
    });
    map.data.addListener('click', (event) => {
      const DMI = event.feature.getProperty('DMI');
      //   const description = event.feature.getProperty('description');
      const L_IRI = event.feature.getProperty('L_IRI') > 0.0 ? event.feature.getProperty('L_IRI') : "Data Unavailable";
      const R_IRI = event.feature.getProperty('R_IRI') > 0.0 ? event.feature.getProperty('R_IRI') : "Data Unavailable";
      const patching = event.feature.getProperty('patching');
      const Road = event.feature.getProperty('Road');
      const Bound = event.feature.getProperty('Bound');
      const Lane = event.feature.getProperty('Lane');
      const position = event.feature.getGeometry().get();
      const content = `
      <div style="margin-left:20px; margin-bottom:20px;">
        <h2> Road: ${Road} ${Bound} ${Lane} </h2>
        <h4>DMI: ${DMI}</h4><h4>patching: ${patching}</h4>
        <p><b>L_IRI(Th=300):</b> ${L_IRI}<br/><b>R_IRI(Th=300):</b> ${R_IRI}</p>
        <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
      </div>
      `;
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({
        pixelOffset: new google.maps.Size(0, -30)
      });
      infoWindow.open(map);
    });

  } else if (road === 'InterState-FWD') {
    map.data.loadGeoJson('/fwd_I69.json');
    map.data.setStyle(function (feature) {
      var SCI = feature.getProperty('SCI');
      var BCI = feature.getProperty('BCI');
      var BDI = feature.getProperty('BDI');
      var D0 = feature.getProperty('D0');
      var D48 = feature.getProperty('D48');
      var color = (BCI >= 3 || D48 >= 1.8) ? 'orange' : (SCI >= 6 || BDI >= 4.5 || D0 >= 24.6) ? 'yellow' : 'green';
      return {
        icon: icons[`icon_${color}`],
        scaledSize: new google.maps.Size(45, 45),
      };
    });
    map.data.addListener('click', (event) => {
      const DMI = event.feature.getProperty('DMI');
      const D0 = event.feature.getProperty('D0') > 0.0 ? event.feature.getProperty('D0') : "Data Unavailable";
      const D48 = event.feature.getProperty('D48') > 0.0 ? event.feature.getProperty('D48') : "Data Unavailable";
      const BCI = event.feature.getProperty('BCI') > 0.0 ? event.feature.getProperty('BCI') : "Data Unavailable";
      const BDI = event.feature.getProperty('BDI') > 0.0 ? event.feature.getProperty('BDI') : "Data Unavailable";
      const SCI = event.feature.getProperty('SCI') > 0.0 ? event.feature.getProperty('SCI') : "Data Unavailable";
      const patching = (BCI >= 3 || D48 >= 1.8) ? 'Full depth Patch' : (SCI >= 6 || BDI >= 4.5 || D0 >= 24.6) ? 'Surface Patch' : 'Good Condition';

      const Road = event.feature.getProperty('Road');
      const Bound = event.feature.getProperty('Bound');
      const Lane = event.feature.getProperty('Lane');
      const position = event.feature.getGeometry().get();
      const content = `
      <div style="margin-left:20px; margin-bottom:20px;">
        <h2> Road: ${Road} ${Bound} ${Lane} </h2>
        <h4>DMI: ${DMI}</h4><h4>patching: ${patching}</h4>
        <p><b>Surface Deflection(Th=24.6):</b> ${D0}<br/><b>Subgrade Deflection(Th=1.8):</b> ${D48}</p>
        <p><b>SCI(Th=6):</b> ${SCI}<br/><b>BCI(Th=3):</b> ${BCI}<br/><b>BDI(Th=4.5):</b> ${BDI}<br/></p>
  
  
        <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
      </div>
      `;
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({
        pixelOffset: new google.maps.Size(0, -30)
      });
      infoWindow.open(map);
    });



  } else if (road === 'State-FWD') {
    map.data.loadGeoJson('/fwd_SR327.json');
    map.data.setStyle(function (feature) {
      var SCI = feature.getProperty('SCI');
      var BCI = feature.getProperty('BCI');
      var BDI = feature.getProperty('BDI');
      var D0 = feature.getProperty('D0');
      var D48 = feature.getProperty('D48');
      var color = (BCI >= 3 || D48 >= 1.8) ? 'orange' : (SCI >= 6 || BDI >= 4.5 || D0 >= 24.6) ? 'yellow' : 'green';
      return {
        icon: icons[`icon_${color}`],
        scaledSize: new google.maps.Size(45, 45),
      };
    });
    map.data.addListener('click', (event) => {
      const DMI = event.feature.getProperty('DMI');
      const D0 = event.feature.getProperty('D0') > 0.0 ? event.feature.getProperty('D0') : "Data Unavailable";
      const D48 = event.feature.getProperty('D48') > 0.0 ? event.feature.getProperty('D48') : "Data Unavailable";
      const BCI = event.feature.getProperty('BCI') > 0.0 ? event.feature.getProperty('BCI') : "Data Unavailable";
      const BDI = event.feature.getProperty('BDI') > 0.0 ? event.feature.getProperty('BDI') : "Data Unavailable";
      const SCI = event.feature.getProperty('SCI') > 0.0 ? event.feature.getProperty('SCI') : "Data Unavailable";
      const patching = (BCI >= 3 || D48 >= 1.8) ? 'Full depth Patch ' : (SCI >= 6 || BDI >= 4.5 || D0 >= 24.6) ? 'Surface Patch' : 'Good Condition';
      const Road = event.feature.getProperty('Road');
      const Bound = event.feature.getProperty('Bound');
      const Lane = event.feature.getProperty('Lane');
      const position = event.feature.getGeometry().get();
      const content = `
      <div style="margin-left:20px; margin-bottom:20px;">
        <h2> Road: ${Road} ${Bound} ${Lane} </h2>
        <h4>DMI: ${DMI}</h4><h4>patching: ${patching}</h4>
        <p><b>Surface Deflection(Th=24.6):</b> ${D0}<br/><b>Subgrade Deflection(Th=1.8):</b> ${D48}</p>
        <p><b>SCI(Th=6):</b> ${SCI}<br/><b>BCI(Th=3):</b> ${BCI}<br/><b>BDI(Th=4.5):</b> ${BDI}<br/></p>
  
  
        <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
      </div>
      `;
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({
        pixelOffset: new google.maps.Size(0, -30)
      });
      infoWindow.open(map);
    });

  } else if (road === 'USH-FWD') {
    alert("FWD data Unavailable");
  }



  //Show the information for a store when its marker is clicked.

  //  map() add the code to hide colored poooints in clusters
}

$(document).ready(function () {
  //jquery for toggle sub menus
  $('.sub-btn').click(function () {
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });
  $('.InterState').click(function () {
    let roadType = $(this).attr('id');
    alert(roadType);
    initMap(roadType);
    // $('#map').addClass('active');
    // $('#container-left').show();
    // $('#container-right').show();
    // $('.side-bar').removeClass('active');
    // $('.menu-btn').css('visibility', 'visible');  
  });


  $('.State').click(function () {
    let roadType = $(this).attr('id');
    initMap(roadType);
    alert(roadType);
    $('#map').addClass('active');
    $('#container-left').show();
    $('#container-right').show();
    $('.side-bar').removeClass('active');
    $('.menu-btn').css('visibility', 'visible');
  });
  $('.usH').click(function () {
    let roadType = $(this).attr('id');
    initMap(roadType);
    alert(roadType);
  });
  $('.InterState-IRI').click(function () {
    let parameterType = $(this).attr('class');
    parameterSelectorMap(parameterType);
    alert(parameterType);
  });
  $('.State-IRI').click(function () {
    let parameterType = $(this).attr('class');
    parameterSelectorMap(parameterType);
    alert(parameterType);
  });
  $('.USH-IRI').click(function () {
    let parameterType = $(this).attr('class');
    parameterSelectorMap(parameterType);
    alert(parameterType);
  });
  $('.InterState-FWD').click(function () {
    let parameterType = $(this).attr('class');
    parameterSelectorMap(parameterType);
    alert(parameterType);
  });
  $('.State-FWD').click(function () {
    let parameterType = $(this).attr('class');
    parameterSelectorMap(parameterType);
    alert(parameterType);
  });
  $('.USH-FWD').click(function () {
    let parameterType = $(this).attr('class');
    alert(parameterType);
    parameterSelectorMap(parameterType);

  });
  $('.IsTh').click(function () {
    var data = [];
    let thresholdRoad = $(this).attr('class');
    $("#threshold").on('submit', function (e) { //use on if jQuery 1.7+
      e.preventDefault(); //prevent form from submitting
      var data = $(this).serialize();
      console.log(data);
      thresholdSelectorMap(thresholdRoad, data);
      $("#threshold").hide()
      alert(data);
      $('.menu-btn').css('visibility', 'visible') //use the console for debugging, F12 in Chrome, not alerts

    });
  });





  //jquery for expand and collapse the sidebar
  $('.menu-btn').click(function () {
    $('.side-bar').addClass('active');
    $('.menu-btn').css('visibility', 'hidden');
    $('#container-left').hide();
    $('#container-right').hide();
    $('#map').removeClass('active');



  });

  $('.close-btn').click(function () {
    $('.side-bar').removeClass('active');
    $('.menu-btn').css('visibility', 'visible');
  });
  // instead of click function this has to be started from a button
  $('.overlay').click(function () {
    $('.form-th').addClass('active');
    $('.overlay').css('visibility', 'hidden');
  });
  $('.IsTh').click(function () {
    $('#threshold').addClass('active');
    $('.side-bar').css('visibility', 'hidden');
  });


});