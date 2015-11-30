function clickMe() {
  $.getJSON("/api/v1/ideas.json")
    .then(function (data) { loadIdeas(data) })
    .fail(function (data) { console.log("failed") });
};
function loadIdeas(ideas) {
  debugger;
  ideas.forEach(displayIdea);
};
function displayIdea(element, index, array) {
  console.log(element.title);
}
