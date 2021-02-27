const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = `${str}`;
  let counter = options.repeatTimes === undefined ? 0 : options.repeatTimes;
  options.separator === undefined && (options.separator = '+');
  options.addition = (options.addition === undefined) ? '' : `${options.addition}`;
  let additionCounter = options.additionRepeatTimes === undefined ? 0 : options.additionRepeatTimes;
  options.additionSeparator === undefined && (options.additionSeparator = '|');

  let addition = options.addition;
  while(additionCounter > 1){
    addition += options.additionSeparator + options.addition;
    additionCounter--;
  }
  let newStr = str + addition;
  while(counter > 1){
    newStr += options.separator + str + addition;
    --counter;
  }
  return newStr;
};
  