/*
DOM ¿Que cara#!%$ es el DOM?
*/

//Document Object Model
/* 
    Una representacion den uestro documento HTML usando un modelo de "objeto"
*/

/* SELECTORES 
en css, podemos seleccionar un elemento por su class, por su id o por el tipo de etiqueta

*/

//Seleccionamos el h1 del mondongo
const mondongoHeading = document.getElementById("mondongoHeading")
// const mondongoHeading = document.querySelector("#mondongoHeading")

//ahora el label al pedo
const labelAlPedo = document.getElementsByClassName("labelAlPedo")
// const labelAlPedo = document.querySelector(".labelAlPedo")

// Ahora el boton RE boton
const vosSosUnBoton = document.getElementsByTagName("button")[0]
// const vosSosUnBoton = document.querySelector("button")

//EVENTOS
/* Que es un evento y porque hacen cosas raras?
Un evento es generado a partir de la interaccion de un usuario con la pagina
Hay variedad ENORME de tipos de eventos, tantos que es dificil describirlo como una sola "cosa"
*/

/* function eventoDelBoton() {
    alert("ALTO BOTON ESTE")
} */
vosSosUnBoton.addEventListener("click", function () {
    alert("BOTONAZO MAL EL BOTON")
})

function botonNormal(event) {
    console.log(event)
    alert(event)
}