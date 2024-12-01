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

let cislo1 = parseFloat(prompt("Zadejte prvni cislo:"));
let cislo2 = parseFloat(prompt("Zadejte druhe cislo:"));

let scitani = cislo1 + cislo2;
let odcitani = cislo1 - cislo2
let deleni = cislo1 / cislo2
let nasobeni = cislo1 * cislo2

console.log("Scitani: " + scitani);
console.log("odcitani: " + odcitani);
console.log("deleni: " + deleni);
console.log("nasobeni: " + nasobeni);
