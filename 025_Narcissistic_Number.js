// 025. A narcissistic number
// Checks pisitive integer if is it a narcissistic number.
// Finally returns True or False

function narcissistic(value) {
    if (value < 10) return true; // check for small numbers
    
    let numberOfDigits = 0;
    // looking for number of digits
    for (let tempNumber = value, i = 1; tempNumber > 1; i++) {
      tempNumber = tempNumber / 10;
      numberOfDigits = i;
    }

    let tempNumArray = [];
    // creating an array from the input value
    for (let tempNumber = value, i = 1; tempNumber > 1; i++) {
      let x;
      x = tempNumber % 10;
      tempNumber = tempNumber / 10;
      tempNumArray.push(Math.trunc(x));
    }

    let NumArray = [];
    // multiplying an array on the number of digits
    for (i = 0; i < numberOfDigits; i++) {
      NumArray.push(Math.pow(tempNumArray[i], numberOfDigits));
    }
    
    let sum = 0;
    // calculating the sum of array
    for (i = 0; i < numberOfDigits; i++) {
        sum+= NumArray[i];
    }
    
    // checking 
    if (sum === value) return true;
    else return false;
}

console.log(narcissistic(390)); // 390 -- input value