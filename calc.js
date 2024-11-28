/*
    Úloha: Vytvor program, ktorý požaduje od používateľa dve čísla a vykoná
    nasledujúce operácie: sčíta ich, odčíta, vynásobí a vydelí.
    Výsledky vypíš do konzoly.
    Rada: Použi premenné na uchovávanie čísel a výsledkov.
 */

const prompt = require('prompt-sync')();

/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */

let firstNumber = Number(prompt('Type the first number: '));
let secondNumber = Number(prompt('Type the second number: '));

console.log(`Sum ${firstNumber+secondNumber}`);
console.log(`Subtraction ${firstNumber-secondNumber}`);
console.log(`Division ${firstNumber/secondNumber}`);
console.log(`Multiplication ${firstNumber*secondNumber}`);
