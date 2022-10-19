#!/usr/bin/env node
// // module.exports = () => {
// //   // ...
// // };

// const colors = require('colors');
// const fs = require('fs');
// const path = require('path');

// //Cómo pasar los parámetros de la línea de comandos al programa Nde.js
// const route = process.argv[2];
// const option = process.argv[3];
// // console.log("estoy viendo arguments".rainbow);

// const verifyPathExists = (route) => {
//   if (fs.existsSync(route)) {
//     console.log('Director exists!'.red);
//     return true
//   } else {
//     console.log('Director not found'.rainbow);
//     return false
//   }
// }
// //verifyPathExists(route);
// //*verificar is absolute
// const convertToAbsolute = (route) => {
//   if (path.isAbsolute(route) === false) {
//      return path.resolve(route)
//     }
//     return route
// }
// console.log(verifyPathExists(route[2]));
// convertToAbsolute(route[2])
