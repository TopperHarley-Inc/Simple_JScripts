// 013. The sum of a range
// The script helps to find the sum of all numbers between two inputs

alert(`To find the sum of range, please enter the numbers.`);
let num1 = +prompt(`Enter the first number`);
let num2 = +prompt(`Enter the second number`);
let range = 0;
let x;
let y;

if (num1 > 0 && num2 > 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
    if (num1 == num2) {
        range = num1 + num2;
        alert(`You have entered the same numbers. Their sum is ${range}.`);
    }
    else {
        if (num2 > num1) {
            x = num1;
            y = num2;
        }
        else {
            x = num2;
            y = num1;
        }
    } 
}
else {
    alert(`A wrong age value. Reload the page and try again.`);
}

while (x <= y) {
    range+= x;
    x++;
}
alert(`The sum of the range is ${range}.`);