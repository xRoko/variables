/*
    Úloha: Vytvor program, ktorý požaduje od používateľa hodnoty dĺžky a šírky obdlžníka.
    Vypočítaj obvod a obsah, a zobraz výsledky v konzole.
    Rada: Obvod obdlžníka je (2 * (dĺžka + šírka)) a obsah je (dĺžka * šírka).
 */

const prompt = require('prompt-sync')();

let delka = Number(prompt('delka obdelnika: '));
let sirka = Number(prompt('sirka obdelnika: '));

let obvod = (2 * (delka + sirka));
let obsah = (delka * sirka);


console.log(`Obvod: ${obvod}, Obsah: ${obsah}`);

/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */