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

    function userGuess() {
      result.playerHandGuess = prompt('Выберите количество' +
       ' шариков от 1 до ' + result.playerAmount);

    if (result.playerHandGuess == null){
      if (wannaExit()){
        return true;
      } else {
        userGuess();
      }
    }
    if (!isNumber(result.playerHandGuess)) {
      alert('Введите корректное число!');
      userGuess();
    } else if (result.playerHandGuess < 1 || result.playerHandGuess > result.playerAmount) {
      alert('Введите корректное в диапазоне: от 1 до ' + result.playerAmount);
      userGuess();
    } else {
      result.playerHandGuess = Number(result.playerHandGuess);
    }
      const botTry = varNum[getRandomIntInclusive(0, 1)];
      if ((botTry === 'четное' && (result.playerHandGuess % 2 === 0)) ||
        (botTry === 'нечетное' && (result.playerHandGuess % 2 !== 0))) {
        alert('Вы проиграли! Бот выиграл этот раунд!');
        result.computerAmount += result.playerHandGuess;
        result.playerAmount -= result.playerHandGuess;
        result.playerHandGuess = 0;
      } else if ((botTry === 'четное' &&
       (result.playerHandGuess % 2 !== 0)) ||
        (botTry === 'нечетное' && (result.playerHandGuess % 2 === 0))) {
        alert('Вы выиграли! Бот проиграл этот раунд!');
        result.computerAmount -= result.playerHandGuess;
        result.playerAmount += result.playerHandGuess;
        result.playerHandGuess = 0;
      }
      if (result.computerAmount > 0) {
        if (result.playerAmount > 0) {
          compGuess();
        } else {
          alert('Бот выиграл. Счет: ' +
           result.computerAmount + ' шариков. У вас 0 шариков.');
          tryEndGame();
        }
      } else {
        alert('Вы выиграли. Счет: ' +
         result.playerAmount + ' шариков. У бота 0 шариков.');
        tryEndGame();
      }
    }

    return function start() {

      function tryEndGame() {
        const userTryEnd = confirm('Хотите сыграть еще? :)');
        if (userTryEnd === true) {
          start();
        } else if (userTryEnd === null) {
          alert('GAME OVER');
          return;
        }
        return;
      }

      result.playerAmount = 5;
      result.computerAmount = 5;
      result.compHandsGuess = 0;
      result.playerHandGuess = 0;
      const botChange = FIGURES_RUS[getRandomIntInclusive(0, 2)];
      let userChange = prompt('Камень, ножницы, бумага?');
      if (userChange === null) {
        if (wannaExit()){
          return true();
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
        start();
      }
      if ((userChange === 'камень' && botChange === 'ножницы') ||
        (userChange === 'ножницы' && botChange === 'бумага') ||
        (userChange === 'бумага' && botChange === 'камень')) {
        confirm('Вы выиграли! В игре "Марблы" первый ход ваш!');
        ++result.player;
      } else {
        confirm('Бот выиграл! В игре "Марблы" первый ход за ним!');
        ++result.computer;
      }
      if (result.player === 1) {
        let isExit = userGuess();
        if (isExit) {return;}
      } else {
        compGuess();
      }

      function compGuess() {
        result.compHandsGuess = getRandomIntInclusive(1, result.computerAmount);
        const playerTry = confirm('Число четное?');
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
            userGuess();
          } else {
            alert('Вы выиграли. Счет: ' +
             result.playerAmount + ' шариков. У бота 0 шариков.');
            tryEndGame();
          }
        } else {
          alert('Бот выиграл. Счет: ' +
           result.computerAmount + ' шариков. У вас 0 шариков.');
          tryEndGame();
        }
      }
    };
  };
  window.RPS = game;
})();
