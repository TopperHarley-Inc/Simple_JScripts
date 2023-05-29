// 018. A plus, minus and zero counter
// Helps to count how many positive, negative and zero numbers are in some array

let arrNumbers = [];
let arrayWindow = '';
for (let i = 0; i < 10; i++) {
    arrayWindow = prompt("Enter a number. Press cancel or leave empty to finish and press OK.");
    if (arrayWindow === null || arrayWindow === "") break;
    else {
        arrNumbers.push(arrayWindow);
    }
}

console.log(arrNumbers);
console.log(arrNumbers.length);

let countZero = 0;
let countPlus = 0;
let countMinus = 0;

for (i = 0; i < arrNumbers.length; i++ ) {
    if (arrNumbers[i] == 0)
    countZero++;
    if (arrNumbers[i] > 0)
    countPlus++;
    if (arrNumbers[i] < 0)
    countMinus++;
}

console.log(countZero, countPlus, countMinus);
alert(`Total sum of: zeros - ${countZero}, positive numbers - ${countPlus}, negative numbers - ${countMinus}.`);