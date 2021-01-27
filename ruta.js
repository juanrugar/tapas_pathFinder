var map;
function initialize() {

    //Map declaration
    var mapOptions = {
        minZoom: 12,
        backgroundColor: "#ff00ff",
        zoom: 15,
        center: new google.maps.LatLng(39.470295466864826, -0.3851893111122075),
        fullscreenControl: true
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions); //END of map

    //Starting point of route 
    var point1 = new google.maps.LatLng(39.46744058606083, -0.37698061606782485);//Starting point, railway station
    var pOptions1 = {
        position: point1,
        map: map,
        title: "Estás aquí",
    };
    var userLoc = new google.maps.Marker(pOptions1);

    var infoWindowOpt1 = {
        content: '<div class="iw-wrapper">'
        + '<h2>Estás aquí</h2>'
        + '</div>'
    };

    var startP = new google.maps.InfoWindow(infoWindowOpt1);
    startP.open(map, userLoc);

    var point2 = new google.maps.LatLng(39.47322510139384, -0.3905404435916793);//End point, bar
    var pOptions2 = {
        position: point2,
        map: map,
        title: "Tu destino"
    };
    var destBar = new google.maps.Marker(pOptions2);

    var infoWindowOpt2 = {
        content: '<div class="iw-wrapper">'
        + '<h2>Tu destino</h2>'
        + '</div>'
    };

    var endP = new google.maps.InfoWindow(infoWindowOpt2);
    endP.open(map, destBar);

    var polylinePath = [
        //starting point, user's location
        new google.maps.LatLng(39.46744058606083, -0.37698061606782485),
        new google.maps.LatLng(39.46758569726662, -0.3770959133702719),
        new google.maps.LatLng(39.46816431328347, -0.3797491417318621),
        new google.maps.LatLng(39.46872844851599, -0.3812918763098649),
        new google.maps.LatLng(39.470358146829575, -0.3834390741435763),
        new google.maps.LatLng(39.470295466864826, -0.3851893111122075),
        new google.maps.LatLng(39.47336672044033, -0.38744477104953284),
        new google.maps.LatLng(39.47326225826197, -0.3876973825593813),
        new google.maps.LatLng(39.47386117262294, -0.389321313694121),
        new google.maps.LatLng(39.47331370731753, -0.39056262877169207),
        //destination point, a bar from the list Bodegueta Valeriona id=11
        new google.maps.LatLng(39.47322510139384, -0.3905404435916793)
    ];

    var polylineOpt = {
        path: polylinePath,
        map: map,
        strokeColor: '#257896',
        strokeOpacity: 0.4,
        strokeWeight: 10
    };
    var polyline = new google.maps.Polyline(polylineOpt);

    //Probably better set a route... i.e.,  DirectionsRequest and so on. 
}

google.maps.event.addDomListener(window, 'load', initialize);
