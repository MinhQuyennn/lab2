filterObject("all");

function filterObject(c) {
  var x, i;
  x = document.getElementsByClassName("box");
  if (c == "all") {
    c = "";
  }
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, i1, i2;
  i1 = element.className.split(" ");
  i2 = name.split(" ");

  for (i = 0; i < i2.length; i++) {
    if (i1.indexOf(i2[i]) == -1) {
      element.className += " " + i2[i];
    }
  }
}

function removeClass(element, name) {
  var i, i1, i2;
  i1 = element.className.split(" ");
  i2 = name.split(" ");
  for (i = 0; i < i2.length; i++) {
    while (i1.indexOf(i2[i]) > -1) {
      i1.splice(i1.indexOf(i2[i]), 1);
    }
  }
  element.className = i1.join(" ");
}