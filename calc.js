/*
    Úloha: Vytvor program, ktorý požaduje od používateľa dve čísla a vykoná
    nasledujúce operácie: sčíta ich, odčíta, vynásobí a vydelí.
    Výsledky vypíš do konzoly.
    Rada: Použi premenné na uchovávanie čísel a výsledkov.
 */

const prompt = require('prompt-sync')();

let cislo1 = Number (prompt('napis prvni cislo '));
let cislo2 = Number (prompt('napis druhe cislo '));

let summa = cislo1 + cislo2;
let vynasobeni = cislo1 * cislo2;
let deleni = cislo1 / cislo2;
let odecteni = cislo1 - cislo2;

console.log(`součet: ${cislo1 + cislo2}`);
console.log(`vynasobeni: ${vynasobeni}`);
console.log(`deleni: ${deleni}`);
console.log(`odecteni: ${odecteni}`);

/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */