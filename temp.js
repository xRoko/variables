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
let teplotaFahrenheit = prompt("Zadejte teplotu ve Fahrenheit:");
let teplotaCelsius = (5 / 9) * (teplotaFahrenheit - 32);

console.log("Teplota ve Fahrenheit: " + teplotaFahrenheit + "°F");
console.log("Teplota v Celsius: " + teplotaCelsius.toFixed(2) + "°C");

