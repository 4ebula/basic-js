const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  function numberOfTurnsCalc (num){
    if(num == 1) return 1;
    else return 1 + 2 * numberOfTurnsCalc(num - 1);
  }
  let numberOfTurns = numberOfTurnsCalc(disksNumber);
  return {turns : numberOfTurns, seconds : Math.floor(numberOfTurns * 3600 / turnsSpeed)};
};
