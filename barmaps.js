var map;
function initialize() {
    var mapOptions = {
        minZoom: 12,
        backgroundColor: "#ff00ff",
        zoom: 12,
        center: new google.maps.LatLng(39.47443583365297, -0.37546019758579496),
        fullscreenControl: true
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    alert(bares.length + ' bares de tapas cerca de ti');

    for (var i = 0; i < bares.length; i++) {
        createMarker(bares[i]);
    }

}

function createMarker(tapasBar) {
    var point = new google.maps.LatLng(tapasBar.latitude, tapasBar.longitude);
    var pOptions = {
        position: point,
        map: map,
        title: tapasBar.name
    };
    var marker = new google.maps.Marker(pOptions);

    var infoWindowOptions = {
        content: '<div class="iw-wrapper">'
            + '<h3>' + tapasBar.name + '</h3>'
            + '<p>' + tapasBar.streetName + ', nº ' + tapasBar.streetNumber + '</p>'
            + '<p>' + tapasBar.phone + '</p>'
            + '<p>Tapa Estrella: <strong>' + tapasBar.toptapa + '</strong></p>'
            + '<img src="' + tapasBar.src + '">'
            + '<a href="' + tapasBar.ficha + '">Ir a la ficha</a>'
            + '</div>'
    };

    var window = new google.maps.InfoWindow(infoWindowOptions);

    google.maps.event.addListener(marker, 'click', function (event) {
        window.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
