$(document).ready(function() {
  $("#goal-button").click(function() {
    console.log("this works!");
    $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");
  })
})
