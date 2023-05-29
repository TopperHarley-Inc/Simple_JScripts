// 019. The next day of the week
// Just for fun. An infinite cycle, that shows the name of the next day of the week after pressing OK

let nowDate = new Date();
let nowDay = nowDate.getDay();

console.log(nowDay);

for (;nowDay >= 0;) {
    if (nowDay === 0) {
        alert('Today is Sunday. Press OK if you wanna know what day will be after it.');
        nowDay++;
    }
    if (nowDay === 1) {
        alert('Today is Monday. Press OK if you wanna know what day will be after it.');
        nowDay++;
    }
    if (nowDay === 2) {
        alert('Today is Tuesday. Press OK if you wanna know what day will be after it.');
        nowDay++;
    }
    if (nowDay === 3) {
        alert('Today is Wednesday. Press OK if you wanna know what day will be after it.');
        nowDay++;
    }
    if (nowDay === 4) {
        alert('Today is Thursday. Press OK if you wanna know what day will be after it.');
        nowDay++;
    }
    if (nowDay === 5) {
        alert('Today is Friday. Press OK if you wanna know what day will be after it.');
        nowDay++;
    }
    if (nowDay === 6) {
        alert('Today is Saturday. Press OK if you wanna know what day will be after it.');
        nowDay = 0;
    }
}