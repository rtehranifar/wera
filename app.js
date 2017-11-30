
function initialize() {
var cachedGeoJson;
var nabe
var service;
var infowindow;


var test = new google.maps.LatLng(40.6944,-73.9213)
	console.log("initmap")
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.6944, lng: -73.9213},
		zoom: 10,
		styles: [
		{
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#f5f5f5"
			}
			]
		},
		{
			"elementType": "labels.icon",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#616161"
			}
			]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [
			{
				"color": "#f5f5f5"
			}
			]
		},
		{
			"featureType": "administrative.country",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#bdbdbd"
			}
			]
		},
		{
			"featureType": "administrative.locality",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "administrative.neighborhood",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#eeeeee"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#757575"
			}
			]
		},
		{
			"featureType": "poi.attraction",
			"stylers": [
			{
				"visibility": "off"
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
			"featureType": "poi.government",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "poi.medical",
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
				"color": "#e5e5e5"
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#9e9e9e"
			}
			]
		},
		{
			"featureType": "poi.place_of_worship",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "poi.school",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "poi.sports_complex",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#ffffff"
			}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#757575"
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#dadada"
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#616161"
			}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#9e9e9e"
			}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#e5e5e5"
			}
			]
		},
		{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#eeeeee"
			}
			]
		},
		{
			"featureType": "transit.station.bus",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#c9c9c9"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#9e9e9e"
			}
			]
		}
		]


	});

	var promise = $.getJSON('data/nyc_neighborhoods.json'); 
	promise.then(function(data){
				cachedGeoJson = data; 
				map.data.addGeoJson(cachedGeoJson);  
			});

map.data.addListener('click', function(e){
	nabe =  e.feature.f.neighborho;
	console.log('nabe is: ' + nabe);
	$('#neighborhood').html(e.feature.f.neighborho)
	$('#first-group').html(e.feature.f.largest_gr)
	$('#second-group').html(e.feature.f.second_gro)
	$('#third-group').html(e.feature.f.third_grou)


var request = {
    location: test,
    radius: '5000',
    keyword: 'Bedford-Stuyvesant',
    types: ['restaurant', 'West Indian']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);


function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    //   console.log(place)
    }
  }
	
}
function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

}
$.ajax({
	url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=chinese+restaurants+in+flushingy&key=AIzaSyCXicmfnWQzHSm3iOcJBe6HxoYwaYvwKHI',
	type: 'GET',
	dataType: 'jsonp',
	cache: false,
	success: function (data) {
		console.log(data)
	}
   })
//    .done(function( data ) {
// 	// console.log(data);
// 	// return data
//    });
// google.maps.event.addListener(marker, 'click', function() {
//           infowindow.setContent(place.name);
//           infowindow.open(map, this);
//         });
});
}
google.maps.event.addDomListener(window, 'load', initialize);

// jquery









//map - done
//geojson -done
// create evenhandlers
//switch colors
//load aside with ethnic group
// click on ethnic group
	// hit api
	// show restaurants on map
	// show restaurants on aside

// on load
// initialize map
// load geojson
