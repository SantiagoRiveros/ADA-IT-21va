let collapseButton = document.getElementById("collapse-button");
let collapseDiv = document.getElementById("collapse-div");

collapseButton.addEventListener("click", function () {
  if (
    collapseDiv.style.display === "none" ||
    collapseDiv.style.display === ""
  ) {
    collapseDiv.style.display = "block";
  } else {
    collapseDiv.style.display = "none";
  }
});

collapseButton.addEventListener("mouseover", function () {
  collapseDiv.style.display = "block";
});

collapseButton.addEventListener("mouseout", function () {
  collapseDiv.style.display = "none";
});
