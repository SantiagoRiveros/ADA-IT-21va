/* COMO OBTENER LOS DATOS PARA USAR

1- Deben registrarse en: https://developer.marvel.com/account
2- Una vez se registren, les va a proporcionar 2 KEYS: Public & Private Key
3- Para poder usar la api, deberemos generar un HASH, el hash se genera de la siguiente manera:
    MD5(ts + PrivateKey + PublicKey)

ts: Un timestamp, la documentacion no deja 100% claro su uso, pero para este caso, yo use el valor 1000
PrivateKey: Nuestra clave privada que nos proporciona la pagina al crear una cuenta
PublicKey: Clave publica, nos la da l pagina al crear la cunta

4- Para obtener el Hash en si, debemos usar esta pagina: https://md5.cz/
5- Ejemplo de que pasarle como valor si nuestra privateKey es abcd, nuestra publicKey es 1234 y nuestro timestamp es 1000: 1000abcd1234
6- el resultado que nos de, va a ir como hash a la url: Estructura de la URL:

https://gateway.marvel.com/v1/public/comics?ts=1000&apikey=1b4af2e9e351b6367dbb526277671dde&hash=f642c2d8a8b133cddae6df5ae29eed55&offset=0&orderBy=title&titleStartsWith=avengers

*/

"https://gateway.marvel.com/v1/public/comics?ts=1000&apikey=1b4af2e9e351b6367dbb526277671dde&hash=f642c2d8a8b133cddae6df5ae29eed55&offset=0&orderBy=title&titleStartsWith=avengers"

/* REEMPLAZANDO LSO DATOS QUE VAN A TENER QUE CAMBIAR USTEDES */

/* Vamos a usar el mismo ejemplo de arriba, privateKey es abcd, nuestra publicKey es 1234 y nuestro timestamp es 1000 */

const publicKey = "1234"
const privateKey = "abcd"
const ts = "1000"
const hash = "f642c2d8a8b133cddae6df5ae29eed55"
const nombreComic= "Avengers"
const nombrePersonaje = "Punisher"

`https://gateway.marvel.com/v1/public/comics?ts=1000&apikey=${publicKey}&hash=${hash}&offset=0&orderBy=title&titleStartsWith=${nombreComic}`

/* Para personajes */

`https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=${publicKey}&hash=${hash}&offset=0&orderBy=name&nameStartsWith=${nombrePersonaje}`

"https://gateway.marvel.com/v1/public/comics?ts=1000&apikey=1b4af2e9e351b6367dbb526277671dde&hash=f642c2d8a8b133cddae6df5ae29eed55&offset=0&orderBy=title&titleStartsWith=avengers"

// ts, apikey, hash, offset, orderBy, titleStartsWith