//ARRAYS

//¿Que es un array?
/* 
Es una estructura de datos, de la mas utilizadas, que se compone de indices.
Otro nombre que se le suele dar es Arreglo o Lista.

SINTAXIS:
*/

//                 0    1    2    3
let nuevoArray = ["a", "b", "c", "d"];

//Que son los indices?
//Son cada uno de los elementos que conforma el array, estos elementos estan "numerados"
//Es importante entender que esta numeracion se empieza a contar desde el numero 0
//Siendo el primer indice el indice 0

//Como podemos acceder al valor de un indice?

console.log(nuevoArray[2]); //Esto va a mostrar en consola "c"

//Como cambiar un indice
nuevoArray[2] = 42;

console.log(nuevoArray[2]);
nuevoArray.splice(2, 1);
console.log(nuevoArray);

//Como agregar, o eliminar indices?

//Tenemos 4 metodos para esto
// push, pop, shift y unshift

//metodos para agregar indices

//metodo push
// El metodo push agrega "al final" del array un nuevo indice con el valor que le pasemos como argumento

nuevoArray.push("e");

console.log(nuevoArray);

//metodo unshift
//El metodo unshift agrega "al principio" del array un nuevo indice con el valor que le pasemos como argumento

nuevoArray.unshift("indice");

console.log(nuevoArray);

//Metodos para "borrar" indices

//metodo pop
//El metodo pop elimina "el ultimo" indice de un array

nuevoArray.pop();
console.log(nuevoArray);

//metodo shift
//Elimina el primer indice de un array
nuevoArray.shift();
console.log(nuevoArray);

//metodo slice
//El metodo slice devuelve una copia del array original, sin modificar el original
//puede recibir 2 parametros, que le indican el principio, y el final desde donde "va a copiar" el array

let otroArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayAuxliar = otroArray.slice(3);
console.log(arrayAuxliar);

// que me traiga los primeros 10, luego los "segundos" 10
// ESTO ES DE APIS OJO
// el limit es la cantidad maxima que te debe traer la api de X elemento (ej. productos)
//offset es la cantidad que debe "ignorar"
//pagina 1 = limit 10, offset 0
//pagina 2 = limit 10, offset 10

//metodo splice
//CAMBIA el contenido de un array removiendo o reemplazando elementos existentes o agregando nuevos elementos

let meses = ["enero", "marzo", "abril", "mayo"];

//recibe 3 propiedades
//Primer parametro es el indice dond se va a "parar"
//segundo, es cuantos indices va a "eliminar"
/* meses.splice(1, 1);

console.log(meses);
 */

//Como tercer argumento vamos a meter lo que queremos "insertar"
meses.splice(1, 0, "febrero");

console.log(meses);

//Metodo concat
//El metodo concat, te concatena un array con otro

let array1 = [10, 20, 30];
let array2 = [40, 50, 60];

let array3 = array1.concat(array2);
console.log(array3);

//metodo Join
//El metodo join une los elementos de un array, en un string, y lo que le pasamos como argumento, es lo que va a "separarlos" en el string
let array4 = array3.join(" - ");
console.log(array4);
