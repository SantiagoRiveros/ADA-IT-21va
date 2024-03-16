const openSidebarButton = document.getElementById("openSidebarButton");
const closeSidebarButton = document.getElementById("closeSidebarButton");
const sidebar = document.getElementById("sidebar");

openSidebarButton.addEventListener("click", function () {
  sidebar.style.width = "250px";
});

closeSidebarButton.addEventListener("click", function () {
  sidebar.style.width = "0px";
});
