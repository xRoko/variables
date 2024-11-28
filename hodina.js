/*
 TODO:
 1. Variable types
 2. Data types
 3. User's input
 4. String interpolation
 */

let name = 'Roman';
let surname = 'Kovac';
const dateOfBirth = '17.11.1998';
let age = 26;
let iLiveInCzechia = true;
let iAmWomen = false;
let empty;
let nullPtr= null;

const prompt = require('prompt-sync')();

let username = prompt('What is your name? ');
let userSurname = prompt('What is your surname? ');

console.log('Tvoje meno je: ' + username);
console.log('Tvoje priezvisko je: ' + userSurname);

console.log(`Tvoje meno je: ${username}`);
console.log(`Tvoje priezvisko je: ${userSurname}`);

console.log(`Tvoje priezvisko je: ${10 * 2 / 5 + 98}`);

/*
    1. Vyziadat od uzivatela kolko CZK chce zamenit
    2. Vypiseme kolko za to dostane EUR, USD, FOR, NOR
 */

let userMoney = prompt('Kolko CZK chces zamenit? ');

let nok = 2.17;
let huf = 0.061;
let eur = 25.28;
let usd = 23.95;

console.log(`Za ${userMoney}CZK dostanes: ${Math.round(userMoney/eur)}EUR`);
console.log(`Za ${userMoney}CZK dostanes: ${userMoney / usd}$`);
console.log(`Za ${userMoney}CZK dostanes: ${userMoney / nok}NOK`);
console.log(`Za ${userMoney}CZK dostanes: ${userMoney / huf}HUF`);
console.log(`Za ${userMoney}CZK dostanes: ${(userMoney / huf).toFixed(2)}HUF`)




