
'use strict';

function getArrayParams(myarr) {
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
    let sum = func(arrOfArr[i]);
    if (max <= sum) {
      max = sum;
    }
  }
  return max;
}

function worker2(arr) {
  return Math.abs(Math.max(...arr) - Math.min(...arr));
}
