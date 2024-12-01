/*
    Úloha: Napíš program, ktorý zoberie slovo od používateľa
    a vytvorí nové slovo tak, že k nemu pridá „-ka“ na konci.
    Vypíš pôvodné a nové slovo do konzoly.
    Rada: Premenná na uchovávanie pôvodného slova a nového slova bude užitočná.
 */

const prompt = require('prompt-sync')();

/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */

let slovo = prompt('Napis slovo: ');
const pridat = "ka";

console.log(` ${slovo + pridat}`);

