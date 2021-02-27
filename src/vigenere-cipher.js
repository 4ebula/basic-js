const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true){
    this.direct = direct;
  }
  encrypt(message, key) {
    if(message === undefined || key === undefined) throw new Error;
    return this.handler(message, key, true);
  }    
  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined || key === undefined) throw new Error;
    return this.handler(encryptedMessage, key, false);
  }
  handler (msg, key, way){
    msg = msg.toUpperCase();
    key = key.toUpperCase();
    if(msg.length > key.length) key = key.repeat(Math.ceil(msg.length / key.length));
    let result = [];
    for (let i = 0, j = 0; i < msg.length; i++, j++) {
      if(msg[i] == ' '){
        j--; 
        result.push(' ');
        continue;
      }
      else result.push(this.cipher(msg[i], key[j], way));
    }
    !this.direct && result.reverse();
    return result.join('');
  }
  cipher (a, b, way){
    if(a.charCodeAt() > 90 || a.charCodeAt() < 65) return a;
    let sum;
    if(way){
      sum = a.charCodeAt() + b.charCodeAt();
      sum -= sum > 155 ? 91 : 65;
    }
    else{
      sum = a.charCodeAt() - b.charCodeAt();
      sum += sum < 0 ? 91 : 65;

    }
    return String.fromCharCode(sum);
  }
}

module.exports = VigenereCipheringMachine;
