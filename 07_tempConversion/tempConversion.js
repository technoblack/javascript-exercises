const convertToCelsius = function(farenheit) {


let celcius = (farenheit - 32) / 1.8; 

return Math.round(celcius * 10)/10;

};

console.log(convertToCelsius(32))

const convertToFahrenheit = function(celcius) {

let farenheit = (celcius * 1.8) + 32;

return Math.round(farenheit * 10)/10;

};

console.log(convertToFahrenheit(0))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
