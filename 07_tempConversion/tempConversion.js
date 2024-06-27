const convertToCelsius = function(tempFah) {
  let tempCel = (tempFah - 32) * (5/9)
  return +tempCel.toFixed(1)
};

const convertToFahrenheit = function(tempCel) {
  let tempFah = (tempCel * (9/5))+32;
  return +tempFah.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
