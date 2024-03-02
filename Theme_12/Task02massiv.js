'use strict';
function generateArray(arr) {
  const randomNumber = Math.floor(Math.random() * 11);
  arr.push(randomNumber);
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
  if (sum < 50) {
    return generateArray(arr);
  } else {
    return arr;
  }
}

console.log(generateArray([]));
