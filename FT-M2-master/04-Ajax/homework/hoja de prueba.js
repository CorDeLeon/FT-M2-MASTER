const {response} = require("express");

let search = $('#search')

const searchFunc = () =>{
    let id = $('#input').val();
let amigo = $('#amigo');
amigo.empty()
    $.get(`${URL}/${id}`,  (response) => {
        amigo.text(response.name)
    });
};

search.click(searchFunc)


//
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