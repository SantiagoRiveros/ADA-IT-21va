/* ¿Que es una API?
Application Programming Interface o Interfaz de Programacion de Aplicaciones
Es un conjunto de reglas y definiciones que permiten que diferentes aplicaciones se comuniquen entre si.
Se utiliza para permitir la integracion y el intercambio de datos entre sistemas distintos.
Ej: Desde nuestro frontend podemos consumir una API del clima, para hacer consultas.
*/

/* 
1- Lee esta linea
2- Sigue esta linea
3- Sigue esta linea
4- Sigue esta linea
5- Sigue esta linea
6- Sigue esta linea
7- HAgo peticion a API <- Si aca no le indicamos que esta peticion tiene un tiempo de respuesta, esto va a romper
8- Uso los datos de la API
*/

/* REST API
Representational State Transfer, es basicamente un protocolo o estilo arquitectonico, para diseñar APIs.
Las APIs RESTful siguen principios especificos, como el uso de HTTP y la manipulacion de recursos mediante URL.
Esto conlleva uqe no podemos por ejemplo, loguearnos y registrarnos enviando los datos a la misma URL con el mismo tipo de peticion.
*/

/* Peticiones HTTP

GET <- Obtener datos
POST <- Crear datos
PUT <- Actualizar datos
DELETE <- Eliminar datos

CRUD

Create = POST
Read = GET
Update = PUT
Delete = DELETE

La peticion la haces a una URL, con un metodo
*/

/* Estructura de una URL de API

http://api.ejemplo.com/recurso/{id}

-http://api.ejemplo.com: Dominio base de la API
-recurso: Nombre del recurso
-{id}: Identificador único del recurso específico

RECURSOS:
en REST, un recurso es cualquier tipo de dato que se puda manipular. Puede ser un objeto, una coleccion de objetos, o otro tipo de informacion, como un usuario, un documento, etc

ENDPOINT:
Un endpoint es una URL especifica dentro de una API, que realiza una peticion en concreto.
Cada Endpoint corresponde a una funcion en especifico, como obtener un recurso, crear uno nuevo, actualizar un recurso, etc.

EJ: GET http://api.ejemplo.com/usuarios

PARAMETROS DE RUTA:
Los parametros de ruta son partes variables de la URL, que se utilizan pra identificar recursos especificos, se incluyen directamente en la URL. Ejemplo:

http://api.ejemplo.com/usuarios/{id}

Aqui {id} es un aprametro de busqueda

PARAMETROS DE BUSQUEDA:
Los parametros de busqueda o query parameters son parametros adicionales que se pasan a travez de la URL para filtrar o modificar la solicitud.
Se agregan despues de un signo de interrogacion en la URL. Ejemplo:

http://api.ejemplo.com/usuarios?nombre=juan&edad=25

Aqui nombre=juan y edad=25 son 2 query parameters

*/


/* ESTRUCTURA DE LAS PETICIONES HTTP
Un pedido HTTP  tiene varias partes:
-Linea de solicitud: Incluye el metodo HTTP (Get, post, put o delete) y la URL
-Encabezados (o headers): Informacion Adicional como el tipo de contenido, autorizacion, etc.
-Cuerpo: Datos que se envian en la solicitud (solo para peticiones POST y PUT)

STATUS CODES:

-2XX : Salio todo bien
-4XX : Hubo un error en la peticion o no se encontro
-5XX : Error de la API

-200: La solicitud fue exitosa.
-201: Un recurso fue creado exitosamente
-400: La solicitud es invalidad
-401: Falta de autorizacion.
-404: Recurso no encontrado.
-500: Error en el servidor.

*/

/* Metodos de autenticacion (api keys) 
La autenticacion asegura que solo usuarios autenticados y autorizados puedan consumir la API, estos metodos incluyen:

-API Keys: Una clave Unica asignada a cada usuario
-0Auth: Un protocolo para permitir que aplicaciones de terceros, accedan a los recursos de la API
-Tokens: JWT (JSON Web Token) para autenticacion basada en tokens

*/

/* CORS
CORS es un mecanismo que permite que una aplicacion WEB de un dominio haga solicitudes a otra de otro dominio. Controla como los recursos se comaprten
entre diferentes origenes para mejorar la seguridad.

*/

/* Fetch, then y catch
fetch: Una función de JavaScript para realizar solicitudes HTTP asíncronas.
then: Metodo para manejar una respuesta exitosa
catch: Metodo para manejar un error
*/

fetch('https://api.ejemplo.com/datos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));