'use strict'
function gameBot() {
    let min = 1;
    let max = 100;
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    let randNumber = prompt('Введите загаданное число!');
    if (randNumber === null){
        alert('GAME OVER');
        return;
    }
    while (isNaN(randNumber)) {
        alert('Введите число');
        randNumber = prompt('Введите загаданное число!');
    }
    while (Number(randNumber) !== number) {
        if (randNumber < number) {
            alert('Больше!');
            randNumber = prompt('Введите новый вариант');
        } else if (randNumber > number) {
            alert('Меньше!');
            randNumber = prompt('Введите новый вариант');
        }
    }
    alert('Вы угадали правильно!');

}
gameBot();