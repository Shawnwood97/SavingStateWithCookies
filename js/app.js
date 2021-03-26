// Function to set cookie to a hardcoded value brought in as an argument from html, this runs using the onclick attribute in the html
// opens in same page
function selectColor(selectedColor) {
  Cookies.set("color", selectedColor);
  window.open("/pages/selection.html", "_self");
}
