$( document ).ready(function() {
  displayIdeaForm();
  loadIdeas();
});

function loadIdeas() {
  $.getJSON("/api/v1/ideas.json")
    .then(function (data) { displayIdeas(data) })
    .fail(function (data) { console.log("failed") });
};

function displayIdeas(ideas) {
  ideas.forEach(displayIdea);
};

function displayIdea(element) {
  var idea = $( '<div class="idea-' + element.id + '">' +
   '<h1>' + element.title + '</h1>' +
   '<p>' + element.body + '</p>' +
   '<h3>' + element.quality + '</h3>' +
   '<button id="delete-idea-' + element.id + '">Delete</button>' +
    '</div>')
  $( '.ideas' ).prepend(idea);

  function handleDeleteClick(event) {
    event.preventDefault();
    deleteIdea(element);
  };
  $( '#delete-idea-' + element.id ).on( 'click', handleDeleteClick );
};

function displayNewIdea(idea) {
  $( '.ideas' ).prepend('<h1>' + idea.title + '</h1>');
};

function removeIdea(id) {
  $( '.idea-' + id ).remove();
};
