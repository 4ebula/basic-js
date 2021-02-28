const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    if(Array.isArray(arr)){
      if(arr.length == 0) return 1;
      for (let e of arr){
        let cur = 1;
        if(Array.isArray(e)){
          cur += this.calculateDepth(e);
          if(cur > depth) depth = cur;
          cur = 1;
        }
      }
      return depth;
    }
    else return 0;
  }
};