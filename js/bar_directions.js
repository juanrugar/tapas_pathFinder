var map;
var directionsService;
var directionsDisplay;

function init() {

    //Map declaration
    var mapOptions = {
        minZoom: 12,
        backgroundColor: "#ff00ff",
        zoom: 17,
        center: new google.maps.LatLng(39.470295466864826, -0.3851893111122075),
        fullscreenControl: true
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions); //END of map
    
        var start = new google.maps.LatLng(39.46744058606083, -0.37698061606782485);
        var end = new google.maps.LatLng(39.47322510139384, -0.3905404435916793);
        
        directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap(map);

        calcRoute(start, end);

}

function calcRoute(start, end) {
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.WALKING
    };

    directionsService.route(request, function (response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);

            var iw1 = new google.maps.InfoWindow({
                content: '<div class="iw-wrapper">'
                + '<h4>Te encuentras aquí</h4>'
                + '</div>'
            });
            var userP = new google.maps.Marker({
                position: start,
                map: map,
                title: "Estás aquí"
            });
           
            iw1.open(map, userP);

            var iw2 = new google.maps.InfoWindow({
                content: '<div class="iw-wrapper">'
                + '<h4>Bodegueta Valeriola</h4>'
                + '</div>'
            });
            var barP = new google.maps.Marker({
                position: end,
                map: map,
                title: "Bodegueta Valeriola"
            });
	
            iw2.open(map, barP);
	
        }
        
    });

  

}

google.maps.event.addDomListener(window, 'load', init);
