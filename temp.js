
const prompt = require('prompt-sync')();

console.log(``);
const temperature_Celsius = parseFloat(prompt('Prosím, zadaj teplotu v stupňoch C°= '));


let temperatureinfahrenheit = (temperature_Celsius * 9/5) + 32;

console.log(``);
console.log(`Výsledná teplota vo Fahrenheit = ${temperatureinfahrenheit} °F`);
