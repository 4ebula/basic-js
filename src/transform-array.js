const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error;
  let transArr =[];
  arr.map((e, i, arr) => {
    switch(true){
    case e == '--discard-next': break;
    case e == '--discard-prev': (transArr.length !=0) && (arr[i-2] != '--discard-next')  && transArr.pop();
      break;
    case e == '--double-next': (i != arr.length - 1) && transArr.push(arr[i + 1]);
      break;
    case e == '--double-prev': {
      if(transArr.length != 0) {
        if(arr[i-2] != '--discard-next'){
        let temp = transArr.pop();
        transArr.push(temp);
        transArr.push(temp);
        }
        else break;
      }
    }
      break;
    case arr[i - 1] == '--discard-next': break;
    default: transArr.push(e);
      break;
    }
  });
  return transArr;
};
