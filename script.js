function flipFront() {
  document.querySelector("#front").style.display = "none";
  document.querySelector("#back").style.display = "grid";
}

function flipBack() {
  document.querySelector("#back").style.display = "none";
  document.querySelector("#front").style.display = "grid";
}
