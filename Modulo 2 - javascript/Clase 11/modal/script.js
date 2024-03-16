let modal = document.getElementById("myModal");
let openModalButton = document.getElementById("openModalButton");
let closeModalButton = document.getElementById("closeModal");

//Funcionalidad para que se abra el modal cuando se haga click
openModalButton.addEventListener("click", function () {
  modal.style.display = "block";
});

//Cuando se hace click en la X del modal, cerrarlo
closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

document.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
