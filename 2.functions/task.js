// Задание 1
'use strict';

function getArrayParams(myarr = [1, 5, 6, 2, 3]) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < myarr.length; i++) {
    if (min > myarr[i]) {
      min = myarr[i];

    }
    if (max < myarr[i]) {
      max = myarr[i];
    }
    sum = sum += myarr[i];
  }

  avg = + (sum / myarr.length).toFixed(2);
  return { min, max, avg };
}
getArrayParams();



// Задание 2

function worker(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    worker(arrOfArr[i]);
    let func = worker(arrOfArr[i]);
    if (max <= func) {
      max = func;
    }
  }
  return max;
}

/*console.log(worker([1, 2, 3])); // 6
console.log(worker([4, 5, 6])); // 15
let arrOfArr = [[1, 2, 3], [4, 5, 6]];
*/
makeWork(arrOfArr, worker);


// Задание 3

function worker2(arr) {
  let max = 0;
  let min = 0;
  let difference = 0;
  difference = Math.max(...arr) - Math.min(...arr);

  return Math.abs(difference);
}
function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    worker2(arrOfArr[i]);
    let func = worker2(arrOfArr[i]);
    if (max <= func) {
      max = func;
    }
  }
  return max;
}
/*
console.log(worker2([-10, -20, -40])); // -40 - (-10) = -30 => 30
console.log(worker2([10, 20, 30])); // 30 - 10 = 20
arrOfArr = [[-10, -20, -40], [10, 20, 30]];
*/
makeWork(arrOfArr, worker2); // 30