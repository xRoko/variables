/*
    Úloha: Vytvor program, ktorý požaduje od používateľa dve čísla a vykoná
    nasledujúce operácie: sčíta ich, odčíta, vynásobí a vydelí.
    Výsledky vypíš do konzoly.
    Rada: Použi premenné na uchovávanie čísel a výsledkov.
 */

const prompt = require('prompt-sync')();

console.log(`Welcome to the best calculator ever!`);
let numberOne = Number(prompt(`Write number one: `));
let numberTwo = Number(prompt(`Write number two: `));

// A)String
console.log(`${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`);
console.log(`${numberOne} - ${numberTwo} = ${ numberOne - numberTwo}`);
console.log(`${numberOne} * ${numberTwo} = ${ numberOne * numberTwo}`);
console.log(`${numberOne} / ${numberTwo} = ${ numberOne / numberTwo}`);

console.log(`___________________________________________`);
// B)Variables
let addition = numberOne + numberTwo;
let subtraction = numberOne - numberTwo;
let multiplication = numberOne * numberTwo;
let division = numberOne / numberTwo;

console.log(`${numberOne} + ${numberTwo} = ${addition}`);
console.log(`${numberOne} - ${numberTwo} = ${subtraction}`);
console.log(`${numberOne} * ${numberTwo} = ${multiplication}`);
console.log(`${numberOne} / ${numberTwo} = ${division}`);