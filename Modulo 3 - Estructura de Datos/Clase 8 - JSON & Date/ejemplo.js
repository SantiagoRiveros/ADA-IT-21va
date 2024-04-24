/* 
vamos a usar fs 
File System

*/
const fs = require('fs');

/* Pero... Como leemos nuestr archivo JSON? */

/* 
fs(file System) tiene dos metodos que son los mas usados:
readFileSync <- para leer archivos
writeFileSync <- Para "escribir" archivos

*/

let archivoJSON = fs.readFileSync('./data.json')

console.log(archivoJSON) // <- me da algo ilegible

/* el primer metodo de JSON */

archivoJSON = JSON.parse(archivoJSON)
/* Transforma de formato JSON a objeto */

console.log(archivoJSON)

/* el segundo metodo de JSON */

archivoJSON = JSON.stringify(archivoJSON)
/* Este metodo es para transformar el objeto en JSON */

console.log(archivoJSON) 
