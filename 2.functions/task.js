// Задание 1
function getArrayParams(myarr) {
  let al = myarr.length;
  let minimum, maximum = myarr[al - 1],
    //let max = myarr[al - 1],
    let sum = 0,
    let avg = 0;
  while (al--) {
    if (myarr[al] < minimum) {
      minimum = myarr[al]
    }
    if (myarr[al] > maximum) {
      maximum = myarr[al]
    }
    avg = (sum += myarr[i]) / al;
  }



  return {minimum:  minimum, maximum: maximum, avg: avg };
}
let myarr = [1, 5, 6, 2, 3];
//let m = getArrayParams(myarr);
console.log(getArrayParams(myarr))



// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
