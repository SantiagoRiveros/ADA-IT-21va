let textoColor = document.getElementById("color");

let azul = document.getElementById("azul");
let rojo = document.getElementById("rojo");
let verde = document.getElementById("verde");

azul.addEventListener("click", () => {
  textoColor.style.color = "white";
  textoColor.textContent = "FONDO AZUL LETRA BLANCA";
  document.body.style.backgroundColor = "blue";
});

rojo.addEventListener("click", () => {
  textoColor.style.color = "white";
  textoColor.textContent = "FONDO ROJO LETRA BLANCA";
  document.body.style.backgroundColor = "red";
});

verde.addEventListener("click", () => {
  textoColor.style.color = "white";
  textoColor.textContent = "FONDO VERDE LETRA BLANCA";
  document.body.style.backgroundColor = "green";
});
