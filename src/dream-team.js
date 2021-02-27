const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(arr == undefined || !Array.isArray(arr)) return false;
  return arr.map(e => {
    if(typeof(e) == 'string'){
      return e.trim()[0].toUpperCase();
    }
  }).sort().join('');
};
