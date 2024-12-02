


/*
    Úloha: Vytvor program, ktorý požaduje od používateľa dve čísla a vykoná
    nasledujúce operácie: sčíta ich, odčíta, vynásobí a vydelí.
    Výsledky vypíš do konzoly.
    Rada: Použi premenné na uchovávanie čísel a výsledkov.
 */

const prompt = require('prompt-sync')();
console.log("Ahoj matematik, poďme spoločne niečo vypočítať.");


let cislo1 = (prompt(`Zadaj prvé číslo:`));
let cislo2 = (prompt(`Zadaj druhé číslo:`));

    let nasobenie = cislo1 * cislo2;
    let delenie = cislo1 / cislo2;
    let scitanie = cislo1 + cislo2;
    let odcitanie = cislo1 - cislo2;
// Pri scitani mi to len spaja cisla
console.log(`Sčítanie: ${cislo1} + ${cislo2} = ${scitanie}`);
console.log(`Odčítanie: ${cislo1} - ${cislo2} = ${odcitanie}`);
console.log(`Násobenie: ${cislo1} * ${cislo2} = ${nasobenie}`);
console.log(`Delenie: ${cislo1} / ${cislo2} = ${delenie}`);


/*
    EXAMPLE USAGE
    const name = prompt('What is your name?');
    console.log(`Hey there ${name}`);
 */