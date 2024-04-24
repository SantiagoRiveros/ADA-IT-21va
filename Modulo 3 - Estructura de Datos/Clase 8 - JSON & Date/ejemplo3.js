/* voy a agregar un usuario mas al data2.json */

/* Importamos el modulo fs para lectura/escritura de archivos */
const fs = require('fs')

//Creamos un objeto con nuestro nuevo usuario
const nuevoUsuario = {
    nombre: "Pepe",
    apellido: "Pompin",
    edad: 25
}


// leemos con FS nuestro archivo data2.json (Viene en formato json)
let usuariosJSON = fs.readFileSync("./data2.json")

// Transformamos de JSON a objeto
let usuariosArray = JSON.parse(usuariosJSON)

// a nuestro array de objetos, le pusheo otro objeto con un nuevo usuario
usuariosArray.push(nuevoUsuario)

//Transformo de nuevo a JSON
let nuevosUsuariosJSON = JSON.stringify(usuariosArray)

//Sobreescribo el archivo con los usuarios
fs.writeFileSync("./data2.json", nuevosUsuariosJSON)