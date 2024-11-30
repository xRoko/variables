/*
    Úloha: Vytvor program, ktorý požaduje od používateľa hodnoty dĺžky a šírky obdlžníka.
    Vypočítaj obvod a obsah, a zobraz výsledky v konzole.
    Rada: Obvod obdlžníka je (2 * (dĺžka + šírka)) a obsah je (dĺžka * šírka).
 */

const prompt = require('prompt-sync')();

/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */

let delka = parseFloat(prompt("Zadejte delku obdelniku:"));
let sirka = parseFloat(prompt("Zadejte sirku obdelniku:"));

let obvod = 2 * (delka + sirka);
let obsah = delka * sirka;

console.log(`Obvod obdelniku: ${obvod}`);
console.log(`Obsah obdelniku: ${obsah}`);