#!/usr/bin/env node

 const colors = require('colors');
 const fs = require('fs');
 const path = require('path');

// //Cómo pasar los parámetros de la línea de comandos al programa Nde.js
 const route = process.argv[2];//node documento.js laruta.com
                               //[0]    [1]          [2]


 const verifyPathExists = (route) => {
   if (fs.existsSync(route)) {
     console.log('Director exists!'.red);
     return true
   } else {
     console.log('Director not found'.rainbow);
     return false
   }
 }
verifyPathExists(route);
// //*verificar is absolute
 const convertToAbsolute = (route) => {
   if (path.isAbsolute(route) === false) {
      return path.resolve(route)
     }
     return verifyPathExists
 }
//  console.log(verifyPathExists(route[2]));
//  convertToAbsolute(route[2])




const searchMd = (route) => {
  if (path.extname(route) === ".md") {
     console.log('La extensión del archivo es .md!' .rainbow);
  } else {
     console.log ('no es ext md!'.red);
  }
};
searchMd(route);
