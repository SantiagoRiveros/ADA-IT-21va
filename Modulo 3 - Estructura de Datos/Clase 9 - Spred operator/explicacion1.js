/* SPREAD OPERATOR y asignacion por desestructuracion */

let [numero, string, bool] = [1, "hola", false]
let array = [1, 2, 3, 4, 5, 6]
/* let [uno, dos, tres, cuatro, cinco, seis] = array

uno //1
dos//2
tres //3
cuatro //4
cinco //5
seis //6 */
let uno = array[0]
let dos = array[1]
let tres = array[2]
let cuatro = array[3]
let cinco = array[4]
let seis = array[5]

let usuario = {
    nombre: "Santiago",
    apellido: "Riveros",
    comidaPreferida: "Milanesa",
}

let { comidaPreferida } = usuario

/* Cambiar el nombre de las variables desestructuradas */

const person = { name: "John", surname: "Doe", age: 30 };
const { name: personName, age: personAge } = person
console.log(personName)
console.log(personAge)

/* Desestructurar estructuras anidadas */

const person2 = { name: "John", surname: "Doe", age: 30, address: { city: "New York", country: "USA" } };

const { name, address: { city } } = person2;
console.log(name)
console.log(city)

/* Objetos como parametros  */

function saludar(persona) {
    console.log(`Hola ${persona.name}!`)
}
const persona = { name: 'John', lastName: "Doe" }

saludar(persona)

/* Desestructurando parametros */

function saludar2({ name }) {
    console.log(`Hola ${name}!`)
}
const persona2 = { name: 'John', lastName: "Doe" }

saludar2(persona2)

/* Spread Operator */

const numeros = [1, 2, 3]
const masNumeros = [...numeros, 4, 5]
console.log(masNumeros) //[ 1, 2, 3, 4, 5 ]

/* Rest Operator */

function suma(...numbers) {
    return numbers.reduce((total, num) => total + num, 0)
}

console.log(sum(1, 2, 3, 4, 5))

/* Inmutabilidad */
let numeritos = [1, 2, 3]
let nuevoNumero = 4
//numeritos.push(nuevoNumero) // <- Esto me va a modificar el array original

let nuevoArray = [...numeritos, nuevoNumero]
// let nuevoArray = [ 1, 2, 3, 4 ]

/* Pasaje por valor, pasaje por referencia */
//Pasaje por valor
let a = 5
let b = a //Se copia el valor de 'a' en 'b'
b = 10 //Se cambia el valor de 'b'pero no afecta a 'a'
console.log(a) // Output: 5

//Pasaje por referencia
let arr1 = [1, 2, 3]
let arr2 = [...arr1] // Se copia la referencia de 'arr1' en 'arr2'
arr2.push(4) // Cambiar arr1 afecta a arr2
console.log(arr1) // [ 1, 2, 3, 4 ]