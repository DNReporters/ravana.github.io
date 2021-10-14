// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Get the model2
var model2 = document.getElementById('id02');

// When the user clicks anywhere outside of the model2, close1 it
window.onclick = function(event) {
  if (event.target == model2) {
    model2.style.display = "none";
  }
}
window.console = window.console || function(t) {};
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}
window.console = window.console || function(t) {};
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}