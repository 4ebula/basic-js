const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let counter = 0;
  /*arr.forEach((cur) => {cur.forEach((cur) => {cur == "^^" ? counter++ : 0})});*/
  /*[...arr] == "^^" ? counter++ : 0;*/
  arr.reduce((c, cur) => {if(cur == '^^') counter++;}, 0);
  console.log(arr, 'count: ', counter);
  return counter;
};
