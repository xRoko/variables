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


let delka = prompt ("Zadej delku a:");
let sirka = prompt ("Zadej delku b:");


console.log(`Vypocet obvodu je: ${(2*(delka + sirka)) }`);
console.log(`Vypocet obsah je: ${(delka * sirka) }`);
console.log(`Vypocet obsah je: ${ delka+sirka }`);
console.log(`Vypocet obsah je: ${ 5+2 }`);

