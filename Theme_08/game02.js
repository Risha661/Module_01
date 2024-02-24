'use strict'
function inputNumber(str, str1) {
    let randNumber = prompt(str);
    while (isNaN(randNumber)) {
        alert(str1);
        randNumber = prompt(str);
    }
    return randNumber;
}

function gameBot() {
    let min = Number(inputNumber('Введите первую границу диапазона', 'Введите число, а не строку!'));
    let max = Number(inputNumber('Введите вторую границу диапазона', 'Введите число, а не строку!'));
    let resultNum = [];

    let isWinner = false;
    if (min === null || max === null) {
        alert('GAME OVER');
        return;
    }
    if (Number(min) > Number(max)) {
        let tmp = max;
        max = min;
        min = tmp;
    }
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    let trys = (max - min) * 0.3;
    console.log(min + ' ' + max + ' ' + trys + ' ' + number);
    while (resultNum.length < trys) {
        let tryNumber = Number(prompt('Введите число в границах диапазона'));
        if (isNaN(tryNumber)){
            resultNum.push(tryNumber);
            continue;
        }
        if (tryNumber === null) {
            alert('GAME OVER');
            return;
        }
        if (resultNum.includes(tryNumber)){
            alert('такое значение уже было!');
            resultNum.push(tryNumber);
            continue;
        }
        if (tryNumber < number) {
            alert('Больше!');
            resultNum.push(tryNumber);
            continue;
        }
        if (tryNumber > number) {
            alert('Меньше!');
            resultNum.push(tryNumber);
            continue;
        } 
        if (tryNumber === number){
            isWinner = true;
            resultNum.push(tryNumber);
            break;
        }
    }

    if (isWinner) {
        alert('Вы угадали правильно!');
    } else { alert('Вы проиграли! =('); }
    return resultNum;
}
console.log(gameBot());