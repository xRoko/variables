/*
    Úloha: Vytvor program, ktorý požaduje od používateľa hodnoty dĺžky a šírky obdlžníka.
    Vypočítaj obvod a obsah, a zobraz výsledky v konzole.
    Rada: Obvod obdlžníka je (2 * (dĺžka + šírka)) a obsah je (dĺžka * šírka).
 */

const prompt = require('prompt-sync')();

/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */


let length = Number(prompt('Set length: '));
let width = Number(prompt('Set width: '));

let perimeter = 2 * (length + width);
let area = length * width;


console.log(`Rectangle perimeter: ${perimeter}`);
console.log(`Area of rectangle: ${area}`);
