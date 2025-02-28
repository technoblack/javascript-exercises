const leapYears = function(year) {

// let year = 0; 

/* for (i = 0; i < infiity; i+= 4) {
   year +=i;
}
*/
 if (year % 4 == 0 && year % 400 == 0)  {
    return true;
 }

 else {
    return false;
 }

};

console.log(leapYears(2004))

// Do not edit below this line
module.exports = leapYears;
