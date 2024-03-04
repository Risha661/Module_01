'use strict';
(() => {
  // const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  // const getFigure = lang => {

  // };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    // const lang = language === 'EN' || language ==='ENG' ?
    // FIGURES_ENG : FIGURES_RUS;

    return function start() {
      const botChange = FIGURES_RUS[getRandomIntInclusive(0, 2)];
      let userChange = prompt('Камень, ножницы, бумага?');
      if (userChange === null) {
        // alert('Вы точно хотите закончить игру?');
        const userAnswer = confirm('Точно ли Вы хотите выйти?');
        if (userAnswer !== null) {
          alert('Игра окончена! Игрок - ' + result.player +
          ' комп - ' + result.computer);
          return;
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

      if (userChange === 'камень' && botChange === 'камень') {
        alert('У вас с компьютером ничья!');
      }
      if (userChange === 'камень' && botChange === 'ножницы') {
        alert('Вы выиграли, компьютер проиграл');
        ++result.player;
      }
      if (userChange === 'камень' && botChange === 'бумага') {
        alert('Вы проиграли, компьютер выиграл');
        ++result.computer;
      }

      if (userChange === 'ножницы' && botChange === 'камень') {
        alert('Вы проиграли, компьютер выиграл');
        ++result.computer;
      }
      if (userChange === 'ножницы' && botChange === 'ножницы') {
        alert('У вас с компьютером ничья!');
      }
      if (userChange === 'ножницы' && botChange === 'бумага') {
        alert('Вы выиграли, компьютер проиграл');
        ++result.player;
      }

      if (userChange === 'бумага' && botChange === 'камень') {
        alert('Вы выиграли, компьютер проиграл');
        ++result.player;
      }
      if (userChange === 'бумага' && botChange === 'ножницы') {
        alert('Вы проиграли, компьютер выиграл');
        ++result.computer;
      }
      if (userChange === 'бумага' && botChange === 'бумага') {
        alert('У вас с компьютером ничья!');
      }
      console.log('игрок - ' + result.player + ' комп - ' + result.computer);
      start();
    };
  };

  window.RPS = game;
})();
