





const prompt=require('prompt-sync')();
let Exchange  =prompt ('Kolko CZK chcete zamenit ? ');

let CZK_EUR= 25.2;
let CZK_USD= 23.95;
let CZK_HUF= 2.17;
let CZK_NOR= 0.06;

console.log(`EUR:  ${Math.round (Exchange/CZK_EUR)}`);
console.log(`USD:  ${Math.round (Exchange/CZK_USD)}`);
console.log(`HUF:  ${Math.round (Exchange/CZK_HUF)}`);
console.log(`NOR:  ${Math.round (Exchange/CZK_NOR)}`);
