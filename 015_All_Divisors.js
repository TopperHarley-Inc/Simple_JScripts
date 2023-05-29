// 015. All divisors
// Helps to find all divisors for inputed positive integer

let num5 = +prompt(`Please, enter an integer.`);

for (let i = 1; i <= num5; i++) {
    if (num5 % i == 0) {
        console.log(i);
    }
}