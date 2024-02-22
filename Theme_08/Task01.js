'use strict';
// function arrGeneration(items) {
//     let newArr = [];
//     for (let i = 0; i < items; i++) {
//         newArr[0] = Math.floor(Math.random() * 100);
//     }
//     return newArr;
// }
// console.log(arrGeneration(100));

// function arrGeneration(min, max) {
//     let newArr = [];
//     for (let i = min; i < max; i++) {
//         newArr[0] = Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     return newArr;
// }
// console.log(arrGeneration(1, 100));

function arrGeneration(items) {
    let newArr = [];
    for (let i = 0; i < items; i++) {
        newArr[i] = Math.floor(Math.random() * 100) + 1;
    }
    return newArr;
}
console.log(arrGeneration(100));

