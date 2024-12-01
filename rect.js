const prompt = require('prompt-sync')();

console.log(``);
const side_a = parseFloat(prompt('Prosím, zadaj rozmery obdlžnika v centimetroch: strana a= '));
const side_b = parseFloat(prompt('Prosím, zadaj rozmery obdlžnika v centimetroch: strana b= '));

let circumference = 2 * (side_a + side_b);
let area = side_a * side_b;
console.log(``);
console.log(`Obvod obdlžnika: O = 2 * (a + b)`);
console.log(`Obvod obdlžnika: O = ${circumference} cm`);
console.log(``);
console.log(`Obsah obdlžnika: S = a * b `);
console.log(`Obsah obdlžnika: S = ${area} cm^2`);