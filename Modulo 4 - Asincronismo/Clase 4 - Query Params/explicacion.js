/* 
¿Que son los parametros de busqueda?
Los parametros de busqueda (o query params) son partes de una URL que permiten enviar informacion adicional al servidor
para realizar busquedas especificas.
se encuentran luego del simbolo de interrogacion '?' en una URL, y estan formados por pares clave-valor separados por el simbolo ampersand '&'

Por ejemplo en la URL 'https://ejemplo.com?categoria=libros&orden=asc' categoria y libros es unpar clave valor y orden y asc es otro par clave valor

OBJETO URL y propiedad searchParams

URL DOCUMENTATION: https://developer.mozilla.org/en-US/docs/Web/API/URL (IN ENGLISH ONLY)

El objeto URL en JS nos permite trabajar facilmente con la URL y sus componentes, Una de sus propiedades mas utiles es searchParams que nos va a permitir
acceder y manipular los parametros de busqueda

*/

const url = new URL('https://ejemplo.com?categoria=libros&orden=asc');

// Acceder a los parámetros de búsqueda
const params = url.searchParams;

console.log(params)

console.log(params.get('categoria')); // "libros"
console.log(params.get('orden'));     // "asc"

// Agregar un nuevo parámetro
params.append('pagina', '2');

console.log(url.toString()); // "https://ejemplo.com?categoria=libros&orden=asc&pagina=2"

// Eliminar un parámetro
params.delete('orden');

console.log(url.toString()); // "https://ejemplo.com?categoria=libros&pagina=2"

params.set('pagina', '3')

console.log(url.toString()); 

/* 
Usos comunes

FILTRADO

Los parametros de busqueda se utilizan frecuentemente para filtrar datos en una aplicacion web. Por ejemplo, si tienes una tienda en linea, podrias querer
filtrar productos por categoria, precio o disponibilidad

*/

const url2 = new URL('https://tienda.com?categoria=electronica&precio_max=500');

const categoria = url.searchParams.get('categoria'); // "electronica"
const precioMax = url.searchParams.get('precio_max'); // "500"

/* Ordenamiento
Tambien se pueden usar para especificar el orden en el que se deben mostrar los elementos, como ordenar productos por menor o mayor precio

*/

const url3 = new URL('https://tienda.com?orden=precio_desc');

const orden = url.searchParams.get('orden'); // "precio_desc"

/* PAGINADO
El paginado es otro uso comun de los parametros de busqueda, permite dividir los resultados en paginas y navegar entre ellas

*/

const url4 = new URL('https://tienda.com?pagina=2');

const pagina = url.searchParams.get('pagina'); // "2"

/* LIMIT Y OFFSET
    LIMIT <- Indica cuantos elementos se van a mostrar por pagina
    OFFSET <- Indica desde que elemento se van a mostrar los elementos

    Estoy en la pagina 1
    LIMIT 20
    OFFSET 0

    Estoy en la pagina 2
    LIMIT 20
    OFFSET 20

    estoy en la pagina 3
    LIMIT 20
    OFFSET 40

*/

const url5 = new URL('https://tienda.com?limit=10&offset=20&page=3');

const limit = url.searchParams.get('limit'); // "10"
const offset = url.searchParams.get('offset'); // "20"

//Pagina 11, que offset tiene?
// Multiplicar el (limit * page) - limit
const offset2 = (parseInt(limit) * parseInt(page)) - parseInt(limit);




