// 008. Money, price and change
// A simple code, that allows to find, how many items you can buy 

let currentMoney = prompt('Please, enter the ammount of money, you have now.');
let chPrice = prompt('Enter the price of one chocolate bar.');

console.log(currentMoney);
console.log(chPrice);

let chAmmount = Math.floor(currentMoney / chPrice);

console.log(chAmmount);

let change = currentMoney - (chAmmount * chPrice);

console.log(change);

alert(`You can buy ${chAmmount} chocolates. Your change is ${change} $.`);