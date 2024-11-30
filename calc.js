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

let cislo1 = parseFloat(prompt("Zadejte první číslo:"));
let cislo2 = parseFloat(prompt("Zadejte druhé číslo:"));

let soucet = cislo1 + cislo2;
let rozdil = cislo1 - cislo2;
let nasobeni = cislo1 * cislo2;
let deleni = cislo2 !== 0 ? cislo1 / cislo2 : "Nelze dělit nulou";

console.log(`Součet: ${soucet}`);
console.log(`Rozdíl: ${rozdil}`);
console.log(`Násobení: ${nasobeni}`);
console.log(`Dělení: ${deleni}`);