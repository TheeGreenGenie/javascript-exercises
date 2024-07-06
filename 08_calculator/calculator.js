const add = function(num1, num2) {
  return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
	return arr.reduce((current, value) => current+Number(value), 0)
};

const multiply = function(arr) {
  return arr.reduce((current, value) => current*Number(value), 1)
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let arr = []
	for (let i=num; i > 0; i--) {
    arr.push(i)
  }
  return arr.reduce((current, value) => current*value, 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
