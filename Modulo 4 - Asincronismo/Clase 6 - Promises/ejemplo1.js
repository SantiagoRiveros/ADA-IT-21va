let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let exito = true;
    if (exito) {
      resolve("¡La operacion fue exitosa!");
    } else {
      reject("Algo salio mal");
    }
  }, 2000);
});

/* 
Estados de una promesa

-Pending: Pendiente, la promesa aun no se cumplio o rechazo
-Completada (Fulfilled): Esto se cuando la promesa de cumple de una manera satisfactoria
-Rechazada (rejected): Cuando algo fallo en la promesa

*/

promesa
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error));
