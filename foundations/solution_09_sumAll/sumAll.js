const sumAll = function(value1, value2) {

  if (!Number.isInteger(value1) || !Number.isInteger(value2)) return "ERROR";
  if (value1 < 0 || value2 < 0) return "ERROR";
  
  const max = Math.max(value1, value2);
  const min = Math.min(value1, value2);
  
  let sum = 0;
  let counter = min;

  for (let i = min; i <= max; i++) {
    sum += counter;
    counter++;
  }

  return sum;

};

// Do not edit below this line
module.exports = sumAll;
