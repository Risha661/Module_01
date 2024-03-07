'use strict';
(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const varNum = ['четное', 'нечетное'];
 
  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };
 
  const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
 
  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
      playerAmount: 5,
      computerAmount: 5,
      compHandsGuess: 0,
      playerHandGuess: 0,
      currentTry: 0,               
    };
 
    function wannaExit(){
      const userAnswer = confirm('Точно ли Вы хотите выйти?');
      if (userAnswer) {
        alert('Игра окончена!');
        return true;
      } else {
        return false;
      }
    }
 
    return function start() {
 
      function tryEndGame() {
        const userTryEnd = confirm('Хотите сыграть еще? :)');
        if (userTryEnd) {
          start();
        }  else {
          return true;
        }
      }

      function compGuess() {
        result.compHandsGuess = getRandomIntInclusive(1, result.computerAmount);
        console.log('На момент хода бота у игрока ' +
         result.playerAmount + ' шариков, у бота - ' + result.computerAmount);
        const playerTry = confirm('Число четное?');
        console.log('Бот загадал ' + result.compHandsGuess + ' шариков');
        if ((playerTry === true && (result.compHandsGuess % 2 === 0)) ||
          (playerTry === false && (result.compHandsGuess % 2 !== 0))) {
          alert('Вы выиграли! Бот проиграл этот раунд!');
          result.playerAmount += result.compHandsGuess;
          result.computerAmount -= result.compHandsGuess;
          result.compHandsGuess = 0;
        } else if ((playerTry === true && (result.compHandsGuess % 2 !== 0)) ||
          (playerTry === false && (result.compHandsGuess % 2 === 0))) {
          alert('Вы проиграли! Бот выиграл этот раунд!');
          result.computerAmount += result.compHandsGuess;
          result.playerAmount -= result.compHandsGuess;
          result.compHandsGuess = 0;
        }
        if (result.playerAmount > 0) {
          if (result.computerAmount > 0) {
            result.currentTry = 0;
            return false;
          } else {
            alert('Вы выиграли. Счет: ' +
            maxBallsValue + ' шариков. У бота 0 шариков.');
          }
        } else {
          alert('Бот выиграл. Счет: ' +
          maxBallsValue + ' шариков. У вас 0 шариков.');
        }
        return tryEndGame();

      }

      function userGuess() {
        console.log('На момент хода игрока у бота ' +
         result.computerAmount + ' шариков, у игрока - ' + result.playerAmount);
        result.playerHandGuess = prompt('Выберите количество' +
         ' шариков от 1 до ' + result.playerAmount);
  
      if (result.playerHandGuess == null){
        let a = wannaExit();
        if (a){
          return true;
        } else {
          return userGuess();
        }
      }
      if (!isNumber(result.playerHandGuess)) {
        alert('Введите корректное число!');
        return userGuess();
      } else if (result.playerHandGuess < 1 || result.playerHandGuess > result.playerAmount) {
        alert('Введите корректное в диапазоне: от 1 до ' + result.playerAmount);
        return userGuess();
      } else {
        result.playerHandGuess = Number(result.playerHandGuess);
      }
        console.log('Игрок загадал ' + result.playerHandGuess + ' шариков');
        const botTry = varNum[getRandomIntInclusive(0, 1)];
        console.log('Бот выбрал - ' + botTry);
        if ((botTry === 'четное' && (result.playerHandGuess % 2 === 0)) ||
          (botTry === 'нечетное' && (result.playerHandGuess % 2 !== 0))) {
          alert('Вы проиграли! Бот выиграл этот раунд!');
          result.computerAmount += result.playerHandGuess;
          result.playerAmount -= result.playerHandGuess;
          result.playerHandGuess = 0;
          console.log('Бот выиграл. у него шариков ' +
           result.computerAmount + ' у игрока - ' + result.playerAmount);
        } else if ((botTry === 'четное' &&
         (result.playerHandGuess % 2 !== 0)) ||
          (botTry === 'нечетное' && (result.playerHandGuess % 2 === 0))) {
          alert('Вы выиграли! Бот проиграл этот раунд!');
          result.computerAmount -= result.playerHandGuess;
          result.playerAmount += result.playerHandGuess;
          result.playerHandGuess = 0;
          console.log('Вы выиграли. у бота шариков ' +
           result.computerAmount + ' у игрока - ' + result.playerAmount);
        }
        if (result.computerAmount > 0) {
          if (result.playerAmount > 0) {
            result.currentTry = 1;
            return false;
          } else {
            alert('Бот выиграл. Счет: ' +
            maxBallsValue + ' шариков. У вас 0 шариков.');
          }
        } else {
          alert('Вы выиграли. Счет: ' +
          maxBallsValue + ' шариков. У бота 0 шариков.');
        }
        return tryEndGame();
      }

      result.playerAmount = 5;
      result.computerAmount = 5;
      result.compHandsGuess = 0;
      result.playerHandGuess = 0;
      const maxBallsValue = result.computerAmount + result.playerAmount;
      const botChange = FIGURES_RUS[getRandomIntInclusive(0, 2)];
      let userChange = prompt('Камень, ножницы, бумага?');
      if (userChange === null) {
        let a = wannaExit();
        if (a){
          return true;
        } else {
          start();
        }
      }
      userChange = userChange.toLowerCase();
      if (userChange[0] === 'к') {
        userChange = 'камень';
      } else if (userChange[0] === 'б') {
        userChange = 'бумага';
      } else if (userChange[0] === 'н') {
        userChange = 'ножницы';
      } else if (FIGURES_RUS.indexOf(userChange) === -1) {
        alert('Введите верное значение!!');
        start();
      }
      if (userChange === botChange) {
        confirm('У вас с ботом ничья! Давайте заново!');
        return start();
      }
      if ((userChange === 'камень' && botChange === 'ножницы') ||
        (userChange === 'ножницы' && botChange === 'бумага') ||
        (userChange === 'бумага' && botChange === 'камень')) {
        confirm('Вы выиграли! В игре "Марблы" первый ход ваш!');
        result.currentTry = 0;
      } else {
        confirm('Бот выиграл! В игре "Марблы" первый ход за ним!');
        result.currentTry = 1;
      }
 
      let a;
      let b;
      if (result.currentTry == 0) {
        a = userGuess();
      } else {
        b = compGuess(); 
      }

      while (!a || !b){   
        if(a || b){
          break;
        }
        if (result.currentTry == 1){
          b = compGuess();
        } else if (result.currentTry == 0){
          a = userGuess();
        }
      }
    };
  };
  window.RPS = game;
})();
 