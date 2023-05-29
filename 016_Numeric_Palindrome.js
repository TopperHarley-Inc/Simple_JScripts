// 016. A numeric palindrome
// Helps to check an inputed integer as palindrome

let input = +prompt(`Please, enter an integer.`);

let palindromeNumber = function palindrome(x) {
    // check of the number
    if (x < 0) return false;
    if (x % 10 === 0) return false;
    if (x < 10) return true; 

    // a cycle block
    let rev = 0;

    while (x > rev) {
        console.log(x, rev);
        rev *= 10;
        rev += x % 10;
        x = Math.trunc(x / 10);
    }
    console.log(x, rev);
    return x === rev || x === Math.trunc(rev / 10);
}

console.log(palindromeNumber(input));
if (palindromeNumber(input) == true) {
    alert(`This number is a palindrome.`);
}
if (palindromeNumber(input) == false) {
    alert(`This number is not a palindrome.`);
}