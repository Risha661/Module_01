'use strict'
function yearGenerate(n, m) {
    if (n < 0 || m < 0) {
        console.log('Год не может быть отрицательным');
        return;
    }
    let max = m;
    let min = n;
    let result = [];
    let newArr = [];
    if (n > m) {
        max = n;
        min = m;
    }

    for (let i = min; i <= max; i++) {
        if (i % 4 === 0) {
            if (i % 100 !== 0) {
                result.push(i);
            } else if (i % 100 === 0) {
                if (i % 400 === 0) {
                    result.push(i);
                }
            }
        }
    }
    return result;
}
console.log(yearGenerate(-1600, 2024));
console.log(yearGenerate(1900, 2000));
console.log(yearGenerate(1500, 1600));
console.log(yearGenerate(1650, 1700));
