function myfunction(elprimernumero, elsegundonumero) {
    var numero1 = elprimernumero
    var numero2 = elsegundonumero
    var resultado = numero1 + numero2
    return resultado
}

const sum = (num1 = 0, num2 = 0) => {
    if (typeof +num1 !== "number" || typeof +num2 !== "number") {
        return null
    } else {
        return num1 + num2
    }
}

const sum2 = () => { }

if (operacion === "suma") {
    sum2 = () => { a + b }
}

// fixeo facil de bugs
// escalabilidad
// implementabilidad
// lectura facil
// eficiencia

console.log(sum([], { hola: "hola" }))


/*

1- Priorizar la lectura del codigo: Tengan en cuenta, que si es dificil de leer, 
    otro dev debe consumir tiempo y recursos para interpretar el codigo.
2- Estructurar la arquitectura del codigo: Antes de pasar a codigo, una idea plasmada en pseudocodigo,
    Piensen en el patron de entrada-salida y como van a hacer lo que quieren hacer.
3- Leer codigo fuente: Leer codigo ajeno nos nutre mucho como devs.


SOLID

Single Responsability Principle
Open-closed Principle
Liskov Substitution Principle
Interface Segregation Principle
Dependency Inversion Principle



1- Single Responsability Principle:
    Este principio habla de la responsabilidad unica que deberia acarrear cada "ente" dentro de nuestro proyecto.
    Su primer ventaja, es que es su comportamiento es predecible.
    Su segunda ventaje, es que facilita el control de versiones.

2- Open-closed Principle:
    El principio de apertura y cierre indica, que nuestras "entidades" deben estar abiertas a la extension (escalabilidad)
    y cerradas a la modificacion(mutacion)

3- Liskov Substitution Principle
    Establece que los subtipos de un objeto, pueden ser sustituibles por objeto base.

4- Interface Segregation Principle
    El principio de segregacion de interfaces, es similar al principio S, pero orientado a las interfaces.
    No es necesario crear una interfaz que haga TODO, sino muchas interfaces para diferentes cosas.

5- Dependency Inversion Principle
    El principio de inversión de dependencia establece que nuestras clases deben depender de interfaces o
    clases abstractas en lugar de clases y funciones concretas.


    Cada entidad hace UNA cosa.
    Cada entidad puede ser escalable pero no mutable.
    Lectura de codigo.
    Keep it Clean. (Mantener el codigo limpio y minimalista).
    Menos es mas. (Menos lineas, mejor).

*/

function area(rectangulo) {
    return rectangulo.ancho * rectangulo.alto
}

function areaCuadrado(cuadrado) {
    return cuadrado.lado * cuadrado.lado
}


//-------------------------------

const calcularArea = (radio) => (Math.PI * (radio ** 2)).toFixed(2)

const calcularAreaTriangulo = (base, altura) => ((base * altura) / 2).toFixed(2)

/* function calcularAreaTriangulo(base, altura) {
    let area = (base * altura) / 2
    return area.toFixed(2)
} */
const calcularAreaRectangulo = (base, altura) => (base * altura).toFixed(2)

/* function calcularAreaRectangulo(base, altura) {
    var area = base * altura
    return area.toFixed(2)
} */