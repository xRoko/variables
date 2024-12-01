/*
    Úloha: Vytvor program, ktorý požaduje od používateľa dve čísla a vykoná
    nasledujúce operácie: sčíta ich, odčíta, vynásobí a vydelí.
    Výsledky vypíš do konzoly.
    Rada: Použi premenné na uchovávanie čísel a výsledkov.
 */

const prompt = require('prompt-sync')();

let num1 = Number(prompt("Zvolte si prosím první číslo: "));
let num2 = Number(prompt("Zvolte si prosím druhé číslo: "));

console.log(`Vaše první zvolené číslo je ${num1}, a druhé zvolené číslo je ${num2}. 
Jejich součet je ${(num1 + num2)}. 
Jejich odečet je ${num1 - num2}. 
Jejich násobek je ${num1 * num2}. 
Jejich podíl je ${num1 / num2}.`);

/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */