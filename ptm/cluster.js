map.data.loadGeoJson('/sampled_patching_SR.json', null, function(features) {
  var markerCluster = new markerClusterer.MarkerClusterer({map,markers});

  map.data.loadGeoJson('/Patching_allfiles_IS.json', null, function (features) {
    console.log(markers);
    console.log(label);

    var label = feature.getProperty("Road");
    var markers = features.map(function (feature) {
        var g = feature.getGeometry();
        var marker = new google.maps.Marker({'position': g.get(0)});
        return marker;
        
    });
    const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });
    new markerCluster(map, markers,{ imagePath: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m' });
});
  map.data.setStyle((feature) => {
      // console.log(feature.getProperty("color"));
      console.log(icons[`icon_${feature.getProperty('color')}`]);
      return {
        icon: icons[`icon_${feature.getProperty('color')}`],
        scaledSize: new google.maps.Size(24, 24),

      };
    });
  