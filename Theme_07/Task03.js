'use strict';

// const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
// const prefix = 'Mr';

// const addPrefix = (names, 'Mr') => {
//     const newPreArr = names.map(n => prefix + ' ' + n); // Возвращаем измененный массив с новыми переменными
//     return newPreArr;
// }
// console.log(addPrefix(names, prefix));

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const prefix = 'Mr';

function addPrefix(names, prefix) {
    const newPreArr = names.map(n => prefix + ' ' + n); // Возвращаем измененный массив с новыми переменными
    return newPreArr;
}
console.log(addPrefix(names, prefix));