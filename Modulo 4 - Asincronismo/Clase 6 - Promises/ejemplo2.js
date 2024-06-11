let promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Primera promesa cumplida");
  }, 1000);
});

promesa1
  .then((mensaje) => {
    console.log(mensaje);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("segunda promesa cumplida");
      }, 1000);
    });
  })
  .then((mensaje) => {
    console.log(mensaje);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Tercer promesa cumplida");
      }, 1000);
    });
  })
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => console.error(error));

let promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let numeroRandom = Math.random();
    if (numeroRandom > 0.5) {
      resolve(`${numeroRandom} mayor a 0.5`);
    } else {
      reject(`${numeroRandom} menor a 0.5`);
    }
  }, 2000);
});
