$(document).ready(function() {
  $("#boton").click(function() {
    $("#lista").empty();
    $.ajax({
      url: "http://localhost:5000/amigos",
      success: function(data) {
        for (var i = 0; i < data.length; i++) {
          var friend = data[i];
          var li = $("<li></li>");
          li.text(friend.name);
          $("#lista").append(li);
        }
      }
    });
  });

  $("#search").click(function() {
    $("#lista").empty();
    var friendId = $("#input").val();
    $.ajax({
      url: "http://localhost:5000/amigos/search?id=" + friendId,
      success: function(data) {
        var friend = data;
        if (friend) {
          $("#amigo").text(friend.name);
        } else {
          $("#amigo").text("No se encontró ningún amigo con ese ID");
        }
      }
    });
  });

  $("#delete").click(function() {
    $("#lista").empty();
    var friendId = $("#inputDelete").val();
    $.ajax({
      url: "http://localhost:5000/amigos/" + friendId,
      type: "DELETE",
      success: function() {
        $("#lista").find("#" + friendId).remove();
        $("#success").text("El amigo ha sido eliminado correctamente");
      }
    });
  });
});

