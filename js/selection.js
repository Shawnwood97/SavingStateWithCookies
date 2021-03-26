// gets cookie key color
var colorCookie = Cookies.get("color");

// stores div with ID yayColor in variable selectionDiv
var selectionDiv = document.getElementById("yayColor");

// if Statement to see if var colorCookie has content in it, returns a string if not
if (colorCookie) {
  selectionDiv.style.background = `${colorCookie}`;
} else {
  selectionDiv.innerText = "errr Wrong, pick a color, nerd";
}

// removes cookie and redirects to homepage when P tag is clicked.
function clearNHome() {
  Cookies.remove("color");
  window.open("/index.html", "_self");
}
