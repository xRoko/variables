/*
    Úloha: Napíš program, ktorý požaduje vek používateľa a vypočíta
    jeho rok narodenia na základe aktuálneho roka. Výsledok vypíš do konzoly.
    Rada: Ak aktuálny rok je 2024, rok narodenia vypočítaj ako (2024 - vek).
 */




const prompt = require('prompt-sync')();

const aktualnyRok = 2024;
const vek = parseInt(prompt('Zadej svůj věk: '), 10);
const slavilNarozeniny = prompt('Už jsi letos slavil narozeniny? (ano/ne): ').toLowerCase();

let rokNarozeni;

if (slavilNarozeniny === 'ano') {
    rokNarozeni = aktualnyRok - vek;
} else {
    rokNarozeni = aktualnyRok - vek - 1;
}

console.log(`Tvůj rok narození je: ${rokNarozeni}`);


/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */