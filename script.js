// Add active class to the current button (highlight it)
var header = document.getElementById("navbar-list-con");
var btns = header.getElementsByClassName("navbar-list");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() 
  {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  }
);
}
// Add active class to the current button (highlight it)