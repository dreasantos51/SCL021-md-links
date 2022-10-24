const https = require('https')
const colors = require("colors");
const { url } = require('inspector');

const validateLinks = (url) => {

    return new Promise((resolve, reject) =>
      https.get(url, res => {
        if (res.statusCode === 200) {
          resolve({ arrayOfLinks: process.argv[2], url: url, code: res.statusCode, message: "OK" })
        } else {
          resolve({ arrayOfLinks: process.argv[2], url: url, code: res.statusCode, message: "FAIL" })
        }
      })

      )

};

const arrayOfLinks = [
  "https://github.com/dreasantos51",
  "https://funnyfrontend.com/introduccion-al-stack-mean-4-rutas-routing-con-nodejs-y-express/",
  "https://github.com/users/dreasantos51/projects/1/views/3?layout=board"
];
arrayOfLinks.forEach((link) => {
  validateLinks(link)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});


