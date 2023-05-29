// 017. A shop discount
// Helps to calculate the total ammount to pay with some discount rates

let paySum = prompt(`Please, enter the payment ammount.`);

let discountRate = 0;
let discountSum = 0;
let finalSum = 0;

if (paySum <= 0) {
    alert(`Wrong number. Try again.`);
} 
if (paySum > 0 && paySum < 200) {
    alert(`The sum of your check is ${paySum} $. There is no any discount.`);
}
if (paySum >= 200 && paySum < 300) {
    discountRate = 0.03;        // 3% if the sum between 200 and 300 $
}
if (paySum >= 300 && paySum < 500) {
    discountRate = 0.05;        // 5% if the sum between 300 and 500 $
}
if (paySum >= 500) {
    discountRate = 0.07;        // 7% if the sum is higher 500 $
}

discountSum = Math.round(paySum * discountRate * 100) / 100;
finalSum = paySum - discountSum;
console.log(discountSum);
console.log(finalSum);
alert(`The total sum of your check is ${finalSum} $. Your discount is ${discountSum} $.`);