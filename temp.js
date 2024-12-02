/*
    Úloha: Napíš program, ktorý prepočíta teplotu z Celzia na Fahrenheita.
    Použi vzorec: C = 5/9 * (°F-32). Vypíš výsledok do konzoly.
    Rada: Nezabudni, že teplotu získaš od používateľa.
 */

const prompt = require('prompt-sync')();

let teplotavCelsiu = prompt('Zadej teplotu v Celsiu: ');

let tepolataFahrenheita = (5 / 9) * (teplotavCelsiu - 32);

console.log(` ${tepolataFahrenheita.toFixed(2)}`);
/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */