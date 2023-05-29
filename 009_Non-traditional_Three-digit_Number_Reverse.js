// 009. Three-digit number reverse
// Using this code, you can reverse any 3-digit positive integer
// The main feature is non-using "%" function. Unjoy))

let number = prompt('Please, enter a three-digit number.');     // 255
console.log(number);

let num001 = number / 10;                                       // 25.5
let num002 = Math.floor(num001);                                // 25
let num003 = Math.round((num001 - num002) * 1000);              // 0.5 * 1000 = 500 --- the last digit becomes the first

let num01 = num001 / 10;                                        // 2.55
let num02 = Math.floor(num01);                                  // 2    --- the first digit becomes the last

let num03 = num01 - num02;                                      // 0.55
let num04 = Math.floor(num03 * 10) * 10;                        // 0.55 * 10 = 5.5 = 5 * 10 = 50 --- the second digit

let result = Math.floor(num003 + num02 + num04);                // the result
console.log(result);
alert(`Reverse number is ${result}.`);
