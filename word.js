/*
    Úloha: Napíš program, ktorý zoberie slovo od používateľa
    a vytvorí nové slovo tak, že k nemu pridá „-ka“ na konci.
    Vypíš pôvodné a nové slovo do konzoly.
    Rada: Premenná na uchovávanie pôvodného slova a nového slova bude užitočná.
 */

const prompt = require('prompt-sync')();

console.log(`Welcome to the "Ka" world!`);
let kaLess = prompt(`Tell me your "Ka" less word: `);

// A) String
console.log(`Here is the better version of your word: ${kaLess + "-ka"}`);

console.log(`_______________________________`);
// B) Variables
let ka = kaLess + "-ka";
console.log(`Here is the better version of your word: ${ka}`);