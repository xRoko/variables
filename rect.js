/*
    Úloha: Vytvor program, ktorý požaduje od používateľa hodnoty dĺžky a šírky obdlžníka.
    Vypočítaj obvod a obsah, a zobraz výsledky v konzole.
    Rada: Obvod obdlžníka je (2 * (dĺžka + šírka)) a obsah je (dĺžka * šírka).
 */

const prompt = require('prompt-sync')();
console.log("Vypocitaj si obvod a obsah obdlžníka.")

let cislo1 = (prompt(`Zadaj dĺžku obdlžnika:`));
let cislo2 = (prompt(`Zadaj šírku obdlžnika:`));

    let obsah = cislo1 * cislo2;
    let obvod = 2 * (cislo1 + cislo2);

console.log(`Obsah tvojho obdlznika je: ${obsah}`);
console.log(`Obvod tvojho obdlznika je: ${obvod}`);

/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */