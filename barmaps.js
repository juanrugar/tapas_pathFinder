var map;
function initialize() {
    var mapOptions = {
        minZoom: 14,
        backgroundColor: "#00ff00",
        zoom: 16,
        center: new google.maps.LatLng(41.39230085135724, 2.175667404444539),
        fullscreenControl: false
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var product = {
        lat: 41.39167304441456,
        lng: 2.1758145415515173,
        name: 'Silla vieja',
        img: 'p-chair.jpg',
        desc: 'Nunc ante quam, malesuada et rhoncus quis, hendrerit id orci.'
    };

    var point = new google.maps.LatLng(product.lat, product.lng);
    var pOptions = {
        position: point,
        map: map,
        title: product.name
    };
    var marker = new google.maps.Marker(pOptions);

}

google.maps.event.addDomListener(window, 'load', initialize);
