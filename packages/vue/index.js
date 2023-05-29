'use strict'

console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("AAA");
console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
if (process.env.NODE_ENV === 'production') {
  // module.exports = require('./dist/mini-vue.cjs.prod.js')
} else {
  module.exports = require('./dist/mini-vue.cjs.js')
}
