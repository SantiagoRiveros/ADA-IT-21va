// antes: var
//ES6: var let y const

//const no permite reasignacion

const hola = "hola";
/* hola = 3; */ // <- No se puede

//diferencia entre var y let

let variableLet = "blabla";

function funcionRandom() {
  let variableLet = "hola";
}

function scopeExample() {
  if (true) {
    var variableVar = "Variable var dentro de un bloque if";
    let variableLet = "Variable let dentro de un bloque if";
    console.log(variableVar);
    console.log(variableLet);
  }
  console.log(variableVar);
  console.log(variableLet); // <- esto va a romper
}

scopeExample();

//HOISTING

console.log(variableVar2); // undefined
console.log(variableLet2); // Error: Cannot access 'variableLet' before initialization

var variableVar2 = "Hola";
let variableLet2 = "Hola";

console.log(x); // undefined
var x = 5;
console.log(x); // 5
