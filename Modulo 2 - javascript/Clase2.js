//Que es una funcion

//Una funcion es un "coso" que puede tomar uno o mas valores, los procesa y los retorna

//EJEMPLO (Y sintaxis) de una funcion

// DECLARACION
function suma(numero1, numero2) {
  let resultado = numero1 + numero2;
  return resultado;
}

/* 
function nombreDeLaFuncion(parametroDeLaFuncion, otroParametro){
    ACA SE EJECUTAN LOS PROCESOS NECESARIOS
    return retornoLoQuenecesito
}
*/

//EJECUCION
suma(2, 16);
suma(4, 1);

console.log(suma(19, 39));

//DECLARACION FUNCION FLECHA
const suma2 = (num1, num2) => num1 + num2;

console.log(suma2(9, 12));

const multiplicacion = (num1, num2) => {
  let resultado = num1 * num2;
  return resultado;
};

const saludar = (nombre = "Nacho") => {
  return "Hola " + nombre;
};

<h3>Hola {nombre}</h3>;

console.log(saludar("Milaneso"));

console.log(saludar());
