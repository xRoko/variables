/*
    Úloha: Napíš program, ktorý požaduje vek používateľa a vypočíta
    jeho rok narodenia na základe aktuálneho roka. Výsledok vypíš do konzoly.
    Rada: Ak aktuálny rok je 2024, rok narodenia vypočítaj ako (2024 - vek).
 */

const prompt = require('prompt-sync')();

let username = prompt("Hello, what's your name? ");
let age = prompt(`How old are you ${username}? `);
let currYear = 2024

// A) String
console.log(`Nice to meet you ${username}, your age is ${age} years and you were born in ${currYear - age}`);

console.log(`_________________________________________`);
// B) Variables
let birthYear = currYear - age;
console.log(`Nice to meet you ${username}, your age is ${age} years and you were born in ${birthYear}`);

