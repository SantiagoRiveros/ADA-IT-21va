/* Metodo map
    Itera sobre los elementos de un arreglo y 
    devuelve un nuevo arreglo con cada elemento transformado segun una funcion proporcionada
*/

const numbers = [1, 2, 3, 4, 5, 6]
const doubledNumbers = numbers.map(number => number * 2)
console.log(doubledNumbers);

/* 
metodo Find
Encuentra el primer elemento en un arreglo que cumple con una condicion especificada, devolviendo el valor de este elemento
*/

const frutas = ['manzana', 'banana', 'naranja', 'uva']
const foundFruits = frutas.find(fruit => fruit === 'pepe mujica') // si no lo encuentra devuelve undefined
console.log(foundFruits)

/* 
metodo filter
Crea un nuevo arreglo, con todos los elementos de un arreglo original que cumplan una condicion especificada
mediant una funcion de prueba */

const numeros = [10, 15, 20, 25, 30]
const numerosFiltrados = numeros.filter(numero => numero > 20)
console.log(numerosFiltrados)

/* 
Metodo Every
Verifica si todos loselementos de un arreglo cumplen una condicion especificada, si todos la cumplen devuelve true
sino devuelve false (y... si)
*/

const otraPropiedadConNumeros = [1, 2, 3, 4, 5]
const todosMayoresACero = numbers.every(numero => numero > 0)
console.log(todosMayoresACero)

/* Metodo Some
Es parecido al every, pero devuelve true si al menos un elemento cumple la condicion y false si ninguno
*/

const cuantasPropiedadesDeNumerosTengoQueDeclarar = [-1, -2, -3, -4, -5]
const algunaMayorQueCero = cuantasPropiedadesDeNumerosTengoQueDeclarar.some(numero => numero > 0)
console.log(algunaMayorQueCero)