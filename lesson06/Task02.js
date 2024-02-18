'use strict';
const num = 11;

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log('Данное число делится нацело на ' + i);
            return false;
        }
    }
    return true;
}
console.log(isPrime(num));