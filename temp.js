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

let celsia = prompt('Napis kolik je stupni celsia?');


console.log (`Prepocet z celsia na Fahrenheita je: ${celsia *1.8+32}`);


