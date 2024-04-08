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

/* Pero ahora... para que #!@ nos sirven los arrays

1- Almacenar datos de manera ordenada, y luego poder acceder a ellos
Ej: App de rutina de ejercicios, flexiones, lagartijas, levantamiento de pesas
["flexiones", "lagartijas", "levantamiento de pesas"]
2- Iteracion y procesamiento de elementos, podemos recorrer nuestro array e ir haciendole cambios a cada uno de los elementos
De manera facil y sencilla
3- Implementacion de colas y filas, los arrays son la mejor manera de aproximarse a construir una fila o lista en nuestro codigo
4- Almacenar datos de manera estructurada
5- Operaciones de busqueda y filtrado
Ej: ["Ruta 2", "Ruta 11", "Ruta 37", "Ruta 9"]
6- Generar algoritmos de ordenamiento
[4, 1, 9, 3, 2]
7- Representacion de datos de manera grafica
Ej: Una app de finanzas y yo voy guardando los gastos e ingresos de la cuenta una vez al dia
[dia1, dia2, dia3, dia4]



Casos de uso medianamente comunes:

1- Almacenamiento de datos de usuario:
   let usuarios = [
       { nombre: 'Juan', edad: 25, correo: 'juan@example.com' },
       { nombre: 'María', edad: 30, correo: 'maria@example.com' },
       { nombre: 'Carlos', edad: 28, correo: 'carlos@example.com' }
   ];

2- Listado de tareas de una app de gestion:

let tareas = ['Completar informe', 'Enviar correo electrónico', 'Preparar presentación'];

3- Gestion de carrito de compras:

      let carrito = [
       { nombre: 'Camiseta', precio: 20, cantidad: 2 },
       { nombre: 'Pantalones', precio: 30, cantidad: 1 },
       { nombre: 'Zapatos', precio: 50, cantidad: 1 }
   ];

4- Almacenar resultados de encuestas:
   let resultadosEncuesta = [
       { pregunta: '¿Te gusta nuestro producto?', respuesta: 'Sí' },
       { pregunta: '¿Cuál es tu rango de edad?', respuesta: '25-35' },
       { pregunta: '¿Qué función te gustaría ver añadida?', respuesta: 'Chat en vivo' }
   ];
   

5- representacion grafica de datos:

   let datos = [
       { x: 1, y: 10 },
       { x: 2, y: 20 },
       { x: 3, y: 30 },
       { x: 4, y: 25 },
       { x: 5, y: 35 }
   ];

*/

//Caracteristicas principales de un array:

/* 
1- Coleccion ordenada, es decir tiene un orden especifico y esto permite que se pueda acceder por su posicion o indice
2- Indices: cada elemento tiene un indice especifico asociado, que se puede usar para accederlo
los indices COMIENZAN DESDE CERO para el primer elemento, y se van incrementando
3- Tamaño dinamico: en JS los arrays pueden aumentar o reducir su tamaño dinamicamente segun sea necesario, esto significa que se puede agregar
o eliminar indices al gusto del usuario.
4- Flexibilidad de los tipos de datos: Los arrays pueden contener elementos de diferentes tipos de datos, no estan limitados a un tipo de adto especifico.

*/

//Propiedad length <- memotecnico de esto GALLINA TIENE HUEVOS (por el gth del final)
//la propiedad length devuelve la cantidad de indices de un array

let arrayMilanesa = [0, 1, 2, 3, 4, 5];
console.log(arrayMilanesa[arrayMilanesa.length - 1]);
console.log(arrayMilanesa.length);

//bucles for in y for of

//for in
let arrayLetras = ["a", "b", "c", "d", "e", "f", "g"];

for (let indiceLetra in arrayLetras) {
  //en el for in el pointer es el numero de indice que recorre
  console.log(arrayLetras[indiceLetra]);
}

//for of

for (let letra of arrayLetras) {
  //en el for of el pointer es el valor de cada uno de los indices
  console.log("for of");
  console.log(letra);
}
