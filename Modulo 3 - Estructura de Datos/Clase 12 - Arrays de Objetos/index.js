const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 30 },
    { nombre: "Maria", edad: 28 }
]

/* map */

const edades = personas.map(persona => persona.edad)
console.log(edades) // Output: [25, 30, 28]

/* find */

const juan = personas.find(persona => persona.nombre === 'Juan')
console.log(juan) // Output: {nombre: "Juan", edad: 30}

/* filter */

const mayoresDe25 = personas.filter(persona => persona.edad > 25)
console.log(mayoresDe25) // Output: [{nombre: 'Juan', edad: 30},{nombre: 'Maria', edad: 28}]

/* every */
const todosMayoresDe18 = personas.every(persona => persona.edad > 18)
console.log(todosMayoresDe18) // Output: true

/* some */
const algunMenorDe18 = personas.some(persona => persona.edad < 18)
console.log(algunMenorDe18) // Output: false

/* Encadenando Metodos */
const nombresMayusculas = personas
    .map(persona => persona.nombre.toUpperCase())
    .filter(persona => persona.edad > 25)

console.log(nombresMayusculas)

