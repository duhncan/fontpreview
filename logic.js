"use strict";

function showInput() {
    var yourtext = document.getElementById("user_input").value;
    var alltext = document.getElementsByClassName('textChange');
    for (var i = 0; i < alltext.length; i++) {
      alltext.item(i).innerHTML = yourtext;
    }
  }