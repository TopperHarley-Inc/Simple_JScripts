// 006. Currency exchange
// A simple script, that can count the currency using the exchange rate

let dollars = prompt('Please, enter the ammount of money, you want to exchange.');
const exchangeRate = 0.8;
let euros = dollars * exchangeRate;
alert(`According the exchange rate ${exchangeRate}, you will receive ${euros}.`);