'use strict';

function checkNumber(number) {
  alert(number);
  let randNumber = prompt('Введите загаданное число!');
  if (randNumber === null) {    
    return false;                  
  }                             
  if (isNaN(randNumber)) {
    alert('Введите число');
    checkNumber(number);
  }
  if (randNumber < number) {
    alert('Больше!');
    checkNumber(number);
  }
  if (randNumber > number) {
    alert('Меньше!');
    checkNumber(number);
  }
  if (number != randNumber) {
    checkNumber(number);
  }
  return true;
}

function gameBot() {
  let min = 1;
  let max = 100;
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  let checkValue = checkNumber(number);
  if (!checkValue) {
    alert('GAME OVER');
  } else {
    alert('Вы угадали правильно!');
  }
}

gameBot();