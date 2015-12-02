function updateIdea(idea) {
  $.ajax({
    type: "PUT",
    url: "/api/v1/ideas/" + idea.id + ".json",
    data: { idea: idea },
    success: function(response) {
      removeIdea(idea.id);
      displayIdea(response);
    }
  })
};

function toggleFormForIdea(element) {
  $( '.inline-edit-idea-' + element.id ).toggleClass( 'idea-hidden' )
  $( '.inline-edit-form-' + element.id ).toggleClass( 'idea-hidden' )
};

function changeQualityOfIdea(idea, value) {
  $.ajax({
    type: "PATCH",
    url: "/api/v1/ideas/" + idea.id + ".json",
    data: { value: value },
    success: function(response) {
      removeIdea(idea.id);
      displayIdea(response);
    }
  })
};
