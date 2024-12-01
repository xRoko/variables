/*
    Úloha: Napíš program, ktorý požaduje vek používateľa a vypočíta
    jeho rok narodenia na základe aktuálneho roka. Výsledok vypíš do konzoly.
    Rada: Ak aktuálny rok je 2024, rok narodenia vypočítaj ako (2024 - vek).
 */

const prompt = require('prompt-sync')();

let VEK = prompt("What is your age?");

//console.log('If your age is' ${VEK} ', that means that you were born in" ${2024-VEK}');
console.log(`If your age is ${VEK}, that means that you were born in ${2024-VEK}.`);

/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */