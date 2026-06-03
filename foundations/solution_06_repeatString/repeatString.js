const repeatString = function(string, times) {
  
  if (times < 0) {
    return "ERROR";
  }

  let message = [];
  while(times > 0) {
    message.push(string);
    times--;
  }

  return message.join("");
};

// Do not edit below this line
module.exports = repeatString;
