#!/usr/bin/env node
// module.exports = () => {
//   // ...
// };
 //node ./src/index.js//


//imprimi colores
const colors = require("colors");
// console.log("hola mundo".rainbow)

//Lee un archivo
let fs = require("file-system");
//Esta es una copia exacta del módulo de "ruta"
const path = require('path');

//Cómo pasar los parámetros de la línea de comandos al programa NOde.js
const route = process.argv[2]; //usuario escribe guarda en array
const option = process.argv[3]; // la otra option de usuario(validate,status,validate status)
// console.log(route)
// console.log(option)

//¿verificar se la ruta es absoluta o relativa?
if (path.isAbsolute(route)) {
  console.log('absolute path')
}








