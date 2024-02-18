'use strict';

function calculate(sum, totalItems, promoCode) {
    let discount = 0; // Изначально скидка равна 0
    let finalSum = sum; // finalSum - конечная сумма покупки
    if (totalItems > 10) {
        discount += sum * 0.03; // Выражение равно discount = discount + (sum * 0.03)
        finalSum -= discount;
        // discount = 0;
    }
    if (sum > 30000) {
        discount += (finalSum - 30000) * 0.15;
        finalSum -= discount;
        // discount = 0;
    }
    if (promoCode === "METHED") {
        discount += finalSum * 0.1;
    }
    if (promoCode === "G3H2Z1" && finalSum > 2000) {
        discount += 500;
    }
    finalSum -= discount;
    return finalSum;
}

const sum = prompt('Введите общую сумму покупки');
const totalItems = prompt('Введите количество товаров в корзине');
const promoCode = prompt('Введите промокод для покупок');
console.log(calculate(sum, totalItems, promoCode));

