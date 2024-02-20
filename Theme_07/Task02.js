'use strict';

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (allСashbox) => {
    let sum = 0; // сумма всех чисел массива
    for (let i = 0; i < allСashbox.length; i += 1) { // цикл
        sum += allСashbox[i];
    }
    return sum / allСashbox.length; // возвращаем среднее арифметическое
}

console.log(getAverageValue(allСashbox)); 