/* METODOS HTTP: POST PUT Y DELETE 

-POST
#Descripcion: Se utiliza para enviar datos al servidor para crear un nuevo recurso
#Ejemplo de uso: Enviar los datos de un formulario de registro para crear un nuevo usuario
*/

fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John Doe",
    email: "john.doe@example.com", // <- esto va a crear una nueva entrada en la base de datos, con estos datos
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

/* 

-PUT
#Descripcion: Se utiliza para enviar datos al servidor para actualizar un recurso existente
#Ejemplo de uso: Actualizar los datos de un usuario existente

*/

fetch("https://api.example.com/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Jane Doe",
    email: "jane.doe@example.com",
  }),
})
  .then((response) => response.json)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));


/* 

-DELETE
#Descripcion: Se utiliza para enviar datos al servidor para eliminar un recurso existente
#Ejemplo de uso: Eliminar un usuario existente

*/

fetch('https://api.example.com/users/1', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : 'Bearer Token'
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
  
/* 
  
Headers & Content-Type

Los headers son campos clave-valor en una solicitud o respuesta HTTP
que proporcionan informacion adicional sobre la peticion o respuesta

Ejemplos comunes:
-Content-Type : Indica el tipo de contenido que se esta enviando al servidor. Ej: 'Content-Type' : 'application/json'
-Authorization: Se utiliza para enviar credenciales de autenticacion. Ej: 'Authorization' : 'Bearer Token'
-Accept: Indica que contenido espera el cliente como respuesta. Ej: 'Accept' : 'application/json'

*/

