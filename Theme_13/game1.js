'use strict';
(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  function checkMass(index, str, mass) {
    if (index >= mass.length) {
      return -1;
    }

    if (str.length > 1) {
      if (mass[index].includes(str)) {
        return index;
      } else {
        return checkMass(index + 1, str, mass);
      }
    } else if (str.length === 1) {
      if (mass[index][0] === str) {
        return index;
      } else {
        return checkMass(index + 1, str, mass);
      }
    }
  }

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = language === 'EN' || language === 'ENG' ?
      FIGURES_ENG : FIGURES_RUS;

    return function start() {
      const botChange = lang[getRandomIntInclusive(0, 2)];
      let strInput = '';
      if (language === 'EN' || language === 'ENG') {
        strInput = 'input your value : rock, scissors, paper?';
      } else {
        strInput = 'Введите свой выбор : камень, ножницы, бумага?';
      }

      let userChange = prompt(strInput);
      if (userChange === null) {
        let strCheck = '';
        if (language === 'EN' || language === 'ENG') {
          strCheck = 'Are you sure you want to quit the game?';
        } else {
          strCheck = 'Точно ли Вы хотите выйти?';
        }
        const userAnswer = confirm(strCheck);
        if (userAnswer !== null) {
          if (language === 'EN' || language === 'ENG') {
            alert('You answered "Yes"' +
            ' Game over! Player - ' + result.player +
              ' computer - ' + result.computer);
          } else {
            alert('Вы ответили "Да"!' +
            ' Игра окончена! Игрок - ' + result.player +
              ' комп - ' + result.computer);
          }
          return;
        } else {
          start();
        }
      }
      userChange = userChange.toLowerCase();

      const temp = checkMass(0, userChange, lang);
      if (temp !== -1) {
        userChange = lang[temp];
      } else {
        let strValid = '';
        if (language === 'EN' || language === 'ENG') {
          strValid = 'Please enter a valid value!!';
        } else {
          strValid = 'Введите верное значение!!';
        }
        alert(strValid);
        start();
      }

      if (userChange === botChange) {
        if (language === 'RU' || language === 'RUS') {
          alert('У вас с компьютером ничья!');
        } else if (language === 'EN' || language === 'ENG') {
          alert('Nobody won!');
        }
      }

      if (userChange === lang[0] && botChange === lang[1]) {
        if (language === 'RU' || language === 'RUS') {
          alert('Вы выиграли, компьютер проиграл!');
        } else if (language === 'EN' || language === 'ENG') {
          alert('You win, the computer loses!');
        }
        ++result.player;
      }

      if (userChange === lang[0] && botChange === lang[2]) {
        if (language === 'RU' || language === 'RUS') {
          alert('Вы проиграли, компьютер выиграл');
        } else if (language === 'EN' || language === 'ENG') {
          alert('You lost, the computer won');
        }
        ++result.computer;
      }

      if (userChange === lang[1] && botChange === lang[0]) {
        if (language === 'RU' || language === 'RUS') {
          alert('Вы проиграли, компьютер выиграл');
        } else if (language === 'EN' || language === 'ENG') {
          alert('You lost, the computer won');
        }
        ++result.computer;
      }

      if (userChange === lang[1] && botChange === lang[2]) {
        if (language === 'RU' || language === 'RUS') {
          alert('Вы выиграли, компьютер проиграл!');
        } else if (language === 'EN' || language === 'ENG') {
          alert('You win, the computer loses!');
        }
        ++result.player;
      }

      if (userChange === lang[2] && botChange === lang[0]) {
        if (language === 'RU' || language === 'RUS') {
          alert('Вы выиграли, компьютер проиграл!');
        } else if (language === 'EN' || language === 'ENG') {
          alert('You win, the computer loses!');
        }
        ++result.player;
      }
      if (userChange === lang[2] && botChange === lang[1]) {
        if (language === 'RU' || language === 'RUS') {
          alert('Вы проиграли, компьютер выиграл');
        } else if (language === 'EN' || language === 'ENG') {
          alert('You lost, the computer won');
        }
        ++result.computer;
      }

      console.log('игрок - ' + result.player + ' комп - ' + result.computer);
      start();
    };
  };

  window.RPS = game;
})();
