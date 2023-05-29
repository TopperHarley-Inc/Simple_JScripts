// 002. Year of birth
// A simple script, that can find the year of birth

let birthYear = prompt('How old are you?');
let today = new Date();
const current_year = today.getFullYear();
let age = current_year - birthYear;

alert(`${first_name}, in your ${age}-s you should be retired!`);