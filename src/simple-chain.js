const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position < 1 || position > this.chain.length - 1 ) {
      this.chain.length = 0;
      throw new Error;
      }
    else this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = '( ' + this.chain.join(' )~~( ') + ' )';
    this.chain.length = 0;
    return str;
  }
};

module.exports = chainMaker;
