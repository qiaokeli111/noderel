// main.js
var mod = require('./aa');

console.log(mod.counter);  // 3
mod.counter = {b:44}
mod.incCounter();
console.log(mod.counter); // 3