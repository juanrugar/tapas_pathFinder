var map;
function initialize() {
    var mapOptions = {
        minZoom: 12,
        backgroundColor: "#ff00ff",
        zoom: 13,
        center: new google.maps.LatLng(39.47443583365297, -0.37546019758579496),
        fullscreenControl: true
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    getThere(bares[10]); 

    alert('Hemos encontrado ' + bares.length + ' bares de tapas cerca de ti');

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
        + '<p>' + tapasBar.streetName + ', nº ' + tapasBar.streetNumber + ',<br> tlf.: '+ tapasBar.phone + '</p>'
        + '<p>Tapa estrella: ' + tapasBar.toptapa + '</p><br><img src="' + tapasBar.src + '">'
        + '<h4></4><br><a href="' + tapasBar.ficha + '">Ir a la ficha</a>'
        + '</div>'
    };

    var window = new google.maps.InfoWindow(infoWindowOptions);

    google.maps.event.addListener(marker, 'click', function (event) {
        window.open(map, marker);
    });
    
}

function getThere(tapasBar) {
    //Reach that bar marker & infowindow
    
    var point3 = new google.maps.LatLng(tapasBar.latitude, tapasBar.longitude);
    var pOptions3 = {
        position: point3,
        map: map,
        title: ""
    };
    var destBar = new google.maps.Marker(pOptions3);

    var infoWindowOptions3 = {
        content: '<div class="iw-wrapper">'
        + '<h3>' + tapasBar.name + '</h3>'
        + '<p>' + tapasBar.streetName + ', nº ' + tapasBar.streetNumber + ',<br> tlf.: '+ tapasBar.phone + '</p>'
        + '<p>Tapa estrella: ' + tapasBar.toptapa + '</p><br><img src="' + tapasBar.src + '">'
        + '<h4><a href="getThere.html">Como llegar hasta aquí</a></4><br><a href="' + tapasBar.ficha + '">Ir a la ficha</a>'
        + '</div>'
    };

    var barFlag = new google.maps.InfoWindow(infoWindowOptions3);
    barFlag.open(map, destBar);
}

google.maps.event.addDomListener(window, 'load', initialize);


