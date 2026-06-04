const convertToCelsius = farenhetis => Math.round(((farenhetis - 32) * (5/9)) * 10) / 10;
Math.round()
const convertToFahrenheit = celcius => Math.round(((celcius * 9/5) + (32)) * 10) / 10;

// °F = (°C * 9/5) + 32
// °C = (°F - 32) * 5/9
Math.round()

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
