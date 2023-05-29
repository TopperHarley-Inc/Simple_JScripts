// 010. A bank deposit
// Counting a bank interest with simple and complicated (combined) bank rate

const BANK_RATE = 0.05;  // input a bank rate --- 5%
const NUMBER_OF_MOUNTHS = 2;  // input a number of mounths, you wanna put your money in the bank account
let mounthlyRate = Math.round(BANK_RATE * 1000000 / 12) / 1000000;

console.log(BANK_RATE);
console.log(NUMBER_OF_MOUNTHS);
console.log(mounthlyRate);

let deposit = prompt('Please, enter the ammount of money, you wanna to put in.');

console.log(deposit);

let simpleInterest = Math.round(Number(deposit) * mounthlyRate * NUMBER_OF_MOUNTHS * 100) / 100;

console.log(simpleInterest);

let combinedInterest = Math.round((Number(deposit) * ((mounthlyRate + 1) ** NUMBER_OF_MOUNTHS) - Number(deposit)) * 100) / 100;

console.log(combinedInterest);

let depositSimpleInterest = Number(deposit) + simpleInterest;
let depositCombinedInterest = Number(deposit) + combinedInterest;

console.log(depositSimpleInterest);
console.log(depositCombinedInterest);

alert(`Using a simple rate during ${NUMBER_OF_MOUNTHS} mounths, the interest will be ${simpleInterest} $. 
(Total deposit ammount - ${depositSimpleInterest} $).
Using a combined rate, the interest will be ${combinedInterest} $. 
(Total deposit ammount - ${depositCombinedInterest} $).`);
