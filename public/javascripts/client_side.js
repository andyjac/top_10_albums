$(document).ready(function() {
  makeAjaxRequest();
});

function makeAjaxRequest() {
  $('body').mouseup(function() {
    var artist = window.getSelection().toString();
    $.ajax({
      url: '/search',
      type: 'GET',
      data: {artist: artist},
      dataType: 'json',
      success: function(json) {
        console.log(json);
        var topAlbumsHTML = compiledJade(json);
        $('div.results').append(topAlbumsHTML);
      },
      error: function(xhr, status, errorThrown) {
        console.log('there was a problem!');
        console.log('status: ' + status);
        console.log('error thrown: ' + errorThrown);
      }
    });
  });
}