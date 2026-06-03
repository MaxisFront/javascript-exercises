const removeFromArray = function(numbers, ...removeNumbers) {
  return numbers.filter((value) => !removeNumbers.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
