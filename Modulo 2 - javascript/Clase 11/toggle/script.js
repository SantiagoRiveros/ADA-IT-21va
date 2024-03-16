// obtener el toggle y el elemento para mostrar el estadoa
const toggle = document.getElementById("toggleButton");
const statusElement = document.getElementById("toggleStatus");

toggle.addEventListener("click", function () {
  if (toggle.checked) {
    statusElement.textContent = "Encendido";
  } else {
    statusElement.textContent = "Apagado";
  }
});
