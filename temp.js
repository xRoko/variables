/*
    Úloha: Napíš program, ktorý prepočíta teplotu z Celzia na Fahrenheita.
    Použi vzorec: C = 5/9 * (°F-32). Vypíš výsledok do konzoly.
    Rada: Nezabudni, že teplotu získaš od používateľa.
 */

const prompt = require('prompt-sync')();
console.log('Ahoj prepocitaj svoju telpotu z Celzia na Fahreneita');

let celzia = (prompt(`Kolko Celzia by si chcel zmenit?:`));

    let fahrenheit = (celzia * 9/5) + 32;

console.log(`${celzia} Celzia je  ${fahrenheit.toFixed(2)} Fahrenheita`);
/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */