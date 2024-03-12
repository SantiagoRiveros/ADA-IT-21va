/* 
EVENTO
¿Que es?
Es una accion que ocurre en la pagina web,
Ejemplos: Hace un click, tocar unboton, pasarle el mouse por encima a algo, scrollear, refrescar la pagina, etc.

EVENT HANDLER
¿Que es un event handler?
Es una funcion que se ejecuta en respuesta a un evento.

EJ: 
boton.addEventListener("click", () => {
    console.log("milanesa")
})

EVENTOS MOUSE Y TECLADO:
MOUSE EJEMPLOS: click, doubleclick, hover, mouseover, mouseup, mousedown, rightclick, altclick, onwheelup, onwheeldown
Keyboard ejemplos: keydown, keypress, keyup, shiftKey, controlKey, altKey

body.addEventListener("keyup", (event) => {
    if(event.key === "Enter"){
        cambiarModoOscuro()
    }
})

CALLBACKS

un callback es una función que se pasa como argumento a otra función 
y se invoca después de que ocurra un evento. 

OBJETO EVENT:
El objeto event contiene informacion sobre un evento especifico que ocurrio
como el tipo de evento, el elemento en el que ocurrio, detalles adicionales dependiendo
del tipo de evento

body.addEventListener("click", (event) => {
    event.target.value
})

-type: el tipo de evento EJ: "click"
-target: El objeto (o elemento) donde se genero el evento
-currentTarget:  El objeto al que el manejador de eventos está unido. 
    Este puede ser diferente de target si el evento se propaga a través de varios elementos (bubbling).
-keycode o key: Codigos o nombres de tecla que lanzo el evento
-preventDefault(): es para evitar el comportamiento por defecto de un elemento
-clientX y clientY: Esto da la posicion del mouse en la ventana del navegador, en el momento que se lanza
    el evento
-stopPropagation(): Detiene la propagacion del evento
-eventPhase: Indica en que fase se genero el evento (captura, destino o burbujeo)


Propagacion de Eventos:
La propagacion de eventos o bubling es basicamente lo siguiente:
CUando ocurre un evento en el HTML en un elemento del DOM, como hacer click en un boton, este evento,
se propaga automaticamente a travez de la jeraquia de elementos padre del elemento objetivo

<section>
<div>
    <article> <- eventlistener para click
        <div>
        <div> 
        <button>  <- eventlistener para click <- si aca ponemos stopPropagation() no se activa el click del article
    </article>
    
</div>


    La propagacion de eventos consta de 3 fases:

1. Fase de captura: El evento desciende desde el elemento raiz hasta el elemento objetivo, Esto significa que los eventos
se capturan primero en el elemento raiz y luego descienden hasta el elemento que origino el evento.
2. Fase de objetivo: El evento llega al elemento objetivo en si. Este es el punto en el que el evento se considera haber sido
desencadenado
3. Fase de burbujeo: Una vez que se ha manejado el evento en el elemento objetivo, el evento comienza a ascender de nuevo hacia el elemento raiz
Durante esta fase, los manejadores de eventos de los elementos padre del elemento objetivo pueden capturar y manejar el evento.


Metodo stopPropagation
Se utiliza para detener la propagacion de un evento, evitando que se propague, a travez de los elementos padre del elemento actual. Esto puede ser util
para evitar que otros manejadores de eventos se disparen.


TEMPLATES DE HTML
Los templates de HTML son elementos <template> que contienen contenido HTML que no se renderiza automáticamente en la página.
 Pueden ser clonados y agregados dinámicamente al DOM cuando sea necesario,
 lo que los hace útiles para la creación de elementos repetitivos o complejos.



*/
