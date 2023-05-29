// 021. A comparison of two numbers
// Returns '-1' if the second number is higher
// Returns '1' if the first number is higher
// Returns '0' if numbers are the same

function numberComparison(x, y) {
    if (x === y) {
        return 0;
    }
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
}

let result = numberComparison(10, 10); // input values
alert(result);