'use strict';

const str = 'Хэй человечество';
function strReverse(str) {
    return (str.split('').reverse().join(''))
}
console.log(strReverse(str));