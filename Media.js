/* Programa que
soma dois numeros*/ 
var readlineSync = require('readline-sync');
var valor1 = 0;
var valor2 = 0;
var valor3 = 0;
var valor4 = 0;
var valor5 = 0;
var total = 0;
var media =0;


console.log("Programas que calcula a neuda de cinco numeros");
/*
console.log('1 valor: ' + valor1);
console.log('2 valor: ' + valor2);
console.log('3 valor: ' + valor3);
console.log('4 valor: ' + valor4);
console.log('5 valor: ' + valor5);
*/
valor1 = parseFloat(readlineSync.question('1 Valor : '));
valor2 = parseFloat(readlineSync.question('2 Valor : '));
valor3 = parseFloat(readlineSync.question('3 Valor : '));
valor4 = parseFloat(readlineSync.question('4 Valor : '));
valor5 = parseFloat(readlineSync.question('5 Valor : '));
total = valor1 + valor2 + valor3 + valor4 + valor5;
media = total / 5;
console.log("Total = " + total);
console.log("media = " + media);