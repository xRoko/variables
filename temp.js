/*
    Úloha: Napíš program, ktorý prepočíta teplotu z Celzia na Fahrenheita.
    Použi vzorec: C = 5/9 * (°F-32). Vypíš výsledok do konzoly.
    Rada: Nezabudni, že teplotu získaš od používateľa.
 */

const prompt = require('prompt-sync')();

console.log(`Welcome to the convertor from °C to °F!`);
let temp = Number(prompt(`What is your local area temperature in °C: `));

// A) String
console.log(`Your local area temperature in °F is: ${9/5 * temp + 32}`);

console.log(`_________________________________`);
// B) Variables
let weirdTemp = 9/5 * temp + 32;
console.log(`Your local area temperature in °F is: ${weirdTemp}`);
