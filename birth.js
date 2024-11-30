/*
    Úloha: Napíš program, ktorý požaduje vek používateľa a vypočíta
    jeho rok narodenia na základe aktuálneho roka. Výsledok vypíš do konzoly.
    Rada: Ak aktuálny rok je 2024, rok narodenia vypočítaj ako (2024 - vek).
 */

const prompt = require('prompt-sync')();

/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */

let vek = parseInt(prompt("Zadejte svůj věk:"));
let aktualniRok = 2024;

let rokNarozeni = aktualniRok - vek;

console.log(`Váš rok narození je: ${rokNarozeni}`);
