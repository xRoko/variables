/*
    Úloha: Napíš program, ktorý požaduje vek používateľa a vypočíta
    jeho rok narodenia na základe aktuálneho roka. Výsledok vypíš do konzoly.
    Rada: Ak aktuálny rok je 2024, rok narodenia vypočítaj ako (2024 - vek).
 */

const prompt = require('prompt-sync')();

let username = prompt("Hello, what's your name? ");
let userage = prompt(`How old are you ${username}? `);
console.log(`Nice to meet you ${username}, your age is ${userage} years.`);

