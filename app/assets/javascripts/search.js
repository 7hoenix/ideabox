function displaySearchBox () {

  function handleKeyUp(event) {
    event.preventDefault();
    var searchTerm = $( '#search' ).val();

    filterPage(searchTerm);
  }

  $( '#search' ).on( 'keyup', handleKeyUp );
};

function filterPage(searchTerm) {
  var ideasToShow = $('.ideas').children().filter(function() {
    var title = $(this).children().children('h1').text();
    var body = $(this).children().children('p').text();
    var searchMe = title + body;
    var indexOfTerm = searchMe.indexOf(searchTerm);
    return indexOfTerm > -1;
  });
  displaySomeIdeas(ideasToShow);
};

function displaySomeIdeas(ideasToShow) {
  $.each($( '.ideas' ).children(), function (index, idea) {
    $(this).addClass( 'idea-hidden' )
  });
  $.each(ideasToShow, function (index, idea) {
    $(this).removeClass( 'idea-hidden' )
  });
};
