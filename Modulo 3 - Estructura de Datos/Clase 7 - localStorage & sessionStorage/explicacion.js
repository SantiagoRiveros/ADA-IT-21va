/* 
    localStorage y sessionStorage son dos "mecanismos" de almacenamiento de datos,
    Estos datos se guardan dentro del navegador, y su carga puede ser entre 1kb y 10MB
    ¿Que datos podemos guardar aca?
    Cualquier tipo de dato "declarable" en JS

    sessionStorage el almacenamiento es mas "efimero" es decir es temporal o sujeto a algunos factores


    localStorage:
    -Persistencia: Los datos almacenados en localStorage persisten incluso despues de cerrar y volver
    a abrir el navegador o reiniciar la computadora.
    -Alcance: Los datos almacenados en localStorage estan disponibles 
    para todas las ventanas o pestañas que se abran en el mismo dominio.
    -Tamaño: El tamaño maximo puede oscilar o variar segun el navegador, pero casi siempre
    estamos hablando de 5 o 10MB.
    -Uso Comun: Se utiliza para guardar datos que deben persistir en la aplicacion, como preferencias de usuario
    o configuraciones personalizadas.

    sessionStorage:
    -Temporalidad: los datos almacenados en sessionStorage se eliminan una vez que cerramos
    la pestaña o el navegador
    -Alcance: Los datos almacenados en sessionStorage estan disponibles solo para la ventana o pestaña
    que los creo. Otras pestañas o ventanas abiertas en el mismo dominio no tienen acceso a esos datos.
    -Tamaño: Igual que el localStorage
    -Uso Comun: Se utiliza para guardar datos de manera temporal, que son relevantes solo durante
    la sesion actual del usuario, como informacion del carrito, odatos de acceso de usuario.


*/


function saveOnLocalStorage(key, value) {
    localStorage.setItem(key, value)
    return
}

saveOnLocalStorage()