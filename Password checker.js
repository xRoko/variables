const prompt = require('prompt-sync')();

const str = (prompt('Please, enter password with Uppercase, Lowercase and numbers:  '));

console.log('');
const qty = str.length;
const hasLowercase = /[a-z]/.test(str);
const hasUppercase = /[A-Z]/.test(str);
const hasNumber = /[0-9]/.test(str);
const hasOnlyNumber = /^[0-9]+$/.test(str);

if (hasOnlyNumber) {
    console.log(`The password consist of numbers only !!!`);

} else if  (parseInt(qty) < 8) {
    console.log(`Password '${str}' is weak !!!`);

} else if (parseInt(qty) >= 8 && hasLowercase && hasUppercase && hasNumber) {
    console.log(`Password '${str}' is Strong !!!`);

} else if (parseInt(qty) >= 8 && (hasLowercase || hasUppercase ) && hasNumber) {
    console.log(`Password '${str}' is Medium !!!` );
} else {
    console.log(`Password '${str}' is Weak! It must include uppercase, lowercase, and numbers.`);
}