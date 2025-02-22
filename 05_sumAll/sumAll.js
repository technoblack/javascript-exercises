/* const sumAll = function(val1, val2) {

let finalSum = 0  

if (val1 < 0 || val2 < 0) {
 return "ERROR"
// } else if 

for (let i = val1; i <= val2; i++) {
finalSum +=i
};


for (let j = val2; j <= val1; j++) {
finalSum +=j    
};

return finalSum;

 }; 


console.log(sumAll(-9,3))

Jabari until checking solution. Passed first 4 tests

*/

const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};


// Do not edit below this line
module.exports = sumAll;
