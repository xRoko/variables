// chceme vypsat čísla od 1 do 10
// ta promenna "i" existuje POUZE v rámci toho cyklu "for", ne mimo... kdybychom mimo napsali console.log(i); tak to nejde

// for (let i = 1; i<=10; i++) {
//     console.log(i);
// }

//WHILE cyklus a vypsat čísla od 10 do 1
// let i = 10;     //stanovena hodnota i je 10
//
// while (i > 0) {         //dokud je i vyssi nez 0
//     console.log(i);     //vypis i
//     i --;               //a sniz mu hodnotu o 1 a vrat se na while část
// }

// ÚKOL --- FOR cyklus na vypsání od 10 do 1
// for (let i = 10; i>=1; i--) {
//     console.log(i);
// }

// ÚKOL --- WHILE cyklus od 5 do 100
// let i = 5;     //stanovena hodnota i je 10
//
// while (i <= 100) {         //dokud je i vyssi nez 0
//     console.log(i);     //vypis i
//     i ++;               //a sniz mu hodnotu o 1 a vrat se na while část
// }

const prompt = require('prompt-sync')();

// //nacti uzivatelsky vstup dokud nezada konec
// let vstup = prompt("Ahoj jak se mas?"); //tak jsme to sem doplnili
// console.log(vstup);
// while (vstup !== "konec") { //tady je uz logicka chyba - mluvime o variable vstup, ale tady jeste neexistuje
//     vstup = prompt("Ahoj jak se mas?"); //existuje az tady, takze ten radek 33 proste nefunguje
//     console.log(vstup);
// }; //ale me to nejak nefunguje, ten konec nic neudelal :D

//ask user for a number and add it to the sum and print the sum, end the program when the keyword is written
// let vstup = prompt("Give me a number to add to the sum OR write the word end:"); //nezapomenout ze prompt vraci string
// let sum = 0;
//
// while (vstup !== "end") {
//     vstup = prompt("Give me a number to add to the sum OR write the word end:");
//     sum += parseFloat(vstup); //proc parse float? muzou to byt desetinna cisla
//     console.log(sum);
// };


//ÚKOL z prezentace repeats - 2
// Výpis párnych čísel od 1 do 20: Použite cyklus na výpis len párnych čísel od 1 do 20.

// let i = 1;
// while (i <= 20) {
//     if (i  % 2 ===0) {          //pokud bysme napsali if (i  % 2 ===1), bude nám to vracet lichá čísla
//         console.log(i)} else {
//     }
//     i ++;
// };

//reseni dle Romana
// for(let i = 1; i<=20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//ÚKOL z prezentace repeats - 4
//Súčet čísel od 1 do 100: Spočítajte súčet všetkých čísel od 1 do 100.

// let num = 0;
// let sum = 0;
//
// while (num <=100) {
//     sum += num;
//     console.log(sum);
//     num ++;              // i++ je zkratka pro i = i + 1
// };

//reseni dle Romana
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// };
// console.log(sum); //pokud to napiseme sem, vypise se to jen jednou. pokud to dame dovnitr toho let, tak se to vypise pokazde


// ÚKOL z prezentace repeats - 5
// Súčet len párnych čísel od 1 do 100: Spočítajte súčet iba párnych čísel od 1 do 100

// let num = 0;
// let sum = 0;
//
// while (num <=100) {
//     if (num % 2 == 0) {
//         sum += num;
//     } else {};
//     num ++;
// };
// console.log(sum);

// ÚKOL z prezentace repeats - 6
//Výpočet faktoriálu čísla: Napíšte funkciu, ktorá vypočíta faktoriál zadaného čísla

// let factorial = parseInt(prompt("Please enter a factorial:"));
// let result = 1; //faktoriál musí vždy začít od 1, ne od 0
//
// for (let i = 1; i <= factorial; i++) {
//     result = result*i;
// };
// console.log(result);

// ÚKOL z prezentace repeats - 10
// Výpočet mocniny čísla: Napíšte funkciu, ktorá vypočíta zadanú mocninu zadaného čísla
// let number = parseInt(prompt("Please enter a factorial:"));
// let mocnina = parseInt(prompt("Please enter the desired power:"));
// let sum = 1;
//
// if (isNaN(number) || isNaN(mocnina) || mocnina < 0) {
//     console.log('Please enter a factorial higher than zero in both fields');
// } else {
//     for (let i = 1; i <= mocnina; i++) {
//         sum = number * sum;
//     };
//     console.log(`Number ${number} to the power of ${mocnina} equals ${sum}.`);
// };