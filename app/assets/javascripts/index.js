function clickMe() {
  $.getJSON("/api/v1/ideas.json")
    .then(function (data) { loadIdeas(data) })
    .fail(function (data) { console.log("failed") });
};
function loadIdeas(ideas) {
  ideas.forEach(displayIdea);
};
function displayIdea(element, index, array) {
  var idea = $( '<div class="idea-"' + index + '>' +
               '<h1>' + element.title + '</h1>' +
                '<p>' + element.body + '</p>' +
                '<h3>' + element.quality + '</h3></div>')
  $( document.body ).append(idea);
}
