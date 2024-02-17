'use strict';

function modifyWord(str) {
    return ((str[0].toUpperCase() + str.slice(1, 4)) + (str[4].toLowerCase() + str.slice(5)));
}
const str = 'хэй Человечество';
console.log(modifyWord(str));

