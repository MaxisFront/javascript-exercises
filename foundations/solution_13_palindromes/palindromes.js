// @ts-check

/** @param {string} text */
const palindromes = function (text) {
  
  const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanText === cleanText.split("").toReversed().join("");
};

// Do not edit below this line
module.exports = palindromes;
