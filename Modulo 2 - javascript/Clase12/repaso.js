/* Porque y como: sintaxis de objetos */
// declaracion = valor
let objeto = {
  //tuplas
  //pares de clave-valor (o key-value)
  nombre: "Santiago",
  apellido: "Riveros",
  edad: 31,
};

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function suma(a, b) {
  console.log(a, b);
  return a + b;
}

console.log(suma({}));

let valoresInput = {
  nombre: inputValue,
  apellido,
  email,
};
let inputValue = e.target.value;
//inputValue
valoresInput.nombre = inputValue;
