
  $('form').submit( function (evt) {
	  evt.preventDefault();
	  var $searchField = $('#search');
	  // var $submitButton = $('#submit');
	  
	  $searchField.prop("disabled", true);
	  // $submitButton.attr("disabled", true).val("searching...");

    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var search = $searchField.val();
    var flickrOptions = {
      tags: search,
      format: "json"
    };

    function displayPhotos(data) {
      var photoHTML = '<div class="row">';
      $.each(data.items,function(i,photo) {
        photoHTML += '<div class="col-lg-3 col-md-4 photodiv">';
        photoHTML += '<a href="' + photo.media.m + '" target="_blank" class="image">';
        photoHTML += '<img src="' + photo.media.m + '" class="img-fluid"></a></div>';
      }); // end each
      photoHTML += '</div>';
      $('#instafeed').html(photoHTML);
	  $searchField.prop("disabled", false).val("");
	  // $submitButton.attr("disabled", false).val("search");
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end submit

