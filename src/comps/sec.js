var CryptoJS = require("crypto-js");

var key="i forgor :skull:"

export function de(text){
    return CryptoJS.DES.decrypt(text, key).replace(/\+/g, '-').replace(/\//g, '_').toString(CryptoJS.enc.Utf8)
  }
  export function en(text){
    return CryptoJS.DES.encrypt(text, key).toString().replace(/-/g, '+').replace(/_/g, '/')
  }