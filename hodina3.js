/*
1. Vyzadat od uzivatele kolik CZ chce rozmenit
Vypsat kolik za to dostane EUR, USD, FOR, NOR
 */

const prompt = require('prompt-sync')();

let kolikCZK = prompt("Kolik chcete rozměnit CZK?");
let USD = 23.95;
let EUR = 25.28;
let HUF = 0.061;
let NOK = 2.17;
//číselné hodnoty výše uvedených proměnných musíme vždy manuálně aktualizovat, aby byly data aktuální!

console.log(`${kolikCZK} CZK se rovná:`);
console.log(`${(kolikCZK/USD).toFixed(2)} USD`);
console.log(`${(kolikCZK/EUR).toFixed(2)} EUR`);
console.log(`${(kolikCZK/HUF).toFixed(2)} HUF`);
console.log(`${(kolikCZK/NOK).toFixed(2)} NOK`);