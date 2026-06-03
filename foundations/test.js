const removeFromArray = function(numbers, ...removeNumbers) {
  return numbers.filter((value) => !removeNumbers.includes(value));
};

console.log(removeFromArray([1, 2, 3], 1));
