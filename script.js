function navDisplay() {
  var x = document.getElementById("myNav");
  if (x.className === "nav") {
      x.className += " responsive";
      document.getElementById("iconText").innerHTML = "<i class='fa fa-times'></i>";
  } else {
      x.className = "nav";
      document.getElementById("iconText").innerHTML = "Menu <i class='fa fa-bars'></i>";
  }
}
