/*
    Úloha: Vytvor program, ktorý požaduje od používateľa hodnoty dĺžky a šírky obdlžníka.
    Vypočítaj obvod a obsah, a zobraz výsledky v konzole.
    Rada: Obvod obdlžníka je (2 * (dĺžka + šírka)) a obsah je (dĺžka * šírka).
 */

const prompt = require('prompt-sync')();

let delka = Number(prompt('Zadejte délku obdélníku v cm:'));
let sirka = Number(prompt('Zadejte šířku obdélníku v cm:'));

console.log(`Zadali jste následující hodnoty: délka obdélníku ${delka}cm, šířka obdélníku ${sirka}cm. 
Obvod obdélníku o zadaných hodnotách je ${(2*(delka+sirka))} cm. 
Obsah obdélníku o zadaných hodnotách je ${delka*sirka} cm2.
`);

/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */