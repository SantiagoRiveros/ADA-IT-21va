//BUCLES
/* QUE ES UN BUCLE? QUE ES UNA ITERACION? DE QUE ME SIRVE

*/

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let array2 = ["a", "b", "c", "d", "e", "f", "g", "h"];

function recorrerArray(array) {
  //Ciclo For

  //   POINTER    CONDICION         ACCION
  for (let i = 0; i < array.length; i++) {
    //console.log(i);
    console.log("array " + array[i] * 2);
  }
  return;
}

recorrerArray(array);

function esPar(array) {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      nuevoArray.push(array[i]);
    }
  }
  return console.log(nuevoArray);
}

esPar(array);

//bucle While
//La condicion se vrifica antes de entrar en el bucl
let i = 1;
while (i) {
  console.log(i);
  i++;
  if (i > 5) {
    break;
  }
}

//el bucle do while
//Similar al while, pero la condicion s verifica luego de la primer iteracion
do {
  console.log("hola");
} while (false);
