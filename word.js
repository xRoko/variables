/*
    Úloha: Napíš program, ktorý zoberie slovo od používateľa
    a vytvorí nové slovo tak, že k nemu pridá „-ka“ na konci.
    Vypíš pôvodné a nové slovo do konzoly.
    Rada: Premenná na uchovávanie pôvodného slova a nového slova bude užitočná.
 */

const prompt = require('prompt-sync')();

let puvodnislovo = prompt('napis puvodni slovo ');
let noveslovo = puvodnislovo + "ka";

console.log(`puvodnislovo: ${puvodnislovo}`);
console.log(`noveslovo: ${noveslovo}`);

/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */