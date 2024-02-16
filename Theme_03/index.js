
'use strict';
/*
{
    console.log('Hello, teacher');
    const goods = 'box';
    const quantity = 325;
    const category = 'books';
    let price = 1111;
    console.log('box');
    console.log(quantity * price);
}

{
    const item = 'pencil';
    const count = 1000;
    const category = 'stationery';
    let secondPrice = 50;
    console.log(item);
    console.log(`Сумма канцелярских товаров:${count * secondPrice}`);
}
*/
/*
{
    const items = prompt('Введите наименование товара');
    const count = Number(prompt('Введите количество товара'));
    const category = prompt('Введите категорию товара');
    let secondPrice = prompt('Укажите цену на товар') / 1;
    console.log('тип переменной \"количество\"' + typeof (count));
    console.log('тип переменной \"цена\"' + typeof (secondPrice));
    console.log('На складе ' + count + ' единицы товара ' + items + ' на сумму ' + secondPrice + ' деревянных');
}
*/
{
    const items = prompt('Введите наименование товара');
    const count = Number(prompt('Введите количество товара'));
    const category = prompt('Введите категорию товара');
    let secondPrice = prompt('Укажите цену на товар') / 1;
    
if (secondPrice.length === 0 || !isNaN(secondPrice)) {
    console.log('тип переменной \"количество\"' + typeof (count));
    console.log('тип переменной \"цена\"' + typeof (secondPrice));
    console.log('На складе ' + count + ' единицы товара ' + items + ' на сумму ' + secondPrice + ' деревянных');
} else {
    alert('"Вы ввели некорректные данные"');
}
// Задача № 1 Модуль 1- Тема 4
}
