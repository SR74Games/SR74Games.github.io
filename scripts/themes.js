function init() {
  document.getElementById("theme").onchange = selectChanged;
  var cookies = document.cookie.split(';');
  for (var i=0, count=cookies.length; i < count; i++) {
    if (cookies[i] == "theme=bo") {
      document.getElementById("pic").src = "https://stephenritchie74.github.io/themes/blueorange/stephenritchie74.png";
      document.getElementById("styles").href = "https://stephenritchie74.github.io/themes/blueorange/styles.css";
    }
  }
}
function selectChanged() {
  var theme = document.getElementById('theme').value;
  if (theme == 'bo') {
    document.getElementById("pic").src = "https://stephenritchie74.github.io/themes/blueorange/stephenritchie74.png";
    document.getElementById("styles").href = "https://stephenritchie74.github.io/themes/blueorange/styles.css";
    document.cookie = "theme=bo";
  } else {
  	document.getElementById("pic").src = "https://stephenritchie74.github.io/stephenritchie74.png";
    document.getElementById("styles").href = "https://stephenritchie74.github.io/styles.css";
    document.cookie = "theme=bg";
  }
}
window.onload = init;
