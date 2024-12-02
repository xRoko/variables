/*
    Úloha: Napíš program, ktorý zoberie slovo od používateľa
    a vytvorí nové slovo tak, že k nemu pridá „-ka“ na konci.
    Vypíš pôvodné a nové slovo do konzoly.
    Rada: Premenná na uchovávanie pôvodného slova a nového slova bude užitočná.
 */

const prompt = require('prompt-sync')();

console.log('Ahoj, chceš si pridať za meno "-ka"? Nech sa páči.');

let name = (prompt(`Zadaj svoje meno:`));

    let pridanieKa = name + 'ka'

console.log(`Tvoje pôvodné meno: ${name}`);
console.log(`Tvoje nové meno: ${pridanieKa}`);
/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */