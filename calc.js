/*
    Úloha: Vytvor program, ktorý požaduje od používateľa dve čísla a vykoná
    nasledujúce operácie: sčíta ich, odčíta, vynásobí a vydelí.
    Výsledky vypíš do konzoly.
    Rada: Použi premenné na uchovávanie čísel a výsledkov.
 */

const prompt = require('prompt-sync')();

/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */


let cislo1 = prompt ("Zadej cislo-1:");
let cislo2 = prompt ("Zadej cislo-2:");

console.log(`Vypocet krat je: ${cislo1*cislo2}`);
console.log(`Vypocet deleno je: ${cislo1/cislo2}`);
console.log(`Vypocet plus je: ${cislo1+cislo2}`);
console.log(`Vypocet minus je: ${cislo1-cislo2}`);
