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
const delka = parseFloat(prompt("Zadejte délku obdélníka:"));
const sirka = parseFloat(prompt("Zadejte šířku obdélníka:"));

const obvod = 2 * (delka + sirka);
const obsah = delka * sirka;

console.log("Délka obdélníka: " + delka + " cm");
console.log("Šířka obdélníka: " + sirka + " jednotek");
console.log("Obvod obdélníka: " + obvod + " jednotek");
console.log("Obsah obdélníka: " + obsah + " čtverečních jednotek");