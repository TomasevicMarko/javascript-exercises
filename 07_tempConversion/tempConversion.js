const convertToCelsius = function (farenh) {
  return Math.round((5 / 9) * (farenh - 32) * 10) / 10;
};

const convertToFahrenheit = function (cels) {
  return Math.round(((9 / 5) * cels + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
