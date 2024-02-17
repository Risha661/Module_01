'use strict';

const num1 = parseInt(prompt('Введите первое число'));
const num2 = parseInt(prompt('Введите второе число'));

function findMin(num1, num2) {
    return (num1 + num2 - Math.abs(num1 - num2)) / 2;
}

const minNumber = findMin(num1, num2);
console.log(minNumber);