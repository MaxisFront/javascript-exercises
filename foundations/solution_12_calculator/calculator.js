// @ts-check

/** @param {number} num1 
 * @param {number} num2 
*/
const add = function(num1, num2) {
  return num1 + num2;
};

/** @param {number} num1 
 * @param {number} num2 
*/
const subtract = function(num1, num2) {
	return num1 - num2;
};

/** @param {number[]} values */
const sum = function(values) {
	return values.reduce((accumulator, value) => accumulator + value, 0);
};

/** @param {number[]} values */
const multiply = function(values) {
  return values.reduce((accumulator, value) => accumulator * value);
}

/** @param {number} base 
 * @param {number} power
*/
const power = function(base, power) {
  return Math.pow(base, power);
};

/** @param {number} value */
const factorial = function(value) {

  let output = 1;
	for (let i = value; i > 0; i--) {
    output *= i;
  }
  return output;
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
