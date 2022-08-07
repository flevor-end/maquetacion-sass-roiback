const menuBar = document.querySelector(".menu-bar");
menuBar.addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("menuactivo");
});