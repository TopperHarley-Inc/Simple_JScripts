// 024. A rectangle area
// Counts an area of a rectangle using the length of its sides

function rectangleArea (x, y) {
    if (y === NaN || y === undefined || y === null) {
        y = x;    // if the second value wasn`t entered, the first woulfd be used twice
    }
    return x * y;
}

let rectangleAreaResult = rectangleArea(8, 6); // input values
alert(rectangleAreaResult);