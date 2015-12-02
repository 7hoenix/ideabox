function deleteIdea(idea) {
  $.ajax({
    type: "DELETE",
    url: "/api/v1/ideas/" + idea.id + ".json",
    success: function(response) {
      removeIdea(idea.id);
    }
  })
};
