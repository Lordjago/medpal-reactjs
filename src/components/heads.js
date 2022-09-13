const menu = document.querySelector(".nav-bar-toggle");
const tabs = document.querySelector(".nav-tabs");

menu.addEventListener("click", function () {
  tabs.classList.toggle("active");
});
