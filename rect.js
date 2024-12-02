/*
    Úloha: Vytvor program, ktorý požaduje od používateľa hodnoty dĺžky a šírky obdlžníka.
    Vypočítaj obvod a obsah, a zobraz výsledky v konzole.
    Rada: Obvod obdlžníka je (2 * (dĺžka + šírka)) a obsah je (dĺžka * šírka).
*/

const prompt = require('prompt-sync')();

let pokracovat = true;

while (pokracovat) {

    const delka = parseFloat(prompt('Zadej délku obdélníka: '));
    const sirka = parseFloat(prompt('Zadej šířku obdélníka: '));


    const obvod = 2 * (delka + sirka);
    const obsah = delka * sirka;


    console.log(`Obvod obdélníka je: ${obvod.toFixed(2)}`);
    console.log(`Obsah obdélníka je: ${obsah.toFixed(2)}`);


    const odpoved = prompt('Chceš vypočítat další obdélník? (ano/ne): ').toLowerCase();
    if (odpoved !== 'ano') {
        pokracovat = false;
    }
}

console.log('Děkujeme za použití programu!');

/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
*/
