'use strict';
const profit = prompt ('Укажите свой доход');
if (profit < 15000) {
    console.log(profit / 100 * 13);
} else if (profit >= 15000 && profit < 50000) {
    console.log(profit / 100 * 20);
} else if (profit >= 50000) {
    console.log(profit / 100 * 30);
}
