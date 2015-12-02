function displayIdeaForm() {
  var $ideaForm = $( '<div class="row">' +
    '<form class="input-field col s6">' +
      '<input value="Sweet Idea" id="title" type="text" class="validate">' +
      '<label class="active" for="Title">Title</label>' +
      '<input value="Body" id="body" type="text" class="validate">' +
      '<label class="active" for="Body">Body</label>' +
      '<button id="create-idea", class="btn waves-effect waves-light" >' +
      'Create Idea' +
      '</button>' +
      '</form>' +
    '</div>')

  $( '.form' ).prepend($ideaForm);

  function handleCreateClick(event) {
    event.preventDefault();
    var idea = { title: $( '#title' ).val(), body: $( '#body' ).val() }
    createIdea(idea);
  };
  $( '#create-idea' ).on( 'click', handleCreateClick );
};

function createIdea(idea) {
  $.ajax({
    type: "POST",
    url: "/api/v1/ideas.json",
    data: { title: idea.title, body: idea.body },
    success: function(response) {
      displayIdea(response);
    }
  })
  $( 'form' ).trigger( 'reset' );
};
