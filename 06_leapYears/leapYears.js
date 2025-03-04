/* const leapYears = function(year) {

// let year = 0; 


 if (year % 4 == 0 && year % 400 == 0)  {
    return true;
 }

 else {
    return false;
 }

};

console.log(leapYears(2004))

Jabari code Got 4 out of 6

*/

const leapYears = function (year) {
   const isYearDivisibleByFour = year % 4 === 0;
   const isCentury = year % 100 === 0;
   const isYearDivisibleByFourHundred = year % 400 === 0;
 
   if (
     isYearDivisibleByFour &&
     (!isCentury || isYearDivisibleByFourHundred)
   ) {
     return true;
   } else {
     return false;
   }
 }

console.log(leapYears(1996))
// Do not edit below this line
module.exports = leapYears;
