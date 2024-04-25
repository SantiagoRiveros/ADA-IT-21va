const fs = require("fs")

let objeto = JSON.parse(fs.readFileSync('./data.json'))

objeto.nombre = "Milanesa"

objeto = JSON.stringify(objeto)

fs.writeFileSync('./data.json', objeto)
/* El segundo metodo de fs es writeFileSync, su primer parametro es la ruta del archivo a sobreescribir
su segundo parametro es el JSON con el que va a sobreescribir ese archivo
*/