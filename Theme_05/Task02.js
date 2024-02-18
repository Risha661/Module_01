'use strict';

function modifyWord(str) {
    return (str[0].toUpperCase() + str.slice(1).toLowerCase());
}
const str = 'хэй Человечество';
console.log(modifyWord(str));

