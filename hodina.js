//let Jmeno = "Jan";
//let Prijmeni = "Vasatko";
//const DatumNarozeni = "16.08.1995";
//let age = 28;
//let BydlimVCesku = true;
//let JsemBudulinek = false;
//let empty;
//let nullPtr = null;

const prompt = require('prompt-sync')();
let username = prompt("What is your name?");
let usersurname = prompt("What is your surname?");
let DateOfBirth = prompt("What is your date of birth?");
let pet = prompt("If you have a pet, write what kind it is.");
let mood = prompt("How are you feeling right now?");

//console.log("Tvoje jmeno je: "+username+".");
console.log(`Tvoje jmeno je: ${username}.`);
console.log(`Tvoje prijmeni je: ${usersurname}.`);
console.log(`Tvoje datum narozeni je: ${DateOfBirth}.`);
console.log(`Mas tohoto domaciho mazlicka: ${pet}.`);
console.log(`Takto se ted citis: ${mood}.`);

//console.log(usersurname);
//console.log(DatumNarozeni);
//console.log(pet);
//console.log(mood);