'use strict';
// function arrGeneration(items, m, n) {
//     let newArr = [];
//     for (let i = 0; i < items; i++) {
//         newArr[i] = Math.floor(Math.random() * 100) + 1;
//     }
//     return newArr;
// }
// console.log(arrGeneration(100));

function arrGeneration(items, m, n) {
    const newArr = [];
    let max = m;
    let min = n;
    if(n > m) {
        max = n;
        min = m;
    }
    
    for (let i = 0; i < items; i++) {
        newArr[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return newArr;
}
console.log(arrGeneration(10, -5, 5));
console.log(arrGeneration(2, -2, 22));
console.log(arrGeneration(10, 0, 51));
console.log(arrGeneration(10, -1, 1));
