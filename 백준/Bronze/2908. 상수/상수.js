let fs = require('fs');
let [num1, num2] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let reNum1 = num1.split('').reverse().join('')
let reNum2 = num2.split('').reverse().join('')

console.log(Math.max(reNum1, reNum2))