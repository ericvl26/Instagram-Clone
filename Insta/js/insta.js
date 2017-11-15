$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '1901813557',
        limit: 20,
        resolution: 'standard_resolution',
        accessToken: '1901813557.ae1aa3d.770f3ea95b394198a4de099957b6cb90',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 col-md-6 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });

});