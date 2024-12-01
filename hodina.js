let name= "Marek";
let surname = "Dadak";
const date ="5.9.1973";
let age =51;
let iliveInCzechia= true;
let iamWomen = false;
let empty;
let nullPrt = null;

const prompt = require('prompt-sync')();


let username = prompt("What is your name?");
let userSurname = prompt("What is your surname?");

let userdate = prompt ("Kolik ti je roku?");
const roky = 1973;


console.log(`Tvoje jmeno je: ${username}`);
console.log(`Tvoje prijmeni je: ${userSurname}`);

console.log(`Tvoje hodnota je: ${10*2/5+98}`);

console.log(`Tvuj vjek je: ${age}`);

console.log(`Tvuj rok 1973 mas: ${age}`);

/*
    Vyzadat od uzivatele kolik CZK chce zamenit
    Vypišeme kolik zato dostanete EUR, USD, FOR, NOT

 */

let  userMoney = prompt ("Kolik chces zamenit CZK?");

let eur = 25.28;
let usd = 23.95;
let huf = 0.061;
let nor = 2.17;

console.log(`Za ${userMoney}CZK dostanes: ${Math.round(userMoney/eur)}EUR`);
console.log(`Za ${userMoney}CZK dostanes: ${(userMoney / eur).toFixed(0)}EUR`);
console.log(`Za ${userMoney}CZK dostanes: ${userMoney / usd}$`);
console.log(`Za ${userMoney}CZK dostanes: ${(userMoney / huf).toFixed(3)}HUF`);
console.log(`Za ${userMoney}CZK dostanes: ${(userMoney / nor).toFixed(1)}NOR`);
console.log(`Za ${userMoney}CZK dostanes: ${(userMoney / huf).toFixed(0)}HUF`);



