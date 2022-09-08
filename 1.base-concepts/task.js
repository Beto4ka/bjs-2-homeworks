"use strict";
function solveEquation(a, b, c) {
  let arr;
  let firstRoot;
  let secondRoot;
 const d=b**2-4*a*c;
  if (d<0) {
    arr=[];
  } else if (d===0) {
    firstRoot=-b/(2*a);
    arr=[firstRoot];
    } else if (d>0) {
      firstRoot=(-b + Math.sqrt(d) )/(2*a);
      secondRoot=(-b - Math.sqrt(d) )/(2*a)
      arr=[firstRoot. secondRoot];
    } 
return arr; 
}


"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let betMonth;
  //let numberMonth;
  let paymentKredit;
  let bodyKredit;
  betMonth=percent/100/12;
  bodyKredit=amount-contribution;
  let numberMonth;
  function monthDiff() {
   /*let numberMonth;*/
    numberMonth=date.getMonth() - new Date.getMonth() + 
      (12 * (date.getFullYear() - new Date.getFullYear()));
    return numberMonth
   }
   paymentKredit=bodyKredit * (betMonth + (betMonth / (((1 + betMonth)**numberMonth) - 1)));

  totalAmount=(contribution+numberMonth*paymentKredit).toFixed(2);

  return totalAmount;

//console.log (totalAmount)