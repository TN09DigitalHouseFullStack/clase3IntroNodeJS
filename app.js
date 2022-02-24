//npm init -y

let fs = require('fs');
let moment = require('moment')

//Cutom index module superheros
let heros = require('./superheros');

// console.log(fs);

let datos = fs.readFileSync(__dirname + '/prueba.txt', 'utf-8');

console.log(datos);


//consultar https://www.npmjs.com/package/moment
//npm i moment
//https://momentjs.com/docs/#/use-it/

//to check format https://momentjs.com/docs/#/parsing/string-format/

console.log(moment().format('MMM Do YYYY'));
console.log(moment().format('MMM DD YY'));
console.log(moment().format('MM DD YY'));


//superheros
console.log(heros[2].saludar());