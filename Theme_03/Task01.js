'use strict';
function convMoney (priceEuro) {
    let dollar = priceEuro * 1.2;
    return (dollar * 64);
}
const euro = prompt('Введите стоимость покупки в евро');
console.log(convMoney(euro));
