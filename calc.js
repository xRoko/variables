/*
    Úloha: Vytvor program, ktorý požaduje od používateľa dve čísla a vykoná
    nasledujúce operácie: sčíta ich, odčíta, vynásobí a vydelí.
    Výsledky vypíš do konzoly.
    Rada: Použi premenné na uchovávanie čísel a výsledkov.
 */

const prompt = require('prompt-sync')();

let cislo1, cislo2;


do {
    cislo1 = parseFloat(prompt('Zadej první číslo: '));
    if (isNaN(cislo1)) {
        console.log("Neplatný vstup! Zadej prosím číslo.");
    }
} while (isNaN(cislo1));


do {
    cislo2 = parseFloat(prompt('Zadej druhé číslo: '));
    if (isNaN(cislo2)) {
        console.log("Neplatný vstup! Zadej prosím číslo.");
    }
} while (isNaN(cislo2));


const soucet = (cislo1 + cislo2).toFixed(5);
const rozdil = (cislo1 - cislo2).toFixed(5);
const nasobek = (cislo1 * cislo2).toFixed(5);
const podil = (cislo2 !== 0) ? (cislo1 / cislo2).toFixed(5) : "Nedefinovaný (dělení nulou)";


console.log(`Součet: ${soucet}`);
console.log(`Rozdíl: ${rozdil}`);
console.log(`Násobek: ${nasobek}`);
console.log(`Podíl: ${podil}`);

/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */