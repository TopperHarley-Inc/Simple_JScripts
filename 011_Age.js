// 011. Age
// Helps to divide users to various age groups

let age = +prompt(`Enter here your age, please.`);

if (age > 0 && Number.isInteger(age)) {
    switch (true) {
        case (age <= 11):
            alert(`You are a child. Your age is ${age}.`);
            break;
        case (age <= 17):
            alert(`You are a teenager. Your age is ${age}.`);
            break;
        case (age <= 59):
            alert(`You are an adult. Your age is ${age}.`);
            break;
        case (age <= 100):
            alert(`You are a pensioner. Your age is ${age}.`);
            break;
        case (age <= 1000):
            alert(`You are a liar. Reload the page and try again.`);
            break;
    }
}
else {
    alert(`A wrong age value. Reload the page and try again.`);
    break;
}