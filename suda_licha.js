// Program pro zjištění, zda je číslo sudé nebo liché
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Zadej číslo: ', (input) => {
    const number = parseInt(input);

    if (isNaN(number)) {
        console.log('To není platné číslo.');
    } else if (number % 2 === 0) {
        console.log(`${number} je sudé.`);
    } else {
        console.log(`${number} je liché.`);
    }

    rl.close();
});