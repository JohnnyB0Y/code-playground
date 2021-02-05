
const main = require('./main');

console.log(main);
console.log(main.verifyPositiveNumber(11));
console.log(main.verifyPositiveNumber(null));
console.log(main.verifyPositiveNumber("123"));
console.log(main.verifyPositiveNumber("abc"));
console.log(main.verifyPositiveNumber("123abc"));
console.log(main.verifyPositiveNumber(" "));
console.log(main.verifyPositiveNumber(""));
