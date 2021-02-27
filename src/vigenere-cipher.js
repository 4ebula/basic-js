const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true, way = true){
    this.direct = direct;
    this.way = way;
  }
  encrypt(message, key) {
    if(message === undefined || key === undefined) throw new Error;
    message = message.toUpperCase();
    key = key.toUpperCase();
    if(message.length > key.length) key = key.repeat(Math.ceil(message.length / key.length));
    let result = [];
    for (let i = 0, j = 0; i < message.length; i++, j++) {
      if(message[i] == ' '){
        j--; 
        result.push(' ');
        continue;
      }
      else result.push(this.cipher(message[i], key[j]));
    }
    !this.direct && result.reverse();
    return result.join('');
  }    
  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined || key === undefined) throw new Error;
    let message = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    if(message.length > key.length) key = key.repeat(Math.ceil(message.length / key.length));
    let result = [];
    for (let i = 0, j = 0; i < message.length; i++, j++) {
      if(message[i] == ' '){
        j--; 
        result.push(' ');
        continue;
      }
      else result.push(this.decipher(message[i], key[j]));
    }
    !this.direct && result.reverse();
    return result.join('');
  }
  cipher (a, b){
    if(a.charCodeAt() > 90 || a.charCodeAt() < 65) return a;
    let sum = a.charCodeAt() + b.charCodeAt();
    sum -= sum > 155 ? 91 : 65;
    return String.fromCharCode(sum);
  }
  decipher (a, b){
    if(a.charCodeAt() > 90 || a.charCodeAt() < 65) return a;
    let sum = a.charCodeAt() - b.charCodeAt();
    sum += sum < 0 ? 91 : 65;
    return String.fromCharCode(sum);
  }
}

module.exports = VigenereCipheringMachine;
