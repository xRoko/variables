/*
    Úloha: Vytvor program, ktorý požaduje od používateľa hodnoty dĺžky a šírky obdlžníka.
    Vypočítaj obvod a obsah, a zobraz výsledky v konzole.
    Rada: Obvod obdlžníka je (2 * (dĺžka + šírka)) a obsah je (dĺžka * šírka).
 */

const prompt = require('prompt-sync')();

console.log(`Welcome to the rectangle calculator!`)
let width = Number(prompt(`What is your rectangle's width: `));
let length = Number(prompt(`What is your rectangle's height:`));

// A) String
console.log(`Rectangle perimeter is: ${2*(width + length)}`);
console.log(`Rectangle area is: ${width * length}`);

console.log(`_______________________________`);
// B) Variables
let perimeter = 2*(width + length);
let area = width * length;

console.log(`Rectangle perimeter is: ${perimeter}`);
console.log(`Rectangle area is: ${area}`);