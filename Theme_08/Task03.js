'use strict'
function arrGeneration(items, m, n, pars) {
    let max = m;
    let min = n;
    let result = [];
    let newArr = [];
    if (n > m) {
        max = n;
        min = m;
    }

    for (let i = 0; i < items; i++) {
        let number = Math.floor(Math.random() * (max - min + 1) + min);
        if (pars == 'even') {
            while (number % 2 !== 0) {
                number = Math.floor(Math.random() * (max - min + 1) + min);
            }
        } else if (pars == "odd") {
            while (number % 2 === 0) {
                number = Math.floor(Math.random() * (max - min + 1) + min);
            }
        }
        newArr.push(number);
    }
    return newArr;
}

    console.log(arrGeneration(100, -10, 10, 'odd'));
    console.log(arrGeneration(3, -3, 3, 'even'));
    console.log(arrGeneration(3, -3, 3, 'odd'));


//     for (let i = 0; i < items; i++) {
//         newArr[i] = Math.floor(Math.random() * (max - min + 1) + min);
//         if (pars === 'even' && x % 2 === 0) {
//             newArr[i] = Math.floor(Math.random() * (max - min + 1) + min);
//         } else if (pars === 'odd' && x % 2 !== 0) {
//             newArr[i] = Math.floor(Math.random() * (max - min + 1) + min);
//         }
//     }
//     return result;
// }
