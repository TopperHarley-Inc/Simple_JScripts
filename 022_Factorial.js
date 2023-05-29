// 022. Factorial
// Helps to find the factorial of the number

function factorialNumber(x) {
    let y = 1;
    for (i = 0; i < x; i++) {
        y = y * (x - i);
    }
    return y;
}

let factorialResult = factorialNumber(7);
alert(factorialResult);