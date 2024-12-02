/*
    Úloha: Napíš program, ktorý prepočíta teplotu z Celzia na Fahrenheita.
    Použi vzorec: C = 5/9 * (°F-32). Vypíš výsledok do konzoly.
    Rada: Nezabudni, že teplotu získaš od používateľa.
 */

const prompt = require('prompt-sync')();

let pokracovat = true;

while (pokracovat) {

    const volba = prompt('Chceš převést teplotu z (C)elsia na (F)ahrenheit, nebo z (F)ahrenheita na (C)elsia? (zadej C nebo F): ').toUpperCase();

    if (volba === 'C') {
        const celsius = parseFloat(prompt('Zadej teplotu v Celsiu: '));
        const fahrenheit = (celsius * 9 / 5) + 32;
        console.log(`Teplota ${celsius.toFixed(2)} °C je ${fahrenheit.toFixed(2)} °F.`);
    } else if (volba === 'F') {
        const fahrenheit = parseFloat(prompt('Zadej teplotu ve Fahrenheitovi: '));
        const celsius = (fahrenheit - 32) * 5 / 9;
        console.log(`Teplota ${fahrenheit.toFixed(2)} °F je ${celsius.toFixed(2)} °C.`);
    } else {
        console.log('Neplatná volba. Zadej C nebo F.');
    }


    const odpoved = prompt('Chceš pokračovat? (ano/ne): ').toLowerCase();
    if (odpoved !== 'ano') {
        pokracovat = false;
    }
}

console.log('Děkujeme za použití programu!');


/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */