// get the template and compile it once when
    // the page loads
    var source   = $("#bar_detail").html();
    var bar_detail = Handlebars.compile(source);

    // instantiate the template with data whenever you click
    // there are two separate functions, one for each
    // image (next week we will see a better way of doing this)
     var html    = detail_template(bares);

    $('#content').html(html);
  

var map;
function initialize() {
    var bar1 = bares[0];
    var mapOptions = {
        minZoom: 16,
        backgroundColor: "#ff00ff",
        zoom: 20,
        center: new google.maps.LatLng(bar1.latitude, bar1.longitude),
        fullscreenControl: false,
        title: bar1.name
    };
    map = new google.maps.Map(document.getElementById('map-canvas-detail'),
        mapOptions);

    var point = new google.maps.LatLng(bar1.latitude, bar1.longitude);
    var pOptions = {
        position: point,
        map: map,
        title: bar1.name
    };
    var marker = new google.maps.Marker(pOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
