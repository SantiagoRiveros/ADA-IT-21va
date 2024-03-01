 //if <- si se cumple X condicion hacer ALGO
 //else <- Si no se cumplio la condicion del if, hacer OTRA cosa


 //Declaramos una funcion podesVotar, en la cual ingresa como parametro edad, que va a ser un numero
 function podesVotar(edad){
    //Primero pregunto si la edad es mayor o igual a 18 y menor a 70, entonces es obligatorio el voto
    if(edad >= 18 && edad < 70){
        //Si se cumple la condicion va a retornar el string: "Es obligatorio que votes."
        return "Es obligatorio que votes."
        //Si no se cumplio la condicion del if de la linea, entonces se "encadena" otro condicional else if
        //este else if, pregunta si la edad es mayor o igual a 16 Y menor a 18, O si la edad es mayor o igual a 70
    } else if((edad >= 16 && edad < 18) || edad >= 70) { 
        //Si la condicion de la linea 13 se cumple, retorna un string: "No es obligatorio que votes."
        return "No es obligatorio que votes."
        // Si no se cumplio tanto el if, como el else if, ejecuta lo que esta dentro del else
    } else {
        // si no se cumplieron las condiciones de la liena 8 y 13, entonces retorna: "No podes votar."
        return "No podes votar."
    }
 }

 console.log(podesVotar(31.4))