
const prompt = require('prompt-sync')();

const number_a = parseFloat(prompt('Please, enter number a= '));
const number_b = parseFloat(prompt('Please, enter number b= '));

let addition = number_a + number_b;
let subtraction = number_a - number_b;
let multiplication = number_a * number_b;
let division = (number_a / number_b).toFixed(2);

console.log (` Addition of numbers: ${number_a} + ${number_b} = ${addition}`);
console.log (` Subtraction of numbers: ${number_a} - ${number_b} = ${subtraction}`);
console.log (` Multiplication of numbers: ${number_a} * ${number_b} = ${multiplication}`);
console.log (` Division of numbers: ${number_a} / ${number_b} = ${division}`);
