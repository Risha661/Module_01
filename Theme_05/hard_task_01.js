'use strict';

function nodeTwoNumbers(x, y) {
    if (y === 0) {
        return x;
    } else {
        return nodeTwoNumbers(y, x % y);
    }
}
let num1 = 96;
let num2 = 16;
let result = nodeTwoNumbers(num1, num2);
console.log(result);