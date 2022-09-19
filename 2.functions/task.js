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
console.log(getArrayParams());



// Задание 2

'use strict';
let arr = [];
function worker(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
//let arrOfArr = [[1, 2, 3, 4], [10, 20, -10, -20]];
function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    func;
    if (max <= func) {
      max = func;
    }
  }
  return max;
}
console.log(makeWork([[1, 2, 3, 4], [10, 20, -10, -20]], worker(arr)));


// Задание 3

'use strict';
let arr1 = [];
function worker2(arr1) {
  let max = 0;
  let min = 0;
  let difference = 0;
  difference = Math.max(...arr1) - Math.min(...arr1);

  return Math.abs(difference);
}
console.log(worker2([-10, -20, -40])); // -40 - (-10) = -30 => 30
console.log(worker2([10, 20, 30])); // 30 - 10 = 20

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    if (max < func) {
      max = func;
    }
  }
  return max;
}

console.log(makeWork(arrOfArr = [[-10, -20, -40], [10, 20, 30]], worker2));
