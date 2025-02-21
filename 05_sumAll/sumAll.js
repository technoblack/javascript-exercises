const sumAll = function(val1, val2) {

let finalSum = 0  

if (val1 < 0 || val2 < 0) {
 return "ERROR"
} else if 

for (let i = val1; i <= val2; i++) {
finalSum +=i
};


for (let j = val2; j <= val1; j++) {
finalSum +=j    
};

return finalSum;



};


console.log(sumAll(-9,3))



// Do not edit below this line
module.exports = sumAll;
