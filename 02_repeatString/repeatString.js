const repeatString = function(string, times) {

    if (times < 0) return "ERROR";
let repeatedString = "";

while (times > 0) {

repeatedString += string;
times --;
}

return repeatedString;

if (times < 0) {
 return "ERROR"
}


};

// Do not edit below this line
module.exports = repeatString;
