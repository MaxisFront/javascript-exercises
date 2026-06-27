// @ts-check

/** @param {number} index */
const fibonacci = function(index) {

  const indexValue = Number(index);

  if (indexValue < 0) return "OOPS";
  if (indexValue === 0) return 0;
  if (indexValue === 1) return 1;

  let fiboActual = 1;
  let fiboPrevious = 1;

  for (let i = 2; i < indexValue; i++) {
    let sum = fiboActual + fiboPrevious;
    fiboPrevious = fiboActual;
    fiboActual = sum;

  }

  return fiboActual;
};

// Do not edit below this line
module.exports = fibonacci;
