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

// 5. Palindrome Checker
console.log(`\n5. Palindrome Checker`)
let text = prompt('Enter a word to check if its a Palindrome: ');

let textStriped = text.replace(/\s+/g, '');
textStriped = textStriped.replace(/[.,\/#!?$%&*;:{}=\-_`~()'"]/g, "");
textStriped = textStriped.toLowerCase();
isPal = textStriped.split("").reverse().join("");

if (isPal === textStriped) {
    console.log(`${text} is a Palindrome!`);
} else {
    console.log(`${text} is not a Palindrome!`);
}

// 6. Prime Number Checker
console.log(`\n6. Prime Number Checker`)
let primeNum = parseInt(prompt(`Enter a number to check if its prime number: `));

if (!isNaN(primeNum)) {
    if (!(primeNum <= 1)) {
        if (!(primeNum === 2)) {
            if (!(primeNum % 2 === 0)) {
                const sqRoot = Math.sqrt(primeNum);
                isPrime = true;
                for (let i = 3; i <= sqRoot; i += 2) {
                    if (primeNum % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    console.log(`${primeNum} is a Prime Number.`);
                } else {
                    console.log(`${primeNum} is not a Prime Number.`);
                }
            } else {
                console.log(`${primeNum} is not a Prime number.`);
            }
        } else {
            console.log(`${primeNum} is Prime number.`);
        }
    } else {
        console.log(`${primeNum} is not a Prime number.`);
    }
} else {
    console.log(`Value entered is not a number.`)
}

// 7. Anagram Checker
console.log(`\n7. Anagram Checker`)
let wordOne = prompt('Enter a word or a phrase number one: ');
let wordTwo = prompt('Enter a word or a phrase number two: ');

let wordOneStripped = wordOne.replace(/\s+/g, '');
wordOneStripped = wordOneStripped.replace(/[.,\/#!?$%&*;:{}=\-_`~()'"]/g, "");
wordOneStripped = wordOneStripped.toLowerCase();
wordOneStripped = wordOneStripped.split("").sort().join("");

let wordTwoStripped = wordTwo.replace(/\s+/g, '');
wordTwoStripped = wordTwoStripped.replace(/[.,\/#!?$%&*;:{}=\-_`~()'"]/g, "");
wordTwoStripped = wordTwoStripped.toLowerCase();
wordTwoStripped = wordTwoStripped.split("").sort().join("");

if (wordOneStripped === wordTwoStripped) {
    console.log(`${wordOne} and ${wordTwo} are Anagrams!`);
} else {
    console.log(`${wordOne} and ${wordTwo} are not Anagrams!`);
}

// 8. Password Strenght Checker
console.log(`\n8. Password Strenght Checker`)
let password = prompt('Enter your password: ');

if (password.length > 8) {
    if ((/[A-Z]/.test(password)) && (/[a-z]/.test(password))) {
        console.log(`Password Strenght: Strong`);
    } else {
        console.log(`Password Strenght: Medium`);
    }
} else {
    console.log(`Password Strenght: Weak`)
}