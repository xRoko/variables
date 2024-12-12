const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isLeapYear(year) {
    // Kontrola, zda je číslo přestupné
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function validateYear(input) {
    // Validace vstupu
    if (!/^\d{4}$/.test(input)) {
        return { isValid: false, message: "Rok musí být čtyřciferné kladné číslo." };
    }
    const year = parseInt(input, 10);
    if (year < 0) {
        return { isValid: false, message: "Rok nemůže být záporné číslo." };
    }
    if (year < 0 || year > 5000) {
        return { isValid: false, message: "Rok musí být v rozmezí 0 - 5000." };
    }
    return { isValid: true, year };
}

rl.question('Zadejte čtyřciferný rok (0 - 5000): ', (input) => {
    const validation = validateYear(input);
    if (!validation.isValid) {
        console.log(validation.message);
    } else {
        const year = validation.year;
        if (isLeapYear(year)) {
            console.log(`Rok ${year} je přestupný.`);
        } else {
            console.log(`Rok ${year} není přestupný.`);
        }
    }
    rl.close();
});