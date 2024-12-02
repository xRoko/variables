/*
    Úloha: Napíš program, ktorý požaduje vek používateľa a vypočíta
    jeho rok narodenia na základe aktuálneho roka. Výsledok vypíš do konzoly.
    Rada: Ak aktuálny rok je 2024, rok narodenia vypočítaj ako (2024 - vek).
 */

const prompt = require('prompt-sync')();

console.log('Ahoj, zisti rok, kedy si sa narodil.');
let vek = (prompt("Zadaj svoj vek: "));

let aktualnyRok = 2024;
let rokNarodenia = aktualnyRok - vek;

console.log(`Tvoj rok narodenia je: ${rokNarodenia}`);

/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */