//FUNCIONES NATIVAS (prototipo)

//.length GTH GTH GALLINA TIENE HUEVOS / GO TO HELL
//el length va concatenado luego de un string, y te devuelve en formato numerico, el largo del string

let milanesa = "milanesa";

console.log(milanesa.length);

let espacioVacio = " ";

console.log(espacioVacio.length);

//toUpperCase
//Simplemente para pasar un string a mayuscula

let minuscula = "hola hablo asi como si fuera chiquito";

console.log(minuscula.toUpperCase());

//toLowerCase
//pasa un string a minuscula

let mayuscula = "HOLA HABLO ASI COMO SI FUERA GRANDOTE";

console.log(mayuscula.toLowerCase());

// cuando algo no es sensible a las mayusculas/minusculas se dice que NO ES CASE SENSITIVE

let holaMundo = "hola mundo";

holaMundo = holaMundo.slice(0, 4);
console.log(holaMundo);

let numero = 2.97792453;
console.log(numero.toFixed(2));

// hola mundo
// 0123456789

//milanesa

//includes
//evalua si un string, contiene otro string

let nuevoString = "hola milanesa";
console.log(nuevoString.includes("paralelepipedo"));

// true / false

// 01110001011001010101001010

// indexOf
// devuelve el numero de indice de lo que estas buscando si lo encuentra, si no lo encuentra, devuelve -1

console.log(nuevoString.indexOf(" "));

// replace
// busca adentro de unstring, una coincidencia, y la reemplaza con el otro valor que le damos

let malaPalabra = "Yo odio las milanesas";
malaPalabra = malaPalabra.replace("odio", "amo");
console.log(malaPalabra);

// toString
// pasa un numero a string

let otroNumero = 3;
otroNumero = otroNumero.toString();

console.log(otroNumero);

let binario = 11;
binario = binario.toString(2);
console.log(binario);

// nuestro sistema numerico es decimal, es decir es base 10
// los otros son son binario, base 2, o hexadecimal, base 16

// 0000

let numeroAString = 18;

numeroAString = numeroAString + "";

console.log(numeroAString);

// Math

// Math Random

let numeroRandom = Math.random();

// entre 0 inclusive y 1 excluyente
console.log(numeroRandom);

console.log(Math);

//math.min()
// devuelve, el valor mas pequeño entre uno o mas numeros

let numero1 = 3;
let numero2 = 9;

let numMin = Math.min(numero1, numero2);
console.log(numMin);
//Math.max()
//devuelve el maximo entre dos numeros
let numMax = Math.max(numero1, numero2);
console.log(numMax);

//Math.round()
//redondea un numero hacia el entero mas cercano, si es 0.5 redondea hacia arriba

let numeroDecimal = 3.14;
console.log(Math.round(numeroDecimal));

//Math.ceil()
//redondea hacia arriba

console.log(Math.ceil(numeroDecimal));

//Math.floor()
//redondea hacia abajo

console.log(Math.floor(numeroDecimal));

//isNaN
// evalua si un valor es un numero, si no es asi retorna true, si es un numero retorna false

let palabra = "Changos guey";
console.log(isNaN(palabra));
console.log(isNaN(numeroDecimal));

// regex
// Regex, o expresiones regulares, son patrones utilizados para encontrar una determinada combinación de caracteres dentro de una cadena de texto. En JavaScript, puedes crear y usar regex con el objeto RegExp o con el método match de las cadenas.

// Como construir una regex

// usando RegExp
//let regex1 = new RegExp("pattern", "flags");

//usando la notacion literal
//let regex2 = /pattern/flags;

// /pattern/flags: La expresión regular comienza y termina con barras /. Dentro de las barras está el patrón a buscar. Después de la última barra, pueden ir indicadores, como i para hacer la búsqueda insensible a mayúsculas y minúsculas.

//verificar si una cadena tiene un numero
let str = "fdkajfakjfaoeij2fdaokfazkcxz";
let regexForNumberInAString = /\d/;
console.log(regexForNumberInAString.test(str));
let otroStr = "Hola";
console.log(regexForNumberInAString.test(otroStr));

//Encontrar todas las coincidencias de un patron en cadena.
let str3 = "Hello, my phone number is 123-456-7890.";
let regexForPhone = /\d{3}-\d{3}-\d{4}/g;
console.log(str3.match(regexForPhone));

/* 
\d: Coincide con un dígito del 0 al 9.
{n}: Indica que el elemento anterior se repite exactamente n veces.
g: Realiza una búsqueda global en toda la cadena.
i: Realiza una búsqueda insensible a mayúsculas y minúsculas. 
*/
