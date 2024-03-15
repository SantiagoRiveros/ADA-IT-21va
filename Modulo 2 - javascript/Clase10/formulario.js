const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const form = document.getElementById("form");

//Cuando se hace focus en el input(Se selecciona)
usernameInput.addEventListener("focus", function () {
  //console.log("GRACIAS SOS UN CAPO NO TE VAYAS NUNCA");
});

//Cuando Deseleccionas un input (o perdes el focus en el)
usernameInput.addEventListener("blur", function () {
  if (!usernameInput.value.length || usernameInput.value.trim() === "") {
    console.log("DEBES RELLENAR EL CAMPO DE USUARIO");
  } else if (usernameInput.value.length < 4) {
    console.log("EL NOMBRE DE USUARIO DEBE SER DE AL MENOS 4 DIGITOS");
  }
});

//Se deja de hacer focus y aparte el value del input cambio
usernameInput.addEventListener("change", function () {
  console.log(`El valor ingresado es: ${usernameInput.value}`);
});

usernameInput.addEventListener("input", function () {
  console.log(`El valor ingresado es: ${usernameInput.value}`);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (usernameInput.value === "Milanesa" && passwordInput.value === "milanga") {
    alert("AGUANTE LA MILANESA");
  }
});
