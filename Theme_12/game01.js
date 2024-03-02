'use strict';
function checkNumber(number) {
  alert(number);
  const randNumber = prompt('Введите загаданное число!');
  if (randNumber === null) {
    return false;
  }
  if (number === randNumber) {
    return true;
  }
  if (isNaN(randNumber)) {
    alert('Введите число');
  }
  if (randNumber < number) {
    alert('Больше!');
  }
  if (randNumber > number) {
    alert('Меньше!');
  }
  checkNumber(number);
  return true;
}

function gameBot() {
  const min = 1;
  const max = 100;
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  const checkValue = checkNumber(number);
  if (!checkValue) {
    alert('GAME OVER');
  } else {
    alert('Вы угадали правильно!');
  }
}

gameBot();
