function init() {
  document.getElementById("theme").onchange = selectChanged;
}
function selectChanged() {
  var theme = document.getElementById('theme').value;
  var logo = document.getElementById("pic").src;
  var styles = document.getElementById("styles").href;
  if (theme == 'bo') {
    logo = "/themes/blueorange/stephenritchie74.png";
    styles = "/themes/blueorange/styles.css";
  }
}
window.onload = init;
