const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
  switch (true) {
    case str === undefined:
      return false;
    case typeof(str) != 'string':
      return false;
    case isNaN(+str):
      return false;
    case +str > 15 || +str <= 0:
      return false;
    default:
      return Math.ceil(Math.log(MODERN_ACTIVITY/+str) / (0.693 / HALF_LIFE_PERIOD));
  }
};
