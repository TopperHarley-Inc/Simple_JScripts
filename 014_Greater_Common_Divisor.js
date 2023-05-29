// 014. A greater common divisor (GCD)
// Helps to find the greatest common divisor for two numbers

alert(`Please, enter 2 integers.`);
let n = +prompt(`Enter the first number.`);
let m = +prompt(`Enter the second number.`);

for (;n != m;) {
    if (n < m) {
        [n, m] = [m, n];
        console.log(n);
        console.log(m);
    }
    else {
        n = n - m;
        console.log(n);
        console.log(m);
    }
}

if (n == m) {
    alert(`The greatest common divisor is ${n}.`);
}