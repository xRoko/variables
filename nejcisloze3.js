const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Zadejte tři čísla oddělená čárkou (např. 5,10,8): ', (input) => {
    const numbers = input.split(',').map(Number);

    if (numbers.length !== 3 || numbers.some(isNaN)) {
        console.log('Prosím, zadejte přesně tři platná čísla.');
    } else {
        const greatest = findGreatestNumber(numbers[0], numbers[1], numbers[2]);
        console.log(`Největší číslo je: ${greatest}`);
    }

    rl.close();
});

function findGreatestNumber(a, b, c) {
    return Math.max(a, b, c);
}