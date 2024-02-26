// SINTAXIS DE DECLARACION DE VARIABLE

let number = 3; // de tipo numero
// typeof number === "number"
let string = "hola"; // de tipo string (o cadena de texto)
// typeof string === "string"
let boolean = true; // de tipo booleano (admite solo true o false)
// typeof boolean === "boolean"
let nula = null; // de tipo nulo, es una variable cuyo valor es nulo
// typeof nula === "null"
let indefinido = undefined; // de tipo indefinido
// typeof indefinido === "undefined"

// estandares de nomenclatura de variables

// Milanesa Napolitana
// camelCase: milanesaNapolitana
// PascalCase: MilanesaNapolitana
// snake_case: milanesa_napolitana
// kebab-case: milanesa-napolitana
// UPPER_CASE: MILANESA_NAPOLITANA

// NaN & Infinity

// NaN significa Not a Number, "hola" / 2 === NaN
// Infinity, significa infinito, es un numero mas grande que todo el resto, ej: 1 / 0 === Infinity

//coercion de tipos

// 3 + true = error
// 3 + "3" = "33"
// 3 + +"3" = 6
// "2" + "1" = "21"

// Operador UNARIO
// +numero1 + +numero2 =

//¿Porque pasa esto?
// "Milanesa" + " " + "Napolitana" = "Milanesa Napolitana"

//Hay 3 tipos de comillas
// "" '' ``

let numeroDelUsuario = 34;

let numero = "3";

let textoQueSeMuestraEnConsola = `Hola, tu numero de usuario es ${numeroDelUsuario}`; // Hola, tu numero de usuario es 34

let unaFormaDeEscribirUnString = "Hola Mundo";
let otraFormaDeEscribirUnString = "Hola Mundo";

//OPERADORES SIUUUUUUUUUUUU

//Aritmeticos

// Suma
// Ejemplo: 2 + 3 = 5

// Resta
// Ejemplo: 3 - 2 = 1

// Division
// Ejemplo: 2 / 1 = 2

// Multiplicacion
// Ejemplo: 3 * 4

// Modulo
// Ejemplo: 7 % 4 = 3 // Otro ejemplo: numero % 2

// Logicos

// AND OR XOR NOT

// AND &&

/* 
 (3 + 5 > 2 && 2 - 1 === 1 )= true
 true && true = true
 true && false = false
 false && true = false
 false && false = false
*/

// OR ||

/* 
    true || true = true
    true || false = true
    false || true = true
    false || false = false
*/

// XOR ^

/* 
    true ^ true = false
    true ^ false = true
    false ^ true = true
    false ^ false = false
*/
/* 
    nombreDeUsuario ^ email
*/

// NOT !

/* 
    !true = false
    !false = true
*/

// Operadores de comparacion

// sirven para comparar un elemento A con otro B

// < > <= >=

// menor 3 < 5 = true

// mayor 2 > 1 = true

// menor igual 3 <= 3

// mayor igual 3 >= 3

// == ===

// igualdad ==
// me evalua el valor del dato

// 3 == "3" = true

// igualdad estricta ===
// evalua tipo y valor

// 3 === "3" = false

// desigual !==

// 3 !== "Milanesa" = true

// Asignacion

let nombre = "Santiago";
console.log(nombre);
nombre = "Milanesa";
console.log(nombre);
nombre = true;
console.log(nombre);
nombre = 3;
console.log(nombre);
nombre = "hola";
console.log(nombre);

//3 tipos de metodos de console

// console.log es para mostrar un texto o algo en la consola, especialmente util para depurar

// console.warn es para mostrar una advertencia en la consola

// console.error es para mostrar en consola un error

console.log("HOLA MILANESA");

console.log(11 % 4);

3 +
  +"3" +
  //el operador unario, convierte strings de ser posible a numbers

  "STRING QUE QUEREMOS CONVERTIR A NUMBER";

let numeroAleatorio = 4;

++numeroAleatorio;

numeroAleatorio++;

/* 3 + numeroAleatorio++ = 7
1 + numeroAleatorio = 6






3 + ++numeroAleatorio = 8 */
