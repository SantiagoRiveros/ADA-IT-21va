//IF y ELSE

// Es decir, es como decir "Si no cumplis esta condicion, no podes acceder a esta parte del codigo"

// if (CONDICION){BLOQUE DE CODIGO QUE "BLOQUEA"}
// Si la condicion del if con el que el else esta "encadenado" no se cumple, ingresa al bloque del else

let milanesa = "milanesa";

/* if (milanesa === "milanesa") {
  console.log("AGUANTE LA MILANESA");
} else {
  console.log("LE PIFIASTE AL VALOR DE LA MILANGA :(");
} */

/* if (milanesa === "poroto") {
  console.log("Milanga de porotp");
} else if (milanesa === "garbanzo") {
  console.log("Milanga de garbanzo");
} else {
  console.log("LA MILANGA NO SE MANCHA");
} */

let ensalada = "Ensalada de Pollo";

if (milanesa === "milanesa") {
  console.log("MILANESA");
  if (ensalada === "Tomate y Lechuga") {
    console.log("BLABLA");
  } else if (ensalada === "Ensalada de Pollo") {
    console.log("ENSALADA");
  } else {
  }
}

// Patron de entrada/salida

let numero = 5;

numero = numero + 3;

console.log(numero);

//Operadores ternarios :-O

function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return "Es Mayor de edad.";
  } else {
    return "Es Menor de edad.";
  }
}

function esMayorDeEdadConTernario(edad) {
  return edad >= 18
    ? "Es Mayor de edad."
    : edad < 0
    ? "Pone una edad normal"
    : "Es menor de edad";
}

function aprobo(nota) {
  return nota > 4 && "aprobo";
}

//Switch Case

function esDiaLaboral(dia) {
  let notaDia;
  switch (dia) {
    case "lunes":
      notaDia = "Es laboral";
      break;
    case "martes":
      notaDia = "Es laboral";
      break;
    case "miercoles":
      notaDia = "Es laboral";
      break;
    case "jueves":
      notaDia = "Es laboral";
      break;
    case "viernes":
      notaDia = "Es laboral";
      break;
    case "sabado":
      notaDia = "No es laboral";
      break;
    case "domingo":
      notaDia = "No es laboral";
      break;
    default:
      notaDia = "dia no valido";
      break;
  }
  return notaDia;
}
