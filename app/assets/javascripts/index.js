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
    '<div class="inline-edit-form-' + element.id + '">' +
     '<h1>' + element.title + '</h1>' +
     '<p>' + element.body + '</p>' +
     '<h3>' + element.quality + '</h3>' +
   '</div>' +
  '<div class="inline-edit-idea-' + element.id + '">' +
    '<form>' +
      '<input value="' + element.title +'" id="title-' + element.id + '" type="text" class="validate">' +
      '<label class="active" for="Title">Title</label>' +
      '<input value="' + element.body + '" id="body-' + element.id + '" type="text" class="validate">' +
      '<label class="active" for="Body">Body</label>' +
      '<button id="update-idea-' + element.id +'", class="btn waves-effect waves-light" >' +
      'Update Idea' +
      '</button>' +
      '</form>' +
   '</div>' +
   '<button id="edit-idea-' + element.id + '">Edit</button>' +
   '<button id="delete-idea-' + element.id + '">Delete</button>' +
   '<button id="thumbs-up-idea-' + element.id + '">Thumbs up</button>' +
   '<button id="thumbs-down-idea-' + element.id + '">Thumbs down</button>' +
   '</div>')
  $( '.ideas' ).prepend(idea);
  $( '.inline-edit-idea-' + element.id ).toggleClass( 'idea-hidden' );

  function handleDeleteClick(event) {
    event.preventDefault();
    deleteIdea(element);
  };
  $( '#delete-idea-' + element.id ).on( 'click', handleDeleteClick );

  function handleEditClick(event) {
    event.preventDefault();
    toggleFormForIdea(element);
  };
  $( '#edit-idea-' + element.id ).on( 'click', handleEditClick );

  function handleUpdateClick(event) {
    event.preventDefault();
    var idea = { id: element.id, title: $( '#title-' + element.id ).val(), body: $( '#body-' +
                                                                  element.id ).val() }
    updateIdea(idea);
  };
  $( '#update-idea-' + element.id ).on( 'click', handleUpdateClick );

  function handleUpClick(event) {
    event.preventDefault();
    changeQualityOfIdea(element, 1);
  };
  $( '#thumbs-up-idea-' + element.id ).on( 'click', handleUpClick );

  function handleDownClick(event) {
    event.preventDefault();
    changeQualityOfIdea(element, -1);
  };
  $( '#thumbs-down-idea-' + element.id ).on( 'click', handleDownClick );
};

function displayNewIdea(idea) {
  $( '.ideas' ).prepend('<h1>' + idea.title + '</h1>');
};

function removeIdea(id) {
  $( '.idea-' + id ).remove();
};
