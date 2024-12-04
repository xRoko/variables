const prompt = require('prompt-sync')();

// 1. Check Even or Odd
console.log(`1. Check Even or Odd`)
let number = parseInt(prompt(`Your number: `));

if (!isNaN(number)) {
    if (number !== 0) {
        if (number % 2 === 0) {
            console.log(`${number} is an even number.`);
        } else { console.log(`${number} is an odd number.`);}
    } else { console.log(`Your input is number 0.`); }
} else { console.log(`Your input is not a number`); }

// 2. Temperature Classifier
console.log(`\n2. Temperature Classifier`)
let temp = parseInt(prompt(`Your temperature in °C: `));

if (!isNaN(temp)) {
    switch (true) {
        case temp < 0:
            console.log(`Freezing`);
            break;
        case temp >= 0 && temp <= 15:
            console.log(`Cold`);
            break;
        case temp >= 16 && temp <= 25:
            console.log(`Moderate`);
            break;
        case temp > 25:
            console.log(`Hot`);
            break;
    }
} else { console.log(`Your input is not temperature in °C.`); }

// 3. Leap Year Checker
console.log(`\n3. Leap Year Checker`)
let year = parseInt(prompt(`Your year: `));

if (!isNaN(year)) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a Leap Year.`)
    } else console.log(`${year} is not a Leap year.`);
} else console.log(`Your input was not a year number.`);

// 4. Find the Greatest Number
console.log(`\n4. Find the Greatest Number`)
let numberOne = parseInt(prompt('Enter a number one: '));
let numberTwo = parseInt(prompt('Enter a number two: '));
let numberThree = parseInt(prompt('Enter a number three: '));

if (!isNaN(numberOne) && !isNaN(numberTwo) && !isNaN(numberThree)) {
    let greatest = numberOne;
    if (greatest < numberTwo) {
        greatest = numberTwo;
    }
    if (greatest < numberThree) {
        greatest = numberThree;
    }
    console.log(`${greatest} is the greatest number.`);
} else console.log(`One of your numbers is not a number.`)
