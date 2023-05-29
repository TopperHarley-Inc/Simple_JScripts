// 012. Keyboard Symbols
// The script shows a symbol, according to the number on your Keyboard

let num = +prompt(`Enter an integer between 0 and 9.`);

if (num > 0 && num < 10 && Number.isInteger(num)) {
    switch (true) {
        case (num == 1):
            alert(`The symbol for ${num} is !.`);
            break;
        case (num == 2):
            alert(`The symbol for ${num} is @.`);
            break;
        case (num == 3):
            alert(`The symbol for ${num} is #.`);
            break;
        case (num == 4):
            alert(`The symbol for ${num} is $.`);
            break;
        case (num == 5):
            alert(`The symbol for ${num} is %.`);
            break;
        case (num == 6):
            alert(`The symbol for ${num} is ^.`);
            break;
        case (num == 7):
            alert(`The symbol for ${num} is &.`);
            break;
        case (num == 8):
            alert(`The symbol for ${num} is *.`);
            break;
        case (num == 9):
            alert(`The symbol for ${num} is (.`);
            break;
    }
}
else {
    alert(`A wrong age value. Reload the page and try again.`);
}