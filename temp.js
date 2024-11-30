/*
    Úloha: Napíš program, ktorý prepočíta teplotu z Celzia na Fahrenheita.
    Použi vzorec: C = 5/9 * (°F-32). Vypíš výsledok do konzoly.
    Rada: Nezabudni, že teplotu získaš od používateľa.
 */

const prompt = require('prompt-sync')();

/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */

let fahrenheit = parseFloat(prompt("Zadejte teplotu ve stupních Fahrenheita:"));

let celsius = (5 / 9) * (fahrenheit - 32);

console.log(`Teplota ve stupních Celsia: ${celsius.toFixed(2)}`);