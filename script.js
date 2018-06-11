


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=2f86c4aaa8b63d3aa0fb9349bdc5e510&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function(data) {

    $.each(data.photos.photo, function(i, gp) {

        var farmId = gp.farm;
        var serverId = gp.server;
        var id = gp.id;
        var secret = gp.secret;

        console.log(farmId + ", " + serverId + ", " + id + ", " + secret);

        //  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

        $("#flickr-images").append('<img class="img-thumbnail" src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');

    });
});