/* 
Objeto Date
El objeto Date es para trabajar con fechas y horas
*/


/* Creando una instancia del objeto Date con esta fecha y hora */
const ahora = new Date();

console.log(ahora)

/* Creamos una instancia especifica del objeto Date con una fecha especifica */
const fechaEspecifica = new Date('2024-04-23T08:30:00')

console.log(fechaEspecifica)

/* Creamos una instancia especifica usando valores individuales */
const fechaIndividual = new Date(2024, 3, 23, 8, 30, 0)
/* Es importante tener en cuenta que los meses en JavaScript van de 0 a 11, 
por lo que enero es el mes 0 y diciembre es el mes 11. */

console.log(fechaIndividual)

/* ----- */
/* Metodos */

console.log("Ahora " + ahora.getDate())

console.log("getMonth " + ahora.getMonth())

console.log("fullYear " + ahora.getFullYear())

console.log("Hours " + ahora.getHours())

console.log("Minutes " + ahora.getMinutes())

console.log("Seconds " + ahora.getSeconds())

// ----------

fechaEspecifica.setDate(8)

fechaEspecifica.setMonth(2)

fechaEspecifica.setFullYear(1991)

fechaEspecifica.setDate(21)

fechaEspecifica.setDate(12)

fechaEspecifica.setDate(8)

/* ---------- */

console.log("Ahora " + fechaEspecifica.getDate())

console.log("getMonth " + fechaEspecifica.getMonth())

console.log("fullYear " + fechaEspecifica.getFullYear())

console.log("Hours " + fechaEspecifica.getHours())

console.log("Minutes " + fechaEspecifica.getMinutes())

console.log("Seconds " + fechaEspecifica.getSeconds())

/* 1 de enero de 1970 00:00:00 UTC. */

console.log(ahora.getTime())