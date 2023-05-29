// 020. Arguments` counter
// Counts a number of arguments pushed to the function

function argumentCounter() {
    console.log(Array.isArray(arguments));
    console.log(arguments.length);
}

argumentCounter(1, 2, 3); // the answer is '3'