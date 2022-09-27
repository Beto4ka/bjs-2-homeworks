
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


function worker2(arr) {

  return Math.abs(Math.max(...arr) - Math.min(...arr));
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

