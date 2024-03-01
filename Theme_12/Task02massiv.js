'use strict'
function generateArray(arr) {
  let randomNumber = Math.floor(Math.random() * 11);
  arr.push(randomNumber);
  
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
  
  if (sum < 50) {
      return generateArray(arr);
  } else {
      return arr;
  }
}

console.log(generateArray([]));