function init() {
  document.getElementById("theme").onchange = selectChanged;
}
function selectChanged() {
  var theme = document.getElementById('theme').value;
  if (theme == 'bo') {
    document.getElementById("pic").src = "https://stephenritchie74.github.io/themes/blueorange/stephenritchie74.png;"
    document.getElementById("styles").href = "https://stephenritchie74.github.io/themes/blueorange/styles.css";
  } else {
  	document.getElementById("pic").src = "/stephenritchie74.png";
    document.getElementById("styles").href = "/styles.css";
  }
}
window.onload = init;
